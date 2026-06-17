import Link from "next/link";
import type { ComponentType, ReactNode } from "react";
import type { LucideProps } from "lucide-react";

type ButtonTone = "pink" | "yellow" | "purple" | "white";

const toneClass: Record<ButtonTone, string> = {
  pink: "bg-candy text-white",
  yellow: "bg-banana text-ink",
  purple: "bg-violet text-white",
  white: "bg-white text-ink"
};

interface RetroButtonProps {
  href?: string;
  children: ReactNode;
  tone?: ButtonTone;
  icon?: ComponentType<LucideProps>;
  iconNode?: ReactNode;
  className?: string;
  onClick?: () => void;
  title?: string;
}

export function RetroButton({
  href,
  children,
  tone = "pink",
  icon: Icon,
  iconNode,
  className = "",
  onClick,
  title
}: RetroButtonProps) {
  const classes = `retro-focus pixel-press hover-signal inline-flex min-h-11 items-center justify-center gap-2 border-4 border-ink px-5 py-3 font-display text-base font-bold uppercase leading-none shadow-retro-sm ${toneClass[tone]} ${className}`;
  const content = (
    <>
      {iconNode ?? (Icon ? <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={3} /> : null)}
      <span>{children}</span>
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");

    return (
      <Link
        className={classes}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        title={title}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} title={title} type="button">
      {content}
    </button>
  );
}
