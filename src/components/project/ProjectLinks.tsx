import type { Project, SiteConfig } from "@/types/portfolio";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { RetroButton } from "@/components/ui/RetroButton";

interface ProjectLinksProps {
  project: Project;
  labels: SiteConfig["projectDetailLabels"];
}

export function ProjectLinks({ project, labels }: ProjectLinksProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.githubUrl ? (
        <RetroButton
          href={project.githubUrl}
          iconNode={<BrandIcon className="h-5 w-5" name="github" />}
          tone="white"
        >
          {labels.repository}
        </RetroButton>
      ) : null}
      {project.liveDemoUrl ? (
        <RetroButton
          href={project.liveDemoUrl}
          iconNode={<BrandIcon className="h-5 w-5" name="web" />}
          tone="pink"
        >
          {labels.liveSite}
        </RetroButton>
      ) : null}
      {project.unityWebglUrl ? (
        <RetroButton
          href={project.unityWebglUrl}
          iconNode={<BrandIcon className="h-5 w-5" name="unity" />}
          tone="purple"
        >
          {labels.unityDemo}
        </RetroButton>
      ) : null}
    </div>
  );
}
