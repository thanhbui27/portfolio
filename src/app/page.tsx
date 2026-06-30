import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PageShell } from "@/components/layout/PageShell";
import { getProfile, getVisibleSectionByKey } from "@/lib/portfolio-service";

export default async function HomePage() {
  const [profile, heroSection, aboutSection] = await Promise.all([
    getProfile(),
    getVisibleSectionByKey("hero"),
    getVisibleSectionByKey("about")
  ]);

  return (
    <PageShell>
      {heroSection ? <HeroSection profile={profile} /> : null}
      {aboutSection ? <AboutSection profile={profile} title={aboutSection.title} /> : null}
    </PageShell>
  );
}
