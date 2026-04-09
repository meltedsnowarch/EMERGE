export default function Hero() {
  return (
    <section
      data-design-id="hero"
      className="flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-28 md:pt-32 pb-4 md:pb-6"
    >
      <div data-design-id="hero-layout" className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-start">
        <div data-design-id="hero-content" className="md:col-span-2">
          <h1
            data-design-id="hero-tagline"
            className="font-serif text-[clamp(2.2rem,5.8vw,4.2rem)] leading-[1.08] tracking-tightest font-light"
            style={{ color: "#1A1A1A" }}
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
            data-design-id="hero-subheading-1"
            className="mt-8 md:mt-12 text-[clamp(0.95rem,1.5vw,1.12rem)] leading-[1.7] max-w-[520px] font-light"
            style={{ color: "rgba(26, 26, 26, 0.55)" }}
          >
            Architect-led practice support. Cost estimating, planning reports and project documents for sole practitioners and small practices in Ireland.
          </p>
        </div>

        <div data-design-id="hero-image-wrapper" className="hidden md:flex md:col-span-1 h-full">
          <img
            data-design-id="hero-image"
            src="/images/how2.jpg"
            alt=""
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}