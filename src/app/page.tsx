import Image from "next/image";
import Link from "next/link";
import {
  CATEGORY_ORDER,
  CATEGORY_LABELS,
  CATEGORY_BG,
  getServicesByCategory,
} from "@/lib/services";

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
    body: "Contact me by phone or email with the service required. I will respond usually on the same day.",
  },
  {
    step: "02",
    title: "Confirm the details",
    body: "I review the details and confirm the scope of service needed, the fixed fee, and availability.",
  },
  {
    step: "03",
    title: "Process",
    body: "I carry out the relevant report and email you a draft for review and comment.",
  },
  {
    step: "04",
    title: "Report issued within days",
    body: "The agreed document is issued to you within days.",
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
              <h1
                className="font-serif text-[clamp(2rem,5vw,3.2rem)] leading-[1.12] tracking-tightest font-light"
                style={{ color: "#1A1A1A" }}
              >
                Peer-to-peer practice support for architects. <span className="italic font-normal">Less time on reports. More time on design.</span>
              </h1>
              <p className="mt-6 text-sm text-stone-500 font-light leading-relaxed max-w-lg">
                Cost estimating, planning reports and project documents for sole practitioners and small practices in Ireland — with a fast turnaround on most services.
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
      <section
        data-design-id="services"
        id="services"
        className="border-b border-stone-100 px-6 pt-8 pb-14 sm:pt-10 sm:pb-16"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CATEGORY_ORDER.map((category, i) => {
              const services = getServicesByCategory(category);
              const bg = CATEGORY_BG[category];
              return (
                <div
                  key={category}
                  className={`overflow-hidden ${DELAY[i]}`}
                  style={{ background: bg.body, border: "1px solid rgba(26,26,26,0.12)" }}
                >
                  {/* Header band */}
                  <div
                    className="px-5 py-4"
                    style={{
                      borderBottom: "1px solid rgba(26,26,26,0.12)",
                      background: bg.header,
                    }}
                  >
                    <p
                      className="text-sm font-bold tracking-tight"
                      style={{ color: "#1A1A1A" }}
                    >
                      {CATEGORY_LABELS[category]}
                    </p>
                  </div>

                  {/* Service rows */}
                  <ul className="px-5" style={{ background: bg.body }}>
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="service-row"
                        >
                          <span className="service-row-title">
                            {service.title}
                          </span>
                          <span className="service-row-price">
                            {service.price}&ensp;&rarr;
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section
        data-design-id="how-it-works"
        id="how-it-works"
        className="border-b border-stone-300 px-6 py-[3.2rem] sm:py-16"
        style={{ background: "#b7b4a1" }}
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-10 animate-fade-up"
            style={{ color: "#3a3a3a" }}
          >
            How it works
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            {HOW_IT_WORKS.map((item, i) => (
              <div key={item.step} className={DELAY[i]}>
                <p
                  className="text-4xl font-bold mb-5 tracking-tight leading-none"
                  style={{ color: "#CCCCCC" }}
                >
                  {item.step}
                </p>
                <h3
                  className="text-sm font-semibold mb-2 leading-snug"
                  style={{ color: "#1A1A1A" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#3a3a3a" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────── */}
      <footer
        data-design-id="footer"
        className="px-6 pt-10 pb-12"
      >
        <div className="max-w-5xl mx-auto">
          <div className="w-1/3 h-px mb-6" style={{ background: "#e7e0d0" }} />
          <p className="text-xs" style={{ color: "#888888" }}>
            James Lawler &middot; RIAI Registered Member &middot; 2026
          </p>
        </div>
      </footer>
    </>
  );
}
