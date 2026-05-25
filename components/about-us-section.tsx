'use client';

import Image from 'next/image';
import { technicalDivisions } from '@/lib/site';
import { Reveal } from '@/components/reveal';
import { useLanguage } from '@/components/language-provider';

export function AboutUsSection() {
  const { content } = useLanguage();

  return (
    <section id="about" className="relative border-b border-white/10 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.95fr] lg:gap-16 lg:items-start">
          <Reveal>
            <div className="space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent/90">
                  Industrial Structure
                </p>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-offwhite sm:text-5xl lg:text-6xl">
                  {content.about.headline}
                </h2>
              </div>

              <div className="space-y-5 lg:space-y-6">
                {content.about.content.map((paragraph, index) => (
                  <Reveal key={index}>
                    <p className="text-base leading-8 text-offwhite/82 sm:text-lg sm:leading-8">
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-6">
              <div className="relative h-72 overflow-hidden rounded-[24px] border border-white/10 sm:h-96 lg:h-[360px]">
                <Image
                  src="/Images/Technical%20Field%20Operations.png"
                  alt="Technical field operations and industrial reporting"
                  fill
                  className="object-cover"
                  quality={90}
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,3,4,0.18),rgba(2,3,4,0.78))]" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.36em] text-accent/90">
                    Pipeline Quality
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">Primary quality and oversight division</h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/78">
                    Field inspections, documentation control, technical reporting, and site coordination for industrial projects.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {technicalDivisions.map((division) => (
                  <div key={division.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.34em] text-accent/85">{division.label}</p>
                    <p className="mt-3 text-sm leading-6 text-offwhite/76">{division.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
