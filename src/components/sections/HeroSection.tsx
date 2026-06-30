"use client";

import { motion } from "framer-motion";
import { Download, Send } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import type { Profile } from "@/types/portfolio";
import { textMatchesFocus, type FocusProfile } from "@/lib/project-focus";
import { fadeUpItem, MotionSection } from "@/components/ui/MotionSection";
import { RetroButton } from "@/components/ui/RetroButton";
import { Sticker } from "@/components/ui/Sticker";
import ImageFrame from "@/images/Frame.png";

interface HeroSectionProps {
  profile: Profile;
  focus?: FocusProfile | null;
}

const stickerStyles = [
  "-left-4 top-20",
  "-right-5 top-10 bg-violet text-white",
  "-right-12 bottom-28 bg-candy text-white",
  "bottom-4 left-7",
  "left-8 -top-2 bg-mint",
  "right-6 bottom-8 bg-ink text-white",
  "-left-2 bottom-28 bg-white",
];

export function HeroSection({ profile, focus = null }: HeroSectionProps) {
  const heroTitle = `${profile.heroTitle} ${profile.heroHighlight}`;

  return (
    <MotionSection
      animateOnMount
      className="mx-auto grid max-w-7xl items-center gap-10 px-4 pt-10 sm:px-6 lg:grid-cols-[1.15fr_.85fr] lg:pt-16"
      delay={0.96}
      id="hero"
      stagger
    >
      <motion.div
        className="relative overflow-hidden border-4 border-ink bg-white p-5 shadow-retro sm:p-8"
        transition={{ duration: 0.58, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, y: 42, scale: 0.96 },
          show: { opacity: 1, y: 0, scale: 1 },
        }}
      >
        <span className="pixel-particle right-8 top-7" />
        <span className="pixel-particle bottom-8 right-20" />
        <span className="pixel-particle left-5 top-24 hidden sm:block" />
        <span className="absolute -left-3 -top-16 hidden rotate-[-2deg] border-4 border-ink bg-white p-3 text-3xl shadow-retro-sm sm:block">
          :)
        </span>
        <h1 className="relative z-10 font-display text-4xl font-bold uppercase leading-[.95] tracking-normal sm:text-7xl lg:text-8xl">
          <span aria-label={heroTitle} className="intro-delay typing-line">
            <span>{profile.heroTitle} </span>
            <span className="text-berry">{profile.heroHighlight}</span>
          </span>
        </h1>
        <motion.div
          className="float-slow my-6 inline-block rotate-[-2deg] border-2 border-ink bg-ink px-4 py-2 font-mono text-xs font-bold uppercase text-white sm:text-sm"
          style={{ "--float-rotate": "-2deg" } as CSSProperties}
          variants={fadeUpItem}
        >
          {profile.role}
        </motion.div>
        <motion.p className="max-w-2xl text-lg font-medium leading-relaxed text-[#1b1b1b]" variants={fadeUpItem}>
          {profile.heroIntro}
        </motion.p>
        <motion.div className="mt-7 flex flex-wrap gap-4" variants={fadeUpItem}>
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
        </motion.div>
      </motion.div>

      <motion.div
        className="relative mx-auto w-full max-w-md py-8"
        transition={{ duration: 0.52, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, y: 30, scale: 0.9 },
          show: { opacity: 1, y: 0, scale: 1 },
        }}
      >
        <span className="pixel-particle right-2 top-10" />
        <span className="pixel-particle bottom-16 left-2" />
        <div className="moving-dots rounded-xl border-[8px] border-ink bg-pink-500 shadow-retro">
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
        {profile.heroStickers.map((label, index) => {
          const isMatch = focus ? textMatchesFocus(label, focus) : false;
          return (
            <Sticker
              className={`absolute float-slower intro-delay ${stickerStyles[index % stickerStyles.length]} ${
                isMatch
                  ? "z-20 scale-110 ring-4 ring-berry ring-offset-2 ring-offset-paper"
                  : focus
                    ? "opacity-50"
                    : ""
              }`}
              key={label}
              style={{ animationDelay: `${0.96 + index * 0.18}s` } as CSSProperties}
            >
              {label}
            </Sticker>
          );
        })}
      </motion.div>
    </MotionSection>
  );
}
