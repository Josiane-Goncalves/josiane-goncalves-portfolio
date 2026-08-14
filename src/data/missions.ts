export const missionEvidenceAreas = [
  "requirements",
  "architecture",
  "apis",
  "data",
  "tests",
  "documentation",
  "security",
  "deploy",
] as const;

export type MissionEvidenceArea = (typeof missionEvidenceAreas)[number];
export type MissionTranslationKey = "pulseOps" | "pradoEmDia";

export type MissionEvidence = {
  area: MissionEvidenceArea;
  status: "pending";
};

export type Mission = {
  id: string;
  code: string;
  translationKey: MissionTranslationKey;
  status: "documenting";
  technologies: readonly string[];
  evidence: MissionEvidence[];
};

function createPendingEvidence(): MissionEvidence[] {
  return missionEvidenceAreas.map((area) => ({ area, status: "pending" }));
}

export const missions: Mission[] = [
  {
    id: "pulseops",
    code: "MF-01",
    translationKey: "pulseOps",
    status: "documenting",
    technologies: [],
    evidence: createPendingEvidence(),
  },
  {
    id: "prado-em-dia",
    code: "MF-02",
    translationKey: "pradoEmDia",
    status: "documenting",
    technologies: [],
    evidence: createPendingEvidence(),
  },
];
