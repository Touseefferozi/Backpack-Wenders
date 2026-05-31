"use client";

import { Reveal } from '@/components/reveal';

export function WhyWorkWithUs() {
  return (
    <section id="why-work" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Why Clients Choose Backpack Wander
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-[12px] border border-white/6 bg-black/5 p-6">
                <h3 className="font-display text-lg font-semibold text-white">Practical Experience</h3>
                <p className="mt-3 text-[1rem] leading-7 text-white/82">Experience gained through direct participation in industrial projects and manufacturing environments.</p>
              </div>

              <div className="rounded-[12px] border border-white/6 bg-black/5 p-6">
                <h3 className="font-display text-lg font-semibold text-white">Quality Focus</h3>
                <p className="mt-3 text-[1rem] leading-7 text-white/82">Strong commitment to quality standards, compliance requirements and project documentation.</p>
              </div>

              <div className="rounded-[12px] border border-white/6 bg-black/5 p-6">
                <h3 className="font-display text-lg font-semibold text-white">Flexible Support</h3>
                <p className="mt-3 text-[1rem] leading-7 text-white/82">Support available both on-site and remotely depending on project requirements.</p>
              </div>

              <div className="rounded-[12px] border border-white/6 bg-black/5 p-6">
                <h3 className="font-display text-lg font-semibold text-white">Professional Network</h3>
                <p className="mt-3 text-[1rem] leading-7 text-white/82">Growing network of engineers, inspectors and technical specialists available for future project collaboration.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
