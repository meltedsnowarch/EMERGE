export default function Hero() {
  return (
    <section
      data-design-id="hero"
      className="min-h-[100svh] flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-24 pb-20"
    >
      <div data-design-id="hero-content" className="max-w-[920px]">
        <h1
          data-design-id="hero-tagline"
          className="font-serif text-[clamp(2.2rem,5.8vw,4.2rem)] leading-[1.08] tracking-tightest text-foreground font-light"
        >
          You trained as an architect
          <br data-design-id="hero-br-1" />
          to design buildings.
          <br data-design-id="hero-br-2" />
          <span data-design-id="hero-tagline-accent" className="italic font-normal">
            EMERGE handles the rest.
          </span>
        </h1>

        <p
          data-design-id="hero-subheading"
          className="mt-8 md:mt-12 text-[clamp(0.95rem,1.5vw,1.12rem)] leading-[1.7] text-foreground/50 max-w-[520px] font-light"
        >
          AI-assisted cost estimating, planning reports and project support for
          sole practitioners and small practices.
        </p>

        <div
          data-design-id="hero-ctas"
          className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#"
            data-design-id="hero-cta-architect"
            className="inline-flex items-center justify-center text-[0.78rem] tracking-[0.12em] uppercase font-medium text-primary-foreground bg-foreground px-9 py-4 hover:bg-foreground/85 transition-colors duration-300"
          >
            I am an Architect
          </a>
          <a
            href="#"
            data-design-id="hero-cta-builder"
            className="inline-flex items-center justify-center text-[0.78rem] tracking-[0.12em] uppercase font-medium text-foreground border border-foreground/20 px-9 py-4 hover:border-foreground/50 transition-colors duration-300"
          >
            I am a Builder
          </a>
        </div>
      </div>
    </section>
  );
}