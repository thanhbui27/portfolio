import type { Project, ProjectArchiveContent } from "@/types/portfolio";

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
    thumbnail: projectArtwork("BOUNTY HUNTER", "#b41f53", "game"),
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
    thumbnail: projectArtwork("METAHOURSE", "#6b38d4", "game"),
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
