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
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-[32px] border border-emerald-300/15 bg-[linear-gradient(180deg,rgba(134,239,172,0.14),rgba(7,20,13,0.92))] p-6 shadow-industrial backdrop-blur-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-emerald-50/78">
          {content.contactForm.name}
          <input
            required
            value={formState.name}
            onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
            className="rounded-2xl border border-emerald-300/15 bg-[rgba(7,20,13,0.86)] px-4 py-3 text-white outline-none transition placeholder:text-emerald-50/35 focus:border-emerald-200/35 focus:ring-1 focus:ring-emerald-200/10"
            placeholder={content.contactForm.namePlaceholder}
          />
        </label>
        <label className="grid gap-2 text-sm text-emerald-50/78">
          {content.contactForm.email}
          <input
            required
            type="email"
            value={formState.email}
            onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
            className="rounded-2xl border border-emerald-300/15 bg-[rgba(7,20,13,0.86)] px-4 py-3 text-white outline-none transition placeholder:text-emerald-50/35 focus:border-emerald-200/35 focus:ring-1 focus:ring-emerald-200/10"
            placeholder={content.contactForm.emailPlaceholder}
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm text-emerald-50/78">
        {content.contactForm.company}
        <input
          value={formState.company}
          onChange={(event) => setFormState((current) => ({ ...current, company: event.target.value }))}
          className="rounded-2xl border border-emerald-300/15 bg-[rgba(7,20,13,0.86)] px-4 py-3 text-white outline-none transition placeholder:text-emerald-50/35 focus:border-emerald-200/35 focus:ring-1 focus:ring-emerald-200/10"
          placeholder={content.contactForm.companyPlaceholder}
        />
      </label>

      <label className="grid gap-2 text-sm text-emerald-50/78">
        {content.contactForm.message}
        <textarea
          required
          rows={5}
          value={formState.message}
          onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
          className="rounded-3xl border border-emerald-300/15 bg-[rgba(7,20,13,0.86)] px-4 py-3 text-white outline-none transition placeholder:text-emerald-50/35 focus:border-emerald-200/35 focus:ring-1 focus:ring-emerald-200/10"
          placeholder={content.contactForm.messagePlaceholder}
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex w-full items-center justify-center rounded-full bg-[#86efac] px-6 py-3 text-sm font-semibold text-[#052e16] transition hover:bg-[#a7f3d0] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === 'loading' ? content.contactForm.sending : content.contactForm.send}
        </button>

        <p className="text-xs leading-5 text-emerald-50/55 sm:max-w-xs sm:text-right">
          Your message goes directly to our team. We reply with a clear next step, not an automated maze.
        </p>
      </div>

      {status === 'success' ? <p className="text-sm text-emerald-200">{content.contactForm.success}</p> : null}
      {status === 'error' ? <p className="text-sm text-rose-300">{content.contactForm.error}</p> : null}
    </form>
  );
}
