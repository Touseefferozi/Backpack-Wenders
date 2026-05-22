import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { ScrollProgress } from '@/components/scroll-progress';
import { DeploymentModelSection } from '@/components/deployment-model-section';
import { ClosingCTASection } from '@/components/closing-cta-section';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Our Deployment Model | Backpack Wander GmbH',
  description: 'Structured delivery for enterprise clients and independent experts through a compliant global B2B model.'
};

export default function DeploymentModelPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <DeploymentModelSection />
        <ClosingCTASection />
      </main>
      <Footer />
    </>
  );
}