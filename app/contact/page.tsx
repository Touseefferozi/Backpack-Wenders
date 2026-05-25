import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { ContactHeader } from '@/components/contact-header';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ScrollProgress } from '@/components/scroll-progress';
import { footerInfo, siteConfig } from '@/lib/site';
import { buildPageMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata(
    'Contact | Backpack Wander GmbH',
    'Contact Backpack Wander GmbH for QA/QC oversight, offshore wind support, documentation control, and industrial engineering coordination.',
    '/contact'
  );
}

export default function ContactPage() {
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
            <section className="space-y-8">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
                <h2 className="text-2xl font-semibold text-white">Project Coordination</h2>

                <div className="mt-8 space-y-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">Office</p>
                    <p className="mt-2 text-sm leading-6 text-offwhite/82">Backpack Wander GmbH<br />Registered in Germany</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">Response Window</p>
                    <p className="mt-2 text-sm leading-6 text-offwhite/82">Within 24 business hours</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">Email</p>
                    <a href={`mailto:${footerInfo.email}`} className="mt-2 block text-sm leading-6 text-offwhite/82 transition hover:text-accent">
                      {footerInfo.email}
                    </a>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">Focus</p>
                    <p className="mt-2 text-sm leading-6 text-offwhite/82">QA/QC, offshore wind, pipeline quality, documentation, and engineering oversight.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
                <h2 className="text-2xl font-semibold text-white">Primary Division</h2>
                <p className="mt-4 text-sm leading-7 text-offwhite/82">
                  Pipeline Quality is the core industrial quality and oversight division, focused on execution control, reporting discipline, and site verification.
                </p>
              </div>
            </section>

            <section className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 h-fit lg:sticky lg:top-32">
              <h2 className="text-2xl font-semibold text-white">Send a Technical Enquiry</h2>
              <p className="mt-2 text-sm text-offwhite/75">Share the project scope, location, and timeline. We will respond with a suitable technical path.</p>
              
              <ContactForm />
            </section>
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
