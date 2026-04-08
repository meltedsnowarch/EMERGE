export default function Hero() {
  return (
    <section
      data-design-id="hero"
      className="flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-28 md:pt-32 pb-4 md:pb-6"
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
          sole practitioners and small practices in Ireland.
        </p>
      </div>
    </section>
  );
}