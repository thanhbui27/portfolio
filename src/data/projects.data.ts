import type { Project, ProjectArchiveContent } from "@/types/portfolio";
import LogoImpact from "@/images/logo impact arena.png";
import LogoTig from "@/images/App Icon tight trope.png";
import LogoSmar from "@/images/logo hide smash.png";
import LogoLegacy from "@/images/legacy.png";
import LogoBounty from "@/images/200x200bb-75.png";
import LogoMetaHorse from "@/images/icon0001-1-192x192.jpg";

const svgData = (svg: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

type ProjectMotif = "web" | "game" | "camera" | "pc" | "edu";

const projectImage = (
  title: string,
  bg: string,
  accent: string,
  motif: ProjectMotif,
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
      <text x="500" y="174" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="64" fill="#f9f9f9" stroke="#1b1b1b" stroke-width="4">${title}</text>
      ${
        motif === "web"
          ? `<g fill="#f9f9f9" stroke="#1b1b1b" stroke-width="12">
              <rect x="220" y="230" width="560" height="290"/>
              <rect x="220" y="230" width="560" height="58" fill="#1b1b1b"/>
              <circle cx="256" cy="259" r="10" fill="#ff5b8a" stroke="none"/>
              <circle cx="292" cy="259" r="10" fill="#ffd166" stroke="none"/>
              <circle cx="328" cy="259" r="10" fill="#8ff3d3" stroke="none"/>
              <rect x="266" y="326" width="210" height="34" fill="${bg}"/>
              <rect x="266" y="392" width="148" height="82" fill="#f9f9f9"/>
              <rect x="452" y="392" width="148" height="82" fill="#f9f9f9"/>
              <rect x="636" y="326" width="96" height="148" fill="${bg}"/>
            </g>`
          : ""
      }
      ${
        motif === "game"
          ? `<g fill="#f9f9f9" stroke="#1b1b1b" stroke-width="12">
              <rect x="250" y="252" width="500" height="230" rx="22"/>
              <circle cx="350" cy="368" r="44" fill="${bg}"/>
              <path d="M350 318v100M300 368h100" stroke="#1b1b1b" stroke-width="20" stroke-linecap="round"/>
              <circle cx="610" cy="344" r="25" fill="#ffdf9b"/>
              <circle cx="680" cy="388" r="25" fill="#8ff3d3"/>
              <path d="M440 330h120M440 400h90" stroke="#1b1b1b" stroke-width="18" stroke-linecap="round"/>
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
    </svg>
  `);

const projectArtwork = (title: string, accent: string, motif: ProjectMotif) =>
  svgData(`
    <svg width="900" height="520" viewBox="0 0 900 520" xmlns="http://www.w3.org/2000/svg">
      <text x="450" y="112" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="58" fill="#f9f9f9" stroke="#1b1b1b" stroke-width="6">${title}</text>
      ${
        motif === "web"
          ? `<g fill="#f9f9f9" stroke="#1b1b1b" stroke-width="12">
              <rect x="160" y="184" width="580" height="270"/>
              <rect x="160" y="184" width="580" height="58" fill="#1b1b1b"/>
              <circle cx="198" cy="213" r="10" fill="#ff5b8a" stroke="none"/>
              <circle cx="234" cy="213" r="10" fill="#ffd166" stroke="none"/>
              <circle cx="270" cy="213" r="10" fill="#8ff3d3" stroke="none"/>
              <rect x="210" y="280" width="220" height="34" fill="${accent}"/>
              <rect x="210" y="346" width="154" height="78" fill="#f9f9f9"/>
              <rect x="398" y="346" width="154" height="78" fill="#f9f9f9"/>
              <rect x="586" y="280" width="104" height="144" fill="${accent}"/>
              <path d="M646 394l62 62-34 8 24 48-34 17-24-49-27 24z" fill="#ffd166" stroke="#1b1b1b" stroke-width="10"/>
            </g>`
          : ""
      }
      ${
        motif === "game"
          ? `<g fill="#f9f9f9" stroke="#1b1b1b" stroke-width="12">
              <rect x="190" y="204" width="520" height="230" rx="24"/>
              <circle cx="306" cy="320" r="44" fill="${accent}"/>
              <path d="M306 270v100M256 320h100" stroke="#1b1b1b" stroke-width="20" stroke-linecap="round"/>
              <circle cx="560" cy="294" r="25" fill="#ffdf9b"/>
              <circle cx="632" cy="338" r="25" fill="#8ff3d3"/>
              <path d="M404 286h108M404 356h82" stroke="#1b1b1b" stroke-width="18" stroke-linecap="round"/>
              <path d="M650 410l54 54-30 7 22 43-32 16-21-44-24 22z" fill="#ffd166" stroke="#1b1b1b" stroke-width="10"/>
            </g>`
          : ""
      }
      ${
        motif === "pc"
          ? `<g fill="#f9f9f9" stroke="#1b1b1b" stroke-width="12">
              <rect x="190" y="204" width="410" height="250"/>
              <rect x="638" y="194" width="118" height="270"/>
              <circle cx="694" cy="266" r="35" fill="${accent}"/><circle cx="694" cy="376" r="35" fill="${accent}"/>
              <rect x="256" y="252" width="260" height="118" fill="#1b1b1b"/>
              <rect x="320" y="480" width="260" height="28"/>
            </g>`
          : ""
      }
    </svg>
  `);

export const projectsPageContent: ProjectArchiveContent = {
  title: "Project",
  highlight: "Archive",
  description:
    "A collection of selected Unity, game, and web projects from my CV. Less talk, more code. Insert coin to view details.",
  filters: [
    { id: "all", label: "All Projects", tone: "pink", order: 1 },
    { id: "unity", label: "Unity", tone: "purple", order: 2 },
    { id: "game", label: "Game Dev", tone: "yellow", order: 3 },
    { id: "web", label: "Web", tone: "white", order: 4 },
  ],
};

export const projects: Project[] = [
  {
    id: "bounty-hunter",
    slug: "bounty-hunter",
    title: "Bounty Hunter",
    type: "game",
    shortDescription:
      "A published mobile Unity project where I developed gameplay features, UI systems, video playback, API integration, sockets, ads, and push notifications.",
    description:
      "Bounty Hunter is a published mobile-store Unity project. My work focused on maintaining game features with Unity and C#, improving dynamic UI layouts, handling video playback with Unity VideoPlayer, integrating backend services, working with socket-based real-time features, and supporting third-party SDKs such as Tapjoy and Firebase Cloud Messaging.",
    thumbnail: LogoBounty.src,
    images: [
      projectImage("BOUNTY HUNTER", "#2c1f48", "#b41f53", "game"),
      projectImage("MOBILE BUILD", "#ffd9df", "#6b38d4", "game"),
    ],
    techStack: [
      "Unity",
      "C#",
      "VideoPlayer",
      "REST API",
      "Socket",
      "Tapjoy",
      "Firebase FCM",
    ],
    archive: {
      number: "01",
      category: "Unity",
      buttonLabel: "View Details",
      tone: "pink",
      thumbnailBackground: "#b41f53",
    },
    detail: {
      levelLabel: "Level: Published Mobile Game",
      overviewTitle: "Operational Overview",
      overviewParagraphs: [
        "Bounty Hunter is a Unity-based mobile project published on a mobile store. I worked on game features, UI systems, backend communication, video playback, and SDK integrations.",
        "The work included dynamic layouts, responsive UI elements, REST API consumption, basic socket communication for real-time features, guest/session handling, ads and offerwall integration with Tapjoy, and push notifications with Firebase Cloud Messaging.",
      ],
      specsTitle: "Tech Blueprints",
      loadoutTitle: "Loadout",
      missionTitle: "Development Log",
      featuresTitle: "Core Features",
      statusLabel: "Status: Published",
      stickerLabel: "Mobile Store",
      specs: [
        {
          title: "Unity + C#",
          description: "Core mobile game feature development and maintenance.",
          order: 1,
        },
        {
          title: "Unity VideoPlayer",
          description:
            "Video display, playback handling, and basic audio synchronization.",
          order: 2,
        },
        {
          title: "REST API + Socket",
          description:
            "Data retrieval, updates, and basic real-time communication.",
          order: 3,
        },
        {
          title: "Tapjoy",
          description:
            "Ads and offerwall integration with basic error handling.",
          order: 4,
        },
        {
          title: "Firebase FCM",
          description: "Push notification integration.",
          order: 5,
        },
      ],
      loadout: [
        {
          title: "Dynamic UI",
          description:
            "Built and optimized responsive layouts, message displays, and UI rendering.",
          order: 1,
        },
        {
          title: "Video Playback",
          description:
            "Fixed video formats, playback errors, and async loading to reduce UI blocking.",
          order: 2,
        },
        {
          title: "Stability",
          description:
            "Resolved NullReferenceException, coroutine/async bugs, and SDK integration issues.",
          order: 3,
        },
      ],
      missionLog: [
        "Developed and maintained Unity mobile game features.",
        "Integrated Tapjoy and Firebase Cloud Messaging.",
        "Optimized UI layout, rendering, and runtime stability.",
      ],
      coreFeatures: [
        {
          title: "Mobile gameplay features",
          description: "Unity C# features for a published mobile project.",
          order: 1,
        },
        {
          title: "SDK integrations",
          description: "Ads, offerwall, and push notification support.",
          order: 2,
        },
        {
          title: "Backend sync",
          description: "REST API and socket-based data flows.",
          order: 3,
        },
      ],
    },
    // Add store/video links when available:
    storeLinks: [
      {
        label: "App Store",
        href: "https://apps.apple.com/vn/app/bounty-hunters/id6739280497?l=vi",
        platform: "appStore",
        order: 1,
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.joyboygames.bountyhunters&pcampaignid=web_share",
        platform: "googlePlay",
        order: 2,
      },
    ],
    // videoDemoUrl: "https://drive.google.com/file/d/.../view",
    featured: true,
    status: "published",
    order: 1,
  },
  {
    id: "metahourse",
    slug: "metahourse",
    title: "Metahourse",
    type: "game",
    shortDescription:
      "A Unity project where I maintained existing features, adjusted UI from design requirements, integrated backend APIs, and improved build stability.",
    description:
      "Metahourse involved maintaining and updating Unity project features, implementing and adjusting UI elements based on design requirements, fixing UI issues, improving layout consistency across screens, supporting backend API integration, and collaborating with teammates for stable builds.",
    thumbnail: LogoMetaHorse.src,
    images: [
      projectImage("METAHOURSE", "#e9ddff", "#6b38d4", "game"),
      projectImage("UNITY UI", "#ffd9df", "#b41f53", "game"),
    ],
    techStack: ["Unity", "C#", "UI System", "REST API", "Refactoring"],
    archive: {
      number: "02",
      category: "Unity",
      buttonLabel: "View Details",
      tone: "purple",
      thumbnailBackground: "#6b38d4",
    },
    detail: {
      levelLabel: "Level: Unity Maintenance",
      overviewTitle: "Operational Overview",
      overviewParagraphs: [
        "Metahourse is an existing Unity project where I supported ongoing feature updates, UI adjustments, bug fixes, and API-connected screens.",
        "The project work focused on maintaining project stability, improving layout consistency, and working within an existing codebase to refactor and improve readability at a basic level.",
      ],
      specsTitle: "Tech Blueprints",
      loadoutTitle: "Loadout",
      missionTitle: "Development Log",
      featuresTitle: "Core Features",
      statusLabel: "Status: Maintained",
      stickerLabel: "Unity",
      specs: [
        {
          title: "Unity + C#",
          description: "Feature maintenance and UI updates.",
          order: 1,
        },
        {
          title: "UI System",
          description:
            "Design-based element adjustment and layout consistency.",
          order: 2,
        },
        {
          title: "Backend APIs",
          description: "Data updates and display support from APIs.",
          order: 3,
        },
      ],
      loadout: [
        {
          title: "Feature Updates",
          description: "Maintained and updated existing project features.",
          order: 1,
        },
        {
          title: "UI Fixes",
          description: "Fixed UI-related issues across screens.",
          order: 2,
        },
        {
          title: "Stable Builds",
          description: "Collaborated with team members to keep builds stable.",
          order: 3,
        },
      ],
      missionLog: [
        "Maintained existing Unity project features.",
        "Implemented UI elements from design requirements.",
        "Supported backend API data display.",
      ],
      coreFeatures: [
        {
          title: "UI consistency",
          description: "Improved layout behavior across screens.",
          order: 1,
        },
        {
          title: "API support",
          description: "Displayed backend data in Unity screens.",
          order: 2,
        },
        {
          title: "Code readability",
          description: "Basic refactoring in an existing codebase.",
          order: 3,
        },
      ],
    },
    // videoDemoUrl: "https://drive.google.com/file/d/.../view",
    featured: true,
    status: "published",
    order: 2,
  },
  {
    id: "room-no-7",
    slug: "room-no-7",
    title: "Room No.7",
    type: "game",
    shortDescription:
      "A personal 3D horror puzzle game built in Unity with puzzles, inventory, story progression, lighting, cutscenes, and jump-scare events.",
    description:
      "Room No.7 is a personal Unity horror puzzle project set in a mysterious room environment. It includes basic puzzle and interaction mechanics, an inventory system, story progression, atmospheric lighting, scene layout, scripted events, cutscenes, jump scares, and trigger-based gameplay flow.",
    thumbnail: projectArtwork("ROOM NO.7", "#1b1b1b", "game"),
    images: [
      projectImage("ROOM NO.7", "#1b1b1b", "#b41f53", "game"),
      projectImage("HORROR ROOM", "#2c1f48", "#6b38d4", "game"),
    ],
    techStack: [
      "Unity",
      "C#",
      "3D",
      "Lighting",
      "Timeline",
      "Inventory System",
    ],
    archive: {
      number: "03",
      category: "Horror Game",
      buttonLabel: "View Details",
      tone: "black",
      thumbnailBackground: "#1b1b1b",
    },
    detail: {
      levelLabel: "Level: 3D Horror Puzzle",
      overviewTitle: "Operational Overview",
      overviewParagraphs: [
        "Room No.7 is a 3D horror puzzle game built with Unity and C#, set in a mysterious room environment.",
        "The project includes puzzle and interaction mechanics, inventory UI, prompts, HUD elements, story progression through events, lighting setup, scene layout, object placement, cutscenes, and jump-scare triggers.",
      ],
      specsTitle: "Tech Blueprints",
      loadoutTitle: "Loadout",
      missionTitle: "Development Log",
      featuresTitle: "Core Features",
      statusLabel: "Status: Personal Project",
      stickerLabel: "Horror",
      specs: [
        {
          title: "Unity + C#",
          description: "Core gameplay, interactions, and scene flow.",
          order: 1,
        },
        {
          title: "Lighting",
          description: "Point, spot, and directional lights for horror mood.",
          order: 2,
        },
        {
          title: "Timeline + Triggers",
          description: "Camera events, scripted sequences, and jump scares.",
          order: 3,
        },
        {
          title: "Inventory UI",
          description: "Item collection, item usage, and interaction prompts.",
          order: 4,
        },
      ],
      loadout: [
        {
          title: "Puzzle Mechanics",
          description: "Basic puzzle and interaction systems.",
          order: 1,
        },
        {
          title: "Story Progression",
          description:
            "Events and interactions guide the player through the room.",
          order: 2,
        },
        {
          title: "Atmosphere",
          description:
            "Lighting, shadows, environment settings, and object placement.",
          order: 3,
        },
      ],
      missionLog: [
        "Created a 3D horror room environment.",
        "Built inventory and item interaction systems.",
        "Implemented cutscenes and jump-scare events.",
      ],
      coreFeatures: [
        {
          title: "Inventory system",
          description: "Collect and use items in puzzle progression.",
          order: 1,
        },
        {
          title: "Scripted events",
          description: "Timeline and trigger-based camera/story events.",
          order: 2,
        },
        {
          title: "Horror atmosphere",
          description: "Lighting and scene composition for mood.",
          order: 3,
        },
      ],
    },
    // CV mentions "Link Video: Drive"; paste the actual Drive video URL here when available.
    videoDemoUrl:
      "https://drive.google.com/file/d/1uA_IG5RYumXwK7yj0G9cBtnqNnnC1x5h/view",
    featured: true,
    status: "published",
    order: 3,
  },
  {
    id: "top-down-rpg",
    slug: "2d-rpg-top-down-game",
    title: "2D RPG Top-Down Game",
    type: "game",
    shortDescription:
      "A personal Unity 2D top-down RPG with movement, item systems, maps, scene transitions, combat, UI, prefabs, ScriptableObjects, and Tilemaps.",
    description:
      "2D RPG Top-Down Game is a personal Unity project with player movement, top-down controls, item collection and management, multiple maps, scene transitions, basic combat, interaction mechanics, HUD, inventory display, feedback UI, game states, and player progression.",
    thumbnail: projectArtwork("2D RPG", "#785a00", "game"),
    images: [
      projectImage("2D RPG", "#ffdf9b", "#785a00", "game"),
      projectImage("TOP DOWN", "#ffd9df", "#b41f53", "game"),
    ],
    techStack: [
      "Unity",
      "C#",
      "2D",
      "Tilemap",
      "Animator",
      "ScriptableObjects",
    ],
    archive: {
      number: "04",
      category: "2D RPG",
      buttonLabel: "View Details",
      tone: "yellow",
      thumbnailBackground: "#785a00",
    },
    detail: {
      levelLabel: "Level: 2D Top-Down RPG",
      overviewTitle: "Operational Overview",
      overviewParagraphs: [
        "This personal Unity project explores a 2D top-down RPG with basic gameplay mechanics and multiple gameplay systems.",
        "It includes player movement, item collection and management, multiple maps, scene transitions, combat and interaction mechanics, HUD, inventory display, game states, prefabs, ScriptableObjects, Animator, and Tilemap-based level design.",
      ],
      specsTitle: "Tech Blueprints",
      loadoutTitle: "Loadout",
      missionTitle: "Development Log",
      featuresTitle: "Core Features",
      statusLabel: "Status: Personal Project",
      stickerLabel: "Itch.io",
      specs: [
        {
          title: "Unity + C#",
          description: "Core gameplay logic and game flow.",
          order: 1,
        },
        {
          title: "Tilemap",
          description: "Level design for multiple maps.",
          order: 2,
        },
        {
          title: "Animator",
          description: "Character animation workflows.",
          order: 3,
        },
        {
          title: "ScriptableObjects",
          description: "Reusable data setup for gameplay systems.",
          order: 4,
        },
      ],
      loadout: [
        {
          title: "Top-down Movement",
          description:
            "Player movement and control from a top-down perspective.",
          order: 1,
        },
        {
          title: "Item System",
          description: "Collecting and managing in-game items.",
          order: 2,
        },
        {
          title: "Scene Flow",
          description:
            "Multiple maps, transitions, game states, and progression.",
          order: 3,
        },
      ],
      missionLog: [
        "Built movement, item, combat, and interaction mechanics.",
        "Designed maps using Unity Tilemap tools.",
        "Debugged gameplay issues and improved stability.",
      ],
      coreFeatures: [
        {
          title: "RPG systems",
          description: "Items, combat, interaction, and progression.",
          order: 1,
        },
        {
          title: "Unity tools",
          description: "Prefabs, ScriptableObjects, Animator, and Tilemaps.",
          order: 2,
        },
        {
          title: "Responsive UI",
          description: "HUD, inventory display, and feedback elements.",
          order: 3,
        },
      ],
    },
    // CV mentions "Play on Itch.io"; paste the actual Itch.io URL here when available.
    storeLinks: [
      {
        label: "Play on Itch.io",
        href: "https://thanhbui27.itch.io/project-game-da",
        platform: "itch",
        order: 1,
      },
    ],

    // videoDemoUrl: "https://drive.google.com/file/d/.../view",
    featured: true,
    status: "published",
    order: 4,
  },
  {
    id: "hekuro",
    slug: "hekuro-ecommerce",
    title: "Hekuro E-Commerce",
    type: "web",
    shortDescription:
      "A full-stack e-commerce platform with authentication, CRUD, order management, cart flows, social login, payment integration, and an admin dashboard.",
    description:
      "Hekuro is an e-commerce website built with a .NET API backend and React TypeScript frontend. It supports authorization, authentication, CRUD operations, customer pages, account management, shopping cart, order placement, VNPay and MoMo test payments, social login, and admin dashboard workflows.",
    thumbnail: projectArtwork("HEKURO", "#b41f53", "web"),
    images: [
      projectImage("HEKURO", "#ffd9df", "#b41f53", "web"),
      projectImage("ORDER OPS", "#e9ddff", "#6b38d4", "web"),
    ],
    techStack: [
      ".NET API",
      "React",
      "TypeScript",
      "MySQL",
      "Swagger",
      "Axios",
      "Redux Toolkit",
      "VNPay",
      "MoMo",
    ],
    archive: {
      number: "05",
      category: "Full Stack",
      buttonLabel: "View Repos",
      tone: "pink",
      thumbnailBackground: "#b41f53",
    },
    detail: {
      levelLabel: "Level: Full Stack E-Commerce",
      overviewTitle: "Operational Overview",
      overviewParagraphs: [
        "This project combines a .NET API backend with a React TypeScript client to deliver a complete online store experience.",
        "The platform covers authorization, authentication, CRUD operations, order management, user management, customer pages, account management, shopping cart, order placement, VNPay and MoMo payment testing, Facebook/Google registration, and an admin dashboard.",
      ],
      specsTitle: "Tech Blueprints",
      loadoutTitle: "Loadout",
      missionTitle: "Operational Log",
      featuresTitle: "Core Features",
      statusLabel: "Status: Published",
      stickerLabel: "CV Project",
      specs: [
        {
          title: ".NET API",
          description: "Backend development and RESTful API creation.",
          order: 1,
        },
        {
          title: "MySQL",
          description: "Relational database for structured data storage.",
          order: 2,
        },
        {
          title: "Swagger",
          description: "API documentation and endpoint testing.",
          order: 3,
        },
        {
          title: "React + TypeScript",
          description: "Frontend development for customer and admin flows.",
          order: 4,
        },
        {
          title: "Axios + Redux Toolkit",
          description: "State management and data handling.",
          order: 5,
        },
        {
          title: "VNPay + MoMo",
          description: "Payment integration in a test environment.",
          order: 6,
        },
      ],
      loadout: [
        {
          title: "Storefront",
          description:
            "Customer pages, account management, shopping cart, and order placement.",
          order: 1,
        },
        {
          title: "Admin Dashboard",
          description:
            "Admin workflows for users, orders, and CRUD operations.",
          order: 2,
        },
        {
          title: "Authentication",
          description:
            "Authorization, authentication, and registration via Facebook or Google.",
          order: 3,
        },
      ],
      missionLog: [
        "Server repo: https://github.com/thanhbui27/server-f-hekato",
        "Client repo: https://github.com/thanhbui27/f-hekato",
      ],
      coreFeatures: [
        {
          title: "Payment flow",
          description: "VNPay and MoMo payment integration for test checkout.",
          order: 1,
        },
        {
          title: "Role-ready admin",
          description: "Management tools for orders, users, and resources.",
          order: 2,
        },
        {
          title: "API-first backend",
          description: "Documented REST APIs with Swagger.",
          order: 3,
        },
      ],
    },
    repositoryLinks: [
      {
        label: "Server Repo",
        href: "https://github.com/thanhbui27/server-f-hekato",
        order: 1,
      },
      {
        label: "Client Repo",
        href: "https://github.com/thanhbui27/f-hekato",
        order: 2,
      },
    ],
    githubUrl: "https://github.com/thanhbui27/f-hekato",
    featured: true,
    status: "published",
    order: 5,
  },
  {
    id: "figure-shop",
    slug: "figure-shop",
    title: "Figure Shop",
    type: "web",
    shortDescription:
      "An e-commerce website built with Laravel, MySQL, Ajax, VNPay, and MoMo for product ordering and admin management.",
    description:
      "Figure Shop is an e-commerce website with authorization, authentication, CRUD operations, order management, user management, customer pages, account management, shopping cart, order placement, VNPay and MoMo test payments, social registration, and an admin dashboard.",
    thumbnail: projectArtwork("FIGURE SHOP", "#6b38d4", "web"),
    images: [
      projectImage("FIGURE SHOP", "#e9ddff", "#6b38d4", "web"),
      projectImage("SHOP FLOW", "#ffd9df", "#b41f53", "web"),
    ],
    techStack: ["Laravel", "MySQL", "Ajax", "VNPay", "MoMo"],
    archive: {
      number: "06",
      category: "Full Stack",
      buttonLabel: "View Repo",
      tone: "purple",
      thumbnailBackground: "#6b38d4",
    },
    detail: {
      levelLabel: "Level: Laravel E-Commerce",
      overviewTitle: "Operational Overview",
      overviewParagraphs: [
        "Figure Shop is a Laravel-based e-commerce website focused on order workflows, customer account flows, and admin management.",
        "The system includes authentication, authorization, CRUD operations, user management, account management, shopping cart, order placement, VNPay and MoMo test payments, and registration through Facebook or Google.",
      ],
      specsTitle: "Tech Blueprints",
      loadoutTitle: "Loadout",
      missionTitle: "Operational Log",
      featuresTitle: "Core Features",
      statusLabel: "Status: Published",
      stickerLabel: "Laravel",
      specs: [
        {
          title: "Laravel",
          description: "Backend development and business logic handling.",
          order: 1,
        },
        {
          title: "MySQL",
          description: "Relational database for structured data storage.",
          order: 2,
        },
        {
          title: "Ajax",
          description: "Asynchronous data handling and page updates.",
          order: 3,
        },
        {
          title: "VNPay + MoMo",
          description: "Payment integration in a test environment.",
          order: 4,
        },
      ],
      loadout: [
        {
          title: "Ordering System",
          description: "Cart, checkout, order placement, and order management.",
          order: 1,
        },
        {
          title: "Customer Accounts",
          description:
            "Authentication, account management, and customer pages.",
          order: 2,
        },
        {
          title: "Admin Dashboard",
          description: "Management surface for users, orders, and shop data.",
          order: 3,
        },
      ],
      missionLog: ["Repository: https://github.com/thanhbui27/web-figure"],
      coreFeatures: [
        {
          title: "Payment integration",
          description: "VNPay and MoMo checkout in a test environment.",
          order: 1,
        },
        {
          title: "Ajax updates",
          description: "Smooth async data handling for dynamic shop pages.",
          order: 2,
        },
        {
          title: "Laravel backend",
          description: "Business logic and management workflows.",
          order: 3,
        },
      ],
    },
    repositoryLinks: [
      {
        label: "Repository",
        href: "https://github.com/thanhbui27/web-figure",
        order: 1,
      },
    ],
    githubUrl: "https://github.com/thanhbui27/web-figure",
    featured: true,
    status: "published",
    order: 6,
  },
  {
    id: "account-selling",
    slug: "account-selling-website",
    title: "Account Selling Website",
    type: "web",
    shortDescription:
      "A PHP MVC personal project for account selling, sign-up/login, scratch-card exchange, QR direct payment, CRUD, orders, users, and admin management.",
    description:
      "Account Selling Website is a personal PHP MVC project built to deepen understanding of MVC architecture and object-oriented programming. It includes login, sign-up, scratch-card exchange, QR direct payment, authorization, authentication, CRUD operations, order management, user management, and an admin dashboard.",
    thumbnail: projectArtwork("SELL ACC", "#785a00", "web"),
    images: [
      projectImage("SELL ACC", "#ffdf9b", "#785a00", "web"),
      projectImage("MVC CORE", "#ffd9df", "#b41f53", "pc"),
    ],
    techStack: ["PHP", "Composer", "PDO", "Apache", "MVC", "OOP"],
    archive: {
      number: "07",
      category: "Backend",
      buttonLabel: "View Repo",
      tone: "yellow",
      thumbnailBackground: "#785a00",
    },
    detail: {
      levelLabel: "Level: PHP MVC",
      overviewTitle: "Operational Overview",
      overviewParagraphs: [
        "This personal project was developed to gain a deeper understanding of the MVC design pattern and object-oriented programming in PHP.",
        "The project integrates course-based PHP concepts into a reusable foundational MVC structure and covers routing, database handling with PDO, regular expression usage, authentication, CRUD operations, order management, user management, and an admin dashboard.",
      ],
      specsTitle: "Tech Blueprints",
      loadoutTitle: "Loadout",
      missionTitle: "Operational Log",
      featuresTitle: "Core Features",
      statusLabel: "Status: Personal Project",
      stickerLabel: "MVC",
      specs: [
        {
          title: "PHP",
          description: "Core language for implementing the MVC pattern.",
          order: 1,
        },
        {
          title: "Composer",
          description: "Dependency management for PHP.",
          order: 2,
        },
        {
          title: "PDO",
          description: "Database connections and operations.",
          order: 3,
        },
        {
          title: "Apache",
          description: "Web server for running the application.",
          order: 4,
        },
      ],
      loadout: [
        {
          title: "Account Marketplace",
          description:
            "Login, sign-up, account selling, and user management flows.",
          order: 1,
        },
        {
          title: "Payment Tools",
          description:
            "Scratch-card exchange and QR direct payment integration.",
          order: 2,
        },
        {
          title: "Admin Dashboard",
          description: "CRUD operations, order management, and admin controls.",
          order: 3,
        },
      ],
      missionLog: [
        "Repository: https://github.com/thanhbui27/website_sell_acc",
      ],
      coreFeatures: [
        {
          title: "MVC foundation",
          description: "Reusable project structure for future PHP projects.",
          order: 1,
        },
        {
          title: "PDO database layer",
          description: "Database handling with PHP Data Objects.",
          order: 2,
        },
        {
          title: "Auth and admin",
          description:
            "Authentication, authorization, users, orders, and admin workflows.",
          order: 3,
        },
      ],
    },
    repositoryLinks: [
      {
        label: "Repository",
        href: "https://github.com/thanhbui27/website_sell_acc",
        order: 1,
      },
    ],
    githubUrl: "https://github.com/thanhbui27/website_sell_acc",
    featured: true,
    status: "published",
    order: 7,
  },
  {
    id: "prop-hunt",
    slug: "prop-hunt",
    title: "Prop Hunt",
    type: "game",
    shortDescription:
      "A 3D mobile hide-and-seek game built in Cocos Creator with TypeScript, featuring AI that disguises as props, procedural map generation, a data-driven level system, and a custom UI framework.",
    description:
      "Prop Hunt is a casual 3D top-down mobile game where the player roams a procedurally generated map with a virtual joystick to find and smash AI hiders disguised as everyday props (boxes, bushes, rocks, crates). Each level has a limited number of AI and smash charges: hit a disguised AI to score, but waste a charge if you smash a real prop. The project includes deterministic seeded map generation, finite state machines for both game flow and AI behavior, object pooling, raycast-based hit detection, a 20-level handcrafted JSON config with infinite procedural fallback, progress persistence, and a custom popup-based UI system.",
    thumbnail: LogoSmar.src,
    images: [
      projectImage("PROP HUNT", "#1f6f43", "#9be15d", "game"),
      projectImage("HIDE & SEEK", "#14532d", "#34d399", "game"),
    ],
    techStack: [
      "Cocos Creator 3.8",
      "TypeScript",
      "3D",
      "Procedural Generation",
      "State Machine",
      "Object Pooling",
    ],
    archive: {
      number: "04",
      category: "Mobile 3D Game",
      buttonLabel: "View Details",
      tone: "yellow",
      thumbnailBackground: "#1f6f43",
    },
    detail: {
      levelLabel: "Level: 3D Casual Hide & Seek",
      overviewTitle: "Operational Overview",
      overviewParagraphs: [
        "Prop Hunt is a 3D top-down mobile game built with Cocos Creator 3.8 and TypeScript, set in procedurally generated outdoor maps.",
        "The project includes virtual joystick movement, smooth follow camera, AI hiders that disguise themselves as props, a smash-and-reveal mechanic, HUD elements, a data-driven level system, and a custom UI framework with animated popups.",
      ],
      specsTitle: "Tech Blueprints",
      loadoutTitle: "Loadout",
      missionTitle: "Development Log",
      featuresTitle: "Core Features",
      statusLabel: "Status: Personal Project",
      stickerLabel: "Casual",
      specs: [
        {
          title: "Cocos Creator + TypeScript",
          description: "Component-based gameplay, scene flow, and core logic.",
          order: 1,
        },
        {
          title: "Seeded Procedural Generation",
          description:
            "Deterministic map layout from a seed using an LCG random generator.",
          order: 2,
        },
        {
          title: "Finite State Machines",
          description:
            "Game flow (IDLE/PLAYING/WIN/LOSE) and per-AI hider states.",
          order: 3,
        },
        {
          title: "Object Pooling",
          description:
            "Reusable prop nodes to reduce instantiate/destroy overhead.",
          order: 4,
        },
      ],
      loadout: [
        {
          title: "AI Hider System",
          description:
            "AI runs to a hide spot, transforms into a prop, and fools the player.",
          order: 1,
        },
        {
          title: "Smash Mechanic",
          description:
            "Nearest-prop scanning and raycast hit detection to reveal disguised AI.",
          order: 2,
        },
        {
          title: "Data-Driven Levels",
          description:
            "20 handcrafted JSON levels plus an infinite procedural level formula.",
          order: 3,
        },
      ],
      missionLog: [
        "Built a procedural 3D map generator with deterministic seeded random.",
        "Implemented AI hiders with a state machine and seeded hide-spot selection.",
        "Created the smash-and-reveal mechanic with object pooling and raycast detection.",
        "Developed a custom UI framework with animated popups and progress persistence.",
      ],
      coreFeatures: [
        {
          title: "AI prop disguise",
          description: "AI hiders transform into props and blend into the map.",
          order: 1,
        },
        {
          title: "Procedural maps",
          description:
            "Seeded random generation for reproducible, varied levels.",
          order: 2,
        },
        {
          title: "Level progression",
          description:
            "Handcrafted and auto-generated levels with localStorage save.",
          order: 3,
        },
      ],
    },
    // CV mentions "Link Video: Drive"; paste the actual Drive video URL here when available.
    githubUrl: "https://gitlab.com/bthanhtek/hideandsmash",
    storeLinks: [
      {
        label: "Play on Android",
        href: "https://drive.google.com/file/d/1AVukO-vCHyyhvaycbH5Tf75CVhy2WuJM/view",
        platform: "googlePlay",
        order: 1,
      },
    ],
    videoDemoUrl: "",
    featured: true,
    status: "published",
    order: 8,
  },
  {
    id: "tightrope-buddies",
    slug: "tightrope-buddies",
    title: "Tightrope Buddies",
    type: "game",
    shortDescription:
      "A 3D endless tightrope-balancing mobile game built in Cocos Creator with TypeScript, featuring accelerometer tilt controls, physics-driven obstacles, a dynamic weather system, an endless recycled map, and a custom popup UI framework.",
    description:
      "Tightrope Buddies is a 3D mobile balancing game where the player auto-walks forward along a tightrope and tilts the device to stay balanced. Lean too far and you fall. Along the way the player jumps over and dodges obstacles (static birds, diving birds, and physics-thrown falling items of varying weight), each of which can knock the character into a timed balance challenge. A dynamic weather system (sunny, rain, wind) changes movement speed and pushes the player with wind gusts. The world is an endlessly recycled set of map chunks decorated with randomized props, and progress is measured by distance traveled with a persisted best score.",
    thumbnail: LogoTig.src,
    images: [
      projectImage("TIGHTROPE BUDDIES", "#1f6f43", "#9be15d", "game"),
      projectImage("KEEP YOUR BALANCE", "#14532d", "#34d399", "game"),
    ],
    techStack: [
      "Cocos Creator 3.6",
      "TypeScript",
      "3D",
      "Accelerometer Controls",
      "Physics & Collisions",
      "Object Pooling",
    ],
    archive: {
      number: "04",
      category: "Mobile 3D Game",
      buttonLabel: "View Details",
      tone: "yellow",
      thumbnailBackground: "#1f6f43",
    },
    detail: {
      levelLabel: "Level: 3D Endless Balancer",
      overviewTitle: "Operational Overview",
      overviewParagraphs: [
        "Tightrope Buddies is a 3D mobile game built with Cocos Creator 3.6 and TypeScript, where the player walks an endless tightrope and tilts the device to keep balance.",
        "The project includes accelerometer tilt control with a mouse fallback, a smooth follow camera, a jump arc with cooldown, an HP and balance-timer system, physics-driven obstacles, a dynamic weather system, an endlessly recycled decorated map, and a custom UI framework with animated popups.",
      ],
      specsTitle: "Tech Blueprints",
      loadoutTitle: "Loadout",
      missionTitle: "Development Log",
      featuresTitle: "Core Features",
      statusLabel: "Status: Personal Project",
      stickerLabel: "Casual",
      specs: [
        {
          title: "Cocos Creator + TypeScript",
          description: "Component-based gameplay, scene flow, and core logic.",
          order: 1,
        },
        {
          title: "Accelerometer Tilt Control",
          description:
            "Device-motion input drives lean and balance, with a mouse fallback for browser play.",
          order: 2,
        },
        {
          title: "State-Driven Player",
          description:
            "Moving, balancing, jumping, and falling states with HP regen, damage, and a balance timer.",
          order: 3,
        },
        {
          title: "Object Pooling",
          description:
            "Endless map built from recycled chunks plus despawned obstacles to cut instantiate/destroy overhead.",
          order: 4,
        },
      ],
      loadout: [
        {
          title: "Physics Obstacle System",
          description:
            "Lane-based birds and projectile-thrown falling items use collision events to trigger a timed balance challenge.",
          order: 1,
        },
        {
          title: "Dynamic Weather",
          description:
            "Sunny, rain, and wind cycle on a timer, changing movement speed and applying random wind gusts.",
          order: 2,
        },
        {
          title: "Custom UI Framework",
          description:
            "Prefab-registry popup manager with lazy loading, animated start/pause popups, a paginated scroll view, and loading-scene transitions.",
          order: 3,
        },
      ],
      missionLog: [
        "Built accelerometer tilt balancing with a lean/fall model and a timed balance-recovery challenge.",
        "Implemented physics-driven obstacles, including projectile-thrown falling items and lane-based birds.",
        "Created an endless recycled map with randomized decoration and a dynamic weather system.",
        "Developed a custom popup UI framework with a character shop and localStorage persistence.",
      ],
      coreFeatures: [
        {
          title: "Tilt-to-balance",
          description:
            "Accelerometer-driven lean with a fall threshold and a recovery balance challenge.",
          order: 1,
        },
        {
          title: "Endless world",
          description:
            "Recycled map chunks with randomized decor and difficulty that scales with distance.",
          order: 2,
        },
        {
          title: "Progress & cosmetics",
          description:
            "Best-distance tracking, selectable characters, and audio settings saved to localStorage.",
          order: 3,
        },
      ],
    },
    // TODO: replace with the actual TightropeBuddies repo URL (the hideandsmash link was Prop Hunt's).
    githubUrl: "https://gitlab.com/bthanhtek/tightrope-buddies",
    // TODO: add the real Android/Drive build link for this project if one exists.
    storeLinks: [
      {
        label: "Play on Android",
        href: "https://drive.google.com/file/d/1ZR3c4hxD5zaTc7DyRWLLbmSaD8bF47fI/view?usp=drive_link",
        platform: "googlePlay",
        order: 1,
      },
    ],
    videoDemoUrl: "",
    featured: true,
    status: "published",
    order: 9,
  },
  {
    id: "impact-arena",
    slug: "impact-arena",
    title: "Impact Arena",
    type: "game",
    shortDescription:
      "A 3D physics-based slingshot defense game built in Cocos Creator with TypeScript, where you fling charged projectiles to knock waves of kamikaze enemies into death pits across 20 data-driven levels.",
    description:
      "Impact Arena is a 3D casual mobile game where the player defends a fixed position by dragging to aim and charge a slingshot, then releasing to launch spinning physics projectiles. Incoming 'kamikaze' enemies (small, medium, and boss tiers) chase the player and explode with knockback on contact, so the player must time shots to knock them off the arena into death pits before they connect. The project features three projectile types with distinct speed and impact force, a randomized 5-slot ammo queue, wave-based enemy spawning from cone volumes, 20 JSON-configured levels with localStorage progress, a character selection shop, a custom prefab-driven popup UI framework, and a singleton audio manager.",
    thumbnail: LogoImpact.src,

    images: [
      projectImage("IMPACT ARENA", "#1f6f43", "#9be15d", "game"),
      projectImage("SLINGSHOT DEFENSE", "#14532d", "#34d399", "game"),
    ],
    techStack: [
      "Cocos Creator 3.6",
      "TypeScript",
      "3D",
      "Physics / RigidBody",
      "State Machine",
      "Data-Driven Levels",
    ],
    archive: {
      number: "04",
      category: "Mobile 3D Game",
      buttonLabel: "View Details",
      tone: "yellow",
      thumbnailBackground: "#1f6f43",
    },
    detail: {
      levelLabel: "Level: 3D Casual Physics Defense",
      overviewTitle: "Operational Overview",
      overviewParagraphs: [
        "Impact Arena is a 3D casual mobile game built with Cocos Creator 3.6 and TypeScript, centered on a drag-to-aim slingshot mechanic and rigid-body physics.",
        "The player charges and launches spinning projectiles to knock waves of chasing kamikaze enemies off the arena into death pits, across 20 data-driven levels with persistent progress, a character shop, and a custom popup-based UI framework.",
      ],
      specsTitle: "Tech Blueprints",
      loadoutTitle: "Loadout",
      missionTitle: "Development Log",
      featuresTitle: "Core Features",
      statusLabel: "Status: Personal Project",
      stickerLabel: "Casual",
      specs: [
        {
          title: "Cocos Creator + TypeScript",
          description: "Component-based gameplay, scene flow, and core logic.",
          order: 1,
        },
        {
          title: "Rigid-Body Physics",
          description:
            "Projectile velocity, impulse knockback, custom fall gravity, and raycast ground checks.",
          order: 2,
        },
        {
          title: "Custom UI Framework",
          description:
            "Singleton prefab-based popup manager with loading, win/lose, pause, shop, and level-select screens.",
          order: 3,
        },
        {
          title: "Data-Driven Levels",
          description:
            "20 JSON level configs loaded and sorted at runtime, with localStorage progress persistence.",
          order: 4,
        },
      ],
      loadout: [
        {
          title: "Slingshot Shooting",
          description:
            "Drag to aim and charge, release to fire a spinning projectile whose speed scales with draw distance.",
          order: 1,
        },
        {
          title: "Kamikaze Enemy AI",
          description:
            "Enemies chase the player and explode with knockback; defeated by knocking them into death pits.",
          order: 2,
        },
        {
          title: "Ammo Queue + Shop",
          description:
            "Randomized 5-slot bullet queue across three projectile tiers, plus a character selection shop.",
          order: 3,
        },
      ],
      missionLog: [
        "Built a drag-to-aim slingshot system with charge-based projectile speed and rotating bullet visuals.",
        "Implemented kamikaze enemies with chase, explode-and-knockback behavior, and raycast ground detection.",
        "Created wave-based enemy spawning from cone volumes with a data-driven 20-level JSON system.",
        "Developed a custom prefab-driven popup UI framework with scene preloading and localStorage progress.",
      ],
      coreFeatures: [
        {
          title: "Physics knockback combat",
          description:
            "Knock chasing enemies off the arena into death pits using projectile impulse.",
          order: 1,
        },
        {
          title: "Wave-based levels",
          description:
            "Small, medium, and boss enemy tiers spawned in shuffled waves per level config.",
          order: 2,
        },
        {
          title: "Level progression",
          description:
            "20 JSON-defined levels with unlock tracking and localStorage save.",
          order: 3,
        },
      ],
    },
    githubUrl: "https://gitlab.com/bthanhtek/impact-arena",
    storeLinks: [
      {
        label: "Play on Android",
        href: "https://drive.google.com/file/d/1xplpXakjPUApwTNp6ct8lWfkST_xAZhG/view?usp=drive_link",
        platform: "googlePlay",
        order: 1,
      },
    ],
    videoDemoUrl: "",
    featured: true,
    status: "published",
    order: 10,
  },
  {
    id: "legacy-runner-game",
    slug: "legacy-runner-game",
    title: "Legacy Runner Game",
    type: "game",
    shortDescription:
      "A Unity-based runner combat game where the player runs on a straight path, collects power items, moves vertically to avoid obstacles, then enters an end-game flying attack phase to break walls and fight a boss.",
    description:
      "Legacy Runner Game is a casual runner-combat prototype built with Unity and C#. The player automatically runs forward on a straight path, collects items to increase power, and moves up or down to avoid obstacles and prepare for the final stage. At the end of the level, the player switches into a flying attack sequence, breaking through multiple walls based on accumulated power before entering a boss fight. The project focuses on simple runner controls, item collection, power progression, obstacle interaction, wall-breaking logic, boss phase transition, UI feedback, and stable gameplay flow.",
    thumbnail: LogoLegacy.src,
    images: [
      projectImage("LEGACY RUNNER", "#3b2f2f", "#facc15", "game"),
      projectImage("WALL BREAK BOSS FIGHT", "#1f2937", "#f97316", "game"),
    ],
    techStack: [
      "Unity",
      "C#",
      "3D Runner",
      "Gameplay Programming",
      "Rigidbody / Collider",
      "State Machine",
      "UI System",
    ],
    archive: {
      number: "05",
      category: "Unity Runner Game",
      buttonLabel: "View Details",
      tone: "pink",
      thumbnailBackground: "#3b2f2f",
    },
    detail: {
      levelLabel: "Level: 3D Casual Runner Combat",
      overviewTitle: "Operational Overview",
      overviewParagraphs: [
        "Legacy Runner Game is a Unity-based runner combat prototype focused on auto-running movement, item collection, power scaling, and end-game combat progression.",
        "The player runs on a straight path, collects power items, avoids obstacles through vertical movement, then enters a flying attack phase to destroy walls and continue into a boss battle.",
      ],
      specsTitle: "Tech Blueprints",
      loadoutTitle: "Loadout",
      missionTitle: "Development Log",
      featuresTitle: "Core Features",
      statusLabel: "Status: Personal Project",
      stickerLabel: "Runner",
      specs: [
        {
          title: "Unity + C#",
          description:
            "Implemented core gameplay logic, player control, scene flow, and game state handling.",
          order: 1,
        },
        {
          title: "Runner Gameplay System",
          description:
            "Auto-running movement with vertical lane-style control, item collection, and obstacle interaction.",
          order: 2,
        },
        {
          title: "Power Progression",
          description:
            "Collected items increase player power and influence the final wall-breaking sequence.",
          order: 3,
        },
        {
          title: "Game State Flow",
          description:
            "Managed transitions between running, flying attack, wall-breaking, and boss fight phases.",
          order: 4,
        },
      ],
      loadout: [
        {
          title: "Auto-Runner Movement",
          description:
            "Player automatically runs forward while moving vertically to collect items and avoid obstacles.",
          order: 1,
        },
        {
          title: "Wall-Breaking Sequence",
          description:
            "At the end of the level, the player flies forward and breaks multiple walls based on accumulated power.",
          order: 2,
        },
        {
          title: "Boss Fight Phase",
          description:
            "After clearing the wall sequence, the player transitions into a simple boss battle stage.",
          order: 3,
        },
      ],
      missionLog: [
        "Built an auto-running player controller with vertical movement and smooth gameplay flow.",
        "Implemented item collection, power accumulation, obstacle interaction, and progress feedback.",
        "Created an end-game flying attack sequence where the player breaks through multiple walls.",
        "Developed basic boss fight logic and state transitions between runner, wall-breaking, and combat phases.",
        "Added UI feedback for power level, player progress, and stage transitions.",
      ],
      coreFeatures: [
        {
          title: "Item-based power scaling",
          description:
            "Collect items during the run to increase power and improve final-stage performance.",
          order: 1,
        },
        {
          title: "End-game wall breaking",
          description:
            "Player flies forward and destroys sequential walls before entering the boss phase.",
          order: 2,
        },
        {
          title: "Boss battle transition",
          description:
            "Game flow changes from runner mode into a simple combat encounter after the wall sequence.",
          order: 3,
        },
      ],
    },
    githubUrl: "",
    storeLinks: [
      {
        label: "Link Down Game APK",
        href: "https://play.google.com/store/apps/details?id=jp.bap.game.legacyrunner&hl=en",
        platform: "googlePlay",
        order: 1,
      },
    ],
    videoDemoUrl: "",
    featured: true,
    status: "published",
    order: 11,
  },
  {
    id: "draft-admin",
    slug: "draft-admin",
    title: "Draft Admin",
    type: "web",
    shortDescription:
      "A draft project kept private to prove unpublished records are filtered before rendering.",
    description: "This draft project is not part of the public portfolio.",
    thumbnail: projectArtwork("DRAFT", "#999999", "web"),
    images: [],
    techStack: ["Next.js", "Prisma"],
    archive: {
      number: "99",
      category: "Draft",
      buttonLabel: "Hidden",
      tone: "black",
      thumbnailBackground: "#999999",
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
      coreFeatures: [],
    },
    featured: false,
    status: "draft",
    order: 99,
  },
];
