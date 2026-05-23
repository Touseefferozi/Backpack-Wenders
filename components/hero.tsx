'use client';

import Image from 'next/image';
import { Reveal } from '@/components/reveal';
import { SupportGateway } from '@/components/support-gateway';
import { useLanguage } from '@/components/language-provider';
import { siteConfig } from '@/lib/site';

export function Hero() {
  const { content } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden border-b border-white/10 pt-32 sm:pt-36 lg:pt-40">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Images/WhatsApp Image 2026-05-22 at 4.41.12 PM.jpeg"
          alt="QA/QC team in technical briefing — field coordination"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-[#02040a]/88" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_34%)]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
        <Reveal>
          <div className="space-y-6 lg:space-y-8">
            <h1 className="font-display text-4xl font-bold leading-tight text-white text-center sm:text-5xl lg:text-6xl">
              {content.hero.headline}
            </h1>
            <p className="max-w-3xl text-base leading-7 text-slate-400 text-center sm:text-lg sm:leading-8 mx-auto">
              {content.hero.subheadline}
            </p>

            <div className="pt-4 flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
              <SupportGateway />
              <a
                href={siteConfig.talentIntakeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/25 hover:bg-white/8"
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

