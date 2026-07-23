import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: {
      common: {
        profile: "Perfil",
        projects: "Projetos",
        skills: "Habilidades",
        experience: "Experiência",
        contact: "Contato",
        condition: "Condição",
        portfolioStats: "Estatísticas do portfólio",
        systemLog: "Log do sistema",
        techStack: "Tecnologias",
        status: "Status",
        stable: "Estável",
        health: "Saúde",
        optimal: "Ótimo",
        location: "Localização",
        focus: "Foco",
        availability: "Disponibilidade",
        available: "Disponível para oportunidades",
        yearsExperience: "Anos de experiência",
        autoRotationActive: "Rotação automática ativa",
        rotationPaused: "Rotação pausada",
        selectCategory: "Selecione uma categoria",
        previousProject: "Projeto anterior",
        nextProject: "Próximo projeto",
      },

      profile: {
        role: "Desenvolvedor de Software",
        description:
          "Apaixonado por construir aplicações robustas, escaláveis e eficientes. Focado em código limpo, arquitetura de software e experiências digitais de qualidade.",
        country: "Brasil",
        focus: "Full Stack",
      },

      stats: {
        projects: "Projetos",
        years: "Anos de experiência",
        technologies: "Tecnologias",
        satisfaction: "Satisfação",
      },

      skills: {
        programming: "Programação",
        systemDesign: "Arquitetura de sistemas",
        backend: "Backend",
        frontend: "Frontend",
        databases: "Bancos de dados",
        devops: "DevOps",
        problemSolving: "Resolução de problemas",
      },

      experience: {
        items: {
          pda: {
            period: "2022 — ATUALMENTE",
            role: "DESENVOLVEDOR FULLSTACK SÊNIOR",
            company: "PDA SOLUÇÕES",
            description:
              "Desenvolvimento de aplicações React e TypeScript, Nest.JS, CI/CD, WebSockets, integrações, soluções de impressão, sistemas WMS e plataformas corporativas.",
          },

          softwareOperations: {
            period: "2020 — 2022",
            role: "DESENVOLVEDOR FULL STACK",
            company: "FREELANCER",
            description:
              "Desenvolvimento de APIs, dashboards, automações, autenticação e serviços internos.",
          },
        },
      },

      projects: {
        wmsControl: {
          title: "WMS Control",
          status: "Status do armazém",
          description:
            "Painel operacional para conferência, impressão, rastreamento e gestão logística.",
        },
        dinoArchive: {
          title: "Dino Archive",
          status: "Ativos protegidos",
          description:
            "Aplicação full stack para catálogo e visualização de registros históricos.",
        },
        secureGate: {
          title: "Secure Gate",
          status: "Acesso permitido",
          description:
            "Serviço de autenticação com permissões, refresh token e trilha de auditoria.",
        },
        goRelay: {
          title: "Go Relay",
          status: "Canal online",
          description:
            "Serviço concorrente em Go para processamento e distribuição de mensagens.",
        },
        opsLogbook: {
          title: "Ops Logbook",
          status: "Registro de missão",
          description:
            "Painel interno para acompanhamento de tarefas, incidentes e indicadores.",
        },
        breachSimulator: {
          title: "Breach Simulator",
          status: "Falha de contenção",
          description:
            "Laboratório de arquitetura, segurança e observabilidade para microsserviços.",
        },
      },
    },
  },

  en: {
    translation: {
      common: {
        profile: "Profile",
        projects: "Projects",
        skills: "Skills",
        experience: "Experience",
        contact: "Contact",
        condition: "Condition",
        portfolioStats: "Portfolio Stats",
        systemLog: "System Log",
        techStack: "Tech Stack",
        status: "Status",
        stable: "Stable",
        health: "Health",
        optimal: "Optimal",
        location: "Location",
        focus: "Focus",
        availability: "Availability",
        available: "Open to opportunities",
        yearsExperience: "Years of experience",
        autoRotationActive: "Auto rotation active",
        rotationPaused: "Rotation paused",
        selectCategory: "Select a category",
        previousProject: "Previous project",
        nextProject: "Next project",
      },

      profile: {
        role: "Software Developer",
        description:
          "Passionate about building robust, scalable and efficient applications. Focused on clean code, software architecture and high-quality digital experiences.",
        country: "Brazil",
        focus: "Full Stack",
      },

      stats: {
        projects: "Projects",
        years: "Years of experience",
        technologies: "Technologies",
        satisfaction: "Satisfaction",
      },

      skills: {
        programming: "Programming",
        systemDesign: "System Design",
        backend: "Backend",
        frontend: "Frontend",
        databases: "Databases",
        devops: "DevOps",
        problemSolving: "Problem Solving",
      },

      experience: {
        items: {
          pda: {
            period: "2022 — PRESENT",
            role: "SENIOR FULLSTACK DEVELOPER",
            company: "PDA SOLUÇÕES",
            description:
              "Development of React and TypeScript applications, Nesjt.JS, CI/CD, WebSockets, integrations, printing solutions, WMS systems and enterprise platforms.",
          },

          softwareOperations: {
            period: "2020 — 2022",
            role: "FREELANCER",
            company: "SOFTWARE OPERATIONS",
            description:
              "Development of APIs, dashboards, automations, authentication and internal services.",
          },
        },
      },

      projects: {
        wmsControl: {
          title: "WMS Control",
          status: "Warehouse status",
          description:
            "Operational dashboard for checking, printing, tracking and logistics management.",
        },
        dinoArchive: {
          title: "Dino Archive",
          status: "Assets secured",
          description:
            "Full-stack application for cataloging and viewing historical records.",
        },
        secureGate: {
          title: "Secure Gate",
          status: "Access granted",
          description:
            "Authentication service with permissions, refresh tokens and audit trails.",
        },
        goRelay: {
          title: "Go Relay",
          status: "Channel online",
          description:
            "Concurrent Go service for message processing and distribution.",
        },
        opsLogbook: {
          title: "Ops Logbook",
          status: "Mission log",
          description:
            "Internal dashboard for tracking tasks, incidents and operational metrics.",
        },
        breachSimulator: {
          title: "Breach Simulator",
          status: "Containment breach",
          description:
            "Architecture, security and observability laboratory for microservices.",
        },
      },
    },
  },
};

const savedLanguage = localStorage.getItem("portfolio-language");

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage ?? "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
