import type { ReactNode } from 'react';

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: ReactNode }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.35em] text-accent/90">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-white/82 sm:text-lg">{description}</p>
    </div>
  );
}
