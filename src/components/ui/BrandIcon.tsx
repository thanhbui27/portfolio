import { Code2, ExternalLink, Github, Globe2, Mail, Play } from "lucide-react";

export type BrandIconName =
  | "appStore"
  | "discord"
  | "email"
  | "external"
  | "facebook"
  | "github"
  | "googlePlay"
  | "itch"
  | "linkedin"
  | "repository"
  | "steam"
  | "twitter"
  | "unity"
  | "web"
  | "website";

interface BrandIconProps {
  name: BrandIconName;
  className?: string;
  strokeWidth?: number;
}

export function BrandIcon({
  name,
  className = "h-5 w-5",
  strokeWidth = 2.5,
}: BrandIconProps) {
  if (name === "github") {
    return <Github aria-hidden="true" className={className} strokeWidth={strokeWidth} />;
  }

  if (name === "email") {
    return <Mail aria-hidden="true" className={className} strokeWidth={strokeWidth} />;
  }

  if (name === "web" || name === "website") {
    return <Globe2 aria-hidden="true" className={className} strokeWidth={strokeWidth} />;
  }

  if (name === "external") {
    return <ExternalLink aria-hidden="true" className={className} strokeWidth={strokeWidth} />;
  }

  if (name === "repository") {
    return <Code2 aria-hidden="true" className={className} strokeWidth={strokeWidth} />;
  }

  if (name === "unity") {
    return <Play aria-hidden="true" className={className} fill="currentColor" strokeWidth={strokeWidth} />;
  }

  const commonProps = {
    "aria-hidden": true,
    className,
    fill: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
  };

  switch (name) {
    case "linkedin":
      return (
        <svg {...commonProps}>
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.35 8h4.3v15H.35V8Zm7.35 0h4.12v2.05h.06c.57-1.08 1.98-2.22 4.08-2.22 4.36 0 5.17 2.87 5.17 6.6V23h-4.3v-7.6c0-1.81-.03-4.14-2.52-4.14-2.53 0-2.92 1.98-2.92 4.01V23H7.7V8Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...commonProps}>
          <path d="M22.7 12.06C22.7 6.16 17.9 1.36 12 1.36S1.3 6.16 1.3 12.06c0 5.33 3.9 9.75 9 10.56v-7.47H7.58v-3.09h2.72V9.71c0-2.68 1.6-4.16 4.04-4.16 1.17 0 2.39.21 2.39.21v2.63h-1.35c-1.33 0-1.74.82-1.74 1.67v2h2.97l-.48 3.09h-2.49v7.47c5.1-.81 9.06-5.23 9.06-10.56Z" />
        </svg>
      );
    case "twitter":
      return (
        <svg {...commonProps}>
          <path d="M18.9 2.4h3.2l-7 8 8.2 10.8h-6.4l-5-6.56-5.75 6.56H2.95l7.5-8.57L2.6 2.4h6.56l4.54 6 5.2-6Zm-1.12 16.9h1.78L8.2 4.2H6.3l11.48 15.1Z" />
        </svg>
      );
    case "discord":
      return (
        <svg {...commonProps}>
          <path d="M19.54 5.34A16.9 16.9 0 0 0 15.38 4l-.2.39c1.45.35 2.13.86 2.13.86a14.3 14.3 0 0 0-10.61 0S7.38 4.74 8.83 4l-.2-.39c-1.5.27-2.9.74-4.17 1.34C1.83 8.84 1.12 12.64 1.47 16.4A16.7 16.7 0 0 0 6.58 19c.42-.58.79-1.2 1.1-1.86-.6-.23-1.17-.51-1.7-.85.14-.1.28-.2.41-.31a12.1 12.1 0 0 0 11.22 0c.14.11.27.21.41.31-.53.34-1.1.62-1.7.85.31.66.68 1.28 1.1 1.86a16.64 16.64 0 0 0 5.11-2.6c.42-4.36-.72-8.12-2.99-11.06ZM8.72 14.13c-1.02 0-1.86-.95-1.86-2.11s.82-2.11 1.86-2.11c1.03 0 1.87.95 1.86 2.11 0 1.16-.83 2.11-1.86 2.11Zm6.56 0c-1.02 0-1.86-.95-1.86-2.11s.82-2.11 1.86-2.11c1.03 0 1.87.95 1.86 2.11 0 1.16-.83 2.11-1.86 2.11Z" />
        </svg>
      );
    case "appStore":
      return (
        <svg {...commonProps}>
          <path d="M17.3 13.05c-.02-2.04 1.67-3.02 1.75-3.07-.96-1.4-2.44-1.59-2.96-1.61-1.24-.13-2.44.74-3.07.74-.64 0-1.62-.72-2.67-.7-1.37.02-2.65.8-3.35 2.03-1.43 2.48-.36 6.13 1.01 8.13.69.98 1.49 2.08 2.54 2.04 1.03-.04 1.41-.66 2.65-.66 1.23 0 1.58.66 2.67.64 1.1-.02 1.8-.99 2.46-1.98.79-1.13 1.1-2.24 1.12-2.3-.03-.01-2.13-.82-2.15-3.26Zm-2.02-5.99c.56-.7.94-1.64.83-2.6-.81.04-1.83.56-2.41 1.24-.52.61-.98 1.6-.86 2.53.92.07 1.86-.46 2.44-1.17Z" />
          <path d="M7.6 21.7h8.8v1.2H7.6v-1.2Z" opacity=".45" />
        </svg>
      );
    case "googlePlay":
      return (
        <svg {...commonProps}>
          <path d="M3.5 2.2c-.3.28-.48.72-.48 1.28v17.04c0 .56.18 1 .48 1.28l9.77-9.8L3.5 2.2Z" opacity=".92" />
          <path d="m16.53 8.7-3.26 3.3 3.26 3.3 3.89-2.22c1.05-.6 1.05-1.56 0-2.16L16.53 8.7Z" opacity=".74" />
          <path d="m16.53 8.7-4.03-2.3L3.5 2.2 13.27 12l3.26-3.3Z" opacity=".55" />
          <path d="m3.5 21.8 9-4.2 4.03-2.3-3.26-3.3L3.5 21.8Z" opacity=".82" />
        </svg>
      );
    case "itch":
      return (
        <svg {...commonProps}>
          <path d="M3.1 4.5h17.8l.9 5.18c-.62.74-1.48 1.16-2.37 1.16-1.05 0-1.94-.55-2.53-1.43-.58.88-1.47 1.43-2.52 1.43s-1.94-.55-2.53-1.43c-.58.88-1.47 1.43-2.52 1.43s-1.94-.55-2.53-1.43c-.58.88-1.48 1.43-2.53 1.43-.89 0-1.75-.42-2.37-1.16L3.1 4.5Zm2.18 7.4c.73 0 1.38-.22 1.95-.66.57.44 1.22.66 1.95.66s1.38-.22 1.95-.66c.57.44 1.22.66 1.95.66s1.38-.22 1.95-.66c.57.44 1.22.66 1.95.66.72 0 1.38-.22 1.95-.66v5.84c0 1.45-1.17 2.62-2.62 2.62H7.9a2.62 2.62 0 0 1-2.62-2.62V11.9Zm4.7 2.22v2.78h4.04v-2.78H9.98Z" />
        </svg>
      );
    case "steam":
      return (
        <svg {...commonProps}>
          <path d="M12 1.6a10.4 10.4 0 0 0-10.28 9l5.6 2.32a2.95 2.95 0 0 1 1.67-.52l2.5-3.63v-.05a3.9 3.9 0 1 1 3.9 3.9h-.09l-3.56 2.54a3.02 3.02 0 0 1-5.89.93l-4-1.66A10.4 10.4 0 1 0 12 1.6Zm-3.06 15.62-1.28-.53c.24.5.64.9 1.18 1.12a2.06 2.06 0 0 0 1.58-3.8 2.02 2.02 0 0 0-1.55 0l1.33.55a1.52 1.52 0 1 1-1.16 2.8Zm6.44-6.92a1.58 1.58 0 1 0 0-3.16 1.58 1.58 0 0 0 0 3.16Zm0 .86a2.44 2.44 0 1 1 0-4.88 2.44 2.44 0 0 1 0 4.88Z" />
        </svg>
      );
    default:
      return <ExternalLink aria-hidden="true" className={className} strokeWidth={strokeWidth} />;
  }
}
