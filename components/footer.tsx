'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Linkedin, Mail, MapPin } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { footerInfo, technicalDivisions } from '@/lib/site';
import { useLanguage } from '@/components/language-provider';
import { getLocalizedPath } from '@/lib/routing';

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="section-card-title footer-col-heading text-offwhite">
      {children}
      <span className="footer-heading-accent" />
    </h4>
  );
}

function normalizePath(path: string) {
  return (path || '/').replace(/\/$/, '') || '/';
}

export function Footer() {
  const { content, language } = useLanguage();
  const pathname = usePathname();
  const homeHref = getLocalizedPath(language, '/');
  const isOnHomePage = normalizePath(pathname || '/') === normalizePath(homeHref);

  const siteLinks = [
    { id: 'home', href: homeHref, label: content.nav.home },
    { id: 'about', href: `${homeHref}#about`, label: content.footer.links.about },
    { id: 'services', href: `${homeHref}#services`, label: content.nav.services },
    { id: 'industries', href: `${homeHref}#industries`, label: content.footer.links.industries },
    { id: 'contact', href: `${homeHref}#contact`, label: content.footer.links.contact }
  ];

  const legalLinks = [
    {
      href: getLocalizedPath(language, '/privacy'),
      label: content.footer.links.privacy,
      shortLabel: content.footer.links.privacyShort
    },
    {
      href: getLocalizedPath(language, '/terms'),
      label: content.footer.links.terms,
      shortLabel: content.footer.links.termsShort
    },
    {
      href: getLocalizedPath(language, '/impressum'),
      label: content.footer.links.impressum,
      shortLabel: content.footer.links.impressumShort
    }
  ];

  return (
    <footer className="footer-shell bg-background">
      <div className="section-shell">
        <div className="footer-grid">
          <div className="footer-col footer-col-brand">
            <h3 className="section-card-title footer-brand text-offwhite">
              Backpack Wander <span className="highlight-green">GmbH</span>
              <span className="footer-heading-accent" />
            </h3>
            <p className="footer-text footer-brand-copy text-secondaryText">
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
                    className={`footer-link footer-link-external group${
                      division.label === 'Pipeline Quality' ? ' footer-link-accent' : ''
                    }`}
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
                  <a
                    href={link.href}
                    className={`footer-link${link.id === 'home' && isOnHomePage ? ' footer-link-active' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <FooterHeading>
              <span className="footer-contact-heading">GmbH</span>
            </FooterHeading>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <MapPin className="footer-contact-icon" strokeWidth={1.75} aria-hidden />
                <p className="footer-contact-text">{content.footer.address}</p>
              </div>
              <div className="footer-contact-item">
                <Mail className="footer-contact-icon" strokeWidth={1.75} aria-hidden />
                <a
                  href={`mailto:${footerInfo.email}`}
                  className="footer-contact-text footer-contact-text-accent"
                  aria-label={`${content.footer.email}: ${footerInfo.email}`}
                >
                  {footerInfo.email}
                </a>
              </div>
              <div className="footer-contact-item">
                <WhatsAppIcon className="footer-contact-icon" />
                <a
                  href={footerInfo.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-text footer-contact-text-accent"
                  aria-label={`${content.footer.whatsapp}: ${footerInfo.whatsapp.display}`}
                >
                  {footerInfo.whatsapp.display}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider" aria-hidden />

        <div className="footer-bottom">
          <p className="footer-meta">{content.footer.rights}</p>

          <nav className="footer-legal" aria-label={content.footer.legal}>
            <ul className="footer-legal-links">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link href={link.href} className="footer-link footer-legal-link">
                      <span className="footer-legal-label-full">{link.label}</span>
                      <span className="footer-legal-label-short">{link.shortLabel}</span>
                    </Link>
                  ) : (
                    <a href={link.href} className="footer-link footer-legal-link">
                      <span className="footer-legal-label-full">{link.label}</span>
                      <span className="footer-legal-label-short">{link.shortLabel}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <a
              href={footerInfo.socialLinks[0].url}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="footer-social footer-bottom-social"
            >
              <Linkedin strokeWidth={1.75} aria-hidden />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
