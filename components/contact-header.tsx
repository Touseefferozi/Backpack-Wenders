'use client';

import { useLanguage } from '@/components/language-provider';

export function ContactHeader() {
  const { content } = useLanguage();

  return (
    <div className="mb-16 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-surface/40 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-offwhite/90">
        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
        {content.contactPage.title}
      </div>

      <h1 className="mt-6 text-5xl font-bold tracking-tight text-offwhite sm:text-6xl">
        {content.contactPage.title}
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-offwhite/75">
        {content.contactPage.subtitle}
      </p>
    </div>
  );
}
