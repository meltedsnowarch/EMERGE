"use client";

import { useState } from "react";

function ServiceCard({
  number,
  title,
  subtitle,
  description,
  services,
  designIdPrefix,
  headerBg,
}: {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  services: { name: string; price: string; desc: string; designId: string }[];
  designIdPrefix: string;
  headerBg: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      data-design-id={`${designIdPrefix}-card`}
      className="flex flex-col"
    >
      <button
        type="button"
        data-design-id={`${designIdPrefix}-toggle`}
        className="w-full text-left px-6 md:px-8 py-12 cursor-pointer group"
        style={{ backgroundColor: headerBg, color: "#1A1A1A" }}
        onClick={() => setOpen(!open)}
      >
        <div data-design-id={`${designIdPrefix}-header`} className="flex items-start justify-between">
          <div data-design-id={`${designIdPrefix}-header-left`}>
            <span
              data-design-id={`${designIdPrefix}-label`}
              className="text-[0.7rem] tracking-[0.16em] uppercase font-medium"
              style={{ color: "#1A1A1A", opacity: 0.45 }}
            >
              {number}
            </span>
            <h3
              data-design-id={`${designIdPrefix}-title`}
              className="mt-4 font-serif text-[1.3rem] md:text-[1.5rem] tracking-tightest font-light"
              style={{ color: "#1A1A1A" }}
            >
              {title}
            </h3>
            <p
              data-design-id={`${designIdPrefix}-subtitle`}
              className="mt-1.5 text-[0.85rem] font-serif italic"
              style={{ color: "#1A1A1A", opacity: 0.65 }}
            >
              {subtitle}
            </p>
            <p
              data-design-id={`${designIdPrefix}-description`}
              className="mt-4 text-[0.8rem] leading-[1.7] font-light"
              style={{ color: "#1A1A1A", opacity: 0.7 }}
            >
              {description}
            </p>
          </div>
          <span
            data-design-id={`${designIdPrefix}-icon`}
            className={`ml-4 mt-4 shrink-0 text-[1.3rem] font-light transition-transform duration-300 ${open ? "rotate-45" : ""}`}
            style={{ color: "#1A1A1A", opacity: 0.45 }}
          >
            +
          </span>
        </div>
      </button>

      <div
        data-design-id={`${designIdPrefix}-panel`}
        className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div
            data-design-id={`${designIdPrefix}-services`}
            className="px-6 md:px-8 pb-8 pt-2 flex flex-col gap-0"
          >
            {services.map((svc) => (
              <div
                key={svc.designId}
                data-design-id={svc.designId}
                className="py-5 border-t border-border/30"
              >
                <div
                  data-design-id={`${svc.designId}-top`}
                  className="flex flex-col gap-1"
                >
                  <span
                    data-design-id={`${svc.designId}-name`}
                    className="text-[0.88rem] font-light"
                    style={{ color: "#1A1A1A" }}
                  >
                    {svc.name}
                  </span>
                  <span
                    data-design-id={`${svc.designId}-price`}
                    className="text-[0.88rem] font-medium tracking-tight"
                    style={{ color: "#1A1A1A" }}
                  >
                    {svc.price}
                  </span>
                </div>
                <p
                  data-design-id={`${svc.designId}-desc`}
                  className="mt-2 text-[0.78rem] leading-[1.7] font-light"
                  style={{ color: "#1A1A1A", opacity: 0.6 }}
                >
                  {svc.desc}
                </p>
                <a
                  href="#"
                  data-design-id={`${svc.designId}-cta`}
                  className="mt-4 inline-flex items-center justify-center text-[0.7rem] tracking-[0.12em] uppercase font-medium px-6 py-2.5 transition-colors duration-300"
                  style={{ backgroundColor: "#1A1A1A", color: "#FFFFFF" }}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServiceBuckets() {
  return (
    <section
      data-design-id="services"
      className="px-6 md:px-10 lg:px-16 pt-6 md:pt-8 pb-10 md:pb-14"
    >
      <div data-design-id="services-grid" className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-start">
        <ServiceCard
          number="01"
          title="EMERGE Cost"
          subtitle="Know your numbers."
          description="Accurate cost estimates grounded in current market data. Give your clients confidence at every stage, from feasibility through to tender."
          designIdPrefix="service-cost"
          headerBg="#DDD8D0"
          services={[
            {
              name: "Design Stage Costing",
              price: "€300",
              desc: "Outline cost estimate for pre-planning feasibility and budget setting.",
              designId: "service-cost-item-1",
            },
            {
              name: "Pre-Tender Detailed Cost Estimate",
              price: "€600",
              desc: "Detailed estimate with preliminaries, attendances and blank tender template.",
              designId: "service-cost-item-2",
            },
            {
              name: "Post-Tender Analysis",
              price: "€300",
              desc: "Compare submitted tenders, highlights discrepancies and recommendations for appointment.",
              designId: "service-cost-item-3",
            },
          ]}
        />

        <ServiceCard
          number="02"
          title="EMERGE Planning"
          subtitle="Navigate planning with confidence."
          description="Professionally drafted planning reports and compliance documentation. Submit with confidence knowing the detail is right."
          designIdPrefix="service-planning"
          headerBg="#D4C9BC"
          services={[
            {
              name: "Planning & Design Statement Standard",
              price: "€250–€350",
              desc: "Narrative planning report for standard residential application.",
              designId: "service-planning-item-1",
            },
            {
              name: "Planning & Design Statement ACA / Protected Structure",
              price: "€400–€500",
              desc: "Enhanced report for sensitive planning contexts.",
              designId: "service-planning-item-2",
            },
            {
              name: "Response to Further Information",
              price: "€150–€250",
              desc: "Urgent response to planning authority queries during assessment.",
              designId: "service-planning-item-3",
            },
          ]}
        />

        <ServiceCard
          number="03"
          title="EMERGE Studio"
          subtitle="Win the project."
          description="Presentation-ready project documents that make the case clearly. From design reports to client proposals, we help you win the work."
          designIdPrefix="service-studio"
          headerBg="#E2DDD8"
          services={[
            {
              name: "Feasibility Report",
              price: "€500",
              desc: "Site and brief assessment, planning constraints, budget reality check, key risks and opportunities.",
              designId: "service-studio-item-1",
            },
            {
              name: "Concept Document / Project Brief Response",
              price: "€500",
              desc: "Written design narrative, precedent references, spatial thinking and design intent.",
              designId: "service-studio-item-2",
            },
          ]}
        />
      </div>
    </section>
  );
}