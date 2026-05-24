'use client';

import { Reveal } from '@/components/reveal';
import { useLanguage } from '@/components/language-provider';

export function StandardsSection() {
  const { content } = useLanguage();

  return (
    <section id="standards" className="border-b border-white/10 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            {content.standards.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Standards */}
          <Reveal>
            <div>
              <h3 className="text-2xl font-bold text-white">{content.standards.workWith}</h3>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {content.standards.list.map((standard) => (
                  <div
                    key={standard}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center font-semibold text-white/85 transition hover:border-accent/30 hover:bg-white/[0.05] hover:text-white"
                  >
                    {standard}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Global Deployment */}
          <Reveal>
            <div className="rounded-2xl border border-accent/15 bg-gradient-to-br from-accent/10 via-transparent to-transparent p-8">
              <h3 className="text-2xl font-bold text-white">{content.standards.globalTitle}</h3>
              <p className="mt-4 text-base leading-7 text-white/82">
                {content.standards.globalDescription}
              </p>
              <div className="mt-6 grid gap-3">
                {content.standards.regions.map((region) => (
                  <div key={region} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent/90" />
                    <span className="text-sm text-white/85">{region}</span>
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
