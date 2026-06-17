import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { DemoSection } from "@/components/sections/DemoSection";
import { getProjects, getSiteConfig, getVisibleSectionByKey } from "@/lib/portfolio-service";

export default async function WebDemoPage() {
  const [config, projects, section] = await Promise.all([
    getSiteConfig(),
    getProjects(),
    getVisibleSectionByKey("webDemo")
  ]);
  const project = projects.find((item) => item.type === "web" && item.liveDemoUrl);

  if (!section) {
    notFound();
  }

  return (
    <PageShell>
      <div className="pt-10 lg:pt-16">
        <DemoSection
          id="web-demo"
          labels={config.projectDetailLabels}
          project={project}
          title={section.title}
        />
      </div>
    </PageShell>
  );
}
