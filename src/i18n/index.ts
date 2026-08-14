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
        goToProject: "Ir para o projeto",
        languageSelector: "Selecionar idioma",
      },

      profile: {
        role: "Desenvolvedora de Software Júnior",
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

      missions: {
        title: "Mission Files",
        index: "Índice de missões",
        selectedMission: "Missão selecionada",
        defined: "definidas",
        engineeringEvidence: "Evidências de engenharia",
        technologies: "Tecnologias",
        technologiesPending: "Tecnologias aguardando confirmação.",
        thirdSlot: "Terceiro projeto a definir",
        status: {
          documenting: "Em documentação",
          pending: "Evidência pendente",
        },
        evidence: {
          requirements: "Requisitos",
          architecture: "Arquitetura",
          apis: "APIs e integrações",
          data: "Banco de dados",
          tests: "Testes e TDD",
          documentation: "Documentação",
          security: "Segurança",
          deploy: "Deploy",
        },
        items: {
          pulseOps: {
            title: "PulseOps",
            summary:
              "Arquivo reservado para a documentação técnica validada do PulseOps. Nenhuma decisão de arquitetura ou resultado será publicado sem confirmação.",
          },
          pradoEmDia: {
            title: "Prado em Dia",
            summary:
              "Arquivo reservado para a documentação técnica validada do Prado em Dia. Requisitos, responsabilidades e evidências ainda serão confirmados.",
          },
        },
      },

      engineering: {
        title: "Engineering Matrix",
        logTitle: "Engineering Log",
        coreTechnologies: "Tecnologias principais",
        coverage: "Áreas de engenharia",
        verificationPending: "Verificação pendente",
        logEmpty:
          "Histórico profissional verificado aguardando conteúdo confirmado.",
        status: {
          mapping: "Evidência em mapeamento",
        },
        tracks: {
          requirements: "Requisitos",
          architecture: "Arquitetura",
          apis: "APIs e integrações",
          data: "Banco de dados",
          tests: "Testes e TDD",
          documentation: "Documentação",
          security: "Segurança",
          deploy: "Deploy",
        },
      },

      systemStatus: {
        title: "System Status",
        status: {
          operational: "Operacional",
          documenting: "Em documentação",
          pending: "Pendente",
        },
        items: {
          interface: "Interface",
          languages: "Idiomas PT/EN",
          missions: "Mission Files",
          evidence: "Evidências técnicas",
          visualAsset: "Asset da personagem",
          contacts: "Canais de contato",
        },
      },

      alia: {
        title: "A.L.I.A.",
        subsystem: "Subsistema de engenharia assistida por IA",
        supportMode: "Apoio supervisionado",
        description:
          "Ferramenta de apoio ao processo de engenharia para organizar análise, alternativas e verificações. Não substitui decisões técnicas nem validação humana.",
        supportAreas: "Áreas de apoio",
        humanReview: "Toda saída requer revisão humana.",
        noAutonomy: "Nenhuma decisão autônoma ou interface de chatbot está ativa.",
        workflows: {
          requirements: "Análise de requisitos",
          architecture: "Exploração de arquitetura",
          tests: "Apoio a testes",
          documentation: "Apoio à documentação",
        },
      },

      certifications: {
        title: "Certifications",
        verificationPending: "Verificação pendente",
        empty:
          "Credenciais verificadas aguardando conteúdo confirmado para publicação.",
      },

      shell: {
        systemHeader: "Cabeçalho do sistema",
        systemInterface: "Interface de operações de software",
        primaryWorkspace: "Interface operacional principal",
        systemModules: "Módulos do sistema",
        primaryNavigation: "Navegação principal",
        mobileNavigation: "Navegação móvel",
        skipToContent: "Pular para o conteúdo",
        commandIndex: "Índice de comando",
        systemOnline: "Sistema online",
        identityBrief: "Identidade",
        operativeRecord: "Registro da operadora",
        coreStack: "Stack principal",
        identitySignature: "Design // Build // Validate",
        location: "Uberlândia // MG",
        operativeName: "Operadora Josiane Gonçalves",
        visualChannel: "Canal visual",
        characterPlaceholder: "Espaço reservado para a personagem de Josiane Gonçalves",
        assetPending: "Asset visual pendente",
        stageReady: "Palco pronto",
        contactHud: "HUD de contatos",
        contactPending: "Canais aguardando validação",
        contactChannels: "Canais de contato",
        curriculum: "Currículo",
        pending: "PENDENTE",
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
        goToProject: "Go to project",
        languageSelector: "Select language",
      },

      profile: {
        role: "Junior Software Developer",
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

      missions: {
        title: "Mission Files",
        index: "Mission index",
        selectedMission: "Selected mission",
        defined: "defined",
        engineeringEvidence: "Engineering evidence",
        technologies: "Technologies",
        technologiesPending: "Technologies awaiting confirmation.",
        thirdSlot: "Third project to be defined",
        status: {
          documenting: "Being documented",
          pending: "Evidence pending",
        },
        evidence: {
          requirements: "Requirements",
          architecture: "Architecture",
          apis: "APIs and integrations",
          data: "Database",
          tests: "Tests and TDD",
          documentation: "Documentation",
          security: "Security",
          deploy: "Deployment",
        },
        items: {
          pulseOps: {
            title: "PulseOps",
            summary:
              "Reserved file for validated PulseOps technical documentation. No architecture decision or outcome will be published without confirmation.",
          },
          pradoEmDia: {
            title: "Prado em Dia",
            summary:
              "Reserved file for validated Prado em Dia technical documentation. Requirements, responsibilities and evidence are still awaiting confirmation.",
          },
        },
      },

      engineering: {
        title: "Engineering Matrix",
        logTitle: "Engineering Log",
        coreTechnologies: "Core technologies",
        coverage: "Engineering areas",
        verificationPending: "Verification pending",
        logEmpty:
          "Verified professional history is awaiting confirmed content.",
        status: {
          mapping: "Evidence mapping in progress",
        },
        tracks: {
          requirements: "Requirements",
          architecture: "Architecture",
          apis: "APIs and integrations",
          data: "Database",
          tests: "Tests and TDD",
          documentation: "Documentation",
          security: "Security",
          deploy: "Deployment",
        },
      },

      systemStatus: {
        title: "System Status",
        status: {
          operational: "Operational",
          documenting: "Being documented",
          pending: "Pending",
        },
        items: {
          interface: "Interface",
          languages: "PT/EN languages",
          missions: "Mission Files",
          evidence: "Technical evidence",
          visualAsset: "Character asset",
          contacts: "Contact channels",
        },
      },

      alia: {
        title: "A.L.I.A.",
        subsystem: "AI-assisted engineering subsystem",
        supportMode: "Supervised support",
        description:
          "A support tool for organizing engineering analysis, alternatives and checks. It does not replace technical decisions or human validation.",
        supportAreas: "Support areas",
        humanReview: "Every output requires human review.",
        noAutonomy: "No autonomous decisions or chatbot interface are active.",
        workflows: {
          requirements: "Requirements analysis",
          architecture: "Architecture exploration",
          tests: "Testing support",
          documentation: "Documentation support",
        },
      },

      certifications: {
        title: "Certifications",
        verificationPending: "Verification pending",
        empty:
          "Verified credentials are awaiting confirmed content for publication.",
      },

      shell: {
        systemHeader: "System header",
        systemInterface: "Software operations interface",
        primaryWorkspace: "Primary operations interface",
        systemModules: "System modules",
        primaryNavigation: "Primary navigation",
        mobileNavigation: "Mobile navigation",
        skipToContent: "Skip to content",
        commandIndex: "Command index",
        systemOnline: "System online",
        identityBrief: "Identity",
        operativeRecord: "Operator record",
        coreStack: "Core stack",
        identitySignature: "Design // Build // Validate",
        location: "Uberlândia // MG",
        operativeName: "Operator Josiane Gonçalves",
        visualChannel: "Visual channel",
        characterPlaceholder: "Reserved space for Josiane Gonçalves character artwork",
        assetPending: "Visual asset pending",
        stageReady: "Stage ready",
        contactHud: "Contact HUD",
        contactPending: "Channels awaiting verification",
        contactChannels: "Contact channels",
        curriculum: "Résumé",
        pending: "PENDING",
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
