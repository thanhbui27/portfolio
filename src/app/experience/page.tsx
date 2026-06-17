import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import {
  getExperience,
  getExperiencePageContent,
  getVisibleSectionByKey
} from "@/lib/portfolio-service";

export default async function ExperiencePage() {
  const [experience, content, section] = await Promise.all([
    getExperience(),
    getExperiencePageContent(),
    getVisibleSectionByKey("experience")
  ]);

  if (!section) {
    notFound();
  }

  return (
    <PageShell footerClassName="mt-0" mainClassName="pb-0">
      <ExperienceSection content={content} experience={experience} />
    </PageShell>
  );
}
