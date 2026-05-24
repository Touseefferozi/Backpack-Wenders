'use client';

import { Reveal } from '@/components/reveal';
import { useLanguage } from '@/components/language-provider';

export function DisciplinesSection() {
  const { content } = useLanguage();

  return (
    <section id="disciplines" className="relative border-b border-white/10 py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(74,222,128,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.06),transparent_28%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent/90">
              Technical Matrix
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {content.disciplines.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/82 sm:text-xl">
              {content.disciplines.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.disciplines.items.map((discipline) => (
            <Reveal key={discipline}>
              <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.07] mx-auto w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex min-h-16 items-center justify-center">
                  <span className="text-[0.95rem] font-semibold leading-6 text-white sm:text-base">
                    {discipline}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
