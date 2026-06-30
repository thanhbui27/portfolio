import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PageShell } from "@/components/layout/PageShell";
import { getProfile, getVisibleSectionByKey } from "@/lib/portfolio-service";
import { getActiveFocus } from "@/lib/focus-server";

export default async function HomePage() {
  const [profile, heroSection, aboutSection, focus] = await Promise.all([
    getProfile(),
    getVisibleSectionByKey("hero"),
    getVisibleSectionByKey("about"),
    getActiveFocus()
  ]);

  return (
    <PageShell>
      {heroSection ? <HeroSection profile={profile} focus={focus} /> : null}
      {aboutSection ? <AboutSection profile={profile} title={aboutSection.title} /> : null}
    </PageShell>
  );
}
