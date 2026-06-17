import Image from "next/image";
import { Award, BriefcaseBusiness, GraduationCap, Smile, Sparkles } from "lucide-react";
import type { Experience, ExperiencePageContent } from "@/types/portfolio";
import { MotionSection } from "@/components/ui/MotionSection";
import { Sticker } from "@/components/ui/Sticker";

interface ExperienceSectionProps {
  experience: Experience[];
  content: ExperiencePageContent;
}

const tagColors = ["bg-banana", "bg-violet text-white", "bg-[#e2e2e2]"];

export function ExperienceSection({ experience, content }: ExperienceSectionProps) {
  return (
    <MotionSection
      className="relative mx-auto max-w-7xl px-4 pb-0 pt-10 sm:px-6 lg:pt-16"
      id="experience"
    >
      <Sparkles
        aria-hidden="true"
        className="absolute left-8 top-4 h-10 w-10 fill-violet text-violet"
        strokeWidth={3}
      />

      <header className="bg-white px-4 py-7 text-center sm:px-6">
        <Sticker className="rotate-[-3deg]" color="bg-[#ffdf9b]">
          {content.newspaper.issue}
        </Sticker>
        <h1 className="mt-3 font-display text-4xl font-bold uppercase leading-none tracking-normal sm:text-6xl">
          {content.newspaper.title}
        </h1>
        <div className="my-4 h-1 bg-ink" />
        <p className="font-body text-sm font-extrabold uppercase tracking-normal text-[#584045] sm:text-base">
          {content.newspaper.subtitle}
        </p>
      </header>

      <div className="grid gap-10 py-16 lg:grid-cols-[1.35fr_.9fr] lg:gap-20">
        <section className="relative">
          <div className="absolute bottom-0 left-8 top-12 hidden w-1 bg-ink/15 sm:block" />
          <div className="mb-10 flex items-center gap-3">
            <BriefcaseBusiness aria-hidden="true" className="h-10 w-10 fill-berry text-berry" strokeWidth={3} />
            <h2 className="rotate-[4deg] bg-ink px-4 py-1 font-display text-4xl font-bold uppercase leading-tight text-white shadow-retro-sm">
              {content.labels.experience}
            </h2>
          </div>

          <div className="space-y-12 sm:pl-20">
            {experience.map((item, index) => (
              <article className="relative bg-white" key={item.id}>
                {item.yearLabel ? (
                  <span
                    className={`absolute -left-16 top-6 hidden h-12 w-12 items-center justify-center rounded-xl font-mono text-sm font-bold sm:flex ${
                      index === 0 ? "bg-[#ffdf9b] text-ink" : "bg-berry text-white"
                    }`}
                  >
                    {item.yearLabel}
                  </span>
                ) : null}

                <div className="flex items-center justify-between gap-4 bg-ink px-4 py-4 text-white">
                  <h3 className="font-display text-2xl font-bold uppercase leading-none sm:text-3xl">
                    {item.role}
                  </h3>
                  {item.badge ? (
                    <span className="border-2 border-white bg-berry px-2 py-1 font-mono text-xs font-bold uppercase">
                      {item.badge}
                    </span>
                  ) : null}
                </div>

                <div className="space-y-5 p-5 sm:p-6">
                  <div className="inline-block rotate-[-3deg] border-2 border-ink bg-white px-4 py-3 font-mono text-xs font-bold shadow-retro-sm">
                    {item.company}
                  </div>

                  {item.highlights.length ? (
                    <ul className="space-y-4">
                      {item.highlights.map((highlight) => (
                        <li className="flex gap-3 text-sm leading-relaxed sm:text-base" key={highlight}>
                          <Sparkles
                            aria-hidden="true"
                            className="mt-1 h-4 w-4 shrink-0 fill-violet text-violet"
                            strokeWidth={3}
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {item.description ? (
                    <p className="text-sm leading-relaxed sm:text-base">{item.description}</p>
                  ) : null}

                  {item.imageUrl ? (
                    <div className="relative aspect-[16/6] w-full border-2 border-ink">
                      <Image
                        alt={item.role}
                        className="object-cover"
                        fill
                        sizes="(min-width: 1024px) 55vw, 100vw"
                        src={item.imageUrl}
                        unoptimized
                      />
                    </div>
                  ) : null}

                  {item.techStack?.length ? (
                    <div className="flex flex-wrap gap-2">
                      {item.techStack.map((tech, techIndex) => (
                        <Sticker color={tagColors[techIndex % tagColors.length]} key={tech}>
                          {tech}
                        </Sticker>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="space-y-10">
          <div className="flex items-center justify-end gap-3">
            <h2 className="rotate-[-3deg] bg-violet px-4 py-1 font-display text-4xl font-bold uppercase leading-tight text-white shadow-retro-sm">
              {content.labels.education}
            </h2>
            <GraduationCap aria-hidden="true" className="h-10 w-10 fill-violet text-violet" strokeWidth={3} />
          </div>

          <section className="overflow-hidden bg-white">
            <div className="space-y-4 p-6">
              <h3 className="font-display text-3xl font-bold uppercase leading-tight">
                {content.education.degree}
              </h3>
              <p className="font-mono text-xs font-bold uppercase text-violet">
                {content.education.institution} • {content.education.period}
              </p>
              <p className="text-sm leading-relaxed sm:text-base">{content.education.description}</p>
              <p className="flex items-center gap-2 font-mono text-sm font-bold">
                <Award aria-hidden="true" className="h-4 w-4 text-berry" strokeWidth={3} />
                {content.education.gpa}
              </p>
            </div>

            <div className="bg-ink px-4 py-3 text-center font-mono text-xs font-bold uppercase tracking-[.2em] text-white">
              {content.labels.certifiedSkills}
            </div>

            <div className="divide-y-2 divide-ink/20 bg-[#ffdf9b]">
              {content.certificates.map((certificate) => (
                <div className="flex items-center justify-between gap-4 p-4" key={certificate.id}>
                  <div>
                    <h4 className="font-body text-base font-extrabold uppercase leading-tight">
                      {certificate.title}
                    </h4>
                    <p className="font-mono text-xs font-bold">
                      {certificate.issuer}, {certificate.year}
                    </p>
                  </div>
                  <Award aria-hidden="true" className="h-5 w-5 shrink-0 text-ink" strokeWidth={3} />
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-4">
            <div className="border-2 border-ink bg-white px-6 py-7 text-center">
              <p className="font-mono text-xs font-bold uppercase text-berry">
                {content.freelanceCta.eyebrow}
              </p>
              <h3 className="font-display text-3xl font-bold uppercase leading-none">
                {content.freelanceCta.title}
              </h3>
            </div>
          </section>
        </aside>
      </div>

      <Smile
        aria-hidden="true"
        className="ml-auto mr-8 h-16 w-16 fill-[#ffdf9b] text-ink"
        strokeWidth={2.5}
      />
    </MotionSection>
  );
}
