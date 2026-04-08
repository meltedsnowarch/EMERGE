export default function ContactCTA() {
  return (
    <section
      id="contact"
      data-design-id="contact-cta"
      className="px-6 md:px-10 lg:px-16 py-24 md:py-32 border-t border-border/60"
    >
      <div data-design-id="contact-cta-content" className="max-w-[660px]">
        <h2
          data-design-id="contact-cta-title"
          className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] tracking-tightest font-light"
        >
          Ready to get started?
        </h2>

        <div data-design-id="contact-cta-button-wrapper" className="mt-10">
          <a
            href="#"
            data-design-id="contact-cta-button"
            className="inline-flex items-center justify-center text-[0.78rem] tracking-[0.12em] uppercase font-medium text-primary-foreground bg-foreground px-9 py-4 hover:bg-foreground/85 transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}