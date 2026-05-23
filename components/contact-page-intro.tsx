'use client';

import { useLanguage } from '@/components/language-provider';

export function ContactPageIntro() {
  const { content } = useLanguage();

  return (
    <div>
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-[rgba(134,239,172,0.10)] px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-emerald-50/80">
        Contact
      </div>
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{content.contactPage.title}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50/68">{content.contactPage.subtitle}</p>
    </div>
  );
}