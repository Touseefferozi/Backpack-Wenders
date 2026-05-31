'use client';

import { Linkedin } from 'lucide-react';
import { footerInfo, technicalDivisions } from '@/lib/site';
import { useLanguage } from '@/components/language-provider';
import { getLocalizedPath } from '@/lib/routing';

export function Footer() {
  const { content, language } = useLanguage();
  const homeHref = getLocalizedPath(language, '/');

  const divisionDescriptions =
    language === 'de'
      ? {
          'Pipeline Quality': 'Primäre industrielle Qualitäts- und Überwachungsdivision',
          'BW Digit': 'Unterstützende digitale Dokumentations- und Workflow-Systeme'
        }
      : {
          'Pipeline Quality': 'Primary industrial quality and oversight division',
          'BW Digit': 'Supporting digital documentation and workflow systems'
        };

  return (
    <footer className="border-t border-line bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-offwhite">Backpack Wander GmbH</h3>
            <p className="mt-2 text-sm font-semibold text-offwhite">{content.footer.brandDescription}</p>
            <p className="mt-2 text-sm text-offwhite/70">{content.footer.divisions}</p>
            <p className="mt-6 text-sm leading-6 text-offwhite/70">Industrial Engineering • Quality Assurance • Project Support</p>
          </div>

          {/* Technical Divisions */}
          <div>
            <h4 className="font-semibold text-offwhite">{content.footer.divisions}</h4>
            <ul className="mt-4 space-y-4">
              {technicalDivisions.map((division) => (
                <li key={division.label}>
                  <a
                    href={division.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-offwhite/70 transition hover:text-accent"
                  >
                    <div className="font-medium text-white">{division.label}</div>
                    <div className="mt-1 text-xs text-offwhite/60">{divisionDescriptions[division.label as 'Pipeline Quality' | 'BW Digit']}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="font-semibold text-offwhite">{content.footer.company}</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`${homeHref}#about`} className="text-sm text-slate-400 transition hover:text-accent">
                  {content.footer.links.about}
                </a>
              </li>
              <li>
                <a href={`${homeHref}#industries`} className="text-sm text-slate-400 transition hover:text-accent">
                  {content.footer.links.industries}
                </a>
              </li>
              <li>
                <a href={`${homeHref}#contact`} className="text-sm text-slate-400 transition hover:text-accent">
                  {content.footer.links.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-offwhite">{content.footer.contactLegal}</h4>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-xs text-offwhite/60">{content.footer.email}</p>
                <a
                  href={`mailto:${footerInfo.email}`}
                  className="mt-1 text-sm text-offwhite/70 transition hover:text-accent"
                >
                  {footerInfo.email}
                </a>
              </div>
              <div className="pt-2">
                <p className="text-xs text-offwhite/60">{content.footer.legal}</p>
                <div className="mt-2 space-y-2 text-sm">
                  <a href="#" className="block text-offwhite/70 transition hover:text-accent">
                    {content.footer.links.privacy}
                  </a>
                  <a href="#" className="block text-offwhite/70 transition hover:text-accent">
                    {content.footer.links.terms}
                  </a>
                  <a href="#" className="block text-offwhite/70 transition hover:text-accent">
                    {content.footer.links.impressum}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-white/10" />

        {/* Bottom footer */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-start">
          <p className="text-center text-sm text-offwhite/60 sm:text-left">
            {content.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="text-slate-400 transition hover:text-accent"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

