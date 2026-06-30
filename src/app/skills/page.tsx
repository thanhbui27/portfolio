import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { getSkills, getSkillsPageContent, getVisibleSectionByKey } from "@/lib/portfolio-service";
import { getActiveFocus } from "@/lib/focus-server";

export default async function SkillsPage() {
  const [skills, content, section, focus] = await Promise.all([
    getSkills(),
    getSkillsPageContent(),
    getVisibleSectionByKey("skills"),
    getActiveFocus()
  ]);

  if (!section) {
    notFound();
  }

  return (
    <PageShell>
      <div className="pt-10 lg:pt-16">
        <SkillsSection content={content} skills={skills} focus={focus} />
      </div>
    </PageShell>
  );
}
