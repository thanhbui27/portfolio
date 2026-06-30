import type { Project, ProjectArchiveContent } from "@/types/portfolio";

/**
 * A focus profile lets a visitor land on the projects page with a specific
 * context in mind (for example `?focus=unity` or `?focus=fullstack`).
 *
 * When a focus is active we:
 *  - tailor the page headline + description to that focus,
 *  - pre-select the closest filter tab,
 *  - pull every related project to the top of the grid,
 *  - and highlight those related cards so they read as "recommended".
 */
export interface FocusProfile {
  /** Canonical id used in the URL, e.g. `unity`. */
  id: string;
  /** Short chip/badge label shown in the focus banner. */
  label: string;
  /** Replaces the page highlight word (e.g. "Unity Builds"). */
  headline: string;
  /** Replaces the page description so the copy matches the focus. */
  description: string;
  /** Closest existing filter tab id to activate by default. */
  filterId?: ProjectArchiveContent["filters"][number]["id"];
  /** Tokens matched (case-insensitive) against a project's searchable text. */
  keywords: string[];
  /** Extra URL spellings that resolve to this same focus. */
  aliases?: string[];
}

const focusProfiles: FocusProfile[] = [
  {
    id: "unity",
    label: "Unity",
    headline: "Unity Builds",
    description:
      "Spotlighting my Unity and C# work first — published mobile titles, gameplay systems, and interactive 3D/2D experiences. Everything Unity-related is pulled to the front of the queue.",
    filterId: "unity",
    keywords: ["unity", "c#", "csharp", "videoplayer", "tilemap", "animator", "scriptableobjects"],
    aliases: ["unity3d", "unity-developer", "csharp", "c#"],
  },
  {
    id: "game",
    label: "Game Dev",
    headline: "Game Dev",
    description:
      "Leading with my game development projects — gameplay loops, level design, inventory systems, and published builds. Game-focused work jumps to the top.",
    filterId: "game",
    keywords: ["game", "unity", "gameplay", "rpg", "2d", "3d", "horror", "tilemap", "cocos"],
    aliases: ["gamedev", "games", "game-dev"],
  },
  {
    id: "fullstack",
    label: "Full Stack",
    headline: "Full Stack",
    description:
      "Front-of-queue: my full-stack builds — end-to-end platforms with APIs, databases, auth, payments, and admin dashboards across .NET, React, and Laravel.",
    filterId: "web",
    keywords: [
      "full stack",
      "fullstack",
      ".net",
      "react",
      "typescript",
      "laravel",
      "node",
      "api",
      "mysql",
      "redux",
      "swagger",
    ],
    aliases: ["full-stack", "full stack", "web"],
  },
  {
    id: "frontend",
    label: "Frontend",
    headline: "Frontend",
    description:
      "Highlighting the interface and client-side work first — React, TypeScript, and responsive UI flows. Frontend-heavy projects lead the grid.",
    filterId: "web",
    keywords: ["react", "typescript", "frontend", "ui", "redux", "axios", "ajax", "html", "css"],
    aliases: ["front-end", "front end", "client"],
  },
  {
    id: "backend",
    label: "Backend",
    headline: "Backend",
    description:
      "Backend and API work up top — .NET, Laravel, PHP MVC, relational databases, auth, and payment integrations move to the front.",
    filterId: "web",
    keywords: [
      "backend",
      ".net",
      "laravel",
      "php",
      "mvc",
      "api",
      "mysql",
      "pdo",
      "swagger",
      "oop",
      "node",
    ],
    aliases: ["back-end", "back end", "api", "server"],
  },
];

/** Canonical focus slugs (used for static route generation). */
export const focusSlugs = focusProfiles.map((profile) => profile.id);

/** Read-only list of every focus profile. */
export function listFocusProfiles(): FocusProfile[] {
  return focusProfiles;
}

const normalize = (value: string) => value.trim().toLowerCase();

/** Build the searchable text blob for a project once. */
const projectSearchText = (project: Project) =>
  [
    project.title,
    project.type,
    project.archive.category,
    project.shortDescription,
    project.description,
    ...project.techStack,
  ]
    .join(" ")
    .toLowerCase();

/** Resolve a raw query value (focus id or alias) into a focus profile. */
export function resolveFocus(rawFocus?: string | string[]): FocusProfile | null {
  if (!rawFocus) {
    return null;
  }

  const value = normalize(Array.isArray(rawFocus) ? rawFocus[0] ?? "" : rawFocus);
  if (!value) {
    return null;
  }

  return (
    focusProfiles.find(
      (profile) =>
        profile.id === value ||
        profile.aliases?.some((alias) => normalize(alias) === value),
    ) ?? null
  );
}

/** Does this project relate to the active focus? */
export function projectMatchesFocus(project: Project, focus: FocusProfile): boolean {
  const haystack = projectSearchText(project);
  return focus.keywords.some((keyword) => haystack.includes(normalize(keyword)));
}

/** Generic text matcher used for skills, stickers, and other short labels. */
export function textMatchesFocus(text: string, focus: FocusProfile): boolean {
  const haystack = text.toLowerCase();
  return focus.keywords.some((keyword) => haystack.includes(normalize(keyword)));
}

/** Cookie name used to persist the active focus across pages. */
export const FOCUS_COOKIE = "pf_focus";

export interface FocusedProjects {
  /** Projects re-ordered so focus matches come first (stable within groups). */
  ordered: Project[];
  /** Set of project ids that match the active focus (for highlighting). */
  matchedIds: Set<string>;
}

/**
 * Reorder projects so everything related to the focus is pulled to the top,
 * preserving the original relative order inside each group.
 */
export function applyFocus(projects: Project[], focus: FocusProfile | null): FocusedProjects {
  if (!focus) {
    return { ordered: projects, matchedIds: new Set() };
  }

  const matched: Project[] = [];
  const rest: Project[] = [];
  const matchedIds = new Set<string>();

  for (const project of projects) {
    if (projectMatchesFocus(project, focus)) {
      matched.push(project);
      matchedIds.add(project.id);
    } else {
      rest.push(project);
    }
  }

  return { ordered: [...matched, ...rest], matchedIds };
}
