import { Reveal } from '@/components/reveal';
import { Check } from 'lucide-react';

export function ServicesSection() {
  const left = ['Quality Assurance', 'Quality Control', 'Inspection Support'];
  const middle = ['Documentation Review', 'Auditing Support', 'Compliance Monitoring'];
  const right = ['Technical Reporting', 'Project Quality Coordination'];

  return (
    <section id="services" className="relative border-b border-white/10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-8">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              QUALITY & COMPLIANCE
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-4">
                {left.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-md bg-white/6 text-offwhite">
                      <Check className="h-4 w-4" />
                    </span>
                    <div className="text-[1.02rem] leading-7 text-white/92">{item}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {middle.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-md bg-white/6 text-offwhite">
                      <Check className="h-4 w-4" />
                    </span>
                    <div className="text-[1.02rem] leading-7 text-white/92">{item}</div>
                  </div>
                ))}
              </div>

              <div className="sm:col-span-2 pt-2">
                {right.map((item) => (
                  <div key={item} className="flex items-start gap-4 mb-3">
                    <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-md bg-white/6 text-offwhite">
                      <Check className="h-4 w-4" />
                    </span>
                    <div className="text-[1.02rem] leading-7 text-white/92">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.02] shadow-industrial">
              <div className="relative h-64 sm:h-80 lg:h-96 bg-[#071011] flex items-end">
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10 p-6">
                  <div className="rounded-md bg-black/40 px-3 py-1 text-sm font-medium text-white/90">Inspection & QC</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
