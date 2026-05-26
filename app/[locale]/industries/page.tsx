import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { ScrollProgress } from '@/components/scroll-progress';
import { InfrastructureSection } from '@/components/infrastructure-section';
import { DisciplinesSection } from '@/components/disciplines-section';
import { StandardsSection } from '@/components/standards-section';
import { Footer } from '@/components/footer';
import { buildLocalizedPageMetadata } from '@/lib/seo';
import { isLocale, type Locale, locales } from '@/lib/routing';

const meta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'Industries | Backpack Wander GmbH',
    description: 'Offshore wind, pipelines, refineries, heavy industry, and critical facilities supported through QA/QC and technical oversight.'
  },
  de: {
    title: 'Branchen | Backpack Wander GmbH',
    description: 'Offshore-Wind, Pipelines, Raffinerien, Schwerindustrie und kritische Anlagen unterstützt durch QA/QC und technische Überwachung.'
  }
} as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : 'en';
  return buildLocalizedPageMetadata(locale, meta[locale].title, meta[locale].description, '/industries');
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
