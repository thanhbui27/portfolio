import type { PageSectionSetting, SiteConfig } from "@/types/portfolio";

export const siteConfig: SiteConfig = {
  siteName: "THANH.DEV",
  arcadeBrand: "DEV_ARCADE",
  title: "Thanh.dev - Junior Full Stack Developer Portfolio",
  description:
    "A retro-cool portfolio for a junior full stack developer building playful web apps, games, and reliable backend systems.",
  url: "https://thanh.dev",
  author: "Thanh",
  nav: [
    { label: "Home", href: "/", sectionKey: "hero" },
    { label: "About", href: "/about", sectionKey: "about" },
    { label: "Skills", href: "/skills", sectionKey: "skills" },
    { label: "Projects", href: "/projects", sectionKey: "projects" },
    { label: "Experience", href: "/experience", sectionKey: "experience" },
    { label: "Contact", href: "/contact", sectionKey: "contact" },
  ],
  cta: {
    label: "Hire Me",
    href: "bnthanh.it@gmail.com",
  },
  footer: {
    text: "INSERT COIN TO CONTINUE",
  },
  projectDetailLabels: {
    overview: "Mission Brief",
    techStack: "Tech Stack",
    screenshots: "Screenshots",
    livePreview: "Live Preview",
    openDemo: "Open Demo",
    fullscreen: "Fullscreen",
    repository: "Repository",
    liveSite: "Live Site",
    unityDemo: "Unity Demo",
  },
};

export const sectionSettings: PageSectionSetting[] = [
  { sectionKey: "hero", title: "Hero", visible: true, order: 1 },
  { sectionKey: "about", title: "About Me", visible: true, order: 2 },
  { sectionKey: "skills", title: "Skill Inventory", visible: true, order: 3 },
  {
    sectionKey: "projects",
    title: "Featured Projects",
    visible: true,
    order: 4,
  },
  { sectionKey: "gameDemo", title: "Game Demo", visible: true, order: 5 },
  { sectionKey: "webDemo", title: "Web Demo", visible: true, order: 6 },
  {
    sectionKey: "experience",
    title: "Experience Log",
    visible: true,
    order: 7,
  },
  { sectionKey: "contact", title: "Player Info", visible: true, order: 8 },
];
