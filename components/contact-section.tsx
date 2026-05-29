"use client";

import { useState } from 'react';
import { footerInfo } from '@/lib/site';
import Image from 'next/image';
import { useLanguage } from '@/components/language-provider';

export function ContactSection() {
  const [formState, setFormState] = useState({ name: '', company: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { content } = useLanguage();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });

      if (res.ok) {
        setStatus('success');
        setFormState({ name: '', company: '', email: '', message: '' });
        return;
      }
      setStatus('error');
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="relative bg-[#0b0b0b] border-t border-white/6 py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#071011]" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white">{content.contactPage.title}</h2>
            <p className="mt-4 text-lg leading-7 text-slate-300">{content.contactPage.subtitle}</p>

            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <div>
                <div className="font-semibold text-white">{content.contactForm.email}</div>
                <a href={`mailto:${footerInfo.email}`} className="text-slate-300 hover:text-white">
                  {footerInfo.email}
                </a>
              </div>

              <div>
                <div className="font-semibold text-white">LinkedIn</div>
                <a href={footerInfo.socialLinks[0]?.url ?? '#'} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">
                  LinkedIn
                </a>
              </div>

              <div>
                <div className="font-semibold text-white">{content.contactPage.card.officeLabel}</div>
                <div className="text-slate-300">{content.contactPage.card.officeLines.join(', ')}</div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="rounded-lg border border-white/6 bg-white/2 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">{content.contactForm.name}</span>
                  <input
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: (e.target as HTMLInputElement).value }))}
                    className="w-full rounded-md border border-white/8 bg-transparent px-3 py-2 text-white outline-none placeholder:text-slate-400"
                    placeholder={content.contactForm.namePlaceholder}
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">{content.contactForm.company}</span>
                  <input
                    value={formState.company}
                    onChange={(e) => setFormState((s) => ({ ...s, company: (e.target as HTMLInputElement).value }))}
                    className="w-full rounded-md border border-white/8 bg-transparent px-3 py-2 text-white outline-none placeholder:text-slate-400"
                    placeholder={content.contactForm.companyPlaceholder}
                  />
                </label>
              </div>

              <label className="mt-4 grid gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">{content.contactForm.email}</span>
                <input
                  required
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState((s) => ({ ...s, email: (e.target as HTMLInputElement).value }))}
                  className="w-full rounded-md border border-white/8 bg-transparent px-3 py-2 text-white outline-none placeholder:text-slate-400"
                  placeholder={content.contactForm.emailPlaceholder}
                />
              </label>

              <label className="mt-4 grid gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">{content.contactForm.message}</span>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: (e.target as HTMLTextAreaElement).value }))}
                  className="w-full rounded-md border border-white/8 bg-transparent px-3 py-2 text-white outline-none placeholder:text-slate-400 resize-none"
                  placeholder={content.contactForm.messagePlaceholder}
                />
              </label>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-white text-black px-6 py-3 font-semibold"
              >
                {content.contactForm.send}
              </button>

              {status === 'success' && <p className="mt-3 text-sm text-emerald-300">{content.contactForm.success}</p>}
              {status === 'error' && <p className="mt-3 text-sm text-rose-300">{content.contactForm.error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
