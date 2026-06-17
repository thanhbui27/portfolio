import { ExternalLink, Github, Gamepad2 } from "lucide-react";
import type { Project, SiteConfig } from "@/types/portfolio";
import { RetroButton } from "@/components/ui/RetroButton";

interface ProjectLinksProps {
  project: Project;
  labels: SiteConfig["projectDetailLabels"];
}

export function ProjectLinks({ project, labels }: ProjectLinksProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.githubUrl ? (
        <RetroButton href={project.githubUrl} icon={Github} tone="white">
          {labels.repository}
        </RetroButton>
      ) : null}
      {project.liveDemoUrl ? (
        <RetroButton href={project.liveDemoUrl} icon={ExternalLink} tone="pink">
          {labels.liveSite}
        </RetroButton>
      ) : null}
      {project.unityWebglUrl ? (
        <RetroButton href={project.unityWebglUrl} icon={Gamepad2} tone="purple">
          {labels.unityDemo}
        </RetroButton>
      ) : null}
    </div>
  );
}
