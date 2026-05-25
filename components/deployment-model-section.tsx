'use client';

import { Reveal } from '@/components/reveal';
import { useLanguage } from '@/components/language-provider';

export function DeploymentModelSection() {
  const { content } = useLanguage();

  return (
    <section id="deployment" className="border-b border-white/10 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-8 transition hover:border-accent/30 hover:bg-white/[0.05]">
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-accent/90">Primary Division</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                {content.deployment.enterpriseTitle}
              </h3>
              <p className="mt-6 text-base leading-7 text-white/82">
                {content.deployment.enterpriseDescription}
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-accent/80">Supporting Division</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                {content.deployment.expertsTitle}
              </h3>
              <p className="mt-6 text-base leading-7 text-white/82">
                {content.deployment.expertsDescription}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
