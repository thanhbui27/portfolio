import {
  Cpu,
  ExternalLink,
  Star,
  TerminalSquare,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type {
  Project,
  ProjectDetailFeature,
  ProjectStoreLink,
  SiteConfig,
} from "@/types/portfolio";
import { ProjectDemoFrame } from "@/components/project/ProjectDemoFrame";
import { MotionSection } from "@/components/ui/MotionSection";
import { BrandIcon, type BrandIconName } from "@/components/ui/BrandIcon";

interface ProjectDetailLayoutProps {
  project: Project;
  labels: SiteConfig["projectDetailLabels"];
}

const sorted = (items: ProjectDetailFeature[]) =>
  [...items].sort((a, b) => a.order - b.order);

const getRepositoryIconName = (href: string): BrandIconName =>
  href.includes("github.com") ? "github" : "repository";

const storeIconByPlatform: Record<ProjectStoreLink["platform"], BrandIconName> = {
  appStore: "appStore",
  googlePlay: "googlePlay",
  itch: "itch",
  other: "external",
  steam: "steam",
  web: "web",
};

function DetailButton({
  href,
  children,
  tone = "pink",
  icon = "external",
}: {
  href?: string;
  children: string;
  tone?: "pink" | "white" | "yellow";
  icon?: BrandIconName;
}) {
  if (!href) {
    return null;
  }

  const toneClass = {
    pink: "bg-berry text-white",
    white: "bg-[#f9f9f9] text-ink",
    yellow: "bg-banana text-ink",
  };

  return (
    <Link
      className={`retro-focus inline-flex min-h-12 max-w-full items-center gap-2 border-4 border-ink px-4 py-3 font-display text-base font-bold uppercase leading-none shadow-retro-sm sm:min-h-14 sm:px-6 sm:py-4 sm:text-xl ${toneClass[tone]}`}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <BrandIcon className="h-5 w-5" name={icon} />
      {children}
    </Link>
  );
}

function FeatureList({ items }: { items: ProjectDetailFeature[] }) {
  return (
    <div className="space-y-3">
      {sorted(items).map((item) => (
        <div
          className="relative border-4 border-ink bg-[#f9f9f9] px-4 py-3 pl-10"
          key={item.title}
        >
          <Star
            aria-hidden="true"
            className="absolute left-3 top-4 h-4 w-4 fill-banana text-ink"
            strokeWidth={3}
          />
          <p className="text-sm leading-relaxed sm:text-base">
            <span className="font-display text-lg font-bold uppercase leading-none">
              {item.title}:{" "}
            </span>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function TechPills({ items }: { items: ProjectDetailFeature[] }) {
  return (
    <div className="flex flex-wrap gap-3 bg-[#e9ddff] p-4">
      {sorted(items).map((item, index) => (
        <span
          className="border-4 border-ink bg-[#f9f9f9] px-3 py-2 font-mono text-xs font-bold"
          key={item.title}
        >
          <span
            aria-hidden="true"
            className="mr-2 inline-block h-2 w-2"
            style={{ backgroundColor: index % 2 === 0 ? "#b41f53" : "#6b38d4" }}
          />
          {item.title}
        </span>
      ))}
    </div>
  );
}

export function GameProjectDetail({
  project,
  labels,
}: ProjectDetailLayoutProps) {
  const demoUrl = project.unityWebglUrl ?? project.liveDemoUrl;
  const repositoryLinks =
    project.repositoryLinks ??
    (project.githubUrl
      ? [{ label: labels.repository, href: project.githubUrl, order: 1 }]
      : []);
  const storeLinks = project.storeLinks ?? [];

  return (
    <main className="px-4 py-14 sm:px-6 lg:py-20">
      <MotionSection
        animateOnMount
        className="mx-auto max-w-6xl text-center"
        delay={0.96}
      >
        <div className="inline-block -rotate-2 border-4 border-ink bg-banana px-5 py-3 shadow-retro-sm">
          <p className="font-mono text-xs font-bold uppercase">
            {project.detail.levelLabel}
          </p>
        </div>
        <h1 className="mt-6 break-words font-display text-5xl font-bold uppercase leading-none sm:text-8xl">
          {project.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl break-words border-4 border-ink bg-[#f9f9f9] px-3 py-3 font-mono text-[10px] font-bold uppercase leading-relaxed shadow-retro-sm sm:px-5 sm:text-sm">
          {project.shortDescription}
        </p>
      </MotionSection>

      <MotionSection
        animateOnMount
        className="mx-auto mt-12 max-w-5xl border-4 border-ink bg-[#f9f9f9] p-4 shadow-retro"
        delay={1.04}
      >
        <div className="relative aspect-[16/9] overflow-hidden border-4 border-ink bg-ink">
          <Image
            alt={project.title}
            className="object-cover"
            fill
            sizes="100vw"
            src={project.images[0]}
            unoptimized
          />
          {project.detail.stickerLabel ? (
            <span className="absolute bottom-5 right-5 rotate-6 border-4 border-ink bg-berry px-5 py-3 font-display text-lg font-bold uppercase text-white">
              {project.detail.stickerLabel}
            </span>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-4 mt-6">
          {[...storeLinks]
            .sort((a, b) => a.order - b.order)
            .map((link) => (
              <DetailButton
                href={link.href}
                icon={storeIconByPlatform[link.platform]}
                key={link.href}
                tone="yellow"
              >
                {link.label}
              </DetailButton>
            ))}
        </div>
      </MotionSection>

      <MotionSection className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[360px_1fr]" stagger>
        <aside className="space-y-8">
          <div className="rotate-[-1deg] border-4 border-ink bg-grape p-1 shadow-retro">
            <div className="flex items-center justify-between bg-ink px-4 py-3 text-[#f9f9f9]">
              <h2 className="break-words font-display text-xl font-bold uppercase leading-none sm:text-3xl">
                {project.detail.specsTitle}
              </h2>
              <Cpu aria-hidden="true" className="h-6 w-6" strokeWidth={3} />
            </div>
            <TechPills items={project.detail.specs} />
          </div>
          <div className="border-4 border-ink bg-candy p-7 shadow-retro">
            <div className="-rotate-6 border-4 border-ink bg-[#f9f9f9] p-5 font-display text-3xl font-bold uppercase leading-tight">
              {project.detail.statusLabel}
            </div>
          </div>
        </aside>

        <div className="space-y-8">
          <article className="border-4 border-ink bg-[#f9f9f9] shadow-retro">
            <div className="bg-ink px-5 py-3 text-[#f9f9f9]">
              <h2 className="break-words font-display text-xl font-bold uppercase leading-none sm:text-3xl">
                {project.detail.missionTitle}
              </h2>
            </div>
            <div className="space-y-4 p-5 text-lg leading-relaxed">
              {project.detail.overviewParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="border-4 border-ink bg-[#1b1b1b] p-4 font-mono text-sm font-bold text-mint">
                {project.detail.missionLog.map((line) => (
                  <p key={line}>
                    <TerminalSquare
                      aria-hidden="true"
                      className="mr-2 inline h-4 w-4"
                      strokeWidth={3}
                    />
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </article>

          <article className="border-4 border-ink bg-[#e2e2e2] p-1 shadow-retro">
            <div className="bg-ink px-5 py-3 text-[#f9f9f9]">
              <h2 className="break-words font-display text-xl font-bold uppercase leading-none sm:text-3xl">
                {project.detail.featuresTitle}
              </h2>
            </div>
            <div className="grid gap-4 p-5 md:grid-cols-3">
              {sorted(project.detail.coreFeatures).map((feature) => (
                <div
                  className="border-4 border-ink bg-[#f9f9f9] p-4"
                  key={feature.title}
                >
                  <h3 className="font-display text-xl font-bold uppercase leading-none">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <div className="flex flex-wrap gap-4">
            <DetailButton href={demoUrl} icon={project.unityWebglUrl ? "unity" : "web"} tone="pink">
              {project.archive.buttonLabel}
            </DetailButton>

            {[...repositoryLinks]
              .sort((a, b) => a.order - b.order)
              .map((link) => (
                <DetailButton
                  href={link.href}
                  icon={getRepositoryIconName(link.href)}
                  key={link.href}
                  tone="white"
                >
                  {link.label}
                </DetailButton>
              ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="mx-auto mt-14 max-w-6xl">
        <ProjectDemoFrame labels={labels} project={project} />
      </MotionSection>
    </main>
  );
}

export function WebProjectDetail({
  project,
  labels,
}: ProjectDetailLayoutProps) {
  const repositoryLinks =
    project.repositoryLinks ??
    (project.githubUrl
      ? [{ label: labels.repository, href: project.githubUrl, order: 1 }]
      : []);
  const storeLinks = project.storeLinks ?? [];

  return (
    <main className="px-4 py-14 sm:px-6 lg:py-20">
      <MotionSection
        animateOnMount
        className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_.95fr] lg:items-center"
        delay={0.96}
        stagger
      >
        <div>
          <div className="inline-block -rotate-2 border-4 border-ink bg-banana px-5 py-3 shadow-retro-sm">
            <p className="font-mono text-xs font-bold uppercase">
              {project.detail.levelLabel}
            </p>
          </div>
          <h1 className="mt-6 break-words font-display text-5xl font-bold uppercase leading-none sm:text-7xl">
            {project.title}
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <DetailButton href={project.liveDemoUrl} icon="web" tone="pink">
              {project.archive.buttonLabel}
            </DetailButton>
            {[...storeLinks]
              .sort((a, b) => a.order - b.order)
              .map((link) => (
                <DetailButton
                  href={link.href}
                  icon={storeIconByPlatform[link.platform]}
                  key={link.href}
                  tone="yellow"
                >
                  {link.label}
                </DetailButton>
              ))}
            {[...repositoryLinks]
              .sort((a, b) => a.order - b.order)
              .map((link) => (
                <DetailButton
                  href={link.href}
                  icon={getRepositoryIconName(link.href)}
                  key={link.href}
                  tone="white"
                >
                  {link.label}
                </DetailButton>
              ))}
          </div>
        </div>

        <div className="rotate-1 border-4 border-ink bg-[#e2e2e2] p-5 shadow-retro">
          <div className="relative aspect-[16/9] overflow-hidden border-4 border-ink bg-[#f9f9f9]">
            <Image
              alt={project.title}
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src={project.images[0]}
              unoptimized
            />
            {project.detail.stickerLabel ? (
              <span className="absolute bottom-3 right-3 rotate-6 border-4 border-ink bg-[#785a00] px-4 py-2 font-mono text-xs font-bold uppercase text-white">
                {project.detail.stickerLabel}
              </span>
            ) : null}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[1fr_360px]" stagger>
        <div className="space-y-8">
          <article className="relative border-4 border-ink bg-[#f9f9f9] shadow-retro">
            <div className="bg-ink px-5 py-3 text-[#f9f9f9]">
              <h2 className="break-words font-display text-xl font-bold uppercase leading-none sm:text-3xl">
                {project.detail.overviewTitle}
              </h2>
            </div>
            <div className="space-y-4 p-6 text-lg leading-relaxed">
              {project.detail.overviewParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <article className="border-4 border-ink bg-[#e2e2e2] p-1 shadow-retro">
            <div className="bg-ink px-5 py-3 text-[#f9f9f9]">
              <h2 className="break-words font-display text-xl font-bold uppercase leading-none sm:text-3xl">
                {project.detail.loadoutTitle}
              </h2>
            </div>
            <div className="p-5">
              <FeatureList items={project.detail.loadout} />
            </div>
          </article>
        </div>

        <aside className="space-y-8">
          <div className="rotate-1 border-4 border-ink bg-grape p-1 shadow-retro">
            <div className="flex items-center justify-between bg-ink px-4 py-3 text-[#f9f9f9]">
              <h2 className="break-words font-display text-xl font-bold uppercase leading-none sm:text-3xl">
                {project.detail.specsTitle}
              </h2>
              <ExternalLink
                aria-hidden="true"
                className="h-5 w-5"
                strokeWidth={3}
              />
            </div>
            <TechPills items={project.detail.specs} />
          </div>

          <div className="border-4 border-ink bg-candy p-7 shadow-retro">
            <div className="-rotate-6 border-4 border-ink bg-[#f9f9f9] p-5 font-display text-3xl font-bold uppercase leading-tight">
              {project.detail.statusLabel}
            </div>
          </div>
        </aside>
      </MotionSection>

      <MotionSection className="mx-auto mt-14 max-w-6xl">
        <ProjectDemoFrame labels={labels} project={project} />
      </MotionSection>
    </main>
  );
}
