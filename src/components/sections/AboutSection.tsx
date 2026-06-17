import { Coffee, Gamepad2, MapPin, Sparkles, UserRound } from "lucide-react";
import Image from "next/image";
import type { Profile } from "@/types/portfolio";
import { MotionSection } from "@/components/ui/MotionSection";
import { RetroPanel } from "@/components/ui/RetroPanel";

interface AboutSectionProps {
  profile: Profile;
  title: string;
}

export function AboutSection({ profile, title }: AboutSectionProps) {
  const facts = [
    { label: profile.location, icon: MapPin, tone: "text-berry" },
    { label: profile.experienceSummary, icon: Sparkles, tone: "text-violet" },
    { label: profile.traits[0], icon: Gamepad2, tone: "text-[#d88a00]" },
    { label: profile.traits[1], icon: Coffee, tone: "text-candy" },
  ].filter((fact) => fact.label);

  return (
    <MotionSection className="mx-auto max-w-7xl px-4 sm:px-6" id="about">
      <RetroPanel
        header={
          <div className="flex items-center justify-between">
            <h2 className="font-display text-4xl font-bold uppercase leading-none">
              {title}
            </h2>
            <UserRound aria-hidden="true" className="h-6 w-6" />
          </div>
        }
      >
        <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[320px_1fr] lg:items-center">
          <div className="flex justify-center">
            <div className="rotate-[-3deg] border-4 border-ink bg-white p-3 shadow-retro-pink">
              <Image
                alt={profile.name}
                className="h-64 w-48 border-2  border-ink object-cover"
                height={360}
                src={profile.portraitUrl}
                unoptimized
                width={300}
              />
              <Image
                alt={profile.name}
                className="absolute top-10 left-9 border-2  border-ink object-cover"
                height={150}
                src={profile.bgAvatarUrl}
                unoptimized
                width={145}
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {facts.map((fact) => (
                <div
                  className="flex items-center gap-3 font-body font-extrabold uppercase"
                  key={fact.label}
                >
                  <fact.icon
                    aria-hidden="true"
                    className={`h-5 w-5 ${fact.tone}`}
                    strokeWidth={3}
                  />
                  <span>{fact.label}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4 text-base leading-relaxed text-[#1b1b1b]">
              {profile.aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </RetroPanel>
    </MotionSection>
  );
}
