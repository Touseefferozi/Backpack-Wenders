'use client';

import Image from 'next/image';
import { Reveal } from '@/components/reveal';
import { useLanguage } from '@/components/language-provider';

export function AboutUsSection() {
  const { content } = useLanguage();

  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.3fr_1.1fr] lg:items-center">
          {/* Left Content */}
          <Reveal>
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  {content.about.headline}
                </h2>
              </div>

              <div className="space-y-5 lg:space-y-6">
                {content.about.content.map((paragraph, index) => (
                  <Reveal key={index}>
                    <p className="text-base leading-8 text-white/85 sm:text-lg sm:leading-8">
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right Image */}
          <Reveal>
            <div className="relative overflow-hidden rounded-[20px] h-72 sm:h-96 lg:h-[480px]">
              <Image
                src="/Images/Technical%20Field%20Operations.png"
                alt="Technical field operations dashboard and onsite team"
                fill
                className="object-cover"
                quality={90}
                priority
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
