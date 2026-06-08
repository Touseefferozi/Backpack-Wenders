'use client';

import { ContactFormUI } from '@/components/contact-form-ui';
import { useLanguage } from '@/components/language-provider';

export function ContactSection() {
  const { content } = useLanguage();
  const section = content.homeContact;
  const { contactNote } = content.footer;

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-surface">
      <div className="absolute inset-0 -z-10 bg-surfaceAlt" aria-hidden />

      <div className="section-shell">
        <h2 className="section-title w-full text-center text-offwhite">{section.title}</h2>

        <div id="contact-form" className="contact-section-form contact-section-layout mx-auto mt-8 w-full max-w-xl">
          <ContactFormUI variant="home" className="contact-form--home" />
        </div>

        <div className="contact-section-copy">
          <p className="contact-section-intro type-body text-offwhite">
            <span className="contact-section-intro-desktop">
              {section.introLines.map((line) => (
                <span key={line} className="contact-section-intro-line">
                  {line}
                </span>
              ))}
            </span>
            <span className="contact-section-intro-mobile">
              {section.introLinesMobile.map((line) => (
                <span key={line} className="contact-section-intro-line">
                  {line}
                </span>
              ))}
              <span className="contact-section-intro-line contact-section-note-line text-secondaryText">
                {contactNote}
              </span>
            </span>
          </p>
          <p className="contact-section-response contact-section-response-desktop type-body text-secondaryText">
            {contactNote}
          </p>
        </div>
      </div>
    </section>
  );
}
