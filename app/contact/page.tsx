import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { ContactPageIntro } from '@/components/contact-page-intro';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ScrollProgress } from '@/components/scroll-progress';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Backpack Wander GmbH for technical support, industrial staffing, and digital delivery.'
};

export default function ContactPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-28">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
          <ContactPageIntro />
          <div className="mt-12">
            <ContactForm />
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
            url: `${siteConfig.url}/contact`
          })
        }}
      />
    </>
  );
}
