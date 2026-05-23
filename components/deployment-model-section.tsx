'use client';

import { Reveal } from '@/components/reveal';
import { useLanguage } from '@/components/language-provider';

export function DeploymentModelSection() {
  const { content } = useLanguage();

  return (
    <section id="deployment" className="border-b border-white/10 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Enterprise */}
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-accent/30 hover:bg-white/[0.06]">
              <h3 className="text-2xl font-bold text-white">
                {content.deployment.enterpriseTitle}
              </h3>
              <p className="mt-6 text-base leading-7 text-slate-300">
                {content.deployment.enterpriseDescription}
              </p>
            </div>
          </Reveal>
        
          {/* Experts */}
          <Reveal>
            <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 via-transparent to-transparent p-8">
              <h3 className="text-2xl font-bold text-white">
                {content.deployment.expertsTitle}
              </h3>
              <p className="mt-6 text-base leading-7 text-slate-300">
                {content.deployment.expertsDescription}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
