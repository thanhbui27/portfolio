import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { getProjects, getProjectsPageContent, getVisibleSectionByKey } from "@/lib/portfolio-service";
import { applyFocus, focusSlugs, resolveFocus } from "@/lib/project-focus";

// Only the known focus slugs (e.g. /unity, /fullstack) are valid.
// Any other single-segment path that is not a static route will 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return focusSlugs.map((focus) => ({ focus }));
}

interface FocusPageProps {
  params: Promise<{ focus: string }>;
}

export default async function FocusPage({ params }: FocusPageProps) {
  const { focus: focusParam } = await params;
  const focus = resolveFocus(focusParam);

  if (!focus) {
    notFound();
  }

  const [projects, content, section] = await Promise.all([
    getProjects(),
    getProjectsPageContent(),
    getVisibleSectionByKey("projects")
  ]);

  if (!section) {
    notFound();
  }

  const { ordered, matchedIds } = applyFocus(projects, focus);

  return (
    <PageShell>
      <div className="pt-10 lg:pt-16">
        <ProjectsSection
          content={content}
          projects={ordered}
          focus={focus}
          focusedIds={Array.from(matchedIds)}
        />
      </div>
    </PageShell>
  );
}
