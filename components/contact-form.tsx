'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import { useLanguage } from '@/components/language-provider';

const initialState = {
  name: '',
  email: '',
  company: '',
  message: ''
};

export function ContactForm() {
  const [formState, setFormState] = useState(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { content } = useLanguage();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    });

    if (response.ok) {
      setStatus('success');
      setFormState(initialState);
      return;
    }

    setStatus('error');
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-industrial backdrop-blur-sm sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-300">
          {content.contactForm.name}
          <input
            required
            value={formState.name}
            onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
            className="rounded-2xl border border-white/10 bg-[#0c111a] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent/50"
            placeholder={content.contactForm.namePlaceholder}
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          {content.contactForm.email}
          <input
            required
            type="email"
            value={formState.email}
            onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
            className="rounded-2xl border border-white/10 bg-[#0c111a] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent/50"
            placeholder={content.contactForm.emailPlaceholder}
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm text-slate-300">
        {content.contactForm.company}
        <input
          value={formState.company}
          onChange={(event) => setFormState((current) => ({ ...current, company: event.target.value }))}
          className="rounded-2xl border border-white/10 bg-[#0c111a] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent/50"
          placeholder={content.contactForm.companyPlaceholder}
        />
      </label>

      <label className="grid gap-2 text-sm text-slate-300">
        {content.contactForm.message}
        <textarea
          required
          rows={5}
          value={formState.message}
          onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
          className="rounded-3xl border border-white/10 bg-[#0c111a] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent/50"
          placeholder={content.contactForm.messagePlaceholder}
        />
      </label>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex w-fit items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#111827] transition hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? content.contactForm.sending : content.contactForm.send}
      </button>

      {status === 'success' ? <p className="text-sm text-emerald-300">{content.contactForm.success}</p> : null}
      {status === 'error' ? <p className="text-sm text-rose-300">{content.contactForm.error}</p> : null}
    </form>
  );
}
