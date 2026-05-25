import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { ScrollProgress } from '@/components/scroll-progress';
import { InfrastructureSection } from '@/components/infrastructure-section';
import { DisciplinesSection } from '@/components/disciplines-section';
import { StandardsSection } from '@/components/standards-section';
import { Footer } from '@/components/footer';
import { buildPageMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata(
    'Industries | Backpack Wander GmbH',
    'Offshore wind, pipelines, refineries, heavy industry, and critical facilities supported through QA/QC and technical oversight.',
    '/industries'
  );
}

export default function IndustriesPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <InfrastructureSection />
        <DisciplinesSection />
        <StandardsSection />
      </main>
      <Footer />
    </>
  );
}