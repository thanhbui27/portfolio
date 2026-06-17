import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { getSkills, getSkillsPageContent, getVisibleSectionByKey } from "@/lib/portfolio-service";

export default async function SkillsPage() {
  const [skills, content, section] = await Promise.all([
    getSkills(),
    getSkillsPageContent(),
    getVisibleSectionByKey("skills")
  ]);

  if (!section) {
    notFound();
  }

  return (
    <PageShell>
      <div className="pt-10 lg:pt-16">
        <SkillsSection content={content} skills={skills} />
      </div>
    </PageShell>
  );
}
