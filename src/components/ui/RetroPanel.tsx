import type { ReactNode } from "react";

interface RetroPanelProps {
  children: ReactNode;
  className?: string;
  header?: ReactNode;
}

export function RetroPanel({ children, className = "", header }: RetroPanelProps) {
  return (
    <section className={`border-4 border-ink bg-white shadow-retro ${className}`}>
      {header ? <div className="border-b-4 border-ink bg-ink px-5 py-4 text-white">{header}</div> : null}
      {children}
    </section>
  );
}
