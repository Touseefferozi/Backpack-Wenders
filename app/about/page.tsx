import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { ScrollProgress } from '@/components/scroll-progress';
import { AboutUsSection } from '@/components/about-us-section';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'About | Backpack Wander GmbH',
  description: 'Built on field experience and driven by practical engineering execution across global industrial projects.'
};

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