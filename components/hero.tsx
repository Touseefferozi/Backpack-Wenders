"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { SupportGateway } from '@/components/support-gateway';
import { useLanguage } from '@/components/language-provider';
import { translations } from '@/lib/translations';
import { siteConfig } from '@/lib/site';

export function Hero() {
  const { content, language } = useLanguage();

  const headline = content?.hero?.headline ?? translations.en.hero.headline;
  const subheadline = content?.hero?.subheadline ?? translations.en.hero.subheadline;
  const joinNetwork = content?.hero?.joinNetwork ?? translations.en.hero.joinNetwork;

  return (
    <section id="home" className="relative min-h-screen overflow-hidden border-b border-white/10 pt-20 sm:pt-24 lg:pt-28">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Images/banner-6.png"
          alt="Industrial field operations with technical planning and digital dashboards"
          fill
          className="object-cover object-center brightness-105"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-[#020304]/40" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,3,4,0.02)_0%,rgba(2,3,4,0.12)_42%,rgba(2,3,4,0.4)_68%,rgba(2,3,4,0.6)_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[78vh] items-center px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <Reveal>
          <div key={language} className="max-w-4xl space-y-6 text-left lg:space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-accent">
              Pipeline Quality | Primary Division
            </div>

            <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-offwhite sm:text-4xl lg:text-6xl">
              {(() => {
                const accentCandidates = [
                  'Trusted Technical Experts',
                  'Technical Experts',
                  'Trusted Technical Experts Worldwide',
                  'Technical Experts Worldwide'
                ];

                const accent = accentCandidates.find((t) => headline.includes(t));

                if (accent) {
                  const [pre, post] = headline.split(accent);
                  return (
                    <>
                      {pre && <span className="block">{pre.trim()}</span>}
                      <span className="block text-accent">{accent}</span>
                      {post && <span className="block">{post.trim()}</span>}
                    </>
                  );
                }

                // Fallback: split sentences into blocks for nicer line breaks
                const sentences = headline.split('. ').filter(Boolean);
                return (
                  <>
                    {sentences.map((s, i) => (
                      <span key={i} className="block">
                        {s.trim()}{i < sentences.length - 1 ? '.' : ''}
                      </span>
                    ))}
                  </>
                );
              })()}
            </h1>

            <p className="max-w-2xl text-base leading-7 text-offwhite/84 sm:text-lg sm:leading-8">
              {subheadline}
            </p>

            <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:gap-4">
              <SupportGateway />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-offwhite transition hover:border-accent/35 hover:bg-white/8"
              >
                {joinNetwork}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}



