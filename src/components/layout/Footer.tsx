import Link from "next/link";
import type { SiteConfig, SocialLink } from "@/types/portfolio";

interface FooterProps {
  config: SiteConfig;
  socialLinks: SocialLink[];
  className?: string;
}

export function Footer({ config, socialLinks, className = "mt-20" }: FooterProps) {
  return (
    <footer className={`${className} bg-grape text-white`}>
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <Link className="retro-focus font-display text-4xl font-bold uppercase leading-none" href="/">
          {config.siteName}
        </Link>
        <p className="border-2 border-white/70 px-3 py-2 text-center font-mono text-xs font-bold uppercase">
          &copy; {new Date().getFullYear()} {config.siteName} - {config.footer.text}
        </p>
        <div className="flex flex-wrap gap-4 font-mono text-sm font-bold">
          {socialLinks.slice(0, 4).map((link) => (
            <Link
              className="retro-focus hover:text-banana"
              href={link.href}
              key={link.id}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
