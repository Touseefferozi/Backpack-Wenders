"use client";

import Image from 'next/image';
import { Reveal } from '@/components/reveal';
import { useLanguage } from '@/components/language-provider';

export function Hero() {
  const { content } = useLanguage();
  const headline = content.hero.headline;
  const subheadline = content.hero.subheadline;
  const subheadline2 = content.hero?.subheadline2 ?? content.about?.content?.[0] ?? '';

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden border-b border-white/10 pt-16 sm:min-h-screen sm:pt-24 lg:pt-28">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/Pipelines%20%26%20Refineries.png"
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute inset-0 bg-[#000000]/65" />
      </div>

      <div className="relative z-20 mx-auto flex min-h-[calc(100svh-4rem)] items-start px-4 pb-10 pt-6 sm:min-h-[78vh] sm:items-center sm:px-6 sm:pb-20 sm:pt-0 lg:px-8">
        <Reveal>
          <div className="w-full max-w-[34rem] space-y-4 text-left sm:max-w-4xl sm:space-y-6 lg:max-w-4xl lg:space-y-8 prose-container text-shadow-soft">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-offwhite/70 sm:px-4 sm:py-2 sm:text-[0.72rem] sm:tracking-[0.35em]">
              Pipeline Quality | Primary Division
            </div>

            <h1 className="font-display text-[2rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-4xl lg:text-6xl">
              <span className="block">{headline}</span>
            </h1>

            <p className="max-w-[36ch] font-medium text-[0.98rem] leading-7 text-white/92 sm:max-w-2xl sm:text-lg sm:leading-8">
              {subheadline}
            </p>

            <p className="max-w-[36ch] font-medium text-[0.98rem] leading-7 text-white/82 sm:max-w-2xl sm:text-lg sm:leading-8">
              {subheadline2}
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4 sm:pt-4">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full border border-green-400 bg-green-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-green-500 hover:border-green-500 sm:w-auto"
              >
                Discuss Your Project
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/0 px-6 py-3 text-sm font-semibold text-offwhite transition hover:border-white/20"
              >
                Explore Services
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}



