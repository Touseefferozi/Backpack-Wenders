"use client";

import Image from 'next/image';
import { Reveal } from '@/components/reveal';
import { useLanguage } from '@/components/language-provider';

export function Hero() {
  const { content } = useLanguage();
  const headline = content.hero.headline;
  const subheadline = content.hero.subheadline;
  const subheadline2 = content.hero?.subheadline2 ?? content.about?.content?.[0] ?? '';

  function handleAnchorClick(e: React.MouseEvent, id: string) {
    try {
      e.preventDefault();
      const el = document.getElementById(id);
      if (!el) return;
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--scroll-offset')) || 0;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      window.history.replaceState(null, '', `#${id}`);
    } catch (err) {
      // noop
    }
  }

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
          <div className="w-full max-w-full space-y-4 text-left sm:max-w-2xl md:sm:max-w-[48rem] lg:max-w-[70ch] sm:space-y-6 lg:space-y-8 prose-container text-shadow-soft overflow-visible">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-offwhite/70 sm:px-4 sm:py-2 sm:text-[0.72rem] sm:tracking-[0.35em]">
              Pipeline Quality | Primary Division
            </div>

            <h1 className="font-display font-semibold text-white text-[42px] lg:text-[64px] leading-[1.12] lg:leading-[1.06] tracking-normal hyphens-none break-normal overflow-visible">
              <span className="block max-w-full whitespace-normal">{headline}</span>
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
                onClick={(e) => handleAnchorClick(e as unknown as React.MouseEvent, 'contact')}
                className="inline-flex w-full items-center justify-center rounded-full border border-[#6B2335] bg-[#6B2335] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7E3043] hover:border-[#7E3043] sm:w-auto"
              >
                Discuss Your Project
              </a>

              <a
                href="#services"
                onClick={(e) => handleAnchorClick(e as unknown as React.MouseEvent, 'services')}
                className="inline-flex items-center justify-center rounded-full border border-line bg-transparent px-6 py-3 text-sm font-semibold text-offwhite transition hover:border-[#6B2335]"
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



