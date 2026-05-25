import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { ScrollProgress } from '@/components/scroll-progress';
import { DeploymentModelSection } from '@/components/deployment-model-section';
import { ClosingCTASection } from '@/components/closing-cta-section';
import { Footer } from '@/components/footer';
import { buildPageMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata(
    'Deployment Model | Backpack Wander GmbH',
    'A primary industrial quality division supported by a secondary digital division for technical delivery and documentation.',
    '/deployment-model'
  );
}

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