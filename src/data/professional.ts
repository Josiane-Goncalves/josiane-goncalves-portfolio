export type ProfessionalProfile = {
  fullName: string;
  location: string;
  primaryStack: readonly string[];
  resumeUrl?: string;
};

export const professionalProfile: ProfessionalProfile = {
  fullName: "JOSIANE GONÇALVES",
  location: "Uberlândia // MG // Brasil",
  primaryStack: ["React", "TypeScript", "Node.js", "APIs", "PostgreSQL"],
  resumeUrl: "/cv/josiane-goncalves-cv.pdf",
};

export const contactChannels = [
  {
    id: "email",
    label: "Email",
    value: "josypropy@gmail.com",
    href: "mailto:josypropy@gmail.com",
    external: false,
  },
  {
    id: "github",
    label: "GitHub",
    value: "Josiane-Goncalves",
    href: "https://github.com/Josiane-Goncalves",
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "josianecgoncalves",
    href: "https://www.linkedin.com/in/josianecgoncalves",
    external: true,
  },
] as const;

export const professionalExperiences = [
  {
    id: "spdm",
    organization:
      "SPDM — Associação Paulista para o Desenvolvimento da Medicina",
    translationKey: "spdm",
    skills: [
      "technicalSupport",
      "failureAnalysis",
      "userTraining",
      "records",
      "movementControl",
      "traceability",
    ],
  },
  {
    id: "umc",
    organization: "Uberlândia Medical Center — UMC",
    translationKey: "umc",
    skills: [
      "corporateSystems",
      "dataAccuracy",
      "sensitiveInformation",
      "organization",
      "multidisciplinaryCommunication",
      "problemSolving",
      "highDemandEnvironment",
    ],
  },
  {
    id: "smr",
    organization: "SMR — Socorro Médico e Resgate",
    translationKey: "smr",
    skills: [
      "criticalDecisionMaking",
      "protocolExecution",
      "rapidAssessment",
      "teamCommunication",
      "safety",
      "prioritization",
    ],
  },
] as const;

export const softSkills = [
  "problemSolving",
  "adaptability",
  "teamwork",
  "communication",
  "proactivity",
  "emotionalIntelligence",
] as const;

export const education = [
  {
    id: "ads-unicv",
    institution: "UniCV",
    translationKey: "ads",
    primary: true,
  },
  {
    id: "nursing",
    institution: "Escola Técnica Santa Edwiges",
    translationKey: "nursing",
    primary: false,
  },
] as const;

export type Credential = {
  id: string;
  type: "certification" | "training";
  name: string;
  issuer?: string;
  credentialId?: string;
  credentialUrl?: string;
};

export const credentials: readonly Credential[] = [
  {
    id: "aws-cloud-practitioner",
    type: "certification",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
  },
  {
    id: "aws-restart",
    type: "training",
    name: "AWS re/Start",
    issuer: "Escola da Nuvem",
  },
  {
    id: "frontend-proz",
    type: "training",
    name: "Formação Front-End",
    issuer: "Proz Educação",
  },
  {
    id: "data-analysis-cisco",
    type: "training",
    name: "Fundamentos de Análise de Dados",
    issuer: "Cisco Networking Academy",
  },
  {
    id: "networks-ada",
    type: "training",
    name: "Redes e Sistemas",
    issuer: "Ada",
  },
  {
    id: "lgpd-health",
    type: "training",
    name: "LGPD Aplicada à Saúde",
  },
];

export const engineeringProcessSteps = [
  "discovery",
  "requirements",
  "businessRules",
  "modeling",
  "implementation",
  "testing",
  "validation",
  "documentation",
  "delivery",
] as const;

export const incrementalCycle = [
  "define",
  "implement",
  "test",
  "validate",
  "refine",
  "nextDelivery",
] as const;

export const tddCycle = ["RED", "GREEN", "REFACTOR"] as const;
