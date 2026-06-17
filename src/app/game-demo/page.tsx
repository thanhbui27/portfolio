import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { DemoSection } from "@/components/sections/DemoSection";
import { getProjects, getSiteConfig, getVisibleSectionByKey } from "@/lib/portfolio-service";

export default async function GameDemoPage() {
  const [config, projects, section] = await Promise.all([
    getSiteConfig(),
    getProjects(),
    getVisibleSectionByKey("gameDemo")
  ]);
  const project = projects.find((item) => item.type === "game" && item.unityWebglUrl);

  if (!section) {
    notFound();
  }

  return (
    <PageShell>
      <div className="pt-10 lg:pt-16">
        <DemoSection
          id="game-demo"
          labels={config.projectDetailLabels}
          project={project}
          title={section.title}
        />
      </div>
    </PageShell>
  );
}
