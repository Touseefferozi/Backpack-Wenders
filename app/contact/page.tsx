import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { ContactPageIntro } from '@/components/contact-page-intro';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ScrollProgress } from '@/components/scroll-progress';
import { footerInfo, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Backpack Wander GmbH for technical support, industrial staffing, and digital delivery.'
};

export default function ContactPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 -z-10 bg-[#06110b]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(134,239,172,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(74,222,128,0.12),transparent_30%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.02),transparent_38%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[linear-gradient(180deg,rgba(134,239,172,0.08),transparent)]" />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <section className="rounded-[32px] border border-emerald-300/15 bg-[linear-gradient(180deg,rgba(134,239,172,0.10),rgba(255,255,255,0.03))] p-6 shadow-industrial backdrop-blur-sm sm:p-8 lg:p-10">
              <ContactPageIntro />

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { label: 'Fast response', value: 'Within 1 business day' },
                  { label: 'Primary focus', value: 'Industrial projects' },
                  { label: 'Support types', value: 'QA/QC, staffing, digital' }
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-emerald-300/15 bg-[rgba(7,20,13,0.72)] px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-emerald-100/60">{item.label}</p>
                    <p className="mt-2 text-sm font-medium text-white">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-emerald-300/15 bg-[rgba(7,20,13,0.72)] p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-emerald-200/85">Direct contact</p>
                  <a href={`mailto:${footerInfo.email}`} className="mt-3 block text-lg font-semibold text-white transition hover:text-accent">
                    {footerInfo.email}
                  </a>
                  <p className="mt-2 text-sm leading-6 text-emerald-50/65">For proposals, technical inquiries, and partnership discussions.</p>
                </div>

                <div className="rounded-2xl border border-emerald-300/15 bg-[rgba(7,20,13,0.72)] p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-emerald-100/60">What to include</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-50/78">
                    <li>• Project type and location</li>
                    <li>• Required discipline or support scope</li>
                    <li>• Timeline, urgency, and key constraints</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-5">
              <div className="rounded-[28px] border border-emerald-300/15 bg-[linear-gradient(180deg,rgba(134,239,172,0.12),rgba(7,20,13,0.92))] p-6 shadow-industrial sm:p-7">
                <p className="text-xs uppercase tracking-[0.32em] text-emerald-100/65">Reach out</p>
                <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Tell us what you need</h2>
                <p className="mt-3 text-sm leading-7 text-emerald-50/68">
                  Share your project requirements and we’ll review the best way to support your team with a focused, professional response.
                </p>
              </div>

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
