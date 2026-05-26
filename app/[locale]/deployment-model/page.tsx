import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { ScrollProgress } from '@/components/scroll-progress';
import { DeploymentModelSection } from '@/components/deployment-model-section';
import { ClosingCTASection } from '@/components/closing-cta-section';
import { Footer } from '@/components/footer';
import { buildLocalizedPageMetadata } from '@/lib/seo';
import { isLocale, type Locale, locales } from '@/lib/routing';

const meta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'Deployment Model | Backpack Wander GmbH',
    description: 'A primary industrial quality division supported by a secondary digital division for technical delivery and documentation.'
  },
  de: {
    title: 'Einsatzmodell | Backpack Wander GmbH',
    description: 'Eine primäre industrielle Qualitätsdivision, unterstützt durch eine digitale Sekundärdivision für technische Lieferung und Dokumentation.'
  }
} as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : 'en';
  return buildLocalizedPageMetadata(locale, meta[locale].title, meta[locale].description, '/deployment-model');
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
