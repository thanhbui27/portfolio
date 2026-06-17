import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { AboutSection } from "@/components/sections/AboutSection";
import { getProfile, getVisibleSectionByKey } from "@/lib/portfolio-service";

export default async function AboutPage() {
  const [profile, section] = await Promise.all([getProfile(), getVisibleSectionByKey("about")]);

  if (!section) {
    notFound();
  }

  return (
    <PageShell>
      <div className="pt-10 lg:pt-16">
        <AboutSection profile={profile} title={section.title} />
      </div>
    </PageShell>
  );
}
