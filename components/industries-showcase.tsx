'use client';

import Image from 'next/image';
import { Reveal } from '@/components/reveal';
import { useLanguage } from '@/components/language-provider';

interface IndustryCard {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export function IndustriesShowcase() {
  const { language } = useLanguage();

  // Hardcoded data with translations
  const industriesData: Record<'en' | 'de', IndustryCard[]> = {
    en: [
      {
        title: 'Offshore & Renewable Energy',
        description: 'Monopiles, offshore wind platforms, and subsea infrastructure QA/QC',
        image: '/Images/offshore-wind-turbine-fixation.png',
        alt: 'Offshore monopile fabrication and installation'
      },
      {
        title: 'Pipelines & Refineries',
        description: 'High-pressure pipeline systems and refinery infrastructure inspection',
        image: '/Images/Pipelines & Refineries.png',
        alt: 'Pipeline construction and inspection site'
      },
      {
        title: 'Industrial Oversight & Documentation',
        description: 'QA/QC documentation control, reporting workflows, and engineering oversight for industrial operations',
        image: '/Images/Enterprise Project Management.png',
        alt: 'Digital industrial project control dashboard'
      },
      {
        title: 'Data Centers & Critical Facilities',
        description: 'Mission-critical infrastructure deployment and commissioning oversight',
        image: '/Images/Data center critical.png',
        alt: 'Data center critical infrastructure'
      },
      {
        title: 'Technical Field Operations',
        description: 'On-site QA/QC coordination, NDT inspection, and quality assurance',
        image: '/Images/Technical Field Operations.png',
        alt: 'Field inspection team conducting QA/QC'
      },
      {
        title: 'Enterprise Project Management',
        description: 'Digital coordination systems and real-time project tracking dashboards',
        image: '/Images/Enterprise Project Management.png',
        alt: 'Project management and technical coordination meeting'
      }
    ],
    de: [
      {
        title: 'Offshore & Erneuerbare Energien',
        description: 'Monopiles, Offshore-Windplattformen und Subsea-Infrastruktur QA/QC',
        image: '/Images/offshore-wind-turbine-fixation.png',
        alt: 'Offshore-Monopile-Montage und Installation'
      },
      {
        title: 'Pipelines & Raffinerien',
        description: 'Hochdruckrohrleitungssysteme und Raffinerieinfrastruktur-Inspektionen',
        image: '/Images/Pipelines & Refineries.png',
        alt: 'Pipelinebau und Inspektionsbereich'
      },
      {
        title: 'Industrielle Überwachung & Dokumentation',
        description: 'QA/QC-Dokumentationssteuerung, Reporting-Workflows und technische Aufsicht für den Industriebetrieb',
        image: '/Images/Enterprise Project Management.png',
        alt: 'Digitales Dashboard für industrielle Projektsteuerung'
      },
      {
        title: 'Rechenzentren & Kritische Anlagen',
        description: 'Einsatz von mission-kritischer Infrastruktur und Inbetriebnahme-Überwachung',
        image: '/Images/Data center critical.png',
        alt: 'Rechenzentrum mit kritischer Infrastruktur'
      },
      {
        title: 'Technische Feldeinsätze',
        description: 'Vor-Ort-Koordination QA/QC, NDT-Inspektionen und Qualitätssicherung',
        image: '/Images/Technical Field Operations.png',
        alt: 'Inspektionsteam führt vor Ort QA/QC durch'
      },
      {
        title: 'Unternehmens-Projektmanagement',
        description: 'Digitale Koordinationssysteme und Echtzeit-Projekt-Tracking-Dashboards',
        image: '/Images/Enterprise Project Management.png',
        alt: 'Projektmanagement und technisches Koordinierungstreffen'
      }
    ]
  };

  const industries = industriesData[language];

  const headerTexts: Record<'en' | 'de', {eyebrow: string; title: string; subtitle: string}> = {
    en: {
      eyebrow: 'Global Expertise',
      title: 'Industries We Serve',
      subtitle: 'From offshore energy to mission-critical facilities, we deploy precision expertise across industrial sectors worldwide.'
    },
    de: {
      eyebrow: 'Globale Expertise',
      title: 'Branchen, in denen wir tätig sind',
      subtitle: 'Von Offshore-Energie bis zu mission-kritischen Anlagen entfalten wir spezialisierte Expertise weltweit in industriellen Bereichen.'
    }
  };

  const header = headerTexts[language];

  return (
    <section className="border-b border-white/10 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="mb-16 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent/90">
              {header.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {header.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
              {header.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Image Grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Reveal key={industry.title}>
              <div className="group relative h-72 overflow-hidden rounded-[24px] border border-white/10 shadow-industrial transition duration-300 hover:border-accent/30 hover:shadow-lg">
                {/* Background Image */}
                <Image
                  src={industry.image}
                  alt={industry.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                  quality={85}
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent opacity-0 transition group-hover:opacity-100" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  <h3 className="text-lg font-bold leading-tight text-white sm:text-xl">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/82 line-clamp-2">
                    {industry.description}
                  </p>
                </div>

                {/* Hover Indicator */}
                <div className="absolute top-0 right-0 m-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm opacity-0 transition group-hover:opacity-100">
                  <svg className="h-5 w-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
