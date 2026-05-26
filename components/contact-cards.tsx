"use client";

import { useLanguage } from '@/components/language-provider';
import { footerInfo } from '@/lib/site';

export default function ContactCards() {
  const { content } = useLanguage();

  return (
    <section className="space-y-8">
      <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
        <h2 className="text-2xl font-semibold text-white">{content.contactPage.card.projectCoordinationTitle}</h2>

        <div className="mt-8 space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">{content.contactPage.card.officeLabel}</p>
            <p className="mt-2 text-sm leading-6 text-offwhite/82">{content.contactPage.card.officeLines[0]}<br />{content.contactPage.card.officeLines[1]}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">{content.contactPage.card.responseWindowLabel}</p>
            <p className="mt-2 text-sm leading-6 text-offwhite/82">{content.contactPage.card.responseWindowText}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">{content.contactPage.card.emailLabel}</p>
            <a href={`mailto:${footerInfo.email}`} className="mt-2 block text-sm leading-6 text-offwhite/82 transition hover:text-accent">
              {footerInfo.email}
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">{content.contactPage.card.focusLabel}</p>
            <p className="mt-2 text-sm leading-6 text-offwhite/82">{content.contactPage.card.focusText}</p>
          </div>
        </div>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
        <h2 className="text-2xl font-semibold text-white">{content.contactPage.card.primaryDivisionTitle}</h2>
        <p className="mt-4 text-sm leading-7 text-offwhite/82">
          {content.contactPage.card.primaryDivisionText}
        </p>
      </div>
    </section>
  );
}
