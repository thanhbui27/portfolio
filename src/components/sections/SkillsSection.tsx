"use client";

import { motion } from "framer-motion";
import type { Skill, SkillsPageContent } from "@/types/portfolio";
import { textMatchesFocus, type FocusProfile } from "@/lib/project-focus";
import { fadeUpItem, MotionSection } from "@/components/ui/MotionSection";

interface SkillsSectionProps {
  skills: Skill[];
  content: SkillsPageContent;
  focus?: FocusProfile | null;
}

export function SkillsSection({ skills, content, focus = null }: SkillsSectionProps) {
  const skillsByCategory = content.groups.map((group) => ({
    ...group,
    skills: skills.filter((skill) => skill.category === group.id)
  }));

  const isSkillMatch = (skill: Skill) =>
    focus ? textMatchesFocus(`${skill.name} ${skill.category}`, focus) : false;

  return (
    <MotionSection className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-16" id="skills" stagger>
      <div className="mx-auto w-full max-w-[calc(100vw-2rem)] border-4 border-ink bg-[#f9f9f9] px-5 py-8 text-center shadow-retro sm:max-w-4xl sm:px-10">
        <h1 className="break-words font-display text-4xl font-bold uppercase leading-none sm:text-7xl">
          {content.title} <span className="block text-berry sm:inline">{content.highlight}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl break-words px-1 font-mono text-[10px] font-bold leading-relaxed text-[#3a2930] sm:text-sm">
          {content.description}
        </p>
      </div>

      <motion.div
        className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {skillsByCategory.map((group) => (
          <motion.article
            className={`hover-signal w-full max-w-[calc(100vw-2rem)] border-4 border-ink p-4 shadow-retro sm:max-w-none ${
              group.span === "wide" ? "xl:col-span-2" : ""
            }`}
            key={group.id}
            style={{ backgroundColor: group.background }}
            variants={fadeUpItem}
          >
            <div className="border-4 border-ink bg-[#1b1b1b] px-5 py-3 text-[#f9f9f9]">
              <h2 className="font-display text-3xl font-bold uppercase leading-none">{group.title}</h2>
            </div>
            <div className="space-y-5 bg-[#f9f9f9] p-5">
              <p className="font-body text-base font-semibold italic text-[#1b1b1b]">{group.description}</p>
              <div className={`grid gap-3 ${group.span === "wide" ? "sm:grid-cols-2" : ""}`}>
                {group.skills.map((skill) => {
                  const matched = isSkillMatch(skill);
                  return (
                    <motion.div
                      className={`flex flex-col items-start justify-between gap-2 border-4 border-ink px-3 py-2 sm:flex-row sm:items-center sm:gap-3 ${
                        matched
                          ? "bg-banana ring-4 ring-berry ring-offset-2 ring-offset-[#f9f9f9]"
                          : focus
                            ? "bg-white opacity-60"
                            : "bg-white"
                      }`}
                      key={skill.id}
                      whileHover={{ x: 3, y: -2 }}
                      transition={{ duration: 0.16 }}
                    >
                      <span className="flex min-w-0 items-center gap-2 font-display text-xl font-bold uppercase leading-none">
                        <span
                          aria-hidden="true"
                          className="h-3 w-3 shrink-0 border-2 border-ink"
                          style={{ backgroundColor: skill.color }}
                        />
                        <span className="truncate">{skill.name}</span>
                      </span>
                      <span className="shrink-0 bg-banana px-2 py-1 font-mono text-xs font-bold uppercase text-ink">
                        {matched ? "★ " : ""}
                        {skill.displayLevel}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </MotionSection>
  );
}
