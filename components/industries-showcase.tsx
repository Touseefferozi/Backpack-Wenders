'use client';

import Image from 'next/image';
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

interface IndustryText {
  title: string;
  description: string;
}

export function IndustriesShowcase() {
  const { content } = useLanguage();

  // image and alt assets (kept local) — content titles/descriptions come from translations
  const srcList = [
    norm('/Images/offshore-wind-turbine-fixation.png'),
    norm('/Images/Pipelines & Refineries.png'),
    norm('/Images/Heavy Construction.png'),
    norm('/Images/Data center critical.png'),
    norm('/Images/Technical Field Operations.png'),
    norm('/Images/Enterprise Project Management.png')
  ];

  const altList = [
    'Offshore monopile fabrication and installation',
    'Pipeline construction and inspection site',
    'Large-scale industrial construction, welding, and structural integrity',
    'Data center critical infrastructure',
    'Field inspection team conducting QA/QC',
    'Project management and technical coordination meeting'
  ];

  const industriesSource = (content?.industriesShowcase?.industries ?? translations.en.industriesShowcase.industries) as readonly IndustryText[];

  const industries = industriesSource.map((item: IndustryText, i: number) => ({
    title: item.title,
    description: item.description,
    image: srcList[i] ?? '/Images/Enterprise Project Management.png',
    alt: altList[i] ?? item.title
  }));

  const headerSource = content?.industriesShowcase ?? translations.en.industriesShowcase;

  const header = {
    eyebrow: headerSource.eyebrow,
    title: headerSource.title,
    subtitle: headerSource.subtitle
  };

  return (
    <section className="border-b border-white/10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="mb-10 text-left">
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
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {industries.map((industry: IndustryCard) => (
            <Reveal key={industry.title}>
              <div className="group relative h-72 overflow-hidden rounded-[24px] border border-white/10 shadow-industrial transition duration-300 hover:border-accent/25">
                {/* Background Image */}
                <Image
                  src={industry.image}
                  alt={industry.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                  quality={85}
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,3,4,0.1)_0%,rgba(2,3,4,0.82)_100%)]" />

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
