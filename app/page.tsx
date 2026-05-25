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
import { buildPageMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata(
    'Industrial Engineering Oversight | Backpack Wander GmbH',
    siteConfig.description,
    '/'
  );
}

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
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
