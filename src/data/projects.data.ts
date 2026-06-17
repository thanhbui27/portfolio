import type { Project, ProjectArchiveContent } from "@/types/portfolio";

const svgData = (svg: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

const projectImage = (
  title: string,
  bg: string,
  accent: string,
  motif: "game" | "camera" | "pc" | "edu"
) =>
  svgData(`
    <svg width="1000" height="620" viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg">
      <rect width="1000" height="620" fill="${bg}"/>
      <rect x="42" y="42" width="916" height="536" fill="#f9f9f9" stroke="#1b1b1b" stroke-width="14"/>
      <rect x="76" y="76" width="848" height="468" fill="#1b1b1b"/>
      <rect x="96" y="96" width="808" height="428" fill="${accent}" opacity=".9"/>
      <g opacity=".18" stroke="#1b1b1b" stroke-width="4">
        <path d="M96 156h808M96 216h808M96 276h808M96 336h808M96 396h808M96 456h808"/>
        <path d="M176 96v428M256 96v428M336 96v428M416 96v428M496 96v428M576 96v428M656 96v428M736 96v428M816 96v428"/>
      </g>
      <text x="500" y="174" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="70" fill="#f9f9f9" stroke="#1b1b1b" stroke-width="4">${title}</text>
      ${
        motif === "game"
          ? `<g fill="#f9f9f9" stroke="#1b1b1b" stroke-width="10">
              <rect x="270" y="260" width="88" height="88"/><rect x="382" y="260" width="88" height="88"/><rect x="494" y="260" width="88" height="88"/><rect x="606" y="260" width="88" height="88"/>
              <rect x="326" y="372" width="88" height="88"/><rect x="438" y="372" width="88" height="88"/><rect x="550" y="372" width="88" height="88"/>
            </g>`
          : ""
      }
      ${
        motif === "camera"
          ? `<g fill="#f9f9f9" stroke="#1b1b1b" stroke-width="12">
              <rect x="260" y="250" width="480" height="230" rx="18"/>
              <rect x="344" y="210" width="160" height="68"/>
              <circle cx="500" cy="366" r="86" fill="${bg}"/>
              <circle cx="500" cy="366" r="40" fill="#1b1b1b"/>
              <rect x="620" y="284" width="58" height="42" fill="#ffdf9b"/>
            </g>`
          : ""
      }
      ${
        motif === "pc"
          ? `<g fill="#f9f9f9" stroke="#1b1b1b" stroke-width="12">
              <rect x="230" y="244" width="410" height="250"/>
              <rect x="678" y="234" width="118" height="270"/>
              <circle cx="734" cy="306" r="35" fill="${bg}"/><circle cx="734" cy="416" r="35" fill="${bg}"/>
              <rect x="296" y="292" width="260" height="118" fill="#1b1b1b"/>
              <rect x="360" y="520" width="260" height="28"/>
            </g>`
          : ""
      }
      ${
        motif === "edu"
          ? `<g fill="#f9f9f9" stroke="#1b1b1b" stroke-width="12">
              <path d="M500 232l280 116-280 116-280-116z"/>
              <path d="M342 400v76c86 52 230 52 316 0v-76"/>
              <rect x="718" y="364" width="26" height="120"/>
              <circle cx="731" cy="498" r="24" fill="#ffdf9b"/>
            </g>`
          : ""
      }
    </svg>
  `);

export const projectsPageContent: ProjectArchiveContent = {
  title: "Project",
  highlight: "Archive",
  description:
    "A collection of things I've built. Less talk, more code. Insert coin to view details.",
  filters: [
    { id: "all", label: "All Projects", tone: "pink", order: 1 },
    { id: "backend", label: "Backend", tone: "purple", order: 2 },
    { id: "frontend", label: "Frontend", tone: "yellow", order: 3 },
    { id: "game", label: "Game Dev", tone: "white", order: 4 }
  ]
};

export const projects: Project[] = [
  {
    id: "snapix",
    slug: "snapix",
    title: "Snapix",
    type: "game",
    shortDescription:
      "A fast-paced, grid-based puzzle game built with modern web technologies. Match colors, clear lines, and rack up combos before the screen fills up.",
    description:
      "Snapix is a fast-paced grid puzzle game focused on combo timing, crunchy feedback, and a retro CRT presentation.",
    thumbnail: projectImage("SNAPIX", "#2c1f48", "#b41f53", "game"),
    images: [
      projectImage("SNAPIX", "#2c1f48", "#b41f53", "game"),
      projectImage("COMBO MODE", "#1b1b1b", "#6b38d4", "game")
    ],
    techStack: ["JavaScript", "Canvas API", "CSS3", "HTML5"],
    archive: {
      number: "01",
      category: "Game Dev",
      buttonLabel: "Play Game",
      tone: "pink"
    },
    detail: {
      levelLabel: "Level: Final Boss (Game Dev)",
      overviewTitle: "Mission Log",
      overviewParagraphs: [
        "Deploy into a pixel grid, connect matching tiles, and keep the board alive through escalating rounds.",
        "The build focuses on responsive input, clear state transitions, and high-energy visual feedback for every combo chain."
      ],
      specsTitle: "System Specs",
      loadoutTitle: "Core Features",
      missionTitle: "Mission Log",
      featuresTitle: "Core Features",
      statusLabel: "Ready Player One",
      stickerLabel: "CRT Mode",
      specs: [
        { title: "JavaScript", description: "Real-time board state and scoring logic.", order: 1 },
        { title: "Canvas API", description: "Fast pixel rendering for the game surface.", order: 2 },
        { title: "CSS3 + HTML5", description: "Retro shell, overlays, and responsive arcade layout.", order: 3 }
      ],
      loadout: [
        { title: "Combo System", description: "Rewards chained clears and quick decision making.", order: 1 },
        { title: "Input Loop", description: "Keyboard and pointer-friendly grid controls.", order: 2 },
        { title: "Difficulty Curve", description: "Round pacing designed for short web sessions.", order: 3 }
      ],
      missionLog: [
        "Booting puzzle grid...",
        "Calibrating tile collision...",
        "Combo multiplier online.",
        "Awaiting player input."
      ],
      coreFeatures: [
        { title: "Real-time combo system", description: "Score chains update immediately after clears.", order: 1 },
        { title: "Retro CRT filter", description: "Scanlines and neon contrast match the arcade frame.", order: 2 },
        { title: "High-score leaderboard", description: "Prepared for persistence when admin storage arrives.", order: 3 }
      ]
    },
    githubUrl: "https://github.com/thanh/snapix",
    liveDemoUrl: "/demos/snapix",
    unityWebglUrl: "/demos/snapix",
    featured: true,
    status: "published",
    order: 1
  },
  {
    id: "photo-booth",
    slug: "photo-booth",
    title: "Photo Booth",
    type: "desktop",
    shortDescription:
      "A desktop app that captures, filters, and prints photos through a playful booth workflow with WebGL-style effects.",
    description:
      "Photo Booth is a desktop capture concept with instant frames, creative filters, local preview state, and export-ready composition tools.",
    thumbnail: projectImage("PHOTO BOOTH", "#1b1b1b", "#6b38d4", "camera"),
    images: [
      projectImage("PHOTO BOOTH", "#1b1b1b", "#6b38d4", "camera"),
      projectImage("FILTER LAB", "#ffd9df", "#ff5b8a", "camera")
    ],
    techStack: ["Electron", "React", "WebGL"],
    archive: {
      number: "02",
      category: "Desktop",
      buttonLabel: "View Case",
      tone: "purple"
    },
    detail: {
      levelLabel: "Level: Creative Tool",
      overviewTitle: "Operational Overview",
      overviewParagraphs: [
        "A playful desktop photo booth built around quick capture, filter selection, and printable output.",
        "The architecture keeps image state and booth presets cleanly separated so new templates can be managed later."
      ],
      specsTitle: "Tech Blueprints",
      loadoutTitle: "Loadout",
      missionTitle: "Mission Log",
      featuresTitle: "Core Features",
      statusLabel: "Status: Prototype",
      specs: [
        { title: "Electron", description: "Desktop runtime and device integration.", order: 1 },
        { title: "React", description: "Composable booth panels and editing controls.", order: 2 },
        { title: "WebGL", description: "Image effects and preview treatments.", order: 3 }
      ],
      loadout: [
        { title: "Frame Presets", description: "Reusable visual templates for captured photos.", order: 1 },
        { title: "Filter Pipeline", description: "Preview-first effects before export.", order: 2 },
        { title: "Print Flow", description: "Output path prepared for booth hardware.", order: 3 }
      ],
      missionLog: ["Camera module ready.", "Frame cartridges loaded.", "Export queue standing by."],
      coreFeatures: [
        { title: "Live capture", description: "Fast camera preview and snapshot state.", order: 1 },
        { title: "Creative filters", description: "Stylized output without leaving the booth.", order: 2 },
        { title: "Printable layouts", description: "Composition path for physical prints.", order: 3 }
      ]
    },
    githubUrl: "https://github.com/thanh/photo-booth",
    featured: true,
    status: "published",
    order: 2
  },
  {
    id: "pc-shop-mvc",
    slug: "pc-shop-mvc",
    title: "PC Shop MVC",
    type: "web",
    shortDescription:
      "A full-stack e-commerce platform for custom PC building, including product catalogs, cart flows, and admin inventory logic.",
    description:
      "A fully-featured e-commerce platform designed specifically for custom PC building enthusiasts. Built on a robust MVC architecture, this project demonstrates mastery in separating concerns while delivering a seamless user experience.",
    thumbnail: projectImage("PC SHOP MVC", "#ffd9df", "#b41f53", "pc"),
    images: [
      projectImage("PC SHOP MVC", "#ffd9df", "#b41f53", "pc"),
      projectImage("CUSTOM BUILDER", "#e9ddff", "#6b38d4", "pc")
    ],
    techStack: ["C# .NET", "SQL Server", "Entity Framework", "Bootstrap 5", "Vanilla JS"],
    archive: {
      number: "03",
      category: "Backend",
      buttonLabel: "Live Demo",
      tone: "yellow"
    },
    detail: {
      levelLabel: "Level: Elite (Full Stack)",
      overviewTitle: "Operational Overview",
      overviewParagraphs: [
        "A fully-featured e-commerce platform designed specifically for custom PC building enthusiasts. Built on a robust MVC architecture, this project demonstrates mastery in separating concerns while delivering a seamless user experience.",
        "The system integrates complex relational databases to manage inventory, handle secure user authentication, and process a stateful cart management system that persists across sessions. It's built to handle high-traffic tech drops with optimistic concurrency control."
      ],
      specsTitle: "Tech Blueprints",
      loadoutTitle: "Loadout",
      missionTitle: "Operational Log",
      featuresTitle: "Loadout",
      statusLabel: "Status: Online",
      stickerLabel: "New Arrival",
      specs: [
        { title: "C# .NET", description: "MVC backend foundation.", order: 1 },
        { title: "SQL Server", description: "Relational product and order storage.", order: 2 },
        { title: "Entity Framework", description: "Data access and model mapping.", order: 3 },
        { title: "Bootstrap 5", description: "Responsive UI shell.", order: 4 },
        { title: "Vanilla JS", description: "Interactive storefront behavior.", order: 5 }
      ],
      loadout: [
        { title: "Custom PC Builder", description: "Interactive compatibility checker for components.", order: 1 },
        { title: "Order Tracking", description: "Real-time status updates from assembly to shipping.", order: 2 },
        { title: "Admin Dashboard", description: "Comprehensive CMS for inventory and user management.", order: 3 }
      ],
      missionLog: [
        "Catalog synced.",
        "Cart persistence active.",
        "Inventory checks online."
      ],
      coreFeatures: [
        { title: "Secure auth", description: "Role-ready account flows for shoppers and admins.", order: 1 },
        { title: "Inventory logic", description: "Stock management for complex PC components.", order: 2 },
        { title: "Checkout state", description: "Session-safe cart and order flow.", order: 3 }
      ]
    },
    githubUrl: "https://github.com/thanh/pc-shop-mvc",
    liveDemoUrl: "/demos/pc-shop-mvc",
    featured: true,
    status: "published",
    order: 3
  },
  {
    id: "serps-edu",
    slug: "serps-edu",
    title: "SERPS EDU",
    type: "web",
    shortDescription:
      "A Student Education Record and Performance System for tracking learners, academic records, and progress signals.",
    description:
      "SERPS EDU organizes student profiles, academic records, and performance analytics into a clean education management workflow.",
    thumbnail: projectImage("SERPS EDU", "#ffdf9b", "#6b38d4", "edu"),
    images: [
      projectImage("SERPS EDU", "#ffdf9b", "#6b38d4", "edu"),
      projectImage("GRADEBOOK", "#ffd9df", "#b41f53", "edu")
    ],
    techStack: ["Vue.js", "Node.js", "MongoDB"],
    archive: {
      number: "04",
      category: "Frontend",
      buttonLabel: "View System",
      tone: "black"
    },
    detail: {
      levelLabel: "Level: Academic Ops",
      overviewTitle: "Operational Overview",
      overviewParagraphs: [
        "A student record platform for managing learner profiles, course progress, and academic performance snapshots.",
        "The system keeps education data modular so reporting, permissions, and admin editing can move behind a database-backed dashboard later."
      ],
      specsTitle: "Tech Blueprints",
      loadoutTitle: "Loadout",
      missionTitle: "Mission Log",
      featuresTitle: "Core Features",
      statusLabel: "Status: Published",
      specs: [
        { title: "Vue.js", description: "Reactive education dashboard UI.", order: 1 },
        { title: "Node.js", description: "API layer and business rules.", order: 2 },
        { title: "MongoDB", description: "Document storage for student records.", order: 3 }
      ],
      loadout: [
        { title: "Student Profiles", description: "Central records for learner information.", order: 1 },
        { title: "Performance Signals", description: "Track progress across subjects and terms.", order: 2 },
        { title: "Admin Workflows", description: "Prepared for role-based editing screens.", order: 3 }
      ],
      missionLog: ["Student records loaded.", "Progress graph compiled.", "Advisor mode ready."],
      coreFeatures: [
        { title: "Record management", description: "Structured student and class data.", order: 1 },
        { title: "Progress review", description: "Academic snapshots for quick decisions.", order: 2 },
        { title: "Admin-ready schema", description: "Content can move to dynamic storage later.", order: 3 }
      ]
    },
    githubUrl: "https://github.com/thanh/serps-edu",
    liveDemoUrl: "/demos/serps-edu",
    featured: false,
    status: "published",
    order: 4
  },
  {
    id: "secret-dashboard",
    slug: "secret-dashboard",
    title: "Secret Dashboard",
    type: "web",
    shortDescription: "A draft admin UI experiment kept out of the public portfolio.",
    description: "This draft project proves that unpublished records are filtered before rendering.",
    thumbnail: projectImage("DRAFT", "#ddd", "#999", "pc"),
    images: [],
    techStack: ["Next.js", "Prisma"],
    archive: {
      number: "99",
      category: "Draft",
      buttonLabel: "Hidden",
      tone: "black"
    },
    detail: {
      levelLabel: "Draft",
      overviewTitle: "Draft",
      overviewParagraphs: ["This record should not render publicly."],
      specsTitle: "Tech",
      loadoutTitle: "Loadout",
      missionTitle: "Log",
      featuresTitle: "Features",
      statusLabel: "Draft",
      specs: [],
      loadout: [],
      missionLog: [],
      coreFeatures: []
    },
    featured: false,
    status: "draft",
    order: 99
  }
];
