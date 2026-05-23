import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
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
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(87,196,138,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(74,222,128,0.08),transparent_40%)]" />
        
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          {/* Page Header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-950/40 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-emerald-200/90">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Get in Touch
            </div>
            <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
              <span className="text-emerald-400">Contact</span> Us
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-emerald-50/75">
              Have questions or need assistance? We&apos;re here to help you plan your perfect adventure.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Contact Info */}
            <section className="space-y-8">
              {/* Get in Touch Section */}
              <div className="rounded-3xl border border-emerald-300/20 bg-gradient-to-br from-emerald-950/50 to-emerald-900/30 p-8 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
                
                <div className="mt-8 space-y-6">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/10 flex-shrink-0">
                      <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-emerald-200/80">Address</p>
                      <p className="mt-1 text-sm text-emerald-50/85">Backpack Wander GmbH<br />Registered in Germany</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/10 flex-shrink-0">
                      <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-emerald-200/80">Response Time</p>
                      <p className="mt-1 text-sm text-emerald-50/85">Within 24 business hours</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/10 flex-shrink-0">
                      <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-emerald-200/80">Email</p>
                      <a href={`mailto:${footerInfo.email}`} className="mt-1 text-sm text-emerald-50/85 hover:text-emerald-300 transition">
                        {footerInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/10 flex-shrink-0">
                      <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-emerald-200/80">Business Hours</p>
                      <p className="mt-1 text-sm text-emerald-50/85">Monday to Friday: 9:00 AM – 4:00 PM</p>
                      <p className="mt-1 text-sm text-emerald-50/85">Weekend: 10:00 AM – 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-3xl border border-emerald-300/20 overflow-hidden bg-emerald-950/40 backdrop-blur-sm h-64 lg:h-80">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.142857142857!2d8.681921!3d50.113516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd6c97f0f0f0f1%3A0x1234567890abcdef!2sBackpack%20Wender%20GmbH!5e0!3m2!1sen!2sde!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </section>

            {/* Right Column - Contact Form */}
            <section className="rounded-3xl border border-emerald-300/20 bg-gradient-to-br from-emerald-950/50 to-emerald-900/30 p-8 backdrop-blur-sm h-fit sticky top-32">
              <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
              <p className="mt-2 text-sm text-emerald-50/75">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
              
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
