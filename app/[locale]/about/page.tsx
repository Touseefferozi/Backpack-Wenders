import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { ScrollProgress } from '@/components/scroll-progress';
import { AboutUsSection } from '@/components/about-us-section';
import { Footer } from '@/components/footer';
import { buildLocalizedPageMetadata } from '@/lib/seo';
import { isLocale, type Locale, locales } from '@/lib/routing';

const meta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'About | Backpack Wander GmbH',
    description: 'Industrial engineering oversight, QA/QC discipline, and technical project support built on field experience.'
  },
  de: {
    title: 'Über uns | Backpack Wander GmbH',
    description: 'Industrielle technische Überwachung, QA/QC-Disziplin und Projektunterstützung auf Grundlage praktischer Felderfahrung.'
  }
} as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : 'en';
  return buildLocalizedPageMetadata(locale, meta[locale].title, meta[locale].description, '/about');
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
