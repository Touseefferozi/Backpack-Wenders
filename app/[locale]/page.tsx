import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { ScrollProgress } from '@/components/scroll-progress';
import { Hero } from '@/components/hero';
import { AboutUsSection } from '@/components/about-us-section';
import { InfrastructureSection } from '@/components/infrastructure-section';
import { IndustriesShowcase } from '@/components/industries-showcase';
import { DisciplinesSection } from '@/components/disciplines-section';
import { StandardsSection } from '@/components/standards-section';
import { ImageCarousel } from '@/components/image-carousel';
import { DeploymentModelSection } from '@/components/deployment-model-section';
import { ClosingCTASection } from '@/components/closing-cta-section';
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
        <InfrastructureSection />
        <IndustriesShowcase />
        <ImageCarousel />
        <DisciplinesSection />
        <StandardsSection />
        <DeploymentModelSection />
        <ClosingCTASection />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
