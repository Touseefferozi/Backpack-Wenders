export function ProjectSupportSection() {
  return (
    <section id="project-support" className="relative border-b border-white/10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-[1.9rem] font-semibold leading-[1.04] tracking-tight text-white sm:text-3xl lg:text-4xl">
          PROJECT SUPPORT
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <ul className="space-y-3">
            <li className="text-[1.02rem] leading-7 text-white/82">Site Coordination</li>
            <li className="text-[1.02rem] leading-7 text-white/82">Manufacturing Surveillance</li>
            <li className="text-[1.02rem] leading-7 text-white/82">Construction Support</li>
          </ul>

          <ul className="space-y-3">
            <li className="text-[1.02rem] leading-7 text-white/82">Engineering Documentation</li>
            <li className="text-[1.02rem] leading-7 text-white/82">Contractor Coordination</li>
            <li className="text-[1.02rem] leading-7 text-white/82">Progress Monitoring</li>
          </ul>

          <ul className="space-y-3">
            <li className="text-[1.02rem] leading-7 text-white/82">Commissioning Assistance</li>
            <li className="text-[1.02rem] leading-7 text-white/82">Remote Project Support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
