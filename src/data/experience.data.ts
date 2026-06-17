import type { Experience, ExperiencePageContent } from "@/types/portfolio";

const svgData = (svg: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

const neonPlatformImage = svgData(`
  <svg width="900" height="330" viewBox="0 0 900 330" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#16134a"/>
        <stop offset="0.45" stop-color="#3a135c"/>
        <stop offset="1" stop-color="#ff4fa3"/>
      </linearGradient>
      <linearGradient id="top" x1="0" x2="1">
        <stop offset="0" stop-color="#2ef0ff"/>
        <stop offset="1" stop-color="#ff5b8a"/>
      </linearGradient>
    </defs>
    <rect width="900" height="330" fill="url(#bg)"/>
    <g opacity=".35" stroke="#8ff3d3" stroke-width="2">
      <path d="M0 250h900M0 210h900M0 170h900M0 130h900"/>
      <path d="M80 0v330M180 0v330M280 0v330M380 0v330M480 0v330M580 0v330M680 0v330M780 0v330"/>
    </g>
    <polygon points="160,230 470,130 760,225 450,315" fill="#261052" stroke="#22d3ee" stroke-width="10"/>
    <polygon points="248,190 470,118 660,188 444,258" fill="url(#top)" stroke="#120617" stroke-width="8"/>
    <polygon points="250,190 448,246 448,294 162,228" fill="#3b0d4b" stroke="#ff5b8a" stroke-width="8"/>
    <polygon points="448,246 662,188 760,226 448,314" fill="#290a3f" stroke="#6b38d4" stroke-width="8"/>
    <rect x="360" y="102" width="180" height="42" fill="#ffdf9b" stroke="#050505" stroke-width="6"/>
    <rect x="398" y="62" width="108" height="42" fill="#ff5b8a" stroke="#050505" stroke-width="6"/>
    <circle cx="190" cy="88" r="34" fill="#8ff3d3" opacity=".7"/>
    <circle cx="700" cy="78" r="46" fill="#ff5b8a" opacity=".55"/>
  </svg>
`);

export const experience: Experience[] = [
  {
    id: "unity-developer",
    role: "Unity Developer",
    company: "BAP",
    period: "03/2025 - Present",
    description: "",
    highlights: [
      "Developed and maintained Unity-based mobile applications and game features using C#.",
      "Implemented and optimized UI systems, including dynamic layouts and responsive elements.",
      "Integrated third-party SDKs such as Agora livestream/video call, Firebase push notifications, Tapjoy ads monetization, and LevelPlay ads.",
      "Debugged and resolved runtime issues such as NullReferenceException, async/coroutine bugs, and platform-specific problems.",
      "Improved application performance by optimizing UI rendering, asset usage, and runtime logic.",
      "Collaborated with backend systems to handle API data and synchronize application state.",
    ],
    badge: "Current",
    yearLabel: "25'",
    techStack: ["Unity", "C#", "Agora", "Firebase", "Tapjoy", "LevelPlay"],
    order: 1,
  },
  {
    id: "freelance-web-developer",
    role: "Freelance Web Developer",
    company: "Freelance",
    period: "12/2023 - 03/2025",
    description: "",
    highlights: [
      "Worked independently on frontend and backend projects, providing web development solutions for clients.",
      "Utilized React, TypeScript, and Node.js to build and deploy applications.",
      "Continuously learned and adapted to new programming languages and technologies to enhance development skills.",
    ],
    yearLabel: "23'",
    techStack: ["React", "TypeScript", "Node.js", "java"],
    order: 2,
  },
  {
    id: "frontend-developer-pureative",
    role: "Frontend Developer",
    company: "Pureative Company",
    period: "09/2022 - 07/2023",
    description: "Frontend Training: HTML, CSS, JS, TS, React.",
    highlights: [
      "Developed and optimized UI components using React, TypeScript, and Ant Design.",
      "Integrated REST APIs into the frontend, improving data visualization and interactivity.",
      "Worked with designers in Figma to ensure responsive and user-friendly UI/UX.",
      "Optimized frontend performance, reducing loading time by 40% using lazy loading and code splitting.",
    ],
    yearLabel: "22'",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Ant Design",
      "Figma",
    ],
    order: 3,
  },
];

export const experiencePageContent: ExperiencePageContent = {
  newspaper: {
    issue: "Volume 1. Issue 404",
    title: "The Daily Grind",
    subtitle:
      "Exclusive report: professional history uncovered & academic pursuits revealed",
  },
  labels: {
    experience: "Experience",
    education: "Education",
    current: "Current",
    certifiedSkills: "--- Certified Skills ---",
  },
  education: {
    degree: "Bachelor of Engineering in Information Technology",
    institution:
      "Vietnam-Korea University of Information and Communication Technology (VKU)",
    period: "2020 - 2025",
    description:
      "Graduated with an Engineering degree in Information Technology. Focused on software engineering, web application development, backend systems, databases, and modern development practices. Completed multiple academic and personal projects involving Java, Spring Boot, .NET, React, Unity, and database design.",
    gpa: "GPA: 3.46 / 4.0",
  },
  certificates: [
    // {
    //   id: "advanced-css",
    //   title: "Advanced CSS Architecture",
    //   issuer: "FrontEnd Masters",
    //   year: "2022",
    //   order: 1,
    // },
    // {
    //   id: "creative-webgl",
    //   title: "Creative Coding with WebGL",
    //   issuer: "Awwwards Academy",
    //   year: "2021",
    //   order: 2,
    // },
    // {
    //   id: "accessibility",
    //   title: "Accessibility Design Pro",
    //   issuer: "W3C",
    //   year: "2020",
    //   order: 3,
    // },
  ],
  freelanceCta: {
    eyebrow: "Available for freelance",
    title: "Need a radical redesign?",
  },
};
