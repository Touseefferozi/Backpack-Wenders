'use client';

import { Reveal } from '@/components/reveal';
import { useLanguage } from '@/components/language-provider';

export function AboutUsSection() {
  const { content } = useLanguage();

  return (
    <section id="about" className="relative border-b border-white/10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mt-4 font-display text-[2.55rem] font-semibold leading-[1.6] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {content.about.headline}
            </h2>

            <div className="mt-6 space-y-4">
              {content.about.content.map((p, idx) => (
                <p key={idx} className="text-[1.02rem] leading-[1.6] text-white/82 sm:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="relative h-72 overflow-hidden rounded-2xl border border-white/10 bg-[#071011]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
