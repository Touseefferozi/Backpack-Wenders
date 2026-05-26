'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { technicalDivisions } from '@/lib/site';
import { useLanguage } from '@/components/language-provider';
import { getLocalizedPath } from '@/lib/routing';
import { siteConfig } from '@/lib/site';

function LanguageFlag({ code }: { code: 'en' | 'de' }) {
    if (code === 'de') {
    return (
      <svg viewBox="0 0 24 16" className="h-4 w-6 overflow-hidden rounded-sm border border-line shadow-sm" aria-hidden="true">
        <rect width="24" height="16" fill="#000000" />
        <rect y="5.33" width="24" height="5.34" fill="#dd0000" />
        <rect y="10.67" width="24" height="5.33" fill="#ffce00" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 16" className="h-4 w-6 overflow-hidden rounded-sm border border-line shadow-sm" aria-hidden="true">
      <rect width="24" height="16" fill="#012169" />
      <path d="M0 0 L24 16 M24 0 L0 16" stroke="#ffffff" strokeWidth="3.2" />
      <path d="M0 0 L24 16 M24 0 L0 16" stroke="#C8102E" strokeWidth="1.6" />
      <rect x="9.25" width="5.5" height="16" fill="#ffffff" />
      <rect y="5.25" width="24" height="5.5" fill="#ffffff" />
      <rect x="10.2" width="3.6" height="16" fill="#C8102E" />
      <rect y="6.2" width="24" height="3.6" fill="#C8102E" />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const ecosystemDropdownRef = useRef<HTMLDivElement | null>(null);
  const languageDropdownRef = useRef<HTMLDivElement | null>(null);
  const { content, language, options, setLanguage } = useLanguage();
  const selectedLanguage = options.find((option) => option.code === language) ?? options[0];

  const localizedPath = (path: string) => getLocalizedPath(language, path);
  const currentPath = pathname || '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (ecosystemDropdownRef.current && !ecosystemDropdownRef.current.contains(target)) {
        setDropdownOpen(false);
      }

      if (languageDropdownRef.current && !languageDropdownRef.current.contains(target)) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (code: 'en' | 'de') => {
    setLanguage(code);
    setLanguageOpen(false);

    if (typeof window === 'undefined') {
      return;
    }

    const pathWithoutLocale = currentPath.replace(/^\/(en|de)(?=\/|$)/, '') || '/';
    const targetPath = pathWithoutLocale === '/' ? `/${code}` : `/${code}${pathWithoutLocale}`;
    const targetUrl = new URL(targetPath, siteConfig.domains[code]);
    window.location.href = targetUrl.toString();
  };

  const navigation = [
    { label: content.nav.about, href: localizedPath('/about') },
    { label: content.nav.industries, href: localizedPath('/industries') },
    { label: content.nav.deployment, href: localizedPath('/deployment-model') },
    { label: content.nav.contact, href: localizedPath('/contact') }
  ];

  const divisionDescriptions =
    language === 'de'
      ? {
          'Pipeline Quality': 'QA/QC, Inspektion & Inbetriebnahme',
          'BW Digit': 'Industrielle Software & digitale technische Lösungen'
        }
      : {
          'Pipeline Quality': 'QA/QC, Inspection & Commissioning',
          'BW Digit': 'Industrial Software & Technical Digital Solutions'
        };

  return (
    <header className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
      isScrolled
        ? 'border-line bg-background/60 backdrop-blur-md'
        : 'border-line bg-background/4 bg-clip-padding backdrop-blur-md'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Images/logo.png"
            alt="Backpack Wander logo"
            width={140}
            height={40}
            priority
            className="h-10 w-auto object-contain"
          />
          <span className="hidden text-sm font-semibold tracking-[0.28em] text-offwhite sm:inline">
            BACKPACK WANDER
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-offwhite/70 transition hover:text-accent"
            >
              {item.label}
            </Link>
          ))}

          <div className="relative" ref={ecosystemDropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen((value) => !value)}
              className="inline-flex items-center gap-1 text-sm text-offwhite/70 transition hover:text-accent"
            >
              {content.nav.ecosystem} <ChevronDown className="h-4 w-4" />
            </button>

            {dropdownOpen ? (
              <div className="absolute right-0 top-10 w-64 overflow-hidden rounded-2xl border border-line bg-surface shadow-industrial">
                {technicalDivisions.map((division) => (
                  <a
                    key={division.label}
                    href={division.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border-b border-line px-4 py-4 text-sm transition last:border-b-0 hover:bg-surface/70"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <div className="font-semibold text-offwhite">{division.label}</div>
                    <div className="mt-1 text-xs text-offwhite/70">{divisionDescriptions[division.label as 'Pipeline Quality' | 'BW Digit']}</div>
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <div className="relative" ref={languageDropdownRef}>
            <button
              type="button"
              onClick={() => setLanguageOpen((value) => !value)}
              className="inline-flex min-w-[160px] items-center justify-between gap-3 rounded-lg border border-line bg-white/3 px-4 py-2 text-sm text-offwhite transition hover:border-accent/40"
              aria-label={content.nav.selectLanguage}
            >
              <span className="inline-flex items-center gap-2 font-medium">
                <LanguageFlag code={selectedLanguage.code} />
                <span>{selectedLanguage.label}</span>
              </span>
              <ChevronDown className={`h-4 w-4 transition ${languageOpen ? 'rotate-180' : ''}`} />
            </button>

              {languageOpen ? (
              <div className="absolute right-0 top-12 w-52 overflow-hidden rounded-xl border border-line bg-surface shadow-industrial">
                {options.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => handleLanguageSelect(option.code)}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-offwhite transition hover:bg-surface/70"
                  >
                    <LanguageFlag code={option.code} />
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-line bg-white/3 p-2 text-offwhite lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-line bg-background px-4 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:px-2">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-offwhite/70 transition hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-[0.28em] text-offwhite/60">{content.nav.ecosystem}</p>
              <div className="mt-3 grid gap-2">
                {technicalDivisions.map((division) => (
                  <a
                    key={division.label}
                    href={division.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-line bg-white/3 px-4 py-3 text-sm text-offwhite/70"
                  >
                    <div className="font-semibold">{division.label}</div>
                    <div className="text-xs text-offwhite/70">{divisionDescriptions[division.label as 'Pipeline Quality' | 'BW Digit']}</div>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{content.nav.language}</p>
              <div className="mt-3 grid gap-2">
                {options.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => {
                      handleLanguageSelect(option.code);
                      setOpen(false);
                    }}
                    className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                  >
                    <LanguageFlag code={option.code} />
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
