'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { technicalDivisions } from '@/lib/site';
import { useLanguage } from '@/components/language-provider';

function LanguageFlag({ code }: { code: 'en' | 'de' }) {
  if (code === 'de') {
    return (
      <svg viewBox="0 0 24 16" className="h-4 w-6 overflow-hidden rounded-sm border border-white/15 shadow-sm" aria-hidden="true">
        <rect width="24" height="16" fill="#000000" />
        <rect y="5.33" width="24" height="5.34" fill="#dd0000" />
        <rect y="10.67" width="24" height="5.33" fill="#ffce00" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 16" className="h-4 w-6 overflow-hidden rounded-sm border border-white/15 shadow-sm" aria-hidden="true">
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
  const ecosystemDropdownRef = useRef<HTMLDivElement | null>(null);
  const languageDropdownRef = useRef<HTMLDivElement | null>(null);
  const { content, language, options, setLanguage } = useLanguage();
  const selectedLanguage = options.find((option) => option.code === language) ?? options[0];

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
  };

  const navigation = [
    { label: content.nav.about, href: '/about' },
    { label: content.nav.industries, href: '/industries' },
    { label: content.nav.deployment, href: '/deployment-model' },
    { label: content.nav.contact, href: '/contact' }
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
        ? 'border-white/5 bg-black/60 backdrop-blur-md'
        : 'border-white/10 bg-white/4 bg-clip-padding backdrop-blur-md'
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
          <span className="hidden text-sm font-semibold tracking-[0.28em] text-white sm:inline">
            BACKPACK WANDER
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-accent"
            >
              {item.label}
            </Link>
          ))}

          <div className="relative" ref={ecosystemDropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen((value) => !value)}
              className="inline-flex items-center gap-1 text-sm text-slate-300 transition hover:text-accent"
            >
              {content.nav.ecosystem} <ChevronDown className="h-4 w-4" />
            </button>

            {dropdownOpen ? (
              <div className="absolute right-0 top-10 w-64 overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-industrial">
                {technicalDivisions.map((division) => (
                  <a
                    key={division.label}
                    href={division.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border-b border-white/10 px-4 py-4 text-sm transition last:border-b-0 hover:bg-white/5"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <div className="font-semibold text-white">{division.label}</div>
                    <div className="mt-1 text-xs text-slate-400">{divisionDescriptions[division.label as 'Pipeline Quality' | 'BW Digit']}</div>
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <div className="relative" ref={languageDropdownRef}>
            <button
              type="button"
              onClick={() => setLanguageOpen((value) => !value)}
              className="inline-flex min-w-[160px] items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-accent/40"
              aria-label={content.nav.selectLanguage}
            >
              <span className="inline-flex items-center gap-2 font-medium">
                <LanguageFlag code={selectedLanguage.code} />
                <span>{selectedLanguage.label}</span>
              </span>
              <ChevronDown className={`h-4 w-4 transition ${languageOpen ? 'rotate-180' : ''}`} />
            </button>

            {languageOpen ? (
              <div className="absolute right-0 top-12 w-52 overflow-hidden rounded-xl border border-white/10 bg-surface shadow-industrial">
                {options.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => handleLanguageSelect(option.code)}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-white transition hover:bg-white/5"
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
          className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-background px-4 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:px-2">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-slate-200 transition hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{content.nav.ecosystem}</p>
              <div className="mt-3 grid gap-2">
                {technicalDivisions.map((division) => (
                  <a
                    key={division.label}
                    href={division.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                  >
                    <div className="font-semibold">{division.label}</div>
                    <div className="text-xs text-slate-400">{divisionDescriptions[division.label as 'Pipeline Quality' | 'BW Digit']}</div>
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
