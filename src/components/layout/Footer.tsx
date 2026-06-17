import Image from "next/image";
import Link from "next/link";
import type { SiteConfig, SocialLink } from "@/types/portfolio";
import { BrandIcon } from "@/components/ui/BrandIcon";
import Logo from "@/images/logo.png";

interface FooterProps {
  config: SiteConfig;
  socialLinks: SocialLink[];
  className?: string;
}

export function Footer({ config, socialLinks, className = "mt-20" }: FooterProps) {
  return (
    <footer className={`${className} bg-grape text-white`}>
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <Link className="retro-focus block shrink-0" href="/">
          <Image
            alt={config.siteName}
            className="h-20 w-auto"
            src={Logo}
          />
        </Link>
        <p className="border-2 border-white/70 px-3 py-2 text-center font-mono text-xs font-bold uppercase">
          &copy; {new Date().getFullYear()} {config.siteName} - {config.footer.text}
        </p>
        <div className="flex flex-wrap gap-4 font-mono text-sm font-bold">
          {socialLinks.slice(0, 4).map((link) => (
            <Link
              className="retro-focus inline-flex items-center gap-2 hover:text-banana"
              href={link.href}
              key={link.id}
              target="_blank"
              rel="noreferrer"
            >
              <BrandIcon className="h-4 w-4" name={link.platform} />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
