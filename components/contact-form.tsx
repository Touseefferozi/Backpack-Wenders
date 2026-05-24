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
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#bfeed8]/80">{content.contactForm.name}</span>
          <input
            required
            value={formState.name}
            onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
            className="w-full rounded-lg border border-[#1f7a5a]/15 bg-white/5 px-4 py-2.5 text-white outline-none transition placeholder:text-[#7fbf99]/30 focus:border-[#19d88f]/40 focus:ring-2 focus:ring-[#19d88f]/10"
            placeholder={content.contactForm.namePlaceholder}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#bfeed8]/80">{content.contactForm.email}</span>
          <input
            required
            type="email"
            value={formState.email}
            onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
            className="w-full rounded-lg border border-[#1f7a5a]/15 bg-white/5 px-4 py-2.5 text-white outline-none transition placeholder:text-[#7fbf99]/30 focus:border-[#19d88f]/40 focus:ring-2 focus:ring-[#19d88f]/10"
            placeholder={content.contactForm.emailPlaceholder}
          />
        </label>
      </div>

        <label className="grid gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#bfeed8]/80">{content.contactForm.company}</span>
          <input
            value={formState.company}
            onChange={(event) => setFormState((current) => ({ ...current, company: event.target.value }))}
            className="w-full rounded-lg border border-[#1f7a5a]/15 bg-white/5 px-4 py-2.5 text-white outline-none transition placeholder:text-[#7fbf99]/30 focus:border-[#19d88f]/40 focus:ring-2 focus:ring-[#19d88f]/10"
            placeholder={content.contactForm.companyPlaceholder}
          />
        </label>

        <label className="grid gap-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#bfeed8]/80">{content.contactForm.message}</span>
        <textarea
          required
          rows={4}
          value={formState.message}
          onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
          className="w-full rounded-lg border border-[#1f7a5a]/15 bg-white/5 px-4 py-2.5 text-white outline-none transition placeholder:text-[#7fbf99]/30 focus:border-[#19d88f]/40 focus:ring-2 focus:ring-[#19d88f]/10 resize-none"
          placeholder={content.contactForm.messagePlaceholder}
        />
      </label>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black transition-colors duration-200 hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-70 shadow-sm"
      >
        {status === 'loading' ? content.contactForm.sending : content.contactForm.send}
      </button>

      {status === 'success' ? <p className="text-sm text-white/85">{content.contactForm.success}</p> : null}
      {status === 'error' ? <p className="text-sm text-rose-300">Failed to send. Please try again.</p> : null}
    </form>
  );
}
