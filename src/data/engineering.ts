import { professionalProfile } from "./professional";

export const coreTechnologies = professionalProfile.primaryStack;

export const engineeringAreas = [
  {
    id: "frontend",
    translationKey: "frontend",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vite",
      "React Router",
    ],
    capabilities: [],
  },
  {
    id: "backend",
    translationKey: "backend",
    technologies: ["Node.js"],
    capabilities: ["restApis", "frontendBackendIntegration", "validation"],
  },
  {
    id: "data",
    translationKey: "data",
    technologies: ["PostgreSQL"],
    capabilities: ["dataModeling"],
  },
  {
    id: "engineering",
    translationKey: "engineering",
    technologies: ["Git", "GitHub"],
    capabilities: [
      "requirements",
      "businessRules",
      "technicalDocumentation",
      "componentization",
      "testingFundamentals",
      "tddWhenApplicable",
    ],
  },
  {
    id: "delivery",
    translationKey: "delivery",
    technologies: ["Linux", "npm", "ESLint", "Vercel"],
    capabilities: [],
  },
] as const;

export const systemStatuses = [
  { id: "interface", translationKey: "interface", status: "operational" },
  { id: "languages", translationKey: "languages", status: "operational" },
  { id: "missions", translationKey: "missions", status: "documenting" },
  { id: "evidence", translationKey: "evidence", status: "pending" },
  { id: "visualAsset", translationKey: "visualAsset", status: "pending" },
  { id: "contacts", translationKey: "contacts", status: "operational" },
] as const;

export const aliaWorkflows = [
  { id: "technicalResearch", translationKey: "technicalResearch" },
  { id: "documentation", translationKey: "documentation" },
  { id: "tests", translationKey: "tests" },
  { id: "errorInvestigation", translationKey: "errorInvestigation" },
  { id: "alternativeAnalysis", translationKey: "alternativeAnalysis" },
  { id: "implementation", translationKey: "implementation" },
] as const;
