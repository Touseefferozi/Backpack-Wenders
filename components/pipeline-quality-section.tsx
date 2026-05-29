"use client";

import { useLanguage } from '@/components/language-provider';

export function PipelineQualitySection() {
  const { content } = useLanguage();
  const option = content.supportGateway.options?.find((o) => o.title === 'Pipeline Quality') ?? content.supportGateway.options?.[0];

  return (
    <section id="pipeline-quality" className="py-16 sm:py-20 lg:py-24 bg-surface">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#071011] opacity-80" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <p className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.42em] text-offwhite/70">{option?.title}</p>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.04] tracking-tight text-white sm:text-4xl lg:text-5xl">
          {option?.title}
        </h2>
        <h3 className="mt-2 font-display text-lg font-medium leading-[1.04] tracking-tight text-white/90">
          {content.supportGateway.eyebrow}
        </h3>

        <div className="mt-6 space-y-4">
          <p className="text-[1.02rem] leading-7 text-white/82 sm:text-lg">{option?.description}</p>

          <p className="text-[1.02rem] leading-7 text-white/82 sm:text-lg">{content.infrastructure.intro}</p>

          <div className="mt-6">
            <a
              href={option?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-offwhite hover:border-white/20"
            >
              {content.supportGateway.options?.[0]?.title}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
