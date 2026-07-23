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
