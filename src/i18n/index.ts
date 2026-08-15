import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: {
      common: {
        profile: "Perfil",
        projects: "Projetos",
        experience: "Experiência",
        languageSelector: "Selecionar idioma",
      },

      profile: {
        role: "Desenvolvedora de Software Júnior",
        greeting: "Olá, eu sou a Josiane.",
        trajectory:
          "Minha trajetória une saúde, Engenharia Clínica e desenvolvimento de software. Depois de anos trabalhando com pessoas, equipamentos e processos críticos, passei a transformar problemas reais em soluções digitais.",
        practice:
          "Hoje desenvolvo aplicações com atenção a requisitos, arquitetura, testes, documentação e entregas incrementais.",
        statusLabel: "Status",
        availability: "Disponível para oportunidades",
      },

      missions: {
        title: "Mission Files",
        index: "Índice de missões",
        carouselLabel: "Carrossel de missões",
        selectMission: "Selecionar missão {{title}}",
        repositoryAction: "GitHub // Repositório",
        repositoryPending: "URL do repositório pendente",
        repositoryUnavailable:
          "Repositório de {{title}} aguardando URL confirmada",
        openRepositoryOnGithub:
          "Abrir repositório do {{title}} no GitHub",
        currentMissionLabel: "{{code}} // {{title}} selecionada",
        previousMission: "Missão anterior",
        nextMission: "Próxima missão",
        previous: "Anterior",
        next: "Próxima",
        selectedMission: "Missão selecionada",
        defined: "definidas",
        openFile: "Abrir arquivo {{title}}",
        openFileAction: "Abrir arquivo",
        closeFile: "Fechar arquivo {{title}}",
        close: "Fechar",
        recordStatus: "Status do arquivo",
        detailLabel: "Arquivo da missão {{title}}",
        viewRepository: "Ver repositório",
        openSystem: "Abrir sistema",
        technologies: "Tecnologias",
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
          cloud: "Cloud / Infrastructure",
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
          awsFundamentals: "AWS // Fundamentos",
        },
      },

      professional: {
        trajectoryMapped: "Trajetória mapeada",
        trajectory:
          "Minha experiência em saúde e Engenharia Clínica reúne problemas reais, processos, sistemas corporativos e ambientes críticos. Esse contexto acompanha minha formação em Análise e Desenvolvimento de Sistemas e o desenvolvimento dos meus projetos de software.",
        experienceTitle: "Experiência profissional",
        educationTitle: "Formação",
        processTitle: "Engineering Process",
        workflowTitle: "Engineering Workflow",
        workflowDescription:
          "Parto do problema e do contexto de uso para definir requisitos, regras de negócio e critérios de aceitação. A implementação é conduzida em etapas pequenas, acompanhadas por testes, validação e documentação antes da entrega.",
        incrementalTitle: "Desenvolvimento incremental",
        incrementalDescription:
          "Divido o desenvolvimento em entregas pequenas e verificáveis. Cada ciclo possui escopo e critérios de aceitação definidos; implemento, testo, valido o resultado e só então avanço para a próxima entrega.",
        incrementalStatement:
          "O desenvolvimento avança em pequenas entregas verificáveis.",
        whenApplicable: "Quando aplicável",
        tddWhenApplicable: "TDD quando aplicável.",
        tddDescription:
          "Testes orientam a implementação quando o comportamento pode ser definido antes do código.",
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
          smr: {
            track: "Pre-hospital / Emergency Operations",
            role: "Socorrista",
            period: "nov/2018 — abr/2021",
            summary:
              "Atendimento pré-hospitalar em situações de urgência e emergência, avaliação inicial de vítimas, estabilização clínica, aplicação de protocolos de atendimento e segurança e trabalho integrado com equipes de resgate e saúde.",
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
          criticalDecisionMaking: "Decisão em contexto crítico",
          protocolExecution: "Execução de protocolos",
          rapidAssessment: "Avaliação rápida de cenário",
          teamCommunication: "Comunicação em equipe",
          safety: "Segurança",
          prioritization: "Priorização",
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
          testing: "Testes",
          implementation: "Implementação",
          refactor: "Refatoração",
          validation: "Validação",
          documentation: "Documentação",
          delivery: "Entrega",
        },
        workflowGroups: {
          discovery: "Discovery",
          define: "Definir",
          build: "Construir",
          verify: "Verificar",
          document: "Documentar",
          deliver: "Entregar",
        },
        practices: {
          problem: "Problema",
          context: "Contexto",
          requirements: "Requisitos",
          businessRules: "Regras de negócio",
          acceptanceCriteria: "Critérios de aceitação",
          modeling: "Modelagem",
          documentation: "Documentação",
          smallDeliveries: "Pequenas entregas",
          implementation: "Implementação",
          componentization: "Componentização",
          tests: "Testes",
          validation: "Validação antes de avançar",
          refactor: "Refatoração",
          technicalDocumentation: "Documentação técnica",
          decisions: "Decisões",
          versionControl: "Git/GitHub",
          build: "Build",
          deploymentWhenApplicable: "Deploy quando aplicável",
        },
        incrementalCycle: {
          define: "Definir",
          implement: "Implementar",
          test: "Testar",
          validate: "Validar",
          refine: "Refinar",
          nextDelivery: "Próxima entrega",
        },
      },

      systemStatus: {
        title: "VISÃO DO SISTEMA",
        items: {
          interface: "Interface",
          languages: "Idiomas",
          missions: "Mission Files",
          engineering: "Engenharia",
          character: "Personagem",
          contact: "Contato",
        },
        values: {
          ready: "Pronta",
          bilingual: "PT / EN",
          threeProjects: "03 projetos",
          matrixAndLog: "Matrix + Log",
          integrated: "Integrada",
          available: "Disponível",
        },
      },

      alia: {
        title: "A.L.I.A.",
        subsystem: "Subsistema de apoio à engenharia",
        supportMode: "Apoio supervisionado",
        fullName: "Assistente Lógica de Implementação e Apoio",
        mascotAriaLabel:
          "Representação da A.L.I.A., assistente de apoio ao desenvolvimento.",
        description:
          "IA aplicada ao desenvolvimento como apoio à pesquisa técnica, documentação, testes e investigação de erros.",
      },

      quickContact: {
        title: "ACESSO RÁPIDO",
        navigationLabel: "Acesso rápido",
        resumeLabel: "Currículo",
      },

      softSkills: {
        title: "Soft Skills",
        insightsLabel: "Insights humanos // 01",
        items: {
          problemSolving: "Resolução de Problemas",
          adaptability: "Adaptabilidade",
          teamwork: "Trabalho em Equipe",
          communication: "Comunicação",
          proactivity: "Proatividade",
          emotionalIntelligence: "Inteligência Emocional",
        },
      },

      certifications: {
        title: "Formação & Certificações",
        education: "Formação",
        certification: "Certificação",
        training: "Formações complementares",
        recordsConfirmed: "Registros confirmados",
        verificationPending: "Verificação pendente",
        empty:
          "Credenciais verificadas aguardando conteúdo confirmado para publicação.",
      },

      healthTech: {
        condition: {
          title: "CONDITION",
          status: "STABLE",
          link: "HEALTH + TECH LINKED",
        },
        clinicalSignal: {
          signalLabel: "SINAL CLÍNICO",
          signalCaption:
            "Experiência em saúde aplicada à engenharia de software.",
          signalState: "SINAL // REGULAR",
        },
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
        operativeRecord: "Registro da operadora",
        coreStack: "Stack principal",
        identitySignature: "Understand // Build // Validate",
        operativeName: "Operadora Josiane Gonçalves",
        visualChannel: "Canal visual",
        characterAlt:
          "Representação estilizada de Josiane Gonçalves segurando um notebook.",
        contactHud: "Nó de contato",
        contactChannels: "Canais de contato",
        curriculum: "Currículo",
        downloadResume: "Baixar currículo em PDF",
      },
    },
  },

  en: {
    translation: {
      common: {
        profile: "Profile",
        projects: "Projects",
        experience: "Experience",
        languageSelector: "Select language",
      },

      profile: {
        role: "Junior Software Developer",
        greeting: "Hello, I'm Josiane.",
        trajectory:
          "My journey combines healthcare, Clinical Engineering and software development. After years working with people, equipment and critical processes, I began turning real-world problems into digital solutions.",
        practice:
          "Today I develop applications with attention to requirements, architecture, testing, documentation and incremental delivery.",
        statusLabel: "Status",
        availability: "Open to opportunities",
      },

      missions: {
        title: "Mission Files",
        index: "Mission index",
        carouselLabel: "Mission carousel",
        selectMission: "Select mission {{title}}",
        repositoryAction: "GitHub // Repository",
        repositoryPending: "Repository URL pending",
        repositoryUnavailable:
          "{{title}} repository awaiting a confirmed URL",
        openRepositoryOnGithub:
          "Open {{title}} repository on GitHub",
        currentMissionLabel: "{{code}} // {{title}} selected",
        previousMission: "Previous mission",
        nextMission: "Next mission",
        previous: "Previous",
        next: "Next",
        selectedMission: "Selected mission",
        defined: "defined",
        openFile: "Open file {{title}}",
        openFileAction: "Open file",
        closeFile: "Close file {{title}}",
        close: "Close",
        recordStatus: "File status",
        detailLabel: "Mission file {{title}}",
        viewRepository: "View repository",
        openSystem: "Open system",
        technologies: "Technologies",
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
          cloud: "Cloud / Infrastructure",
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
          awsFundamentals: "AWS // Fundamentals",
        },
      },

      professional: {
        trajectoryMapped: "Trajectory mapped",
        trajectory:
          "My experience in healthcare and Clinical Engineering brings together real problems, processes, corporate systems and critical environments. This context accompanies my education in Systems Analysis and Development and the development of my software projects.",
        experienceTitle: "Professional experience",
        educationTitle: "Education",
        processTitle: "Engineering Process",
        workflowTitle: "Engineering Workflow",
        workflowDescription:
          "I start from the problem and usage context to define requirements, business rules and acceptance criteria. Implementation is carried out in small steps, supported by testing, validation and documentation before delivery.",
        incrementalTitle: "Incremental Delivery",
        incrementalDescription:
          "I divide development into small, verifiable deliveries. Each cycle has a defined scope and acceptance criteria; I implement, test and validate the result before moving to the next delivery.",
        incrementalStatement:
          "Development advances through small, verifiable deliveries.",
        whenApplicable: "When applicable",
        tddWhenApplicable: "TDD when applicable.",
        tddDescription:
          "Tests guide implementation when behavior can be defined before the code.",
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
          smr: {
            track: "Pre-hospital / Emergency Operations",
            role: "Emergency Responder",
            period: "Nov/2018 — Apr/2021",
            summary:
              "Pre-hospital care in urgent and emergency situations, initial victim assessment, clinical stabilization, application of care and safety protocols, and integrated work with rescue and healthcare teams.",
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
          criticalDecisionMaking: "Decision-making in critical contexts",
          protocolExecution: "Protocol execution",
          rapidAssessment: "Rapid scenario assessment",
          teamCommunication: "Team communication",
          safety: "Safety",
          prioritization: "Prioritization",
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
          testing: "Testing",
          implementation: "Implementation",
          refactor: "Refactor",
          validation: "Validation",
          documentation: "Documentation",
          delivery: "Delivery",
        },
        workflowGroups: {
          discovery: "Discovery",
          define: "Define",
          build: "Build",
          verify: "Verify",
          document: "Document",
          deliver: "Deliver",
        },
        practices: {
          problem: "Problem",
          context: "Context",
          requirements: "Requirements",
          businessRules: "Business rules",
          acceptanceCriteria: "Acceptance criteria",
          modeling: "Modeling",
          documentation: "Documentation",
          smallDeliveries: "Small deliveries",
          implementation: "Implementation",
          componentization: "Componentization",
          tests: "Tests",
          validation: "Validation before advancing",
          refactor: "Refactor",
          technicalDocumentation: "Technical documentation",
          decisions: "Decisions",
          versionControl: "Git/GitHub",
          build: "Build",
          deploymentWhenApplicable: "Deploy when applicable",
        },
        incrementalCycle: {
          define: "Define",
          implement: "Implement",
          test: "Test",
          validate: "Validate",
          refine: "Refine",
          nextDelivery: "Next delivery",
        },
      },

      systemStatus: {
        title: "SYSTEM OVERVIEW",
        items: {
          interface: "Interface",
          languages: "Languages",
          missions: "Mission Files",
          engineering: "Engineering",
          character: "Character",
          contact: "Contact",
        },
        values: {
          ready: "Ready",
          bilingual: "PT / EN",
          threeProjects: "03 projects",
          matrixAndLog: "Matrix + Log",
          integrated: "Integrated",
          available: "Available",
        },
      },

      alia: {
        title: "A.L.I.A.",
        subsystem: "Engineering support subsystem",
        supportMode: "Supervised support",
        fullName: "Logical Implementation and Support Assistant",
        mascotAriaLabel:
          "Representation of A.L.I.A., development support assistant.",
        description:
          "AI used in development to support technical research, documentation, testing and error investigation.",
      },

      quickContact: {
        title: "QUICK ACCESS",
        navigationLabel: "Quick access",
        resumeLabel: "CV",
      },

      softSkills: {
        title: "Soft Skills",
        insightsLabel: "Human insights // 01",
        items: {
          problemSolving: "Problem Solving",
          adaptability: "Adaptability",
          teamwork: "Teamwork",
          communication: "Communication",
          proactivity: "Proactivity",
          emotionalIntelligence: "Emotional Intelligence",
        },
      },

      certifications: {
        title: "Education & Certifications",
        education: "Education",
        certification: "Certification",
        training: "Complementary training",
        recordsConfirmed: "Confirmed records",
        verificationPending: "Verification pending",
        empty:
          "Verified credentials are awaiting confirmed content for publication.",
      },

      healthTech: {
        condition: {
          title: "CONDITION",
          status: "STABLE",
          link: "HEALTH + TECH LINKED",
        },
        clinicalSignal: {
          signalLabel: "CLINICAL SIGNAL",
          signalCaption:
            "Healthcare experience applied to software engineering.",
          signalState: "SIGNAL // REGULAR",
        },
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
        operativeRecord: "Operator record",
        coreStack: "Core stack",
        identitySignature: "Understand // Build // Validate",
        operativeName: "Operator Josiane Gonçalves",
        visualChannel: "Visual channel",
        characterAlt:
          "Stylized representation of Josiane Gonçalves holding a laptop.",
        contactHud: "Contact node",
        contactChannels: "Contact channels",
        curriculum: "Résumé",
        downloadResume: "Download résumé PDF",
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
