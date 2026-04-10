export default function HowItWorks() {
  return (
    <section
      data-design-id="how-it-works"
      className="px-6 md:px-10 lg:px-16 py-24 md:py-32 border-t border-border/60"
    >
      <h2
        data-design-id="how-it-works-title"
        className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] tracking-tightest font-light"
      >
        How it works
      </h2>

      <div
        data-design-id="how-it-works-steps"
        className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0"
      >
        <div data-design-id="step-1" className="flex flex-col md:pr-12">
          <div data-design-id="step-1-top" className="flex items-baseline gap-4">
            <span
              data-design-id="step-1-number"
              className="text-[0.7rem] tracking-[0.16em] uppercase text-foreground/25 font-medium"
            >
              01
            </span>
            <div data-design-id="step-1-line-top" className="flex-1 h-px bg-border/50" />
          </div>
          <h3
            data-design-id="step-1-title"
            className="mt-5 font-serif text-[1.2rem] tracking-tightest font-light text-foreground/80"
          >
            Submit your drawings
          </h3>
        </div>

        <div data-design-id="step-2" className="flex flex-col md:px-12 md:border-l md:border-border/40">
          <div data-design-id="step-2-top" className="flex items-baseline gap-4">
            <span
              data-design-id="step-2-number"
              className="text-[0.7rem] tracking-[0.16em] uppercase text-foreground/25 font-medium"
            >
              02
            </span>
            <div data-design-id="step-2-line-top" className="flex-1 h-px bg-border/50" />
          </div>
          <h3
            data-design-id="step-2-title"
            className="mt-5 font-serif text-[1.2rem] tracking-tightest font-light text-foreground/80"
          >
            We produce your report
          </h3>
        </div>

        <div data-design-id="step-3" className="flex flex-col md:pl-12 md:border-l md:border-border/40">
          <div data-design-id="step-3-top" className="flex items-baseline gap-4">
            <span
              data-design-id="step-3-number"
              className="text-[0.7rem] tracking-[0.16em] uppercase text-foreground/25 font-medium"
            >
              03
            </span>
            <div data-design-id="step-3-line-top" className="flex-1 h-px bg-border/50" />
          </div>
          <h3
            data-design-id="step-3-title"
            className="mt-5 font-serif text-[1.2rem] tracking-tightest font-light text-foreground/80"
          >
            You review and issue
          </h3>
        </div>
      </div>
    </section>
  );
}