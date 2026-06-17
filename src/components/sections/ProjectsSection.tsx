import type { Project, ProjectArchiveContent } from "@/types/portfolio";
import { MotionSection } from "@/components/ui/MotionSection";
import { ProjectCard } from "@/components/project/ProjectCard";

const filterTone = {
  pink: "bg-candy text-white",
  purple: "bg-grape text-white",
  yellow: "bg-banana text-ink",
  white: "bg-white text-ink"
};

interface ProjectsSectionProps {
  projects: Project[];
  content: ProjectArchiveContent;
}

export function ProjectsSection({ projects, content }: ProjectsSectionProps) {
  return (
    <MotionSection className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-16" id="projects">
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
          <span
            className={`border-4 border-ink px-4 py-3 text-center font-display text-sm font-bold uppercase leading-none shadow-retro-sm sm:px-5 sm:text-base ${
              index === content.filters.length - 1 ? "col-span-2 sm:col-span-1" : ""
            } ${filterTone[filter.tone]}`}
            key={filter.id}
          >
            {filter.label}
          </span>
        ))}
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </MotionSection>
  );
}
