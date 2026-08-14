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
          "Olá, eu sou Josiane Gonçalves. Sou Desenvolvedora de Software Júnior e construo aplicações pensando além da interface: requisitos, regras de negócio, APIs, dados, testes, documentação e entrega. Minha experiência profissional em ambientes críticos e Engenharia Clínica também influencia a forma como analiso problemas, organizo processos e desenvolvo soluções.",
        country: "Brasil",
        focus: "Desenvolvimento de Software | Front-end + Back-end em evolução",
        locationLabel: "Localização",
        focusLabel: "Foco",
        statusLabel: "Status",
        availability: "Disponível para oportunidades",
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
        openFile: "Abrir arquivo {{title}}",
        openFileAction: "Abrir arquivo",
        closeFile: "Fechar arquivo {{title}}",
        close: "Fechar",
        recordStatus: "Status do arquivo",
        awaitingSelection: "Aguardando seleção",
        selectPrompt:
          "Selecione uma missão para consultar o registro técnico disponível.",
        detailLabel: "Arquivo da missão {{title}}",
        viewRepository: "Ver repositório",
        openSystem: "Abrir sistema",
        engineeringEvidence: "Evidências de engenharia",
        technologies: "Tecnologias",
        technologiesPending: "Tecnologias aguardando confirmação.",
        thirdSlot: "Terceiro projeto a definir",
        status: {
          documenting: "Em documentação",
          inDevelopment: "Em desenvolvimento",
          operational: "Operacional",
          paused: "Pausado",
          caseStudy: "Estudo de caso",
          planned: "Planejado",
          pending: "Evidência pendente",
        },
        sections: {
          context: "Contexto",
          problem: "Problema",
          solution: "Solução",
          requirements: "Requisitos",
          architecture: "Arquitetura",
          frontend: "Frontend",
          backend: "Backend",
          api: "API",
          database: "Banco de dados",
          testing: "Testes",
          security: "Segurança",
          documentation: "Documentação",
          deployment: "Deploy",
          challenges: "Desafios",
          learnings: "Aprendizados",
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
              "Sistema de controle operacional de equipamentos médico-hospitalares.",
            sections: {
              context:
                "Projeto direcionado à consulta e ao controle operacional de equipamentos médico-hospitalares.",
              problem:
                "O problema abordado está relacionado à consulta e ao controle operacional desses equipamentos.",
            },
          },
          pradoEmDia: {
            title: "Prado em Dia",
            summary:
              "Portal de transparência e acompanhamento administrativo para condomínio de pequeno porte.",
            sections: {
              context:
                "Condomínio de pequeno porte com necessidade de centralizar informações administrativas e acompanhar sua gestão.",
            },
          },
          rideWarsLeague: {
            title: "Ride Wars League",
            summary:
              "Aplicação gamificada voltada ao ciclismo, com ranking, badges e desafios.",
            sections: {
              context:
                "Projeto de produto gamificado aplicado ao ciclismo e à evolução da experiência entre versões.",
            },
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
        areas: {
          frontend: "Frontend",
          backend: "Backend / APIs",
          data: "Data",
          engineering: "Engineering",
          delivery: "Environment / Delivery",
        },
        capabilities: {
          restApis: "APIs REST",
          frontendBackendIntegration: "Integração front-end/backend",
          validation: "Validação",
          dataModeling: "Modelagem de dados",
          requirements: "Requisitos",
          businessRules: "Regras de negócio",
          technicalDocumentation: "Documentação técnica",
          componentization: "Componentização",
          testingFundamentals: "Fundamentos de testes",
          tddWhenApplicable: "TDD quando aplicável",
        },
      },

      professional: {
        trajectoryMapped: "Trajetória mapeada",
        trajectory:
          "Minha experiência em saúde e Engenharia Clínica reúne problemas reais, processos, sistemas corporativos e ambientes críticos. Esse contexto acompanha minha formação em Análise e Desenvolvimento de Sistemas e o desenvolvimento dos meus projetos de software.",
        experienceTitle: "Experiência profissional",
        educationTitle: "Formação",
        workflowTitle: "Engineering Workflow",
        incrementalTitle: "Desenvolvimento incremental",
        tddWhenApplicable: "TDD quando aplicável.",
        experiences: {
          spdm: {
            track: "Engineering Clinical Operations",
            role: "Auxiliar Técnico em Equipamentos Médicos",
            period: "abr/2020 — atual",
            summary:
              "Instalação e suporte técnico, diagnóstico inicial de falhas, acompanhamento de equipamentos, orientação de usuários, registros, controle de movimentação e rastreabilidade. O conhecimento desse domínio contribuiu para identificar o problema que originou o PulseOps.",
          },
          umc: {
            track: "Critical Operations",
            role: "Técnica de Enfermagem",
            period: "mai/2025 — jan/2026",
            summary:
              "Utilização de sistemas corporativos, registro e validação de informações, atuação com dados sensíveis, organização, comunicação multidisciplinar e resolução de problemas em ambiente crítico e de alta demanda.",
          },
        },
        skills: {
          technicalSupport: "Suporte técnico",
          failureAnalysis: "Análise de falhas",
          userTraining: "Treinamento de usuários",
          records: "Registro de informações",
          movementControl: "Controle de movimentação",
          traceability: "Rastreabilidade",
          corporateSystems: "Sistemas corporativos",
          dataAccuracy: "Precisão de dados",
          sensitiveInformation: "Informações sensíveis",
          organization: "Organização",
          multidisciplinaryCommunication: "Comunicação multidisciplinar",
          problemSolving: "Resolução de problemas",
          highDemandEnvironment: "Ambiente de alta demanda",
        },
        education: {
          ads: {
            course: "Tecnologia em Análise e Desenvolvimento de Sistemas",
            status: "Concluído em 2026",
          },
          nursing: {
            course: "Técnico em Enfermagem",
            status: "Concluído",
          },
        },
        workflow: {
          discovery: "Discovery",
          requirements: "Requisitos",
          businessRules: "Regras de negócio",
          modeling: "Modelagem",
          test: "Teste",
          implementation: "Implementação",
          refactor: "Refatoração",
          validation: "Validação",
          documentation: "Documentação",
          delivery: "Entrega",
        },
        practices: {
          requirements: "Requisitos",
          businessRules: "Regras de negócio",
          acceptanceCriteria: "Critérios de aceitação",
          documentation: "Documentação",
          smallDeliveries: "Pequenas entregas",
          tests: "Testes",
          validation: "Validação antes de avançar",
          versionControl: "Git/GitHub",
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
        subsystem: "Subsistema de apoio à engenharia",
        supportMode: "Apoio supervisionado",
        fullName: "Assistente Lógica de Implementação e Apoio",
        description:
          "IA aplicada ao desenvolvimento como apoio à pesquisa técnica, documentação, testes e investigação de erros, sempre com revisão e validação das soluções.",
        supportAreas: "Áreas de apoio",
        humanReview: "Revisão humana",
        humanValidation: "Validação humana",
        humanDecision: "Decisão humana",
        noAutonomy: "Nenhuma decisão autônoma ou interface de chatbot está ativa.",
        workflows: {
          technicalResearch: "Pesquisa técnica",
          documentation: "Apoio à documentação",
          tests: "Apoio a testes",
          errorInvestigation: "Investigação de erros",
          alternativeAnalysis: "Análise de alternativas",
          implementation: "Apoio à implementação",
        },
      },

      certifications: {
        title: "Certifications",
        certification: "Certificação",
        training: "Formações complementares",
        recordsConfirmed: "Registros confirmados",
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
        location: "Uberlândia // MG // Brasil",
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
          "Hello, I'm Josiane Gonçalves. I'm a Junior Software Developer, and I build applications while thinking beyond the interface: requirements, business rules, APIs, data, testing, documentation and delivery. My professional experience in critical environments and Clinical Engineering also influences how I analyze problems, organize processes and develop solutions.",
        country: "Brazil",
        focus: "Software Development | Front-end + Back-end evolving",
        locationLabel: "Location",
        focusLabel: "Focus",
        statusLabel: "Status",
        availability: "Open to opportunities",
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
        openFile: "Open file {{title}}",
        openFileAction: "Open file",
        closeFile: "Close file {{title}}",
        close: "Close",
        recordStatus: "File status",
        awaitingSelection: "Awaiting selection",
        selectPrompt:
          "Select a mission to review the available technical record.",
        detailLabel: "Mission file {{title}}",
        viewRepository: "View repository",
        openSystem: "Open system",
        engineeringEvidence: "Engineering evidence",
        technologies: "Technologies",
        technologiesPending: "Technologies awaiting confirmation.",
        thirdSlot: "Third project to be defined",
        status: {
          documenting: "Being documented",
          inDevelopment: "In development",
          operational: "Operational",
          paused: "Paused",
          caseStudy: "Case study",
          planned: "Planned",
          pending: "Evidence pending",
        },
        sections: {
          context: "Context",
          problem: "Problem",
          solution: "Solution",
          requirements: "Requirements",
          architecture: "Architecture",
          frontend: "Frontend",
          backend: "Backend",
          api: "API",
          database: "Database",
          testing: "Testing",
          security: "Security",
          documentation: "Documentation",
          deployment: "Deployment",
          challenges: "Challenges",
          learnings: "Learnings",
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
              "Operational control system for medical and hospital equipment.",
            sections: {
              context:
                "Project focused on consulting and operational control of medical and hospital equipment.",
              problem:
                "The addressed problem relates to consulting and operational control of this equipment.",
            },
          },
          pradoEmDia: {
            title: "Prado em Dia",
            summary:
              "Transparency and administrative tracking portal for a small condominium.",
            sections: {
              context:
                "A small condominium needs to centralize administrative information and track its management.",
            },
          },
          rideWarsLeague: {
            title: "Ride Wars League",
            summary:
              "Gamified cycling application featuring rankings, badges and challenges.",
            sections: {
              context:
                "A gamified cycling product exploring how the experience evolves between versions.",
            },
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
        areas: {
          frontend: "Frontend",
          backend: "Backend / APIs",
          data: "Data",
          engineering: "Engineering",
          delivery: "Environment / Delivery",
        },
        capabilities: {
          restApis: "REST APIs",
          frontendBackendIntegration: "Front-end/backend integration",
          validation: "Validation",
          dataModeling: "Data modeling",
          requirements: "Requirements",
          businessRules: "Business rules",
          technicalDocumentation: "Technical documentation",
          componentization: "Componentization",
          testingFundamentals: "Testing fundamentals",
          tddWhenApplicable: "TDD when applicable",
        },
      },

      professional: {
        trajectoryMapped: "Trajectory mapped",
        trajectory:
          "My experience in healthcare and Clinical Engineering brings together real problems, processes, corporate systems and critical environments. This context accompanies my education in Systems Analysis and Development and the development of my software projects.",
        experienceTitle: "Professional experience",
        educationTitle: "Education",
        workflowTitle: "Engineering Workflow",
        incrementalTitle: "Incremental development",
        tddWhenApplicable: "TDD when applicable.",
        experiences: {
          spdm: {
            track: "Engineering Clinical Operations",
            role: "Medical Equipment Technical Assistant",
            period: "Apr/2020 — present",
            summary:
              "Technical installation and support, initial failure diagnosis, equipment monitoring, user guidance, records, movement control and traceability. Knowledge of this domain contributed to identifying the problem that originated PulseOps.",
          },
          umc: {
            track: "Critical Operations",
            role: "Nursing Technician",
            period: "May/2025 — Jan/2026",
            summary:
              "Use of corporate systems, recording and validation of information, work with sensitive data, organization, multidisciplinary communication and problem solving in a critical, high-demand environment.",
          },
        },
        skills: {
          technicalSupport: "Technical support",
          failureAnalysis: "Failure analysis",
          userTraining: "User training",
          records: "Information records",
          movementControl: "Movement control",
          traceability: "Traceability",
          corporateSystems: "Corporate systems",
          dataAccuracy: "Data accuracy",
          sensitiveInformation: "Sensitive information",
          organization: "Organization",
          multidisciplinaryCommunication: "Multidisciplinary communication",
          problemSolving: "Problem solving",
          highDemandEnvironment: "High-demand environment",
        },
        education: {
          ads: {
            course: "Technology in Systems Analysis and Development",
            status: "Completed in 2026",
          },
          nursing: {
            course: "Nursing Technician",
            status: "Completed",
          },
        },
        workflow: {
          discovery: "Discovery",
          requirements: "Requirements",
          businessRules: "Business rules",
          modeling: "Modeling",
          test: "Test",
          implementation: "Implementation",
          refactor: "Refactor",
          validation: "Validation",
          documentation: "Documentation",
          delivery: "Delivery",
        },
        practices: {
          requirements: "Requirements",
          businessRules: "Business rules",
          acceptanceCriteria: "Acceptance criteria",
          documentation: "Documentation",
          smallDeliveries: "Small deliveries",
          tests: "Tests",
          validation: "Validation before advancing",
          versionControl: "Git/GitHub",
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
        subsystem: "Engineering support subsystem",
        supportMode: "Supervised support",
        fullName: "Logical Implementation and Support Assistant",
        description:
          "AI applied to development as support for technical research, documentation, testing and error investigation, always with human review and validation of solutions.",
        supportAreas: "Support areas",
        humanReview: "Human review",
        humanValidation: "Human validation",
        humanDecision: "Human decision",
        noAutonomy: "No autonomous decisions or chatbot interface are active.",
        workflows: {
          technicalResearch: "Technical research",
          documentation: "Documentation support",
          tests: "Testing support",
          errorInvestigation: "Error investigation",
          alternativeAnalysis: "Alternative analysis",
          implementation: "Implementation support",
        },
      },

      certifications: {
        title: "Certifications",
        certification: "Certification",
        training: "Complementary training",
        recordsConfirmed: "Confirmed records",
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
        location: "Uberlândia // MG // Brazil",
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
