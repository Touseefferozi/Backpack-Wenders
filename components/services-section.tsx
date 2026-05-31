import { Check } from 'lucide-react';

export function ServicesSection() {
  const qualityAndCompliance = [
    'Quality Assurance',
    'Quality Control',
    'Inspection Support',
    'Documentation Review',
    'Auditing Support',
    'Compliance Monitoring',
    'Technical Reporting',
    'Project Quality Coordination'
  ];

  const projectSupport = [
    'Site Coordination',
    'Manufacturing Surveillance',
    'Construction Support',
    'Engineering Documentation',
    'Contractor Coordination',
    'Progress Monitoring',
    'Commissioning Assistance',
    'Remote Project Support'
  ];

  const engineeringDigitalization = [
    'Digital Reporting Solutions',
    'Inspection Workflows',
    'Data Collection Applications',
    'Project Dashboards',
    'Documentation Systems',
    'Custom Operational Tools'
  ];

  return (
    <section id="services" className="relative border-b border-white/10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          SERVICES SECTION
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-12">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
              QUALITY & COMPLIANCE
            </h3>
            <ul className="mt-6 space-y-4">
              {qualityAndCompliance.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-md bg-white/6 text-offwhite">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-[1.02rem] leading-7 text-white/92">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
              PROJECT SUPPORT
            </h3>
            <ul className="mt-6 space-y-4">
              {projectSupport.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-md bg-white/6 text-offwhite">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-[1.02rem] leading-7 text-white/92">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
              ENGINEERING DIGITALIZATION
            </h3>
            <p className="mt-3 max-w-2xl text-lg leading-7 text-white/80">
              Practical digital solutions developed around real engineering workflows and project requirements.
            </p>
            <ul className="mt-6 space-y-4">
              {engineeringDigitalization.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-md bg-white/6 text-offwhite">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-[1.02rem] leading-7 text-white/92">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
