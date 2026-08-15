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
    id: "cloud",
    translationKey: "cloud",
    technologies: ["AWS", "Linux"],
    capabilities: [],
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
    technologies: ["npm", "ESLint", "Vercel"],
    capabilities: [],
  },
] as const;

export const systemOverview = [
  { id: "interface", translationKey: "interface", valueKey: "ready" },
  { id: "languages", translationKey: "languages", valueKey: "bilingual" },
  { id: "missions", translationKey: "missions", valueKey: "threeProjects" },
  {
    id: "engineering",
    translationKey: "engineering",
    valueKey: "matrixAndLog",
  },
  { id: "character", translationKey: "character", valueKey: "integrated" },
  { id: "contact", translationKey: "contact", valueKey: "available" },
] as const;

export const aliaWorkflows = [
  { id: "technicalResearch", translationKey: "technicalResearch" },
  { id: "documentation", translationKey: "documentation" },
  { id: "tests", translationKey: "tests" },
  { id: "errorInvestigation", translationKey: "errorInvestigation" },
  { id: "alternativeAnalysis", translationKey: "alternativeAnalysis" },
  { id: "implementation", translationKey: "implementation" },
] as const;
