import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/portfolio";

const cardTone = {
  pink: "bg-berry text-white",
  purple: "bg-grape text-white",
  yellow: "bg-banana text-ink",
  black: "bg-ink text-white"
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group w-full max-w-[calc(100vw-2rem)] border-4 border-ink bg-[#f9f9f9] p-4 shadow-retro transition-transform hover:-translate-y-1 sm:max-w-none">
      <div className="relative aspect-[16/10] overflow-hidden border-4 border-ink bg-ink">
        <Image
          alt={project.title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          src={project.thumbnail}
          unoptimized
        />
        <span className="absolute left-3 top-3 border-4 border-ink bg-[#f9f9f9] px-3 py-2 font-display text-2xl font-bold leading-none">
          {project.archive.number}
        </span>
      </div>

      <div className="space-y-5 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-bold uppercase text-berry">{project.archive.category}</p>
            <h2 className="mt-1 font-display text-4xl font-bold uppercase leading-none">{project.title}</h2>
          </div>
          <Link
            aria-label={project.title}
            className="retro-focus grid h-12 w-12 shrink-0 place-items-center border-4 border-ink bg-white shadow-retro-sm"
            href={`/projects/${project.slug}`}
          >
            <ArrowUpRight aria-hidden="true" className="h-6 w-6" strokeWidth={3} />
          </Link>
        </div>

        <p className="min-h-[5.25rem] text-base leading-relaxed text-[#1b1b1b]">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span className="border-2 border-ink bg-white px-3 py-1 font-mono text-xs font-bold uppercase" key={tech}>
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
          {project.githubUrl ? (
            <Link
              aria-label={project.githubUrl}
              className="retro-focus grid h-12 w-12 place-items-center border-4 border-ink bg-white shadow-retro-sm"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Github aria-hidden="true" className="h-5 w-5" strokeWidth={3} />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
