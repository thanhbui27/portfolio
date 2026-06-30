"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { FOCUS_COOKIE } from "@/lib/project-focus";

interface FocusBannerProps {
  label: string;
  headline: string;
}

export function FocusBanner({ label, headline }: FocusBannerProps) {
  const router = useRouter();

  const clearFocus = () => {
    document.cookie = `${FOCUS_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
    router.push("/");
    router.refresh();
  };

  return (
    <div className="border-b-4 border-ink bg-banana">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 sm:px-6">
        <p className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-ink">
          <span aria-hidden="true" className="h-3 w-3 border-2 border-ink bg-berry" />
          Viewing in <span className="text-berry">{headline}</span> mode — related content is pulled up and highlighted.
        </p>
        <div className="flex items-center gap-2">
          <Link
            className="retro-focus border-2 border-ink bg-white px-3 py-1 font-mono text-xs font-bold uppercase text-ink shadow-retro-sm"
            href="/projects"
          >
            {label} projects
          </Link>
          <button
            aria-label="Clear focus"
            className="retro-focus grid h-7 w-7 place-items-center border-2 border-ink bg-white shadow-retro-sm"
            onClick={clearFocus}
            type="button"
          >
            <X aria-hidden="true" className="h-4 w-4" strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
}
