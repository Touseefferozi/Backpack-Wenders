import { Reveal } from '@/components/reveal';
import { Check } from 'lucide-react';

export function EngineeringDigitalization() {
  const itemsLeft = [
    'Digital Reporting Solutions',
    'Inspection Workflows',
    'Data Collection Applications'
  ];

  const itemsRight = [
    'Project Dashboards',
    'Documentation Systems',
    'Custom Operational Tools'
  ];

  return (
    <section id="digitalization" className="relative border-b border-white/10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
              ENGINEERING DIGITALIZATION
            </h2>
            <p className="mt-3 max-w-2xl text-lg leading-7 text-white/80">
              Practical digital solutions developed around real engineering workflows and project requirements.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 items-start">
            <ul className="space-y-4 list-none p-0 m-0">
              {itemsLeft.map((text) => (
                <li key={text} className="flex items-start gap-4">
                  <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-md bg-white/6 text-offwhite">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-[1.02rem] leading-7 text-white/92">{text}</span>
                </li>
              ))}
            </ul>

            <ul className="space-y-4 list-none p-0 m-0">
              {itemsRight.map((text) => (
                <li key={text} className="flex items-start gap-4">
                  <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-md bg-white/6 text-offwhite">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-[1.02rem] leading-7 text-white/92">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
