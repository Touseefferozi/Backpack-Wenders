import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { ScrollProgress } from '@/components/scroll-progress';
import { InfrastructureSection } from '@/components/infrastructure-section';
import { DisciplinesSection } from '@/components/disciplines-section';
import { StandardsSection } from '@/components/standards-section';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Industries | Backpack Wander GmbH',
  description: 'Technical deployment across offshore wind, heavy industry, pipelines, refineries, and mission-critical infrastructure.'
};

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