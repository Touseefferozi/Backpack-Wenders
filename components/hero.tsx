'use client';

import Image from 'next/image';
import { Reveal } from '@/components/reveal';
import { SupportGateway } from '@/components/support-gateway';
import { ParticleBackground } from '@/components/particle-background';
import { useLanguage } from '@/components/language-provider';
import { siteConfig } from '@/lib/site';

export function Hero() {
  const { content } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden border-b border-white/10 pt-32 sm:pt-36 lg:pt-40">
      {/* Industrial Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&h=900&fit=crop"
          alt="Industrial offshore platform"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
      </div>

      <ParticleBackground />

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
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-accent/40 hover:bg-white/10"
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

