'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '@/components/reveal';
import { useLanguage } from '@/components/language-provider';

interface CarouselImage {
  src: string;
  title: string;
  description: string;
  alt: string;
  cta?: string;
}

type TranslatedSlide = {
  title?: string;
  description?: string;
  cta?: string;
};

export function ImageCarousel() {
  const images: CarouselImage[] = [
    {
      src: '/Images/WhatsApp Image 2026-05-22 at 4.41.12 PM.jpeg',
      title: 'Field Inspections & QA/QC',
      description: 'On-site QA/QC inspections, technical surveys and inspection reports to ensure compliance and safety.',
      alt: 'Field QA/QC inspection team performing site checks',
      cta: 'View Field Inspections'
    },
    {
      src: '/Images/Image (20).jpg',
      title: 'Offshore Monopile Projects',
      description: 'End-to-end monopile fabrication, load-out and offshore installation support for renewable energy projects.',
      alt: 'Offshore monopile installation and vessel operations',
      cta: 'View Offshore Projects'
    },
    {
      src: '/Images/Enterprise Project Management.png',
      title: 'Industrial Coordination & Reporting',
      description: 'Digital coordination systems, QA/QC reporting, and management dashboards for industrial execution.',
      alt: 'Industrial project management dashboard and coordination meeting',
      cta: 'Explore Coordination'
    },
    {
      src: '/Images/Image (11).jpg',
      title: 'Pipeline Inspection & QA/QC',
      description: 'Inline inspection, coating verification and pressure testing management for pipeline integrity and compliance.',
      alt: 'Pipeline construction and inspection activities',
      cta: 'Inspect Pipelines'
    },
    {
      src: '/Images/Image (13).jpg',
      title: 'Field Team Coordination',
      description: 'On-site coordination and technical oversight that keeps projects on schedule and within specification.',
      alt: 'Technicians coordinating field operations on site',
      cta: 'View Field Coordination'
    },
    {
      src: '/Images/Image (15).jpg',
      title: 'Data Center Infrastructure',
      description: 'Deployment support for mission-critical infrastructure including power, cooling and structured cabling.',
      alt: 'Data center mechanical and electrical infrastructure',
      cta: 'Explore Data Centers'
    },
    {
      src: '/Images/Data center critical.png',
      title: 'Quality Monitoring & Critical Facilities',
      description: 'Precision monitoring, documentation control and operational oversight for mission-critical environments.',
      alt: 'Critical facility inspection and monitoring',
      cta: 'See Monitoring'
    },
    {
      src: '/Images/Image (1).jpg',
      title: 'Project Management & Coordination',
      description: 'End-to-end project delivery, scheduling and stakeholder coordination to reduce risk and ensure milestones.',
      alt: 'Project planning and coordination meeting with technical drawings',
      cta: 'View Project Management'
    },
    {
      src: '/Images/Image (5).jpg',
      title: 'Industrial Operations',
      description: 'Operations support, maintenance planning and continuous improvement programs for industrial sites.',
      alt: 'Industrial operations and site workflow management',
      cta: 'Explore Operations'
    },
    {
      src: '/Images/Image (6).jpg',
      title: 'Technical Deployment & Commissioning',
      description: 'Deployment engineering, commissioning and technical mobilisation to bring systems online reliably.',
      alt: 'Technical deployment team carrying out commissioning tasks',
      cta: 'See Deployment Support'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 8000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 8000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 8000);
  };

  const currentImage = images[currentIndex] ?? images[0];
  // localized title/description/cta from language provider
  const { content } = useLanguage();
  const slideContent = (content.imageCarousel as unknown as { slides?: ReadonlyArray<TranslatedSlide> } | undefined)?.slides?.[currentIndex];
  const title = slideContent?.title ?? currentImage.title;
  const description = slideContent?.description ?? currentImage.description;
  const cta = slideContent?.cta ?? currentImage.cta;

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(215,164,74,0.20),transparent_42%),linear-gradient(180deg,#08110c_0%,#050805_100%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title section removed to avoid duplicating the hero headline */}

        <Reveal>
          <div className="rounded-[28px] border border-accent/10 bg-black/55 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-5 lg:p-6">
            <div className="grid grid-cols-1 overflow-hidden rounded-[22px] border border-white/5 bg-black/85 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 lg:min-h-[430px] lg:p-10">
                <div>
                  <motion.p
                    key={`eyebrow-${currentIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="text-[0.72rem] font-semibold uppercase tracking-[0.45em] text-accent"
                  >
                    Industrial Portfolio
                  </motion.p>

                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={`title-${currentIndex}`}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -18 }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      className="mt-5 max-w-2xl sm:max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.6rem] tracking-tight break-words whitespace-normal"
                    >
                      {title}
                    </motion.h3>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`desc-${currentIndex}`}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
                      className="mt-6 max-w-xl text-sm leading-7 text-white/82 sm:text-base sm:leading-7 lg:text-lg"
                    >
                      {description}
                    </motion.p>
                  </AnimatePresence>
                </div>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.16 }}
                  >
                      <button className="inline-flex w-full min-w-[190px] items-center justify-center rounded-full border border-white/85 bg-accent px-8 py-3 text-sm font-semibold text-black shadow-[0_0_28px_rgba(215,164,74,0.18)] transition duration-300 hover:bg-accent-soft hover:shadow-[0_0_34px_rgba(215,164,74,0.28)] sm:w-auto">
                      {cta ?? 'Explore Project'}
                    </button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span className="font-semibold text-accent">{String(currentIndex + 1).padStart(2, '0')}</span>
                    <span className="h-px w-6 bg-accent/30" />
                    <span className="text-white/45">{String(images.length).padStart(2, '0')}</span>
                  </motion.div>

                  <div className="flex items-center gap-3 pt-2">
                    <motion.button
                      onClick={prevSlide}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.94 }}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white transition hover:border-accent/30 hover:bg-white/5"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </motion.button>

                    <motion.button
                      onClick={nextSlide}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.94 }}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white transition hover:border-accent/30 hover:bg-white/5"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>
              </div>

              <motion.div
                className="relative min-h-[360px] overflow-hidden lg:min-h-[430px]"
                onMouseEnter={() => setAutoPlay(false)}
                onMouseLeave={() => setAutoPlay(true)}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.35 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.04, x: 24 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.98, x: -24 }}
                    transition={{ duration: 0.65, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentImage.src}
                      alt={currentImage.alt}
                      fill
                      className="object-cover"
                      quality={90}
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-black/10" />

                <motion.button
                  onClick={prevSlide}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white opacity-0 shadow-lg backdrop-blur-sm transition group-hover:opacity-100"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </motion.button>

                <motion.button
                  onClick={nextSlide}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white opacity-0 shadow-lg backdrop-blur-sm transition group-hover:opacity-100"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </Reveal>

        <motion.div
          className="mt-8 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'h-1.5 w-10 bg-accent'
                  : 'h-1.5 w-1.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
