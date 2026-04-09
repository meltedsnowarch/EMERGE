export default function TrustStatement() {
  return (
    <section
      data-design-id="trust"
      className="px-6 md:px-10 lg:px-16 py-24 md:py-32 border-t border-border/60 bg-[#E6E0D6]"
    >
      <div data-design-id="trust-content" className="max-w-[660px]">
        <span
          data-design-id="trust-label"
          className="text-[0.7rem] tracking-[0.16em] uppercase text-foreground/30 font-medium"
        >
          Confidentiality
        </span>
        <p
          data-design-id="trust-text"
          className="mt-6 font-serif text-[clamp(1.1rem,2vw,1.35rem)] leading-[1.65] tracking-tight font-light text-foreground/70"
        >
          Your drawings are confidential. All work is handled by an
          RIAI-registered architect under the same professional obligations as
          your own practice. Documents are used solely to produce your report and
          deleted within 30 days.
        </p>
      </div>
    </section>
  );
}