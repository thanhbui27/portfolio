import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { getProjects, getProjectsPageContent, getVisibleSectionByKey } from "@/lib/portfolio-service";

export default async function ProjectsPage() {
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
        <ProjectsSection content={content} projects={projects} />
      </div>
    </PageShell>
  );
}
