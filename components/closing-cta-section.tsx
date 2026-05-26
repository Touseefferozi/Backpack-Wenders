'use client';

import { Reveal } from '@/components/reveal';
import { SupportGateway } from '@/components/support-gateway';
import { useLanguage } from '@/components/language-provider';
import { getLocalizedPath } from '@/lib/routing';

export function ClosingCTASection() {
  const { content, language } = useLanguage();
  const contactHref = getLocalizedPath(language, '/contact');

  return (
    <section id="contact" className="border-b border-white/10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent/90">Technical Oversight</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
              {content.closing.headline}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82 sm:text-xl">
              {content.closing.description}
            </p>

            <div className="mt-8 flex flex-wrap justify-start gap-4">
              <SupportGateway />
              <a
                href={contactHref}
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
