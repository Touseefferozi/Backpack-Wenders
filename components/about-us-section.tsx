'use client';

import Image from 'next/image';
import { Reveal } from '@/components/reveal';
import { useLanguage } from '@/components/language-provider';

export function AboutUsSection() {
  const { content } = useLanguage();

  return (
    <section id="about" className="relative border-b border-white/10 py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(74,222,128,0.08),transparent_40%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.1fr_1.3fr] lg:items-center">
          {/* Left Content */}
          <Reveal>
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  {content.about.headline}
                </h2>
              </div>

              <div className="space-y-6 lg:space-y-7">
                {content.about.content.map((paragraph, index) => (
                  <Reveal key={index}>
                    <p className="text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right Image */}
          <Reveal>
            <div className="relative group overflow-hidden rounded-[32px] border border-white/10 shadow-industrial h-96 sm:h-[440px] lg:h-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=800&fit=crop"
                alt="QA/QC engineers in the field"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                quality={90}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent opacity-0 transition group-hover:opacity-100 duration-300" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
