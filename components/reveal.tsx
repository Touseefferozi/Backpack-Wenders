import RevealClient from './reveal.client';

export function Reveal({ children }: { children: React.ReactNode }) {
  // Render a server-friendly wrapper with the initial animation state inlined.
  // A small client helper (reveal.client.tsx) will hydrate and animate this
  // element to its final state to avoid hydration mismatches.
  return (
    <div style={{ opacity: 0, transform: 'translateY(16px)' }}>
      <RevealClient />
      {children}
    </div>
  );
}
