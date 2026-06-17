"use client";

import { ExternalLink, Maximize2 } from "lucide-react";
import { useRef } from "react";
import type { Project, SiteConfig } from "@/types/portfolio";
import { useUiStore } from "@/lib/ui-store";
import { RetroButton } from "@/components/ui/RetroButton";

interface ProjectDemoFrameProps {
  project: Project;
  labels: SiteConfig["projectDetailLabels"];
}

export function ProjectDemoFrame({ project, labels }: ProjectDemoFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const setActiveDemoId = useUiStore((state) => state.setActiveDemoId);
  const demoUrl = project.unityWebglUrl ?? project.liveDemoUrl;

  if (!demoUrl) {
    return null;
  }

  const handleFullscreen = async () => {
    setActiveDemoId(project.id);
    await frameRef.current?.requestFullscreen?.();
  };

  return (
    <div className="border-4 border-ink bg-white shadow-retro" ref={frameRef}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-4 border-ink bg-ink px-4 py-3 text-white">
        <h2 className="font-display text-2xl font-bold uppercase">{labels.livePreview}</h2>
        <div className="flex gap-3">
          {project.unityWebglUrl ? (
            <RetroButton icon={Maximize2} onClick={handleFullscreen} tone="yellow">
              {labels.fullscreen}
            </RetroButton>
          ) : null}
          <RetroButton href={demoUrl} icon={ExternalLink} tone="pink">
            {labels.openDemo}
          </RetroButton>
        </div>
      </div>
      <iframe
        allow="fullscreen; gamepad; autoplay"
        className="h-[420px] w-full bg-ink md:h-[560px]"
        src={demoUrl}
        title={`${project.title} demo`}
      />
    </div>
  );
}
