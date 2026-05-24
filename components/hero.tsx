'use client';

import Image from 'next/image';
import { Reveal } from '@/components/reveal';
import { SupportGateway } from '@/components/support-gateway';
import { useLanguage } from '@/components/language-provider';
import { siteConfig } from '@/lib/site';

export function Hero() {
  const { content } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden border-b border-white/10 pt-20 sm:pt-24 lg:pt-28">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Images/banner-5.png"
          alt="Industrial field operations with technical planning and digital dashboards"
          fill
          className="object-cover object-center saturate-50 scale-[0.96]"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-[#02040a]/92" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,164,74,0.10),transparent_34%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[70vh] sm:min-h-[90vh] items-center px-4 pb-12 sm:pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="space-y-6 lg:space-y-8 max-w-4xl text-left">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              {content.hero.headline}
            </h1>

            <p className="mt-2 max-w-xl text-base sm:text-lg leading-7 text-slate-100 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              {content.hero.subheadline}
            </p>

            <div className="pt-4 flex flex-col gap-3 sm:flex-row sm:gap-4 justify-start">
              <SupportGateway />
              <a
                href={siteConfig.talentIntakeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/25 hover:bg-white/8"
              >
                {content.hero.joinNetwork}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}



