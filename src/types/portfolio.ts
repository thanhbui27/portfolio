import { StaticImageData } from "next/image";

export type ProjectType = "web" | "game" | "desktop" | "mobile";

export type PublishStatus = "draft" | "published";

export type SectionKey =
  | "hero"
  | "about"
  | "skills"
  | "projects"
  | "gameDemo"
  | "webDemo"
  | "experience"
  | "contact";

export interface SiteConfig {
  siteName: string;
  arcadeBrand: string;
  title: string;
  description: string;
  url: string;
  author: string;
  nav: Array<{
    label: string;
    href: string;
    sectionKey?: SectionKey;
  }>;
  cta: {
    label: string;
    href: string;
  };
  footer: {
    text: string;
  };
  projectDetailLabels: {
    overview: string;
    techStack: string;
    screenshots: string;
    livePreview: string;
    videoDemo: string;
    openDemo: string;
    fullscreen: string;
    repository: string;
    store: string;
    liveSite: string;
    unityDemo: string;
  };
}

export interface Profile {
  name: string;
  role: string;
  heroTitle: string;
  heroHighlight: string;
  heroIntro: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
  location: string;
  experienceSummary: string;
  traits: string[];
  heroStickers: string[];
  aboutParagraphs: string[];
  bgAvatarUrl: StaticImageData;
  avatarUrl: StaticImageData;
  portraitUrl: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    availability: string;
    discord?: string;
    telegram?: string;
  };
}

export interface ContactInfoCard {
  id: string;
  label: string;
  value: string;
  tone: "yellow" | "purple" | "pink";
  order: number;
}

export interface ContactPageContent {
  hero: {
    title: string;
    description: string;
  };
  labels: {
    playerInfo: string;
    network: string;
    transmission: string;
    adSpace: string;
  };
  infoCards: ContactInfoCard[];
  networkLinkIds: string[];
  decorativeImageUrl: string;
}

export interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "tools" | "game";
  level: string;
  displayLevel: string;
  color: string;
  order: number;
}

export interface SkillGroup {
  id: Skill["category"];
  title: string;
  description: string;
  background: string;
  span?: "default" | "wide";
  order: number;
}

export interface SkillsPageContent {
  title: string;
  highlight: string;
  description: string;
  groups: SkillGroup[];
}

export interface ProjectArchiveContent {
  title: string;
  highlight: string;
  description: string;
  filters: Array<{
    id: string;
    label: string;
    tone: "pink" | "purple" | "yellow" | "white";
    order: number;
  }>;
}

export interface ProjectArchiveCard {
  number: string;
  category: string;
  buttonLabel: string;
  tone: "pink" | "purple" | "yellow" | "black";
  thumbnailBackground?: string;
}

export interface ProjectDetailFeature {
  title: string;
  description: string;
  order: number;
}

export interface ProjectDetailContent {
  levelLabel: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  specsTitle: string;
  loadoutTitle: string;
  missionTitle: string;
  featuresTitle: string;
  statusLabel: string;
  stickerLabel?: string;
  specs: ProjectDetailFeature[];
  loadout: ProjectDetailFeature[];
  missionLog: string[];
  coreFeatures: ProjectDetailFeature[];
}

export interface ProjectRepositoryLink {
  label: string;
  href: string;
  order: number;
}

export interface ProjectStoreLink {
  label: string;
  href: string;
  platform: "appStore" | "googlePlay" | "itch" | "steam" | "web" | "other";
  order: number;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  type: ProjectType;
  shortDescription: string;
  description: string;
  thumbnail: string;
  images: string[];
  techStack: string[];
  archive: ProjectArchiveCard;
  detail: ProjectDetailContent;
  repositoryLinks?: ProjectRepositoryLink[];
  storeLinks?: ProjectStoreLink[];
  githubUrl?: string;
  liveDemoUrl?: string;
  unityWebglUrl?: string;
  videoDemoUrl?: string;
  featured: boolean;
  status: PublishStatus;
  order: number;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  badge?: string;
  yearLabel?: string;
  techStack?: string[];
  imageUrl?: string;
  order: number;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  gpa: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  order: number;
}

export interface ExperiencePageContent {
  newspaper: {
    issue: string;
    title: string;
    subtitle: string;
  };
  labels: {
    experience: string;
    education: string;
    current: string;
    certifiedSkills: string;
  };
  education: Education;
  certificates: Certificate[];
  freelanceCta: {
    eyebrow: string;
    title: string;
  };
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  platform: "discord" | "email" | "facebook" | "github" | "linkedin" | "twitter" | "website";
  order: number;
}

export interface PageSectionSetting {
  sectionKey: SectionKey;
  title: string;
  visible: boolean;
  order: number;
}
