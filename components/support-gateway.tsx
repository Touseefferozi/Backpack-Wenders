'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Mail, ShieldCheck, X } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';

type SupportGatewayProps = {
  tone?: 'accent' | 'neutral';
};

export function SupportGateway({ tone = 'accent' }: SupportGatewayProps) {
  const [open, setOpen] = useState(false);
  const { content } = useLanguage();

  const triggerClassName =
    tone === 'neutral'
      ? 'inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/8'
      : 'inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-gray-900 transition hover:bg-accent-dark';

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={triggerClassName}
      >
        {content.supportGateway.button}
      </button>

      {open ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center px-4 py-8">
          <button
            type="button"
            aria-label={content.supportGateway.closeAria}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-[#02040a]/80 backdrop-blur-sm"
          />
          <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-surface shadow-industrial">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 sm:px-8">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-accent/80">{content.supportGateway.eyebrow}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{content.supportGateway.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                title={content.supportGateway.closeAria}
                className="rounded-full border border-white/10 p-2 text-white/70 transition hover:bg-white/5 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-4 p-6 sm:p-8 lg:grid-cols-3">
              {content.supportGateway.options.map((option, index) => (
                <a
                  key={option.title}
                  href={option.url}
                  target={option.url.startsWith('http') ? '_blank' : undefined}
                  rel={option.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={() => {
                    if (option.url.startsWith('#')) {
                      setOpen(false);
                    }
                  }}
                  className="group rounded-[24px] border border-white/10 bg-white/[0.03] p-5 transition hover:border-accent/25 hover:bg-white/[0.05]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-accent">
                    {index === 0 ? (
                      <ShieldCheck className="h-5 w-5" />
                    ) : index === 1 ? (
                      <ArrowRight className="h-5 w-5" />
                    ) : (
                      <Mail className="h-5 w-5" />
                    )}
                  </div>
                  <h4 className="text-lg font-semibold text-white">{option.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{option.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition group-hover:translate-x-1">
                    {content.supportGateway.continue} <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

