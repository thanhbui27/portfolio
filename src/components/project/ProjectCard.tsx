"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/portfolio";
import { fadeUpItem } from "@/components/ui/MotionSection";
import { BrandIcon } from "@/components/ui/BrandIcon";

const cardTone = {
  pink: "bg-berry text-white",
  purple: "bg-grape text-white",
  yellow: "bg-banana text-ink",
  black: "bg-ink text-white",
};

const getRepositoryIconName = (href: string) =>
  href.includes("github.com") ? "github" : "repository";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const thumbnailBackground = project.archive.thumbnailBackground ?? "#b41f53";
  const primaryRepositoryUrl = project.repositoryLinks?.[0]?.href ?? project.githubUrl;

  return (
    <motion.article
      className="hover-signal group w-full max-w-[calc(100vw-2rem)] border-4 border-ink bg-[#f9f9f9] p-4 shadow-retro transition-transform hover:-translate-y-1 sm:max-w-none"
      variants={fadeUpItem}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-4 border-ink bg-[#2c1f48] p-4 sm:p-6">
        <div className="h-full border-[10px] border-[#f9f9f9] bg-ink p-2 shadow-[0_0_0_4px_#1b1b1b] sm:border-[14px]">
          <div
            className="relative h-full overflow-hidden border-4 border-ink"
            style={{
              backgroundColor: thumbnailBackground,
              backgroundImage:
                "linear-gradient(rgba(27,27,27,.18) 2px, transparent 2px), linear-gradient(90deg, rgba(27,27,27,.18) 2px, transparent 2px)",
              backgroundSize: "64px 64px",
            }}
          >
            <Image
              alt={project.title}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              fill
              sizes="(min-width: 1024px) 44vw, 90vw"
              src={project.thumbnail}
              unoptimized
            />
          </div>
        </div>
        <span className="absolute left-3 top-3 border-4 border-ink bg-[#f9f9f9] px-3 py-2 font-display text-2xl font-bold leading-none">
          {project.archive.number}
        </span>
      </div>

      <div className="space-y-5 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-bold uppercase text-berry">
              {project.archive.category}
            </p>
            <h2 className="mt-1 font-display text-4xl font-bold uppercase leading-none">
              {project.title}
            </h2>
          </div>
          <Link
            aria-label={project.title}
            className="retro-focus grid h-12 w-12 shrink-0 place-items-center border-4 border-ink bg-white shadow-retro-sm"
            href={`/projects/${project.slug}`}
          >
            <ArrowUpRight
              aria-hidden="true"
              className="h-6 w-6"
              strokeWidth={3}
            />
          </Link>
        </div>

        <p className="min-h-[5.25rem] text-base leading-relaxed text-[#1b1b1b]">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              className="border-2 border-ink bg-white px-3 py-1 font-mono text-xs font-bold uppercase"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 border-t-4 border-dashed border-ink pt-4">
          <Link
            className={`retro-focus inline-flex min-h-12 items-center justify-center border-4 border-ink px-5 py-3 font-display text-lg font-bold uppercase leading-none shadow-retro-sm ${cardTone[project.archive.tone]}`}
            href={`/projects/${project.slug}`}
          >
            {project.archive.buttonLabel}
          </Link>
          {primaryRepositoryUrl ? (
            <Link
              aria-label={primaryRepositoryUrl}
              className="retro-focus grid h-12 w-12 place-items-center border-4 border-ink bg-white shadow-retro-sm"
              href={primaryRepositoryUrl}
              target="_blank"
              rel="noreferrer"
            >
              <BrandIcon className="h-5 w-5" name={getRepositoryIconName(primaryRepositoryUrl)} />
            </Link>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
