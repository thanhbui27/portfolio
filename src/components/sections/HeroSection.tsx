import { Download, Send } from "lucide-react";
import Image from "next/image";
import type { Profile } from "@/types/portfolio";
import { MotionSection } from "@/components/ui/MotionSection";
import { RetroButton } from "@/components/ui/RetroButton";
import { Sticker } from "@/components/ui/Sticker";
import ImageFrame from "@/images/Frame.png";

interface HeroSectionProps {
  profile: Profile;
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <MotionSection
      className="mx-auto grid max-w-7xl items-center gap-10 px-4 pt-10 sm:px-6 lg:grid-cols-[1.15fr_.85fr] lg:pt-16"
      id="hero"
    >
      <div className="relative border-4 border-ink bg-white p-5 shadow-retro sm:p-8">
        <span className="absolute -left-3 -top-16 hidden rotate-[-2deg] border-4 border-ink bg-white p-3 text-3xl shadow-retro-sm sm:block">
          :)
        </span>
        <h1 className="font-display text-6xl font-bold uppercase leading-[.95] tracking-normal sm:text-7xl lg:text-8xl">
          <span className="block">{profile.heroTitle}</span>
          <span className="block text-berry">{profile.heroHighlight}</span>
        </h1>
        <div className="my-6 inline-block rotate-[-2deg] border-2 border-ink bg-ink px-4 py-2 font-mono text-xs font-bold uppercase text-white sm:text-sm">
          {profile.role}
        </div>
        <p className="max-w-2xl text-lg font-medium leading-relaxed text-[#1b1b1b]">
          {profile.heroIntro}
        </p>
        <div className="mt-7 flex flex-wrap gap-4">
          <RetroButton href={profile.primaryAction.href} icon={Send}>
            {profile.primaryAction.label}
          </RetroButton>
          <RetroButton
            href={profile.secondaryAction.href}
            icon={Download}
            tone="yellow"
          >
            {profile.secondaryAction.label}
          </RetroButton>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-md py-8">
        <div className="border-[8px] border-ink bg-pink-500 shadow-retro rounded-xl">
          <Image
            alt={profile.name}
            className="aspect-square w-full rounded-md object-cover"
            height={420}
            src={ImageFrame}
            unoptimized
            width={420}
          />
          <Image
            alt={profile.name}
            className="absolute bottom-10 left-16"
            src={profile.avatarUrl}
            height={400}
          />
        </div>
        {profile.heroStickers.map((label, index) => (
          <Sticker
            className={`absolute ${index === 0 ? "-left-4 top-20" : ""} ${
              index === 1 ? "-right-5 top-10 bg-violet text-white" : ""
            } ${index === 2 ? "-right-12 bottom-28 bg-candy text-white" : ""} ${
              index === 3 ? "bottom-4 left-7" : ""
            }`}
            key={label}
          >
            {label}
          </Sticker>
        ))}
      </div>
    </MotionSection>
  );
}
