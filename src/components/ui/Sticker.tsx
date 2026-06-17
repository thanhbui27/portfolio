import type { CSSProperties, ReactNode } from "react";

interface StickerProps {
  children: ReactNode;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

export function Sticker({ children, color = "bg-banana", className = "", style }: StickerProps) {
  return (
    <span
      className={`inline-flex border-2 border-ink px-3 py-2 font-mono text-xs font-bold shadow-retro-sm ${color} ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}
