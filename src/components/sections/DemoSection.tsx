import type { Project, SiteConfig } from "@/types/portfolio";
import { ProjectDemoFrame } from "@/components/project/ProjectDemoFrame";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface DemoSectionProps {
  project?: Project;
  title: string;
  labels: SiteConfig["projectDetailLabels"];
  id: string;
}

export function DemoSection({ project, title, labels, id }: DemoSectionProps) {
  if (!project) {
    return null;
  }

  return (
    <MotionSection className="mx-auto max-w-7xl px-4 sm:px-6" id={id}>
      <SectionHeader title={title} eyebrow={project.title} />
      <ProjectDemoFrame labels={labels} project={project} />
    </MotionSection>
  );
}
