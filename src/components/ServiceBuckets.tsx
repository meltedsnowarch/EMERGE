"use client";

import { useState } from "react";

function ServiceCard({
  title,
  description,
  services,
  designIdPrefix,
  headerBg,
  panelBg,
}: {
  title: string;
  description: string;
  services: { name: string; price: string; desc: string; designId: string }[];
  designIdPrefix: string;
  headerBg: string;
  panelBg: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      data-design-id={`${designIdPrefix}-card`}
      className="flex flex-col h-full"
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
            <h3
              data-design-id={`${designIdPrefix}-title`}
              className="font-serif text-[1.3rem] md:text-[1.5rem] tracking-tightest font-normal"
              style={{ color: "#1A1A1A" }}
            >
              {title}
            </h3>
            <p
              data-design-id={`${designIdPrefix}-description`}
              className="mt-4 text-[0.8rem] leading-[1.7] font-serif italic"
              style={{ color: "#1A1A1A", opacity: 0.7 }}
            >
              {description}
            </p>
          </div>
          <span
            data-design-id={`${designIdPrefix}-icon`}
            className={`ml-4 shrink-0 text-[1.3rem] font-light transition-transform duration-300 ${open ? "rotate-45" : ""}`}
            style={{ color: "#1A1A1A", opacity: 0.45 }}
          >
            +
          </span>
        </div>
      </button>

      <div
        data-design-id={`${designIdPrefix}-panel`}
        className={`flex-1 grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        style={{ backgroundColor: panelBg }}
      >
        <div className="overflow-hidden">
          <div
            data-design-id={`${designIdPrefix}-services`}
            className="px-6 md:px-8 pb-6 pt-2 flex flex-col gap-0"
          >
            {services.map((svc) => (
              <div
                key={svc.designId}
                data-design-id={svc.designId}
                className="py-5 border-t border-[#1A1A1A]/10"
              >
                <span
                  data-design-id={`${svc.designId}-name`}
                  className="text-[0.95rem] font-semibold"
                  style={{ color: "#1A1A1A" }}
                >
                  {svc.name}
                </span>
                <p
                  data-design-id={`${svc.designId}-desc`}
                  className="mt-2 text-[0.8rem] leading-[1.7] font-light"
                  style={{ color: "#1A1A1A" }}
                >
                  {svc.desc}
                </p>
                <a
                  href="#"
                  data-design-id={`${svc.designId}-cta`}
                  className="mt-4 inline-flex items-center justify-center text-[0.7rem] tracking-[0.12em] uppercase font-medium px-6 py-2.5 transition-colors duration-300"
                  style={{ backgroundColor: "#E8D6D0", color: "#1A1A1A" }}
                >
                  {svc.price}
                </a>
              </div>
            ))}
            <p
              data-design-id={`${designIdPrefix}-vat`}
              className="pt-3 text-[0.7rem]"
              style={{ color: "rgba(26, 26, 26, 0.45)" }}
            >
              All prices + VAT
            </p>
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
      className="px-6 md:px-10 lg:px-16 pt-6 md:pt-8 pb-6 md:pb-8"
    >
      <div data-design-id="services-grid" className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-stretch">
        <ServiceCard
          title="EMERGE Cost"
          description="Accurate cost estimates grounded in current market data. Give your clients confidence at every stage, from feasibility through to tender."
          designIdPrefix="service-cost"
          headerBg="#D4C9BC"
          panelBg="#D4C9BC"
          services={[
            {
              name: "Design Stage Costing",
              price: "€300",
              desc: "Outline cost estimate for early stage feasibility and budget setting.",
              designId: "service-cost-item-1",
            },
            {
              name: "Pre-Tender Detailed Cost Estimate",
              price: "€600",
              desc: "Detailed cost estimate with prelims, attendances ready for tender stage.",
              designId: "service-cost-item-2",
            },
            {
              name: "Post-Tender Analysis",
              price: "€300",
              desc: "Compare submitted tenders and report on findings.",
              designId: "service-cost-item-3",
            },
          ]}
        />

        <ServiceCard
          title="EMERGE Planning"
          description="Professionally drafted planning reports and compliance documentation. Submit with confidence knowing the detail is right."
          designIdPrefix="service-planning"
          headerBg="#DAD0C5"
          panelBg="#DAD0C5"
          services={[
            {
              name: "Planning & Design Statement (Basic)",
              price: "€400",
              desc: "Narrative planning report for standard residential application.",
              designId: "service-planning-item-1",
            },
            {
              name: "Planning & Design Statement (Detailed)",
              price: "€800",
              desc: "Narrative planning report for complex residential application.",
              designId: "service-planning-item-2",
            },
            {
              name: "Response to Further Information",
              price: "€150",
              desc: "Prepare report letter in response to RFI.",
              designId: "service-planning-item-3",
            },
          ]}
        />

        <ServiceCard
          title="EMERGE Studio"
          description="Presentation-ready project documents that make the case clearly. From design reports to client proposals, we help you win the work."
          designIdPrefix="service-studio"
          headerBg="#E0D8CE"
          panelBg="#E0D8CE"
          services={[
            {
              name: "Feasibility Report",
              price: "€500",
              desc: "Site and brief assessment, planning considerations, budget estimate.",
              designId: "service-studio-item-1",
            },
            {
              name: "Concept Document / Project Brief Response",
              price: "€500",
              desc: "Design narrative, pre-planning response and design intent.",
              designId: "service-studio-item-2",
            },
          ]}
        />
      </div>
    </section>
  );
}