const STEPS = [
  {
    step: "01",
    title: "Share your drawings",
    body: "Email your project drawings, brief and any relevant details. We'll confirm the service and turnaround before we begin — usually the same day.",
    delay: "animate-fade-up-delay-1",
  },
  {
    step: "02",
    title: "We confirm the scope",
    body: "We review what you've sent and confirm the exact service, fixed fee and expected delivery before any work starts. No surprises.",
    delay: "animate-fade-up-delay-2",
  },
  {
    step: "03",
    title: "Document produced within 48 hours",
    body: "Your report is drafted with AI assistance and reviewed by an RIAI-registered architect to ensure accuracy, tone and professional quality.",
    delay: "animate-fade-up-delay-3",
  },
  {
    step: "04",
    title: "Delivered ready to use",
    body: "You receive a complete, professionally produced document — ready to send to your client, planning authority, or contractor.",
    delay: "animate-fade-up-delay-4",
  },
] as const;

export default function HowItWorks() {
  return (
    <section
      data-design-id="how-it-works"
      id="how-it-works"
      className="border-t border-b border-border/60 px-6 md:px-10 lg:px-16 py-14 md:py-20"
      style={{ background: "#F5F1EC" }}
    >
      <p
        data-design-id="how-it-works-label"
        className="text-[0.68rem] font-semibold uppercase tracking-widest mb-10 animate-fade-up"
        style={{ color: "rgba(26,26,26,0.4)" }}
      >
        How it works
      </p>

      <div
        data-design-id="how-it-works-steps"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10"
      >
        {STEPS.map((item) => (
          <div key={item.step} data-design-id={`step-${item.step}`} className={item.delay}>
            <p
              data-design-id={`step-${item.step}-number`}
              className="text-4xl font-bold mb-5 tracking-tight leading-none"
              style={{ color: "rgba(26,26,26,0.12)" }}
            >
              {item.step}
            </p>
            <h3
              data-design-id={`step-${item.step}-title`}
              className="text-[0.85rem] font-semibold mb-2 leading-snug"
              style={{ color: "#1A1A1A" }}
            >
              {item.title}
            </h3>
            <p
              data-design-id={`step-${item.step}-body`}
              className="text-[0.82rem] leading-relaxed"
              style={{ color: "rgba(26,26,26,0.55)" }}
            >
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}