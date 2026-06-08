'use client';

import Link from 'next/link';
import { ArrowUpRight, Linkedin, MapPin } from 'lucide-react';
import { footerInfo, technicalDivisions } from '@/lib/site';
import { useLanguage } from '@/components/language-provider';
import { getLocalizedPath } from '@/lib/routing';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="section-card-title footer-col-heading text-offwhite">
      {children}
      <span className="footer-heading-accent" />
    </h4>
  );
}

export function Footer() {
  const { content, language } = useLanguage();
  const homeHref = getLocalizedPath(language, '/');

  const siteLinks = [
    { href: homeHref, label: content.nav.home },
    { href: `${homeHref}#about`, label: content.footer.links.about },
    { href: `${homeHref}#services`, label: content.nav.services },
    { href: `${homeHref}#industries`, label: content.footer.links.industries },
    { href: `${homeHref}#contact`, label: content.footer.links.contact }
  ];

  const legalLinks = [
    { href: getLocalizedPath(language, '/privacy'), label: content.footer.links.privacy },
    { href: getLocalizedPath(language, '/terms'), label: content.footer.links.terms },
    { href: getLocalizedPath(language, '/impressum'), label: content.footer.links.impressum }
  ];

  return (
    <footer className="footer-shell bg-background">
      <div className="section-shell">
        <div className="footer-grid">
          <div className="footer-col footer-col-brand">
            <h3 className="section-card-title footer-brand text-offwhite">
              Backpack <span className="highlight-green">Wander GmbH</span>
              <span className="footer-heading-accent" />
            </h3>
            <p className="footer-text footer-brand-copy type-body text-secondaryText">
              <span className="footer-brand-copy-desktop">
                {content.footer.brandDescriptionLines.map((line) => (
                  <span key={line} className="footer-brand-copy-line">
                    {line}
                  </span>
                ))}
              </span>
              <span className="footer-brand-copy-mobile">
                {content.footer.brandDescriptionLines.join(' ')}
              </span>
            </p>
            <ul className="footer-divisions">
              {technicalDivisions.map((division) => (
                <li key={division.url}>
                  <a
                    href={division.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link type-body footer-link-external footer-link-accent group"
                  >
                    <span>{division.label}</span>
                    <ArrowUpRight className="footer-link-icon" strokeWidth={1.75} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <FooterHeading>{content.footer.navigation}</FooterHeading>
            <ul className="footer-links">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-link type-body">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <FooterHeading>{content.footer.contactLegal}</FooterHeading>
            <div className="footer-contact">
              <a href={`mailto:${footerInfo.email}`} className="footer-link type-body footer-link-accent">
                {footerInfo.email}
              </a>
              <a
                href={footerInfo.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link type-body footer-link-external footer-link-accent group"
                aria-label={`WhatsApp ${footerInfo.whatsapp.display}`}
              >
                <WhatsAppIcon className="footer-whatsapp-icon h-4 w-4 shrink-0" />
                <span>{footerInfo.whatsapp.display}</span>
              </a>
              <p className="footer-contact-address footer-link-external type-body text-secondaryText">
                <MapPin className="footer-address-icon h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                <span>{content.footer.address}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-meta type-body text-secondaryText">{content.footer.rights}</p>

          <nav className="footer-legal" aria-label={content.footer.legal}>
            <ul className="footer-legal-links">
              {legalLinks.slice(0, 2).map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link href={link.href} className="footer-link type-body">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="footer-link type-body">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
              <li className="footer-legal-trailing">
                {legalLinks[2].href.startsWith('/') ? (
                  <Link href={legalLinks[2].href} className="footer-link type-body">
                    {legalLinks[2].label}
                  </Link>
                ) : (
                  <a href={legalLinks[2].href} className="footer-link type-body">
                    {legalLinks[2].label}
                  </a>
                )}
                <a
                  href={footerInfo.socialLinks[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="footer-social"
                >
                  <Linkedin className="h-4 w-4" strokeWidth={1.75} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
