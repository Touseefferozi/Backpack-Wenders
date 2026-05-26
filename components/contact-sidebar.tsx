"use client";

import { useLanguage } from '@/components/language-provider';
import { ContactForm } from '@/components/contact-form';

export default function ContactSidebar() {
  const { content } = useLanguage();

  return (
    <section className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 h-fit lg:sticky lg:top-32">
      <h2 className="text-2xl font-semibold text-white">{content.contactPage.card.sendEnquiryTitle}</h2>
      <p className="mt-2 text-sm text-offwhite/75">{content.contactPage.card.sendEnquirySubtitle}</p>
      
      <ContactForm />
    </section>
  );
}
