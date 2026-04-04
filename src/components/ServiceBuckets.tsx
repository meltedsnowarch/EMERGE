export default function ServiceBuckets() {
  return (
    <section
      data-design-id="services"
      className="px-6 md:px-10 lg:px-16 py-24 md:py-32"
    >
      <div
        data-design-id="services-grid"
        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/50"
      >
        <div
          data-design-id="service-card-cost"
          className="bg-background p-8 md:p-10 lg:p-14 flex flex-col min-h-[320px]"
        >
          <span
            data-design-id="service-card-cost-label"
            className="text-[0.7rem] tracking-[0.16em] uppercase text-foreground/30 font-medium"
          >
            01
          </span>
          <h3
            data-design-id="service-card-cost-title"
            className="mt-6 font-serif text-[1.5rem] md:text-[1.65rem] tracking-tightest font-light"
          >
            EMERGE Cost
          </h3>
          <p
            data-design-id="service-card-cost-subtitle"
            className="mt-1.5 text-[0.92rem] font-serif italic text-foreground/45"
          >
            Know your numbers.
          </p>
          <p
            data-design-id="service-card-cost-description"
            className="mt-6 text-[0.85rem] leading-[1.7] text-foreground/50 font-light"
          >
            Accurate cost estimates grounded in current market data. Give your
            clients confidence at every stage, from feasibility through to
            tender.
          </p>
          <div data-design-id="service-card-cost-cta-wrapper" className="mt-auto pt-10">
            <a
              href="#"
              data-design-id="service-card-cost-cta"
              className="inline-flex items-center text-[0.75rem] tracking-[0.12em] uppercase font-medium text-foreground group"
            >
              <span data-design-id="service-card-cost-cta-text">Get Started</span>
              <span data-design-id="service-card-cost-arrow" className="ml-2.5 transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
            </a>
          </div>
        </div>

        <div
          data-design-id="service-card-planning"
          className="bg-background p-8 md:p-10 lg:p-14 flex flex-col min-h-[320px]"
        >
          <span
            data-design-id="service-card-planning-label"
            className="text-[0.7rem] tracking-[0.16em] uppercase text-foreground/30 font-medium"
          >
            02
          </span>
          <h3
            data-design-id="service-card-planning-title"
            className="mt-6 font-serif text-[1.5rem] md:text-[1.65rem] tracking-tightest font-light"
          >
            EMERGE Planning
          </h3>
          <p
            data-design-id="service-card-planning-subtitle"
            className="mt-1.5 text-[0.92rem] font-serif italic text-foreground/45"
          >
            Navigate planning with confidence.
          </p>
          <p
            data-design-id="service-card-planning-description"
            className="mt-6 text-[0.85rem] leading-[1.7] text-foreground/50 font-light"
          >
            Professionally drafted planning reports and compliance documentation.
            Submit with confidence knowing the detail is right.
          </p>
          <div data-design-id="service-card-planning-cta-wrapper" className="mt-auto pt-10">
            <a
              href="#"
              data-design-id="service-card-planning-cta"
              className="inline-flex items-center text-[0.75rem] tracking-[0.12em] uppercase font-medium text-foreground group"
            >
              <span data-design-id="service-card-planning-cta-text">Get Started</span>
              <span data-design-id="service-card-planning-arrow" className="ml-2.5 transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
            </a>
          </div>
        </div>

        <div
          data-design-id="service-card-studio"
          className="bg-background p-8 md:p-10 lg:p-14 flex flex-col min-h-[320px]"
        >
          <span
            data-design-id="service-card-studio-label"
            className="text-[0.7rem] tracking-[0.16em] uppercase text-foreground/30 font-medium"
          >
            03
          </span>
          <h3
            data-design-id="service-card-studio-title"
            className="mt-6 font-serif text-[1.5rem] md:text-[1.65rem] tracking-tightest font-light"
          >
            EMERGE Studio
          </h3>
          <p
            data-design-id="service-card-studio-subtitle"
            className="mt-1.5 text-[0.92rem] font-serif italic text-foreground/45"
          >
            Win the project.
          </p>
          <p
            data-design-id="service-card-studio-description"
            className="mt-6 text-[0.85rem] leading-[1.7] text-foreground/50 font-light"
          >
            Presentation-ready project documents that make the case clearly.
            From design reports to client proposals, we help you win the work.
          </p>
          <div data-design-id="service-card-studio-cta-wrapper" className="mt-auto pt-10">
            <a
              href="#"
              data-design-id="service-card-studio-cta"
              className="inline-flex items-center text-[0.75rem] tracking-[0.12em] uppercase font-medium text-foreground group"
            >
              <span data-design-id="service-card-studio-cta-text">Get Started</span>
              <span data-design-id="service-card-studio-arrow" className="ml-2.5 transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}