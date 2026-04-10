export default function CredibilityBar() {
  return (
    <section
      data-design-id="credibility"
      className="border-t border-b border-border/60 px-6 md:px-10 lg:px-16 py-8 md:py-10"
    >
      <div
        data-design-id="credibility-grid"
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0"
      >
        <div
          data-design-id="credibility-item-1"
          className="flex items-center md:justify-center"
        >
          <span
            data-design-id="credibility-dot-1"
            className="w-1.5 h-1.5 rounded-full bg-foreground/20 mr-3 md:mr-3 shrink-0"
          />
          <p
            data-design-id="credibility-text-1"
            className="text-[0.75rem] tracking-[0.14em] uppercase text-foreground/45 font-medium"
          >
            RIAI Registered Architect
          </p>
        </div>
        <div
          data-design-id="credibility-item-2"
          className="flex items-center md:justify-center"
        >
          <span
            data-design-id="credibility-dot-2"
            className="w-1.5 h-1.5 rounded-full bg-foreground/20 mr-3 md:mr-3 shrink-0"
          />
          <p
            data-design-id="credibility-text-2"
            className="text-[0.75rem] tracking-[0.14em] uppercase text-foreground/45 font-medium"
          >
            48 Hour Turnaround
          </p>
        </div>
        <div
          data-design-id="credibility-item-3"
          className="flex items-center md:justify-center"
        >
          <span
            data-design-id="credibility-dot-3"
            className="w-1.5 h-1.5 rounded-full bg-foreground/20 mr-3 md:mr-3 shrink-0"
          />
          <p
            data-design-id="credibility-text-3"
            className="text-[0.75rem] tracking-[0.14em] uppercase text-foreground/45 font-medium"
          >
            Professional Sign-Off on Every Report
          </p>
        </div>
      </div>
    </section>
  );
}