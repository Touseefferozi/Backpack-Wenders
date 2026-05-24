'use client';

import { Reveal } from '@/components/reveal';
import { useLanguage } from '@/components/language-provider';

export function InfrastructureSection() {
  const { content } = useLanguage();

  return (
    <section id="industries" className="relative border-b border-white/10 py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(74,222,128,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_32%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent/90">
                {content.infrastructure.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                {content.infrastructure.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/82 sm:text-xl">
                {content.infrastructure.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {['QA/QC', 'Inspection', 'Commissioning', 'Field Support'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/85"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-industrial backdrop-blur-sm sm:p-8">
              <p className="text-sm uppercase tracking-[0.32em] text-white/65">Global Coverage</p>
              <p className="mt-4 text-base leading-7 text-white/82">{content.infrastructure.intro}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {['Europe', 'North America', 'Middle East', 'Asia-Pacific'].map((region) => (
                  <div
                    key={region}
                    className="rounded-2xl border border-white/10 bg-[#0d1320] px-4 py-3 text-sm font-medium text-white"
                  >
                    {region}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 md:gap-10 lg:grid-cols-2">
          {content.infrastructure.categories.map((category, index) => (
            <Reveal key={category.title}>
              <article className="group relative flex h-full flex-col justify-center overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.06]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex flex-row items-center gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-base font-semibold text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                      {category.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-white/82">
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
