"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { PageSectionSetting, SiteConfig } from "@/types/portfolio";
import { RetroButton } from "@/components/ui/RetroButton";

interface NavbarProps {
  config: SiteConfig;
  visibleSections: PageSectionSetting[];
  brandLabel?: string;
  brandClassName?: string;
}

export function Navbar({ config, visibleSections, brandLabel = config.siteName, brandClassName = "" }: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const visibleKeys = new Set(visibleSections.map((section) => section.sectionKey));
  const navItems = config.nav.filter((item) => !item.sectionKey || visibleKeys.has(item.sectionKey));
  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 w-full max-w-full border-b-4 border-ink bg-[#f9f9f9]">
      <nav className="relative mx-auto flex w-full max-w-full items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:max-w-7xl">
        <Link
          className={`retro-focus block min-w-0 max-w-[calc(100vw-5.5rem)] truncate font-display text-2xl font-bold uppercase leading-none sm:text-3xl lg:max-w-none lg:text-4xl ${brandClassName}`}
          href="/"
          onClick={() => setIsOpen(false)}
        >
          {brandLabel}
        </Link>
        <div className="hidden items-center gap-3 lg:flex">
          {navItems.map((item) => (
            <Link
              className={`retro-focus border-b-4 px-2 py-1 font-mono text-sm font-bold ${
                isActive(item.href) ? "border-berry text-berry" : "border-transparent text-[#584045]"
              }`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <RetroButton className="hidden lg:inline-flex" href={config.cta.href}>
          {config.cta.label}
        </RetroButton>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          className="retro-focus ml-auto grid h-11 w-11 shrink-0 place-items-center border-4 border-ink bg-white shadow-retro-sm lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X aria-hidden="true" className="h-5 w-5" strokeWidth={3} /> : <Menu aria-hidden="true" className="h-5 w-5" strokeWidth={3} />}
        </button>

        {isOpen ? (
          <div className="absolute left-4 right-4 top-[calc(100%+14px)] border-4 border-ink bg-[#f9f9f9] p-3 shadow-retro lg:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  className={`retro-focus border-4 border-ink px-4 py-3 font-display text-lg font-bold uppercase leading-none ${
                    isActive(item.href) ? "bg-candy text-white" : "bg-white text-ink"
                  }`}
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                className="retro-focus border-4 border-ink bg-banana px-4 py-3 text-center font-display text-lg font-bold uppercase leading-none text-ink"
                href={config.cta.href}
                onClick={() => setIsOpen(false)}
              >
                {config.cta.label}
              </Link>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
