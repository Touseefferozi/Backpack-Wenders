'use client';
import { Reveal } from '@/components/reveal';
import { useLanguage } from '@/components/language-provider';
import { norm } from '@/lib/normalizeImage';
import { translations } from '@/lib/translations';

interface IndustryCard {
  title: string;
  description: string;
  image: string;
  alt: string;
}

 

export function IndustriesShowcase() {
  const { content } = useLanguage();

  // Static industries array: first two cards follow exact client text; remaining use translations
  const industries: IndustryCard[] = [
    {
      title: 'OFFSHORE ENERGY',
      description: 'Offshore wind projects, foundations production, fabrication and construction support.',
      image: norm('/Images/offshore-wind-turbine-fixation.png'),
      alt: 'Offshore wind foundations and fabrication'
    },
    {
      title: 'OIL & GAS',
      description: 'Inspection, quality assurance and project support for upstream and downstream operations.',
      image: norm('/Images/Pipelines & Refineries.png'),
      alt: 'Pipeline and refinery inspection site'
    },
    {
      title: 'REFINING & PETROCHEMICAL',
      description: 'Quality management and technical project support within process industries.',
      image: norm('/Images/Heavy Construction.png'),
      alt: 'Refinery and petrochemical processing site'
    },
    {
      title: 'MANUFACTURING',
      description: 'Heavy fabrication, production quality control and industrial process support.',
      image: norm('/Images/Technical Field Operations.png'),
      alt: 'Manufacturing and fabrication operations'
    },
    {
      title: 'ENERGY INFRASTRUCTURE',
      description: 'Power generation, transmission and industrial energy projects.',
      image: norm('/Images/Enterprise Project Management.png'),
      alt: 'Energy infrastructure project dashboard'
    },
    {
      title: 'DATA CENTERS',
      description: 'Construction quality assurance, commissioning support and technical coordination',
      image: norm('/Images/Data center critical.png'),
      alt: 'Data center infrastructure and commissioning'
    }
  ];

  const headerSource = content?.industriesShowcase ?? translations.en.industriesShowcase;

  const header = {
    eyebrow: headerSource.eyebrow,
    title: headerSource.title,
    subtitle: headerSource.subtitle
  };

  return (
    <section id="industries" className="border-b border-white/10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="mb-10 text-left">
            <p className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-accent/90 sm:text-[0.78rem]">
              {header.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {header.title}
            </h2>
            <p className="mt-6 max-w-[58ch] text-base leading-7 text-white/80 sm:text-lg">
              {header.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Image Grid */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {industries.map((industry: IndustryCard) => (
            <Reveal key={industry.title}>
              <div className="group relative h-72 overflow-hidden rounded-[28px] border border-white/10 bg-surface shadow-industrial transition duration-300 hover:border-accent/25">
                {/* Background Image */}
                  <div className="absolute inset-0 bg-[#071011]" />

                {/* Overlay for contrast (no gradients) */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  <h3 className="font-display text-lg font-semibold leading-tight text-white sm:text-xl">
                    {industry.title}
                  </h3>
                  <p className="mt-3 max-w-[34ch] text-sm leading-6 text-white/82 line-clamp-2">
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
