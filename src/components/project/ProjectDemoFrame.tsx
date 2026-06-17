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
  const videoDemoUrl = project.videoDemoUrl ? toEmbeddableVideoUrl(project.videoDemoUrl) : undefined;

  if (!demoUrl && !videoDemoUrl) {
    return null;
  }

  const handleFullscreen = async () => {
    setActiveDemoId(project.id);
    await frameRef.current?.requestFullscreen?.();
  };

  return (
    <div className="space-y-8">
      {demoUrl ? (
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
      ) : null}

      {videoDemoUrl ? (
        <div className="border-4 border-ink bg-white shadow-retro">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-4 border-ink bg-ink px-4 py-3 text-white">
            <h2 className="font-display text-2xl font-bold uppercase">{labels.videoDemo}</h2>
            <RetroButton href={project.videoDemoUrl} icon={ExternalLink} tone="yellow">
              {labels.openDemo}
            </RetroButton>
          </div>
          <iframe
            allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
            className="h-[360px] w-full bg-ink md:h-[520px]"
            src={videoDemoUrl}
            title={`${project.title} video demo`}
          />
        </div>
      ) : null}
    </div>
  );
}

function toEmbeddableVideoUrl(url: string) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("drive.google.com")) {
      const fileId = parsedUrl.pathname.match(/\/file\/d\/([^/]+)/)?.[1] ?? parsedUrl.searchParams.get("id");
      return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url;
    }

    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }

    if (parsedUrl.hostname === "youtu.be") {
      const videoId = parsedUrl.pathname.replace("/", "");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }

    if (parsedUrl.hostname.includes("vimeo.com")) {
      const videoId = parsedUrl.pathname.split("/").filter(Boolean).at(-1);
      return videoId ? `https://player.vimeo.com/video/${videoId}` : url;
    }
  } catch {
    return url;
  }

  return url;
}
