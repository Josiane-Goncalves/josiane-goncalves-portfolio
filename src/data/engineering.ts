export const coreTechnologies = [
  "React",
  "TypeScript",
  "Node.js",
  "APIs",
  "PostgreSQL",
] as const;

export const engineeringTracks = [
  { id: "requirements", translationKey: "requirements", status: "mapping" },
  { id: "architecture", translationKey: "architecture", status: "mapping" },
  { id: "apis", translationKey: "apis", status: "mapping" },
  { id: "data", translationKey: "data", status: "mapping" },
  { id: "tests", translationKey: "tests", status: "mapping" },
  {
    id: "documentation",
    translationKey: "documentation",
    status: "mapping",
  },
  { id: "security", translationKey: "security", status: "mapping" },
  { id: "deploy", translationKey: "deploy", status: "mapping" },
] as const;

export const systemStatuses = [
  { id: "interface", translationKey: "interface", status: "operational" },
  { id: "languages", translationKey: "languages", status: "operational" },
  { id: "missions", translationKey: "missions", status: "documenting" },
  { id: "evidence", translationKey: "evidence", status: "pending" },
  { id: "visualAsset", translationKey: "visualAsset", status: "pending" },
  { id: "contacts", translationKey: "contacts", status: "pending" },
] as const;

export const aliaWorkflows = [
  { id: "requirements", translationKey: "requirements" },
  { id: "architecture", translationKey: "architecture" },
  { id: "tests", translationKey: "tests" },
  { id: "documentation", translationKey: "documentation" },
] as const;

export type EngineeringLogEntry = {
  id: string;
  translationKey: string;
};

export const engineeringLogEntries: EngineeringLogEntry[] = [];

export type Certification = {
  id: string;
  translationKey: string;
};

export const certifications: Certification[] = [];
