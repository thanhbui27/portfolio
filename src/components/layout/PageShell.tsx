import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import {
  getSiteConfig,
  getSocialLinks,
  getVisibleSections,
} from "@/lib/portfolio-service";

interface PageShellProps {
  children: ReactNode;
  mainClassName?: string;
  footerClassName?: string;
}

export async function PageShell({
  children,
  mainClassName = "space-y-20 pb-4",
  footerClassName,
}: PageShellProps) {
  const [config, socialLinks, sections] = await Promise.all([
    getSiteConfig(),
    getSocialLinks(),
    getVisibleSections(),
  ]);

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Navbar config={config} visibleSections={sections} />
      <main className={`flex-1 ${mainClassName}`}>
        {children}
      </main>
      <Footer
        className={footerClassName}
        config={config}
        socialLinks={socialLinks}
      />
    </div>
  );
}
