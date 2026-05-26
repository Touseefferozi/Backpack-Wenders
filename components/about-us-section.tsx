'use client';

import Image from 'next/image';
import { technicalDivisions } from '@/lib/site';
import { Reveal } from '@/components/reveal';
import { useLanguage } from '@/components/language-provider';

export function AboutUsSection() {
  const { content } = useLanguage();

  return (
    <section id="about" className="relative border-b border-white/10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.95fr] lg:gap-12 lg:items-start">
          <Reveal>
            <div className="space-y-6">
              <div>
                <p className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.46em] text-accent/90 sm:text-[0.85rem]">
                  Industrial Structure
                </p>
                <h2 className="mt-4 font-display text-[2.55rem] font-semibold leading-[1.02] tracking-tight text-offwhite sm:text-5xl lg:text-6xl">
                  {content.about.headline}
                </h2>
              </div>

              <div className="space-y-4 lg:space-y-5">
                {content.about.content.map((paragraph, index) => (
                  <Reveal key={index}>
                    <p className="text-[1.05rem] leading-8 text-offwhite/84 sm:text-lg sm:leading-8">
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-5">
              <div className="relative h-72 overflow-hidden rounded-[24px] border border-white/10 sm:h-96 lg:h-[360px]">
                <Image
                  src="/Images/WhatsApp%20Image%202026-05-22%20at%204.23.42%20PM.jpeg"
                  alt="Industrial field team reviewing technical documentation"
                  fill
                  className="object-cover"
                  quality={90}
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,3,4,0.18),rgba(2,3,4,0.78))]" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  {/* <p className="text-xs font-semibold uppercase tracking-[0.36em] text-accent/90">
                    Pipeline Quality
                  </p> */}
                  <h3 className="font-display mt-3 text-[1.95rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-[2.2rem]">
                    Primary quality and oversight division
                  </h3>
                  <p className="mt-3 max-w-lg text-[1rem] leading-7 text-white/84 sm:text-[1.05rem] sm:leading-8">
                    Field inspections, documentation control, technical reporting, and site coordination for industrial projects.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {technicalDivisions.map((division) => (
                  <div key={division.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="font-display text-[0.74rem] font-semibold uppercase tracking-[0.4em] text-accent/85 sm:text-[0.8rem]">
                      {division.label}
                    </p>
                    <p className="mt-3 text-[0.98rem] leading-7 text-offwhite/78 sm:text-[1rem] sm:leading-7">
                      {division.description}
                    </p>
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
