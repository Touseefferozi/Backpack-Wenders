'use client';

import { useLanguage } from '@/components/language-provider';

export function ContactPageIntro() {
  const { content } = useLanguage();

  return (
    <>
      <h1 className="text-4xl font-bold text-white sm:text-5xl">{content.contactPage.title}</h1>
      <p className="mt-4 text-lg text-slate-400">{content.contactPage.subtitle}</p>
    </>
  );
}