import { experience, experiencePageContent } from "@/data/experience.data";
import { contactPageContent, profile } from "@/data/profile.data";
import { projects, projectsPageContent } from "@/data/projects.data";
import { sectionSettings, siteConfig } from "@/data/site.config";
import { skills, skillsPageContent } from "@/data/skills.data";
import { socialLinks } from "@/data/social.data";
import type {
  ContactPageContent,
  Experience,
  ExperiencePageContent,
  PageSectionSetting,
  Profile,
  Project,
  ProjectArchiveContent,
  SiteConfig,
  Skill,
  SkillsPageContent,
  SocialLink
} from "@/types/portfolio";

const byOrder = <T extends { order: number }>(items: T[]) =>
  [...items].sort((a, b) => a.order - b.order);

// Future Prisma/Admin integration:
// Replace these local imports with repository calls such as prisma.project.findMany().
// Keep the public function signatures stable so pages and components do not change.
export async function getSiteConfig(): Promise<SiteConfig> {
  return siteConfig;
}

export async function getProfile(): Promise<Profile> {
  return profile;
}

export async function getContactPageContent(): Promise<ContactPageContent> {
  return {
    ...contactPageContent,
    infoCards: byOrder(contactPageContent.infoCards)
  };
}

export async function getSkills(): Promise<Skill[]> {
  return byOrder(skills);
}

export async function getSkillsPageContent(): Promise<SkillsPageContent> {
  return {
    ...skillsPageContent,
    groups: byOrder(skillsPageContent.groups)
  };
}

export async function getProjects(): Promise<Project[]> {
  return byOrder(projects.filter((project) => project.status === "published"));
}

export async function getProjectsPageContent(): Promise<ProjectArchiveContent> {
  return {
    ...projectsPageContent,
    filters: byOrder(projectsPageContent.filters)
  };
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const publishedProjects = await getProjects();
  return publishedProjects.filter((project) => project.featured);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const publishedProjects = await getProjects();
  return publishedProjects.find((project) => project.slug === slug);
}

export async function getExperience(): Promise<Experience[]> {
  return byOrder(experience);
}

export async function getExperiencePageContent(): Promise<ExperiencePageContent> {
  return {
    ...experiencePageContent,
    certificates: byOrder(experiencePageContent.certificates)
  };
}

export async function getSocialLinks(): Promise<SocialLink[]> {
  return byOrder(socialLinks);
}

export async function getVisibleSections(): Promise<PageSectionSetting[]> {
  return byOrder(sectionSettings.filter((section) => section.visible));
}

export async function getVisibleSectionByKey(
  sectionKey: PageSectionSetting["sectionKey"]
): Promise<PageSectionSetting | undefined> {
  const visibleSections = await getVisibleSections();
  return visibleSections.find((section) => section.sectionKey === sectionKey);
}
