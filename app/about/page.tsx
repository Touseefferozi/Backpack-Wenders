import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { ScrollProgress } from '@/components/scroll-progress';
import { AboutUsSection } from '@/components/about-us-section';
import { Footer } from '@/components/footer';
import { buildPageMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata(
    'About | Backpack Wander GmbH',
    'Industrial engineering oversight, QA/QC discipline, and technical project support built on field experience.',
    '/about'
  );
}

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <AboutUsSection />
      </main>
      <Footer />
    </>
  );
}