import type { SocialLink } from "@/types/portfolio";

export const socialLinks: SocialLink[] = [
  {
    id: "email",
    label: "Email",
    href: "mailto:hello@thanh.dev",
    platform: "email",
    order: 1,
  },
  {
    id: "github",
    label: "Github",
    href: "https://github.com/thanhbui27",
    platform: "github",
    order: 2,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/b%C3%B9i-th%C3%A0nh-675546213/",
    platform: "linkedin",
    order: 3,
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/buithanhtekk/",
    platform: "website",
    order: 4,
  },
  {
    id: "twitter",
    label: "Twitter",
    href: "https://x.com/thanh",
    platform: "twitter",
    order: 5,
  },
  {
    id: "discord",
    label: "Discord",
    href: "https://discord.com/users/thanh",
    platform: "discord",
    order: 6,
  },
];
