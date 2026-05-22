'use client';

import { Reveal } from '@/components/reveal';
import { SupportGateway } from '@/components/support-gateway';
import { useLanguage } from '@/components/language-provider';
import { siteConfig } from '@/lib/site';

export function ClosingCTASection() {
  const { content } = useLanguage();

  return (
    <section id="contact" className="border-b border-white/10 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {content.closing.headline}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
              {content.closing.description}
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <SupportGateway />
              <a
                href={siteConfig.talentIntakeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-accent/40 hover:bg-white/10"
              >
                {content.closing.joinNetwork}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
