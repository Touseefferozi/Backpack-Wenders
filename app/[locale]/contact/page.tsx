import type { Metadata } from 'next';
import ContactCards from '@/components/contact-cards';
import { ContactHeader } from '@/components/contact-header';
import ContactSidebar from '@/components/contact-sidebar';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ScrollProgress } from '@/components/scroll-progress';
import { siteConfig } from '@/lib/site';
import { buildLocalizedPageMetadata } from '@/lib/seo';
import { getLocalizedUrl } from '@/lib/routing';
import { isLocale, type Locale, locales } from '@/lib/routing';

const meta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'Contact | Backpack Wander GmbH',
    description: 'Contact Backpack Wander GmbH for QA/QC oversight, offshore wind support, documentation control, and industrial engineering coordination.'
  },
  de: {
    title: 'Kontakt | Backpack Wander GmbH',
    description: 'Kontaktieren Sie Backpack Wander GmbH für QA/QC-Überwachung, Offshore-Wind-Support, Dokumentationssteuerung und technische Koordination.'
  }
} as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : 'en';
  return buildLocalizedPageMetadata(locale, meta[locale].title, meta[locale].description, '/contact');
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : 'en';

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 -z-10 bg-[#020304]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(2,3,4,0.96),rgba(5,7,7,1))]" />

        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <ContactHeader />

          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <ContactCards />
            <ContactSidebar />
          </div>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: `${siteConfig.name} Contact`,
            url: getLocalizedUrl(locale, '/contact')
          })
        }}
      />
    </>
  );
}
