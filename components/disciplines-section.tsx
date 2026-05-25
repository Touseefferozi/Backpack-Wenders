'use client';

import { Reveal } from '@/components/reveal';
import { useLanguage } from '@/components/language-provider';

export function DisciplinesSection() {
  const { content } = useLanguage();

  return (
    <section id="disciplines" className="relative border-b border-white/10 py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[#050707]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="lg:col-span-1">
                <p className="text-sm font-semibold uppercase tracking-widest text-red-400">
                  {content.disciplines.title}
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
                  {content.disciplines.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/75">
                  {content.disciplines.subtitle}
                </p>
              </div>
          </Reveal>

          <div className="lg:col-span-2">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {content.disciplines.items.map((discipline) => (
                <li key={discipline} className="flex items-center gap-3 rounded-md bg-white/[0.02] border border-white/6 px-4 py-3">
                  <span className="inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-red-500" />
                  <span className="text-sm text-white">{discipline}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
