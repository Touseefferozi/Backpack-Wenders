export type LanguageCode = 'en' | 'de';

export type LanguageOption = {
  code: LanguageCode;
  flag: string;
  label: string;
  shortLabel: string;
  htmlLang: string;
};

export const languageOptions: LanguageOption[] = [
  {
    code: 'en',
    flag: '🇬🇧',
    label: 'English',
    shortLabel: 'EN',
    htmlLang: 'en'
  },
  {
    code: 'de',
    flag: '🇩🇪',
    label: 'German',
    shortLabel: 'DE',
    htmlLang: 'de'
  }
];

export const translations = {
  en: {
    nav: {
      about: 'About',
      industries: 'Industries',
      deployment: 'Our Deployment Model',
      contact: 'Contact',
      ecosystem: 'Our Technical Ecosystem',
      language: 'Language',
      selectLanguage: 'Select language'
    },
    hero: {
      headline: 'Engineering Support for Industrial Projects',
      subheadline:
        'Backpack Wander GmbH provides quality assurance, quality control, inspection support and project coordination services across offshore, energy, manufacturing and industrial sectors.',
      subheadline2: 'Built on practical field experience and committed to quality, compliance and reliable project delivery.',
      joinNetwork: 'Join the Network'
    },
    supportGateway: {
      button: 'Request Technical Support',
      eyebrow: 'Industrial Gateway',
      title: 'Select the technical division that fits your project',
      continue: 'Continue',
      closeAria: 'Close support gateway',
      options: [
        {
          title: 'Pipeline Quality',
          description: 'Primary QA/QC, inspection, and commissioning oversight for offshore wind, pipelines, refineries, and heavy industry.',
          url: 'https://pipelinequality.com'
        },
        {
          title: 'BW Digit',
          description: 'Supporting digital documentation, reporting, and technical workflow systems for industrial delivery.',
          url: 'https://bwdigit.com'
        },
        {
          title: 'Corporate Enquiries',
          description: 'Direct industrial project discussions, partnership requests, and technical scope reviews.',
          url: '#contact'
        }
      ]
    },
    about: {
      headline: 'Built Through Real Industrial Experience',
      content: [
        'Backpack Wander GmbH was founded by engineering professionals with experience supporting quality-critical projects across offshore, energy, manufacturing and industrial environments.',
        'Our background includes quality assurance, quality control, inspection activities, documentation management, auditing and project support within complex technical projects.',
        'Today we continue supporting major industrial manufacturing activities while building a trusted network of engineering professionals capable of contributing to projects across Europe and beyond.',
        'We believe successful projects depend on technical competence, accountability, clear communication and continuous improvement.'
      ]
    },
    infrastructure: {
      eyebrow: 'Industries We Support',
      title: 'Built for the Work That Demands Precision',
      subtitle:
        'From renewable energy to mission-critical infrastructure, our support model is designed for complex industrial environments where reliability, compliance, and execution matter most.',
      intro:
        'We operate internationally across Europe, North America, the Middle East, Africa, and Asia-Pacific — supporting complex industrial, energy, infrastructure, and mission-critical projects.',
      categories: [
        {
          title: 'Offshore Wind & Energy Infrastructure',
          description:
            'Supporting offshore and renewable energy projects through QA/QC oversight, structural inspection support, offshore documentation control, contractor coordination, and asset integrity workflows.'
        },
        {
          title: 'Pipelines, Refineries & Heavy Industry',
          description:
            'Delivering robust quality assurance and inspection support through welding surveillance, coating inspection, NDT coordination, hydrotest support, ITP verification, turnover documentation, and standards compliance.'
        },
        {
          title: 'Mission-Critical Data Centers',
          description:
            'Supporting hyperscale and mission-critical facilities through QA/QC oversight, mechanical completion tracking, FAT/SAT coordination, commissioning support, and construction quality management.'
        },
        {
          title: 'Industrial Project Support & Digital Coordination',
          description:
            'Reducing operational bottlenecks through structured reporting systems, QA/QC tracking workflows, documentation coordination, turnover management, and practical digital tools built around real field operations.'
        }
      ]
    },
    disciplines: {
      title: 'Technical Disciplines & Expertise',
      subtitle: 'A highly clean, structured industrial matrix of specialized competencies.',
      items: [
        'QA/QC Engineering',
        'Welding Inspection',
        'Coating Inspection',
        'NDT Coordination',
        'HSE Management',
        'Mechanical Engineering',
        'Mechanical Completion',
        'Commissioning Support',
        'FAT/SAT Coordination',
        'Turnover & Handover Documentation',
        'Document Control',
        'Offshore Inspection Support',
        'Industrial Reporting & QA/QC Tracking',
        'Project Controls & Management'
      ]
    },
    standards: {
      title: 'Standards, Compliance & Global Deployment',
      workWith: 'Standards We Work With',
      globalTitle: 'Global Technical Deployment Network',
      globalDescription:
        'Backpack Wander GmbH provides compliant international B2B subcontracting through a trusted German GmbH structure. We connect companies with vetted independent inspectors, engineers, QA/QC specialists, and commissioning professionals ready for rapid international deployment.',
      regions: ['Europe & North America', 'Middle East & Africa', 'Asia-Pacific'],
      list: ['ISO', 'ASME', 'API', 'AWS', 'IEC', 'EN Standards', 'NORSOK', 'Client Specifications', 'Project-Specific QA/QC Procedures']
    },
    deployment: {
      enterpriseTitle: 'For Enterprise Clients',
      enterpriseDescription:
        'Need experienced technical reinforcement for industrial projects? We help companies solve inspection gaps, workforce shortages, commissioning pressure, and project bottlenecks by connecting them with trusted field professionals ready for on-site or remote deployment. Our German GmbH structure enables compliant international collaboration with minimal administrative friction across cross-border industrial projects.',
      expertsTitle: 'For Independent Experts',
      expertsDescription:
        'Operate your freelance business through a trusted international engineering network built around real field experience. We connect independent QA/QC inspectors, engineers, commissioning specialists, coordinators, and HSE professionals with industrial and energy projects worldwide — while supporting transparent collaboration, fair contract structures, and compliant B2B engagement.'
    },
    closing: {
      headline: 'Need Technical Oversight on a Critical Project?',
      description:
        'Whether you need offshore wind inspection support, pipeline quality control, industrial documentation, or on-site engineering oversight, Backpack Wander GmbH supports complex industrial delivery with a disciplined corporate framework.',
      joinNetwork: 'Contact the Team'
    },
    footer: {
      brandDescription:
        'Industrial engineering oversight, QA/QC, offshore wind support, technical documentation, and project coordination for international industrial delivery.',
      divisions: 'Company Divisions',
      company: 'Company',
      contactLegal: 'Contact & Legal',
      email: 'Email',
      legal: 'Legal',
      links: {
        about: 'About Us',
        industries: 'Industries',
        expertise: 'Expertise',
        contact: 'Contact',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        impressum: 'Impressum'
      },
      rights: '© 2026 Backpack Wander GmbH. All rights reserved.'
    },
    contactPage: {
      title: 'Technical Contact',
      subtitle: 'Discuss industrial QA/QC, offshore wind support, documentation, or engineering oversight with our team.'
      ,
      card: {
        projectCoordinationTitle: 'Project Coordination',
        officeLabel: 'Office',
        officeLines: ['Backpack Wander GmbH', 'Registered in Germany'],
        responseWindowLabel: 'Response Window',
        responseWindowText: 'Within 24 business hours',
        emailLabel: 'Email',
        focusLabel: 'Focus',
        focusText: 'QA/QC, offshore wind, pipeline quality, documentation, and engineering oversight.',
        primaryDivisionTitle: 'Primary Division',
        primaryDivisionText:
          'Pipeline Quality is the core industrial quality and oversight division, focused on execution control, reporting discipline, and site verification.',
        sendEnquiryTitle: 'Send a Technical Enquiry',
        sendEnquirySubtitle: 'Share the project scope, location, and timeline. We will respond with a suitable technical path.'
      }
    },
    contactForm: {
      name: 'Name',
      email: 'Email',
      company: 'Company',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@company.com',
      companyPlaceholder: 'Organization name',
      messagePlaceholder: 'Tell us about the project scope, location, and timeline.',
      sending: 'Sending…',
      send: "Let's Talk",
      success: 'Your inquiry has been received.',
      error: 'Something went wrong. Please try again.'
    },
    industriesShowcase: {
      eyebrow: 'Industrial Sectors',
      title: 'Where Pipeline Quality Delivers',
      subtitle: 'From offshore wind fabrication to refineries and critical infrastructure, we support industrial projects where precision, documentation, and control matter most.',
      industries: [
        {
          title: 'Offshore Wind & Renewables',
          description: 'Monopiles, offshore structures, subsea assets, and fabrication oversight'
        },
        {
          title: 'Pipelines & Refineries',
          description: 'Welding surveillance, coating inspection, and integrity documentation'
        },
        {
          title: 'Heavy Industry',
          description: 'Fabrication halls, structural checks, lifting operations, and dimensional control'
        },
        {
          title: 'Critical Facilities',
          description: 'Technical oversight for mission-critical environments and delivery control'
        },
        {
          title: 'Technical Field Oversight',
          description: 'QA/QC coordination, inspection reporting, and site discipline'
        },
        {
          title: 'Industrial Documentation',
          description: 'Reporting workflows, technical records, and handover documentation'
        }
      ]
    }
    ,
    imageCarousel: {
      eyebrow: 'Industrial Portfolio',
      title: 'Industrial Delivery & Deployment',
      cta: 'Explore Projects',
      slides: [
        {
          title: 'Field Inspections & QA/QC',
          description: 'On-site QA/QC inspections, technical surveys and inspection reports to ensure compliance and safety.',
          cta: 'View Field Inspections'
        },
        {
          title: 'Offshore Monopile Projects',
          description: 'End-to-end monopile fabrication, load-out and offshore installation support for renewable energy projects.',
          cta: 'View Offshore Projects'
        },
        {
          title: 'Industrial Coordination & Reporting',
          description: 'Digital coordination systems, QA/QC reporting, and management dashboards for industrial execution.',
          cta: 'Explore Coordination'
        },
        {
          title: 'Pipeline Inspection & QA/QC',
          description: 'Inline inspection, coating verification and pressure testing management for pipeline integrity and compliance.',
          cta: 'Inspect Pipelines'
        },
        {
          title: 'Field Team Coordination',
          description: 'On-site coordination and technical oversight that keeps projects on schedule and within specification.',
          cta: 'View Field Coordination'
        },
        {
          title: 'Data Center Infrastructure',
          description: 'Deployment support for mission-critical infrastructure including power, cooling and structured cabling.',
          cta: 'Explore Data Centers'
        },
        {
          title: 'Quality Monitoring & Critical Facilities',
          description: 'Precision monitoring, documentation control and operational oversight for mission-critical environments.',
          cta: 'See Monitoring'
        },
        {
          title: 'Project Management & Coordination',
          description: 'End-to-end project delivery, scheduling and stakeholder coordination to reduce risk and ensure milestones.',
          cta: 'View Project Management'
        },
        {
          title: 'Industrial Operations',
          description: 'Operations support, maintenance planning and continuous improvement programs for industrial sites.',
          cta: 'Explore Operations'
        },
        {
          title: 'Technical Deployment & Commissioning',
          description: 'Deployment engineering, commissioning and technical mobilisation to bring systems online reliably.',
          cta: 'See Deployment Support'
        }
      ]
    }
  },
  de: {
    nav: {
      about: 'Über uns',
      industries: 'Branchen',
      deployment: 'Unser Einsatzmodell',
      contact: 'Kontakt',
      ecosystem: 'Unser technisches Ökosystem',
      language: 'Sprache',
      selectLanguage: 'Sprache auswählen'
    },
    hero: {
      headline: 'Industrielle technische Überwachung für komplexe Projekte weltweit.',
      subheadline:
        'Backpack Wander GmbH bietet QA/QC-Überwachung, Offshore-Wind-Expertise, technische Dokumentation, Inspektionssupport und ingenieurtechnische Koordination für Industrieprojekte mit hohen Anforderungen. Pipeline Quality ist die primäre Division; BW Digit unterstützt digitale Workflows und Dokumentationssysteme.',
      subheadline2: 'Auf praktischer Felderfahrung aufgebaut und verpflichtet zu Qualität, Konformität und zuverlässiger Projektausführung.',
      joinNetwork: 'Technische Überwachung anfragen'
    },
    supportGateway: {
      button: 'Technische Überwachung anfragen',
      eyebrow: 'Industrielles Gateway',
      title: 'Wählen Sie die technische Division für Ihr Projekt',
      continue: 'Weiter',
      closeAria: 'Support-Gateway schließen',
      options: [
        {
          title: 'Pipeline Quality',
          description: 'Primäre QA/QC-, Inspektions- und Inbetriebnahme-Überwachung für Offshore-Wind, Pipelines, Raffinerien und Schwerindustrie.',
          url: 'https://pipelinequality.com'
        },
        {
          title: 'BW Digit',
          description: 'Unterstützende digitale Dokumentations-, Reporting- und Workflow-Systeme für industrielle Abläufe.',
          url: 'https://bwdigit.com'
        },
        {
          title: 'Unternehmensanfragen',
          description: 'Direkte Projektgespräche, Partnerschaften und technische Scope-Reviews.',
          url: '#contact'
        }
      ]
    },
    imageCarousel: {
      eyebrow: 'Industrielles Portfolio',
      title: 'Industrielle Lieferung im Fokus',
      cta: 'Projekte ansehen',
      slides: [
        {
          title: 'Vor-Ort-Inspektionen & QA/QC',
          description: 'QA/QC-Inspektionen vor Ort, technische Untersuchungen und Inspektionsberichte zur Sicherstellung von Compliance und Sicherheit.',
          cta: 'Inspektionen ansehen'
        },
        {
          title: 'Offshore-Monopile-Projekte',
          description: 'Komplette Unterstützung bei Monopile-Fertigung, Verladung und Offshore-Installation für Erneuerbare-Energie-Projekte.',
          cta: 'Offshore-Projekte'
        },
        {
          title: 'Industrielle Koordination & Reporting',
          description: 'Digitale Koordinationssysteme, QA/QC-Reporting und Management-Dashboards für industrielle Abläufe.',
          cta: 'Koordination erkunden'
        },
        {
          title: 'Pipeline-Inspektion & QA/QC',
          description: 'Inline-Inspektion, Beschichtungsprüfung und Drucktest-Management zur Gewährleistung der Pipeline-Integrität.',
          cta: 'Pipelines prüfen'
        },
        {
          title: 'Feldteam-Koordination',
          description: 'Vor-Ort-Koordination und technische Aufsicht, damit Projekte im Zeitplan und innerhalb der Spezifikation bleiben.',
          cta: 'Koordination ansehen'
        },
        {
          title: 'Data-Center-Infrastruktur',
          description: 'Einsatzunterstützung für kritisch wichtige Infrastruktur, einschließlich Stromversorgung, Kühlung und strukturierte Verkabelung.',
          cta: 'Data Centers'
        },
        {
          title: 'Qualitätsüberwachung & Kritische Anlagen',
          description: 'Präzise Überwachung, Dokumentationskontrolle und operative Aufsicht für mission-kritische Umgebungen.',
          cta: 'Monitoring ansehen'
        },
        {
          title: 'Projektmanagement & Koordination',
          description: 'End-to-End-Projektabwicklung, Terminplanung und Stakeholder-Koordination zur Risikominimierung.',
          cta: 'Projektmanagement'
        },
        {
          title: 'Industrieller Betrieb',
          description: 'Betriebsunterstützung, Instandhaltungsplanung und kontinuierliche Verbesserungsprogramme für Industrieanlagen.',
          cta: 'Betrieb erkunden'
        },
        {
          title: 'Technische Bereitstellung & Inbetriebnahme',
          description: 'Einsatztechnik, Inbetriebnahme und technische Mobilisierung, um Systeme zuverlässig in Betrieb zu nehmen.',
          cta: 'Bereitstellung ansehen'
        }
      ]
    },
    about: {
      headline: 'Aus der Praxis gebaut. Durch Erfahrung angetrieben.',
      content: [
        'Backpack Wander GmbH wurde von Fachleuten aufgebaut, die die Realität industrieller Projekte von Grund auf kennen.',
        'Gegründet von QA/QC-Ingenieuren mit Felderfahrung kennen wir den Druck hinter großen Infrastrukturprojekten: enge Fristen, Dokumentationsaufwand, Kommunikationslücken, Inspektionen unter anspruchsvollen Bedingungen und die Verantwortung kritischer Abläufe.',
        'Wir sind keine transaktionale Personalvermittlung mit Fokus auf Masse. Wir bauen verlässliche technische Unterstützungsnetzwerke rund um reale Projektanforderungen — und verbinden Unternehmen mit erfahrenen Inspektoren, Ingenieuren, Inbetriebnahme-Spezialisten und Fachkräften aus der Praxis.',
        'Unser Ansatz kombiniert starke Ingenieursdisziplin, praktische Felderfahrung und moderne Projektkoordination, damit industrielle Vorhaben weltweit schneller, sicherer und effizienter umgesetzt werden.'
      ]
    },
    infrastructure: {
      eyebrow: 'Branchen, die wir unterstützen',
      title: 'Ausgelegt für Arbeiten, die Präzision verlangen',
      subtitle:
        'Von erneuerbaren Energien bis zu mission-kritischer Infrastruktur ist unser Modell für komplexe industrielle Umgebungen ausgelegt, in denen Zuverlässigkeit, Compliance und saubere Umsetzung entscheidend sind.',
      intro:
        'Wir sind international in Europa, Nordamerika, dem Nahen Osten, Afrika und im asiatisch-pazifischen Raum aktiv — zur Unterstützung komplexer Industrie-, Energie-, Infrastruktur- und mission-kritischer Projekte.',
      categories: [
        {
          title: 'Offshore-Wind & Energieinfrastruktur',
          description:
            'Unterstützung von Offshore- und Renewable-Energy-Projekten durch QA/QC-Überwachung, strukturelle Inspektionsunterstützung, Offshore-Dokumentationskontrolle, Contractor-Koordination und Asset-Integrity-Workflows.'
        },
        {
          title: 'Pipelines, Raffinerien & Schwerindustrie',
          description:
            'Robuste Qualitätssicherung und Inspektionsunterstützung durch Schweißüberwachung, Beschichtungsinspektion, NDT-Koordination, Hydrotest-Support, ITP-Prüfung, Turnover-Dokumentation und Normenkonformität.'
        },
        {
          title: 'Mission-Critical Data Center',
          description:
            'Unterstützung von Hyperscale- und mission-kritischen Anlagen durch QA/QC-Überwachung, Mechanical-Completion-Tracking, FAT/SAT-Koordination, Inbetriebnahme-Support und Construction-Quality-Management.'
        },
        {
          title: 'Industrieller Projektsupport & digitale Koordination',
          description:
            'Abbau operativer Engpässe durch strukturierte Reporting-Systeme, QA/QC-Tracking-Workflows, Dokumentationskoordination, Turnover-Management und praxisnahe digitale Tools für reale Feldabläufe.'
        }
      ]
    },
    disciplines: {
      title: 'Technische Disziplinen & Expertise',
      subtitle: 'Eine klar strukturierte industrielle Matrix spezialisierter Kompetenzen.',
      items: [
        'QA/QC Engineering',
        'Schweißinspektion',
        'Beschichtungsinspektion',
        'NDT-Koordination',
        'HSE-Management',
        'Maschinenbau',
        'Mechanical Completion',
        'Inbetriebnahme-Support',
        'FAT/SAT-Koordination',
        'Turnover- & Handover-Dokumentation',
        'Dokumentenmanagement',
        'Offshore-Inspektionssupport',
        'Industrielles Reporting & QA/QC-Tracking',
        'Projektsteuerung & Management'
      ]
    },
    standards: {
      title: 'Standards, Compliance & globaler Einsatz',
      workWith: 'Standards, mit denen wir arbeiten',
      globalTitle: 'Globales Netzwerk für technischen Einsatz',
      globalDescription:
        'Backpack Wander GmbH ermöglicht konforme internationale B2B-Subunternehmermodelle über eine verlässliche deutsche GmbH-Struktur. Wir verbinden Unternehmen mit geprüften unabhängigen Inspektoren, Ingenieuren, QA/QC-Spezialisten und Inbetriebnahme-Experten für einen schnellen internationalen Einsatz.',
      regions: ['Europa & Nordamerika', 'Naher Osten & Afrika', 'Asien-Pazifik'],
      list: ['ISO', 'ASME', 'API', 'AWS', 'IEC', 'EN-Standards', 'NORSOK', 'Kundenspezifikationen', 'Projektspezifische QA/QC-Verfahren']
    },
    deployment: {
      enterpriseTitle: 'Für Unternehmenskunden',
      enterpriseDescription:
        'Sie benötigen erfahrene technische Verstärkung für Industrieprojekte? Wir helfen Unternehmen, Inspektionslücken, Personalmangel, Inbetriebnahmedruck und Projektengpässe zu lösen, indem wir sie mit verlässlichen Fachkräften für Vor-Ort- oder Remote-Einsätze verbinden. Unsere deutsche GmbH-Struktur ermöglicht konforme internationale Zusammenarbeit mit minimaler administrativer Reibung.',
      expertsTitle: 'Für unabhängige Experten',
      expertsDescription:
        'Führen Sie Ihr Freelance-Geschäft über ein verlässliches internationales Engineering-Netzwerk mit starkem Praxisbezug. Wir verbinden unabhängige QA/QC-Inspektoren, Ingenieure, Inbetriebnahme-Spezialisten, Koordinatoren und HSE-Fachkräfte mit Industrie- und Energieprojekten weltweit — mit transparenter Zusammenarbeit, fairen Vertragsstrukturen und konformer B2B-Abwicklung.'
    },
    closing: {
      headline: 'Benötigen Sie technische Überwachung für ein kritisches Projekt?',
      description:
        'Ob Offshore-Wind-Inspektionssupport, Pipeline-Qualitätssicherung, industrielle Dokumentation oder ingenieurtechnische Vor-Ort-Überwachung — Backpack Wander GmbH unterstützt komplexe industrielle Projekte mit einer disziplinierten Unternehmensstruktur.',
      joinNetwork: 'Team kontaktieren'
    },
    footer: {
      brandDescription:
        'Industrielle technische Überwachung, QA/QC, Offshore-Wind-Support, technische Dokumentation und Projektkoordination für internationale Industrieprojekte.',
      divisions: 'Unternehmensbereiche',
      company: 'Unternehmen',
      contactLegal: 'Kontakt & Rechtliches',
      email: 'E-Mail',
      legal: 'Rechtliches',
      links: {
        about: 'Über uns',
        industries: 'Branchen',
        expertise: 'Expertise',
        contact: 'Kontakt',
        privacy: 'Datenschutz',
        terms: 'Nutzungsbedingungen',
        impressum: 'Impressum'
      },
      rights: '© 2026 Backpack Wander GmbH. Alle Rechte vorbehalten.'
    },
    contactPage: {
      title: 'Technischer Kontakt',
      subtitle: 'Besprechen Sie QA/QC, Offshore-Wind-Support, Dokumentation oder technische Überwachung mit unserem Team.'
      ,
      card: {
        projectCoordinationTitle: 'Projektkoordination',
        officeLabel: 'Büro',
        officeLines: ['Backpack Wander GmbH', 'Eingetragen in Deutschland'],
        responseWindowLabel: 'Antwortzeitraum',
        responseWindowText: 'Innerhalb von 24 Geschäftsstunden',
        emailLabel: 'E-Mail',
        focusLabel: 'Fokus',
        focusText: 'QA/QC, Offshore-Wind, Pipeline-Qualität, Dokumentation und technische Überwachung.',
        primaryDivisionTitle: 'Primäre Division',
        primaryDivisionText:
          'Pipeline Quality ist die primäre industrielle Qualitäts- und Überwachungsdivision, fokussiert auf Ausführungssteuerung, Reporting-Disziplin und Site-Verification.',
        sendEnquiryTitle: 'Senden Sie eine technische Anfrage',
        sendEnquirySubtitle: 'Teilen Sie Projektumfang, Standort und Zeitplan. Wir antworten mit einem passenden technischen Weg.'
      }
    },
    contactForm: {
      name: 'Name',
      email: 'E-Mail',
      company: 'Unternehmen',
      message: 'Nachricht',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'sie@unternehmen.de',
      companyPlaceholder: 'Name der Organisation',
      messagePlaceholder: 'Beschreiben Sie Projektumfang, Standort und Zeitplan.',
      sending: 'Wird gesendet…',
      send: 'Anfrage senden',
      success: 'Ihre Anfrage wurde erfolgreich übermittelt.',
      error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.'
    },
    industriesShowcase: {
      eyebrow: 'Industrielle Sektoren',
      title: 'Wo Pipeline Quality liefert',
      subtitle: 'Von Offshore-Wind-Fertigung bis zu Raffinerien und kritischer Infrastruktur unterstützen wir industrielle Projekte, bei denen Präzision, Dokumentation und Kontrolle zählen.',
      industries: [
        {
          title: 'Offshore-Wind & Renewables',
          description: 'Monopiles, Offshore-Strukturen, Subsea-Anlagen und Fertigungsüberwachung'
        },
        {
          title: 'Pipelines & Raffinerien',
          description: 'Schweißüberwachung, Beschichtungsinspektion und Integritätsdokumentation'
        },
        {
          title: 'Schwerindustrie',
          description: 'Fertigungshallen, Strukturprüfungen, Hebevorgänge und Maßkontrolle'
        },
        {
          title: 'Kritische Anlagen',
          description: 'Technische Überwachung für mission-kritische Umgebungen und Lieferkontrolle'
        },
        {
          title: 'Technische Feldoverwachung',
          description: 'QA/QC-Koordination, Inspektionsberichte und Site-Disziplin'
        },
        {
          title: 'Industrielle Dokumentation',
          description: 'Reporting-Workflows, technische Unterlagen und Handover-Dokumentation'
        }
      ]
    }
  }
} as const;

export type Translations = (typeof translations)[LanguageCode];
