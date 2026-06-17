"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { Project, ProjectArchiveContent } from "@/types/portfolio";
import { MotionSection } from "@/components/ui/MotionSection";
import { ProjectCard } from "@/components/project/ProjectCard";

const filterTone = {
  pink: "bg-candy text-white",
  purple: "bg-grape text-white",
  yellow: "bg-banana text-ink",
  white: "bg-white text-ink"
};

type ProjectFilterId = ProjectArchiveContent["filters"][number]["id"];

interface ProjectsSectionProps {
  projects: Project[];
  content: ProjectArchiveContent;
}

const matchesFilter = (project: Project, filterId: ProjectFilterId) => {
  const normalizedFilter = filterId.toLowerCase();
  const category = project.archive.category.toLowerCase();
  const techStack = project.techStack.map((tech) => tech.toLowerCase());

  if (normalizedFilter === "all") {
    return true;
  }

  if (normalizedFilter === "unity") {
    return category.includes("unity") || techStack.some((tech) => tech.includes("unity"));
  }

  if (normalizedFilter === "game") {
    return project.type === "game" || category.includes("game");
  }

  if (normalizedFilter === "web") {
    return project.type === "web" || category.includes("web");
  }

  return (
    project.type === normalizedFilter ||
    category.includes(normalizedFilter) ||
    techStack.some((tech) => tech.includes(normalizedFilter))
  );
};

export function ProjectsSection({ projects, content }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterId>(
    content.filters[0]?.id ?? "all",
  );
  const filteredProjects = useMemo(
    () => projects.filter((project) => matchesFilter(project, activeFilter)),
    [activeFilter, projects],
  );

  return (
    <MotionSection
      animateOnMount
      className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-16"
      delay={0.96}
      id="projects"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="break-words font-display text-4xl font-bold uppercase leading-none sm:text-7xl lg:text-8xl">
          {content.title} <span className="block text-berry sm:inline">{content.highlight}</span>
        </h1>
        <div className="mt-6 w-full max-w-[calc(100vw-2rem)] border-4 border-ink bg-[#f9f9f9] px-5 py-4 shadow-retro sm:max-w-none">
          <p className="break-words font-mono text-xs font-bold leading-relaxed text-[#3a2930] sm:text-sm">
            {content.description}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 grid w-full max-w-[calc(100vw-2rem)] grid-cols-2 gap-3 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center">
        {content.filters.map((filter, index) => (
          <button
            aria-pressed={activeFilter === filter.id}
            className={`retro-focus hover-signal pixel-press min-h-14 border-4 border-ink px-4 py-3 text-center font-display text-sm font-bold uppercase leading-none shadow-retro-sm sm:px-5 sm:text-base ${
              index === content.filters.length - 1 ? "col-span-2 sm:col-span-1" : ""
            } ${filterTone[filter.tone]} ${
              activeFilter === filter.id ? "translate-x-1 translate-y-1 shadow-none" : ""
            }`}
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            type="button"
          >
            {filter.label}
          </button>
        ))}
      </div>

      <p className="mt-6 text-center font-mono text-xs font-bold uppercase text-[#584045]">
        {filteredProjects.length} / {projects.length} projects loaded
      </p>

      <motion.div
        className="mt-12 grid gap-8 lg:grid-cols-2"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>

      {filteredProjects.length === 0 ? (
        <div className="mt-12 border-4 border-ink bg-white px-5 py-8 text-center shadow-retro">
          <p className="font-display text-3xl font-bold uppercase leading-none text-berry">
            No projects found
          </p>
        </div>
      ) : null}
    </MotionSection>
  );
}
