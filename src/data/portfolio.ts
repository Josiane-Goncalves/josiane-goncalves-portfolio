export type ProjectVariant = "red" | "blue" | "green" | "amber";

export type ProjectTranslationKey =
  | "wmsControl"
  | "dinoArchive"
  | "secureGate"
  | "goRelay"
  | "opsLogbook"
  | "breachSimulator";

export type Project = {
  id: number;
  translationKey: ProjectTranslationKey;
  variant: ProjectVariant;
  technologies: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    translationKey: "wmsControl",
    technologies: ["REACT", "TYPESCRIPT", "WEBSOCKET"],
    variant: "red",
  },
  {
    id: 2,
    translationKey: "dinoArchive",
    technologies: ["REACT", "NODE.JS", "POSTGRES"],
    variant: "blue",
  },
  {
    id: 3,
    translationKey: "secureGate",
    technologies: ["NESTJS", "JWT", "REDIS"],
    variant: "green",
  },
  {
    id: 4,
    translationKey: "goRelay",
    technologies: ["GO", "CHANNELS", "DOCKER"],
    variant: "blue",
  },
  {
    id: 5,
    translationKey: "opsLogbook",
    technologies: ["REACT", "CHARTS", "API"],
    variant: "amber",
  },
  {
    id: 6,
    translationKey: "breachSimulator",
    technologies: ["K8S", "AZURE", "RABBITMQ"],
    variant: "red",
  },
];

export type SkillTranslationKey =
  | "programming"
  | "systemDesign"
  | "backend"
  | "frontend"
  | "databases"
  | "devops"
  | "problemSolving";

export type Skill = readonly [
  translationKey: SkillTranslationKey,
  value: number,
];

export const skills: Skill[] = [
  ["programming", 90],
  ["systemDesign", 85],
  ["backend", 84],
  ["frontend", 94],
  ["databases", 80],
  ["devops", 76],
  ["problemSolving", 92],
];

export const stack = [
  "TS",
  "JS",
  "REACT",
  "NODE",
  "GO",
  "NEST",
  "POSTGRES",
  "DOCKER",
  "AZURE",
  "GIT",
] as const;

export type Contact = {
  id: string;
  icon: string;
  label: string;
  value: string;
  href: string;
};

export const contacts: Contact[] = [
  {
    id: "email",
    icon: "✉",
    label: "EMAIL",
    value: "caironhenrique60@gmail.com",
    href: "mailto:caironhenrique60@gmail.com",
  },
  {
    id: "linkedin",
    icon: "in",
    label: "LINKEDIN",
    value: "linkedin.com/in/caironhenrique",
    href: "https://www.linkedin.com/in/cairon-henrique-b88375224/",
  },
  {
    id: "github",
    icon: "GH",
    label: "GITHUB",
    value: "github.com/cairon-henrique-60",
    href: "https://github.com/cairon-henrique-60",
  },
  {
    id: "website",
    icon: "◎",
    label: "WEBSITE",
    value: "caironhenrique.dev",
    href: "https://chg-dev-portfolio.vercel.app/",
  },
];

export const experiences = ["pda", "softwareOperations"] as const;

export type PortfolioStat = {
  id: string;
  label: string;
  value: string;
};

export const portfolioStats: PortfolioStat[] = [
  { id: "projects", label: "PROJECTS", value: "06" },
  { id: "years", label: "YEARS EXP.", value: "4+" },
  { id: "stack", label: "TECH STACK", value: "10+" },
  { id: "satisfaction", label: "SATISFACTION", value: "100%" },
];

export type SystemLog = {
  id: string;
  time: string;
  type: string;
  message: string;
};

export const systemLogs: SystemLog[] = [
  {
    id: "initialized",
    time: "20:42",
    type: "SYSTEM",
    message: "Portfolio terminal initialized",
  },
  {
    id: "project-loaded",
    time: "20:43",
    type: "PROJECT",
    message: "WMS Control module loaded",
  },
  {
    id: "skills-operational",
    time: "20:44",
    type: "SKILL",
    message: "React and TypeScript status: operational",
  },
  {
    id: "github-connected",
    time: "20:45",
    type: "NETWORK",
    message: "GitHub connection established",
  },
  {
    id: "developer-available",
    time: "20:46",
    type: "STATUS",
    message: "Developer available for new missions",
  },
];
