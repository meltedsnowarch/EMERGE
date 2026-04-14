import Image from "next/image";
import ServiceBuckets from "@/components/ServiceBuckets";

const DELAY = [
  "animate-fade-up-delay-1",
  "animate-fade-up-delay-2",
  "animate-fade-up-delay-3",
  "animate-fade-up-delay-4",
] as const;

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Submit your enquiry",
    body: "Contact me by phone or email with the property address and the service required. I will respond usually on the same day.",
  },
  {
    step: "02",
    title: "Confirm the details",
    body: "I review the property details and confirm the exact service needed, the fixed fee, and availability for a survey.",
  },
  {
    step: "03",
    title: "Survey usually within 48 hours",
    body: "I visit the property to carry out a visual inspection of the works or to survey the boundaries and other relevant matters.",
  },
  {
    step: "04",
    title: "Certificate issued within 48 hours",
    body: "The signed, certified document is issued to the homeowner, solicitor or estate agent within 48 hours.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        data-design-id="hero"
        className="px-6 pt-6 pb-6 sm:pt-8 sm:pb-8"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">

            {/* Text — spans 2 of 3 columns */}
            <div className="md:col-span-2 animate-fade-up">
              <h1 className="text-2xl sm:text-[1.8rem] md:text-[2.2rem] font-bold text-stone-900 tracking-tight leading-tight">
                You trained as an architect{" "}
                <br />
                to design buildings.
              </h1>
              <p className="mt-4 text-sm text-stone-500 font-light leading-relaxed">
                Architect-led practice support. Cost estimating, planning reports and project documents for sole practitioners and{" "}
                <br />
                small practices in Ireland — with a 48-hour turnaround on most services.
              </p>
            </div>

            {/* Image — 1 column */}
            <div className="animate-fade-up-delay-1 hidden md:block">
              <Image
                src="/images/how2.jpg"
                alt="Architectural practice"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <div
        data-design-id="services"
        id="services"
        className="border-b border-stone-100"
      >
        <ServiceBuckets />
      </div>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section
        data-design-id="how-it-works"
        id="how-it-works"
        className="border-b border-blue-900 px-6 py-[3.2rem] sm:py-16"
        style={{ background: "#1B2A4A" }}
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-10 animate-fade-up"
            style={{ color: "#7A92B5" }}
          >
            How it works
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            {HOW_IT_WORKS.map((item, i) => (
              <div key={item.step} className={DELAY[i]}>
                <p
                  className="text-4xl font-bold mb-5 tracking-tight leading-none"
                  style={{ color: "#2A3D5C" }}
                >
                  {item.step}
                </p>
                <h3
                  className="text-sm font-semibold mb-2 leading-snug"
                  style={{ color: "#FFFFFF" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#A8B8CF" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER + FOOTER NOTE ─────────────────────────────────────── */}
      <section data-design-id="divider" className="px-6 pt-10 pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="w-1/3 h-px" style={{ background: "#e7e0d0" }} />
          <p className="mt-6 text-xs text-stone-400">
            James Lawler &middot; RIAI Registered Member &middot; 2026
          </p>
        </div>
      </section>
    </>
  );
}
