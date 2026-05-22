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
      headline: 'Heavy Industries Demand Precision.We Deploy Trusted Technical Experts Worldwide.',
      subheadline:
        'Backpack Wander GmbH connects industrial companies with vetted QA/QC inspectors, field engineers, commissioning specialists, HSE professionals, and technical experts for high-stakes infrastructure projects worldwide. From offshore wind and pipelines to refineries, energy facilities, and mission-critical infrastructure, we deliver compliant, field-proven execution under a trusted German GmbH framework.',
      joinNetwork: 'Join the Network'
    },
    supportGateway: {
      button: 'Request Technical Support',
      eyebrow: 'Technical Gateway',
      title: 'Select your technical path',
      continue: 'Continue',
      closeAria: 'Close support gateway',
      options: [
        {
          title: 'QA/QC, Inspection, or Commissioning Support',
          description: 'Field-ready specialists for mechanical completion, quality assurance, and site commissioning.',
          url: 'https://pipelinequality.com'
        },
        {
          title: 'Industrial Software or Technical Digital Solutions',
          description: 'Digital workflows, reporting tools, documentation systems, and industrial software enablement.',
          url: 'https://bwdigit.com'
        },
        {
          title: 'General Inquiries & Corporate Partnerships',
          description: 'Commercial introductions, strategic delivery support, and long-term partnership discussions.',
          url: '#contact'
        }
      ]
    },
    about: {
      headline: 'Built on the Field. Driven by Experience.',
      content: [
        'Backpack Wander GmbH was built by professionals who understand the reality of industrial projects from the ground up.',
        'Founded by field-experienced QA/QC engineers, we know the pressure behind large-scale infrastructure work: tight deadlines, documentation overload, communication gaps, inspections under demanding conditions, and the responsibility that comes with critical operations.',
        'We are not a transactional staffing agency built around volume recruitment. We build reliable technical support networks around real project needs — connecting companies with experienced inspectors, engineers, commissioning specialists, and field professionals who understand execution, compliance, and site reality.',
        'Our approach combines strong engineering discipline, practical field experience, and modern project coordination to help industrial operations move faster, safer, and more efficiently across global projects.'
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
      headline: 'Ready to Reinforce Your Project?',
      description:
        'Whether you require QA/QC specialists, inspection support, commissioning professionals, field engineers, or complete technical project reinforcement, Backpack Wander GmbH connects you with experienced experts ready for complex international projects.',
      joinNetwork: 'Join the Network'
    },
    footer: {
      brandDescription:
        'Premium QA/QC engineering services, field operations, and technical deployment for industrial, energy, and infrastructure projects worldwide.',
      divisions: 'Our Technical Divisions',
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
      title: 'Get in Touch',
      subtitle: 'Have a question or project in mind? Let us know how we can help.'
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
      send: 'Send inquiry',
      success: 'Your inquiry has been received.',
      error: 'Something went wrong. Please try again.'
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
      headline: 'Schwerindustrie verlangt Präzision. Wir entsenden weltweit verlässliche technische Experten.',
      subheadline:
        'Backpack Wander GmbH verbindet Industrieunternehmen mit geprüften QA/QC-Inspektoren, Field Engineers, Inbetriebnahme-Spezialisten, HSE-Fachkräften und technischen Experten für kritische Infrastrukturprojekte weltweit. Von Offshore-Wind und Pipelines bis zu Raffinerien, Energieanlagen und mission-kritischer Infrastruktur liefern wir normgerechte, praxiserprobte Umsetzung unter einem verlässlichen deutschen GmbH-Rahmen.',
      joinNetwork: 'Dem Netzwerk beitreten'
    },
    supportGateway: {
      button: 'Technischen Support anfragen',
      eyebrow: 'Technisches Gateway',
      title: 'Wählen Sie Ihren technischen Pfad',
      continue: 'Weiter',
      closeAria: 'Support-Gateway schließen',
      options: [
        {
          title: 'QA/QC-, Inspektions- oder Inbetriebnahme-Support',
          description: 'Einsatzbereite Spezialisten für Mechanical Completion, Qualitätssicherung und Inbetriebnahme vor Ort.',
          url: 'https://pipelinequality.com'
        },
        {
          title: 'Industrielle Software oder digitale technische Lösungen',
          description: 'Digitale Workflows, Reporting-Tools, Dokumentationssysteme und industrielle Software-Enablement.',
          url: 'https://bwdigit.com'
        },
        {
          title: 'Allgemeine Anfragen & Unternehmenspartnerschaften',
          description: 'Kommerzielle Erstgespräche, strategische Lieferunterstützung und langfristige Partnerschaften.',
          url: '#contact'
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
      headline: 'Bereit, Ihr Projekt zu verstärken?',
      description:
        'Ob QA/QC-Spezialisten, Inspektionssupport, Inbetriebnahme-Profis, Field Engineers oder vollständige technische Projektverstärkung — Backpack Wander GmbH verbindet Sie mit erfahrenen Experten für komplexe internationale Projekte.',
      joinNetwork: 'Dem Netzwerk beitreten'
    },
    footer: {
      brandDescription:
        'Premium QA/QC-Engineering, Feldeinsatz und technische Deployment-Services für Industrie-, Energie- und Infrastrukturprojekte weltweit.',
      divisions: 'Unsere technischen Geschäftsbereiche',
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
      title: 'Kontakt aufnehmen',
      subtitle: 'Haben Sie eine Frage oder ein Projekt? Teilen Sie uns mit, wie wir unterstützen können.'
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
    }
  }
} as const;

export type Translations = (typeof translations)[LanguageCode];