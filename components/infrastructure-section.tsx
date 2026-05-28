'use client';

import { Reveal } from '@/components/reveal';
import { useLanguage } from '@/components/language-provider';

export function InfrastructureSection() {
  const { content } = useLanguage();

  return (
    <section id="industries" className="relative border-b border-white/10 py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(74,222,128,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_32%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
          <Reveal>
            <div className="w-full max-w-[65ch] text-left prose-container">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-accent/90 sm:text-xs sm:tracking-[0.4em]">
                {content.infrastructure.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-[2.15rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {content.infrastructure.title}
              </h2>
              <p className="mt-5 max-w-[65ch] text-[0.98rem] leading-8 text-white/82 font-medium sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl break-words">
                {content.infrastructure.subtitle}
              </p>

              <div className="mt-7 flex flex-wrap justify-start gap-2.5 sm:gap-3">
                {['QA/QC', 'Inspection', 'Commissioning', 'Field Support'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[0.78rem] text-white/85 sm:px-4 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 text-left shadow-industrial backdrop-blur-sm sm:p-8">
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/65 sm:text-sm sm:tracking-[0.32em]">Global Coverage</p>
              <p className="mt-4 max-w-[58ch] text-[0.93rem] leading-7 text-white/82 font-medium sm:text-base sm:leading-7 break-words">
                {content.infrastructure.intro}
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {['Europe', 'North America', 'Middle East', 'Asia-Pacific'].map((region) => (
                  <div
                    key={region}
                    className="rounded-2xl border border-white/10 bg-[#0d1320] px-4 py-3 text-[0.85rem] font-medium text-white sm:text-sm"
                  >
                    {region}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 md:gap-8 lg:grid-cols-2">
          {content.infrastructure.categories.map((category, index) => (
            <Reveal key={category.title}>
              <article className="group relative flex h-full flex-col justify-center overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.06] sm:p-8">
                <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-sm font-semibold text-accent sm:h-11 sm:w-11 sm:text-base">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-[1.15rem] font-bold leading-snug text-white sm:text-2xl">
                      {category.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-7 text-white/82 font-medium sm:text-base break-words">
                      {category.description}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
