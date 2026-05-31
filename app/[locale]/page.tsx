import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { ScrollProgress } from '@/components/scroll-progress';
import { Hero } from '@/components/hero';
import { AboutUsSection } from '@/components/about-us-section';
import { ServicesSection } from '@/components/services-section';
import { PipelineQualitySection } from '@/components/pipeline-quality-section';
import { WhyWorkWithUs } from '@/components/why-work-with-us';
import { IndustriesShowcase } from '@/components/industries-showcase';
// InfrastructureSection temporarily removed per request
// IndustriesShowcase temporarily removed per request
// DeploymentModelSection temporarily removed per request
// ClosingCTASection removed per request
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { siteConfig } from '@/lib/site';
import { buildLocalizedPageMetadata } from '@/lib/seo';
import { getLocalizedUrl, isLocale, type Locale, locales } from '@/lib/routing';

const pageContent: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'Industrial Engineering Oversight | Backpack Wander GmbH',
    description: siteConfig.description
  },
  de: {
    title: 'Industrielle technische Überwachung | Backpack Wander GmbH',
    description:
      'Backpack Wander GmbH bietet QA/QC-Überwachung, Offshore-Wind-Expertise, technische Dokumentation und ingenieurtechnische Koordination für internationale Industrieprojekte.'
  }
} as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : 'en';
  const content = pageContent[locale];

  return buildLocalizedPageMetadata(locale, content.title, content.description, '/');
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : 'en';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: getLocalizedUrl(locale, '/'),
    description: siteConfig.description
  };

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <AboutUsSection />
        <ServicesSection />
        <PipelineQualitySection />
        <IndustriesShowcase />
        <WhyWorkWithUs />
        {/* InfrastructureSection removed temporarily */}
        {/* IndustriesShowcase removed temporarily */}
        {/* DeploymentModelSection removed temporarily */}
        {/* Closing CTA removed per request */}
        <ContactSection />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
