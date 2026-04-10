export default function PricingSnapshot() {
  return (
    <section
      data-design-id="pricing"
      className="px-6 md:px-10 lg:px-16 py-24 md:py-32 border-t border-border/60"
    >
      <div data-design-id="pricing-header" className="max-w-[660px]">
        <span
          data-design-id="pricing-label"
          className="text-[0.7rem] tracking-[0.16em] uppercase text-foreground/30 font-medium"
        >
          Pricing
        </span>
        <h2
          data-design-id="pricing-title"
          className="mt-4 font-serif text-[clamp(1.6rem,3vw,2.2rem)] tracking-tightest font-light"
        >
          Transparent pricing
        </h2>
      </div>

      <div
        data-design-id="pricing-table"
        className="mt-14 md:mt-20 max-w-[720px]"
      >
        <div
          data-design-id="pricing-row-1"
          className="flex items-baseline justify-between py-5 border-b border-border/40"
        >
          <span
            data-design-id="pricing-row-1-service"
            className="text-[0.92rem] font-light text-foreground/70"
          >
            Design Stage Costing
          </span>
          <span
            data-design-id="pricing-row-1-price"
            className="text-[0.92rem] font-medium text-foreground tracking-tight"
          >
            €300
          </span>
        </div>

        <div
          data-design-id="pricing-row-2"
          className="flex items-baseline justify-between py-5 border-b border-border/40"
        >
          <span
            data-design-id="pricing-row-2-service"
            className="text-[0.92rem] font-light text-foreground/70"
          >
            Pre-Tender Estimate
          </span>
          <span
            data-design-id="pricing-row-2-price"
            className="text-[0.92rem] font-medium text-foreground tracking-tight"
          >
            €600
          </span>
        </div>

        <div
          data-design-id="pricing-row-3"
          className="flex items-baseline justify-between py-5 border-b border-border/40"
        >
          <span
            data-design-id="pricing-row-3-service"
            className="text-[0.92rem] font-light text-foreground/70"
          >
            Post-Tender Analysis
          </span>
          <span
            data-design-id="pricing-row-3-price"
            className="text-[0.92rem] font-medium text-foreground tracking-tight"
          >
            €300
          </span>
        </div>

        <div
          data-design-id="pricing-row-4"
          className="flex items-baseline justify-between py-5 border-b border-border/40"
        >
          <span
            data-design-id="pricing-row-4-service"
            className="text-[0.92rem] font-light text-foreground/70"
          >
            Planning &amp; Design Statement
          </span>
          <span
            data-design-id="pricing-row-4-price"
            className="text-[0.92rem] font-medium text-foreground tracking-tight"
          >
            €250–€350
          </span>
        </div>

        <div
          data-design-id="pricing-row-5"
          className="flex items-baseline justify-between py-5 border-b border-border/40"
        >
          <span
            data-design-id="pricing-row-5-service"
            className="text-[0.92rem] font-light text-foreground/70"
          >
            Planning &amp; Design Statement ACA
          </span>
          <span
            data-design-id="pricing-row-5-price"
            className="text-[0.92rem] font-medium text-foreground tracking-tight"
          >
            €400–€500
          </span>
        </div>

        <div
          data-design-id="pricing-row-6"
          className="flex items-baseline justify-between py-5 border-b border-border/40"
        >
          <span
            data-design-id="pricing-row-6-service"
            className="text-[0.92rem] font-light text-foreground/70"
          >
            Response to Further Information
          </span>
          <span
            data-design-id="pricing-row-6-price"
            className="text-[0.92rem] font-medium text-foreground tracking-tight"
          >
            €150–€250
          </span>
        </div>
      </div>
    </section>
  );
}