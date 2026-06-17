import type { ContactPageContent, Profile } from "@/types/portfolio";
import ImageFrame from "../images/me-avat-bg.png";
import AvatarUrl from "../images/me-transparent.png";
const svgData = (svg: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

export const profile: Profile = {
  name: "Thanh",
  role: "Junior Full Stack Developer",
  heroTitle: "Hi, I'm",
  heroHighlight: "Thanh!",
  heroIntro:
    "I build retro-cool web apps, smash bugs, and drink way too much coffee. Welcome to my digital arcade! Insert coin to view my projects.",
  primaryAction: {
    label: " View Projects",
    href: "/projects",
  },
  secondaryAction: {
    label: "Download CV",
    href: "/Thanh-CV.pdf",
  },
  location: "Da Nang, Viet Nam",
  experienceSummary: "2+ Years Exp",
  traits: ["Retro Gamer", "Coffee Powered"],
  heroStickers: ["React", "Java", "Spring Boot", "MySQL"],
  aboutParagraphs: [
    "I am a dedicated Software Engineer with a strong foundation in C#, ASP.NET Core, SQL Server, and modern web application development. I have experience building robust backend systems, developing RESTful APIs, and creating scalable software solutions.",
    "My background also includes frontend development with React and TypeScript, as well as game development with Unity and C#. Working across different technology stacks has helped me develop strong problem-solving skills and adaptability.",
    "I enjoy solving technical challenges, designing scalable systems, and transforming ideas into real products. Working across different technology stacks has strengthened my adaptability, problem-solving mindset, and ability to learn new technologies quickly.",
    "I am passionate about continuous improvement and always looking for opportunities to contribute, learn, and grow as an engineer. My goal is to build high-quality software that creates meaningful value for both users and businesses.",
  ],
  bgAvatarUrl: ImageFrame,
  avatarUrl: AvatarUrl,

  get portraitUrl() {
    return svgData(`
    <svg width="300" height="360" viewBox="0 0 300 360" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="360" fill="#27272a"/>
      <rect x="44" y="38" width="212" height="238" fill="#eef7f8" stroke="#111" stroke-width="8"/>      
      <text x="150" y="318" text-anchor="middle" font-size="28" font-family="monospace" font-weight="700" fill="#fff">${this.name}</text>
    </svg>
  `);
  },
  contact: {
    email: "hello@thanh.dev",
    phone: "+84 000 000 000",
    location: "Saigon, Vietnam",
    availability: "Open for Projects",
    discord: "thanh_dev#1337",
    telegram: "@thanh_dev",
  },
};

const retroTechImage = svgData(`
  <svg width="640" height="160" viewBox="0 0 640 160" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="panel" x1="0" x2="1">
        <stop offset="0" stop-color="#151515"/>
        <stop offset="0.45" stop-color="#343434"/>
        <stop offset="1" stop-color="#eeeeee"/>
      </linearGradient>
    </defs>
    <rect width="640" height="160" fill="#050505"/>
    <rect x="20" y="24" width="600" height="112" fill="url(#panel)"/>
    <g fill="#101010" stroke="#777" stroke-width="4">
      <circle cx="420" cy="80" r="34"/>
      <circle cx="492" cy="80" r="26"/>
      <circle cx="550" cy="82" r="22"/>
      <circle cx="122" cy="56" r="28"/>
      <rect x="70" y="90" width="120" height="14" rx="7"/>
    </g>
    <g stroke="#2e2e2e" stroke-width="8">
      <path d="M230 112h150"/>
      <path d="M250 88h118"/>
      <path d="M275 62h80"/>
    </g>
    <rect x="20" y="24" width="600" height="112" fill="#000" opacity=".25"/>
  </svg>
`);

export const contactPageContent: ContactPageContent = {
  hero: {
    title: "Let's connect!",
    description:
      "Drop a coin in the slot to start player 2. Whether it's a project, a job opportunity, or just geeking out over vintage web design, hit me up.",
  },
  labels: {
    playerInfo: "Player Info",
    network: "Network",
    transmission: "--- End of transmission ---",
    adSpace: "Ad Space",
  },
  infoCards: [
    {
      id: "discord",
      label: "Discord",
      value: "@yukine2701",
      tone: "yellow",
      order: 1,
    },
    {
      id: "telegram",
      label: "Telegram",
      value: "@yukine_27",
      tone: "purple",
      order: 2,
    },
    {
      id: "email",
      label: "Email",
      value: "bnthanh.it@gmail.com",
      tone: "pink",
      order: 3,
    },
    {
      id: "availability",
      label: "Availability",
      value: "Open for Projects",
      tone: "yellow",
      order: 4,
    },
  ],
  networkLinkIds: ["github", "linkedin", "facebook"],
  decorativeImageUrl: retroTechImage,
};
