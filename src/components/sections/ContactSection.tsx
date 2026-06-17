import Image from "next/image";
import Link from "next/link";
import {
  Gamepad2,
  Network,
  Smile,
  Sparkles,
  UserCircle,
} from "lucide-react";
import type { ContactInfoCard, ContactPageContent, SocialLink } from "@/types/portfolio";
import { MotionSection } from "@/components/ui/MotionSection";
import { BrandIcon, type BrandIconName } from "@/components/ui/BrandIcon";

interface ContactSectionProps {
  content: ContactPageContent;
  socialLinks: SocialLink[];
}

const toneClasses: Record<ContactInfoCard["tone"], string> = {
  yellow: "bg-[#ffdf9b]",
  purple: "bg-[#e9ddff]",
  pink: "bg-[#ffd9df]"
};

const getSocialIconName = (link: SocialLink): BrandIconName =>
  link.id === "facebook" ? "facebook" : link.platform;

export function ContactSection({ content, socialLinks }: ContactSectionProps) {
  const networkLinks = content.networkLinkIds
    .map((id) => socialLinks.find((link) => link.id === id))
    .filter((link): link is SocialLink => Boolean(link));

  return (
    <MotionSection
      className="relative mx-auto max-w-7xl px-4 pb-28 pt-10 sm:px-6 lg:pt-16"
      id="contact"
    >
      <Sparkles
        aria-hidden="true"
        className="absolute left-20 top-12 hidden h-10 w-10 fill-candy text-candy md:block"
        strokeWidth={3}
      />

      <header className="mb-10 max-w-3xl">
        <h1 className="inline-block rotate-[-2deg] border-4 border-ink bg-[#ffdf9b] px-4 py-2 font-display text-4xl font-bold uppercase leading-none shadow-retro sm:text-6xl">
          {content.hero.title}
        </h1>
        <p className="mt-4 border-2 border-ink bg-[#f9f9f9] px-5 py-4 text-lg font-medium leading-relaxed text-[#584045] shadow-retro-sm">
          {content.hero.description}
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
        <section className="overflow-hidden border-4 border-ink bg-[#f9f9f9] shadow-retro">
          <div className="flex items-center justify-between bg-ink px-5 py-5 text-white">
            <h2 className="font-display text-4xl font-bold uppercase leading-none">
              {content.labels.playerInfo}
            </h2>
            <UserCircle aria-hidden="true" className="h-7 w-7" strokeWidth={2.5} />
          </div>

          <div className="space-y-10 p-6 sm:p-10">
            <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
              {content.infoCards.map((entry) => (
                <div className="relative" key={entry.id}>
                  <span
                    className={`absolute -top-3 left-4 z-10 border-2 border-ink px-2 py-0.5 font-mono text-xs font-bold uppercase ${
                      toneClasses[entry.tone]
                    }`}
                  >
                    {entry.label}
                  </span>
                  <div className="border-4 border-ink bg-[#f9f9f9] px-5 pb-5 pt-7 shadow-retro-sm">
                    <p className="text-lg font-medium leading-tight">{entry.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-4 border-dashed border-ink bg-[#f3f3f3] px-5 py-5 text-center">
              <p className="font-body text-base uppercase tracking-[.1em] text-ink">
                {content.labels.transmission}
              </p>
            </div>
          </div>
        </section>

        <aside className="space-y-10">
          <section>
            <div className="mb-6 rotate-[1deg] border-4 border-ink bg-grape px-5 py-4 text-white shadow-retro">
              <div className="flex items-center gap-4">
                <Network aria-hidden="true" className="h-8 w-8" strokeWidth={3} />
                <h2 className="font-display text-4xl font-bold uppercase leading-none">
                  {content.labels.network}
                </h2>
              </div>
            </div>

            <div className="border-4 border-ink bg-[#f9f9f9] p-6 shadow-retro">
              <div className="divide-y-4 divide-ink">
                {networkLinks.map((link) => (
                  <Link
                    className="retro-focus flex items-center gap-4 px-3 py-5 hover:bg-banana"
                    href={link.href}
                    key={link.id}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="grid h-10 w-10 place-items-center bg-ink text-white">
                      <BrandIcon className="h-5 w-5" name={getSocialIconName(link)} />
                    </span>
                    <span className="font-mono text-lg font-bold uppercase">{link.label}</span>
                    <BrandIcon className="ml-auto h-4 w-4" name="external" />
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="border-4 border-dashed border-ink bg-[#f9f9f9] p-4 shadow-retro">
            <p className="sr-only">{content.labels.adSpace}</p>
            <div className="relative h-20 border-2 border-ink mix-blend-luminosity">
              <Image
                alt={content.labels.adSpace}
                className="object-cover"
                fill
                sizes="360px"
                src={content.decorativeImageUrl}
                unoptimized
              />
            </div>
          </section>
        </aside>
      </div>

      <Smile
        aria-hidden="true"
        className="absolute bottom-16 right-10 h-16 w-16 fill-[#ffdf9b] text-ink"
        strokeWidth={2.5}
      />
      <Gamepad2
        aria-hidden="true"
        className="absolute bottom-0 left-6 hidden h-9 w-9 fill-grape text-white sm:block"
        strokeWidth={3}
      />
    </MotionSection>
  );
}
