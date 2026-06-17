import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { GameProjectDetail, WebProjectDetail } from "@/components/project/ProjectDetailLayouts";
import {
  getProjectBySlug,
  getProjects,
  getSiteConfig,
  getSocialLinks,
  getVisibleSections
} from "@/lib/portfolio-service";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const [config, project] = await Promise.all([getSiteConfig(), getProjectBySlug(slug)]);

  if (!project) {
    return {
      title: config.title
    };
  }

  return {
    title: `${project.title} - ${config.siteName}`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [project.thumbnail]
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const [config, project, socialLinks, sections] = await Promise.all([
    getSiteConfig(),
    getProjectBySlug(slug),
    getSocialLinks(),
    getVisibleSections()
  ]);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Navbar
        brandClassName="text-berry italic"
        brandLabel={config.arcadeBrand}
        config={config}
        visibleSections={sections}
      />
      {project.type === "game" ? (
        <GameProjectDetail labels={config.projectDetailLabels} project={project} />
      ) : (
        <WebProjectDetail labels={config.projectDetailLabels} project={project} />
      )}
      <Footer className="mt-0" config={config} socialLinks={socialLinks} />
    </div>
  );
}
