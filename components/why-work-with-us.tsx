"use client";

import { useLanguage } from '@/components/language-provider';

export function WhyWorkWithUs() {
  const { content } = useLanguage();

  const items = content.disciplines.items.slice(0, 4);

  return (
    <section id="why" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold leading-[1.04] tracking-tight text-white sm:text-4xl lg:text-5xl">
          {content.disciplines.title}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <div key={idx} tabIndex={0} className="rounded-[12px] border border-white/6 bg-black/5 p-6 transition-colors duration-200 hover:border-[#6B2335] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2335]/30">
              <h3 className="font-display text-lg font-semibold text-white">{item}</h3>
              <p className="mt-3 text-[1rem] leading-7 text-white/82">{content.disciplines.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
