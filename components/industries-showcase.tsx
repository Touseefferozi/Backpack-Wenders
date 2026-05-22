'use client';

import Image from 'next/image';
import { Reveal } from '@/components/reveal';

interface IndustryCard {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export function IndustriesShowcase() {
  const industries: IndustryCard[] = [
    {
      title: 'Offshore & Renewable Energy',
      description: 'Monopiles, offshore wind platforms, and subsea infrastructure QA/QC',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&h=600&fit=crop',
      alt: 'Offshore wind turbine platform'
    },
    {
      title: 'Pipelines & Refineries',
      description: 'High-pressure pipeline systems and refinery infrastructure inspection',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=600&fit=crop',
      alt: 'Industrial pipeline infrastructure'
    },
    {
      title: 'Heavy Construction',
      description: 'Large-scale industrial construction, welding, and structural integrity',
      image: 'https://images.unsplash.com/photo-1581092162080-8cae941b4676?w=600&h=600&fit=crop',
      alt: 'Heavy construction site with workers'
    },
    {
      title: 'Data Centers & Critical Facilities',
      description: 'Mission-critical infrastructure deployment and commissioning oversight',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
      alt: 'Data center server infrastructure'
    },
    {
      title: 'Technical Field Operations',
      description: 'On-site QA/QC coordination, NDT inspection, and quality assurance',
      image: 'https://images.unsplash.com/photo-1581092918692-8d1d08d1a4b0?w=600&h=600&fit=crop',
      alt: 'Technical field inspection'
    },
    {
      title: 'Enterprise Project Management',
      description: 'Digital coordination systems and real-time project tracking dashboards',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop',
      alt: 'Technical team meeting'
    }
  ];

  return (
    <section className="border-b border-white/10 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="mb-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent/80">
              Global Expertise
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Industries We Serve
            </h2>
            <p className="mt-6 mx-auto max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              From offshore energy to mission-critical facilities, we deploy precision expertise across industrial sectors worldwide.
            </p>
          </div>
        </Reveal>

        {/* Image Grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Reveal key={industry.title}>
              <div className="group relative h-72 overflow-hidden rounded-[24px] border border-white/10 shadow-industrial transition duration-300 hover:border-accent/30 hover:shadow-lg">
                {/* Background Image */}
                <Image
                  src={industry.image}
                  alt={industry.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                  quality={85}
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent opacity-0 transition group-hover:opacity-100" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  <h3 className="text-lg font-bold leading-tight text-white sm:text-xl">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300 line-clamp-2">
                    {industry.description}
                  </p>
                </div>

                {/* Hover Indicator */}
                <div className="absolute top-0 right-0 m-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm opacity-0 transition group-hover:opacity-100">
                  <span className="text-sm font-semibold text-white">→</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
