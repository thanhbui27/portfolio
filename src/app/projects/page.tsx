import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { getProjects, getProjectsPageContent, getVisibleSectionByKey } from "@/lib/portfolio-service";

interface ProjectsPageProps {
  searchParams?: Promise<{
    filter?: string;
  }>;
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const resolvedSearchParams = await searchParams;
  const [projects, content, section] = await Promise.all([
    getProjects(),
    getProjectsPageContent(),
    getVisibleSectionByKey("projects")
  ]);

  if (!section) {
    notFound();
  }

  return (
    <PageShell>
      <div className="pt-10 lg:pt-16">
        <ProjectsSection
          content={content}
          initialFilter={resolvedSearchParams?.filter}
          projects={projects}
        />
      </div>
    </PageShell>
  );
}
