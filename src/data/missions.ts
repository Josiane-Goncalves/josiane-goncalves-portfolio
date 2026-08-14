export const missionStatuses = [
  "documenting",
  "inDevelopment",
  "operational",
  "paused",
  "caseStudy",
  "planned",
] as const;

export const missionSectionKeys = [
  "context",
  "problem",
  "solution",
  "requirements",
  "architecture",
  "frontend",
  "backend",
  "api",
  "database",
  "testing",
  "security",
  "documentation",
  "deployment",
  "challenges",
  "learnings",
] as const;

export type MissionStatus = (typeof missionStatuses)[number];
export type MissionSectionKey = (typeof missionSectionKeys)[number];
export type MissionTranslationKey =
  | "pulseOps"
  | "pradoEmDia"
  | "rideWarsLeague";

export type MissionVersion = {
  id: string;
  technologies: readonly string[];
  translationKey: string;
};

export type Mission = {
  id: string;
  slug: string;
  code: `MISSION ${string}`;
  translationKey: MissionTranslationKey;
  status: MissionStatus;
  technologies: readonly string[];
  sections: readonly MissionSectionKey[];
  versions?: readonly MissionVersion[];
  repositoryUrl?: string;
  liveUrl?: string;
};

export const missions: readonly Mission[] = [
  {
    id: "pulseops",
    slug: "pulseops",
    code: "MISSION 001",
    translationKey: "pulseOps",
    status: "documenting",
    technologies: [],
    sections: ["context", "problem"],
  },
  {
    id: "prado-em-dia",
    slug: "prado-em-dia",
    code: "MISSION 002",
    translationKey: "pradoEmDia",
    status: "documenting",
    technologies: [],
    sections: ["context"],
  },
  {
    id: "ride-wars-league",
    slug: "ride-wars-league",
    code: "MISSION 003",
    translationKey: "rideWarsLeague",
    status: "documenting",
    technologies: [],
    sections: ["context"],
  },
];
