function ServiceCard({
  title,
  services,
  designIdPrefix,
  headerBg,
  panelBg,
}: {
  title: string;
  services: { name: string; price: string; designId: string }[];
  designIdPrefix: string;
  headerBg: string;
  panelBg: string;
}) {
  return (
    <div
      data-design-id={`${designIdPrefix}-card`}
      className="flex flex-col border border-[#1A1A1A]/10 overflow-hidden"
    >
      {/* Card header */}
      <div
        data-design-id={`${designIdPrefix}-header`}
        className="px-6 py-5 border-b border-[#1A1A1A]/10"
        style={{ backgroundColor: headerBg }}
      >
        <h3
          data-design-id={`${designIdPrefix}-title`}
          className="font-serif text-[0.95rem] tracking-tightest font-normal"
          style={{ color: "#1A1A1A" }}
        >
          {title}
        </h3>
      </div>

      {/* Service rows */}
      <div
        data-design-id={`${designIdPrefix}-services`}
        className="flex flex-col flex-1"
        style={{ backgroundColor: panelBg }}
      >
        {services.map((svc) => (
          <a
            key={svc.designId}
            href="#contact"
            data-design-id={svc.designId}
            className="flex items-center justify-between px-6 py-5 border-b border-[#1A1A1A]/[0.08] group transition-colors duration-200 hover:bg-[#1A1A1A]/[0.03]"
          >
            <span
              data-design-id={`${svc.designId}-name`}
              className="text-[0.85rem] font-light leading-[1.5] pr-4"
              style={{ color: "#1A1A1A" }}
            >
              {svc.name}
            </span>
            <span
              data-design-id={`${svc.designId}-price`}
              className="shrink-0 flex items-center gap-2 text-[0.8rem] font-light"
              style={{ color: "rgba(26,26,26,0.5)" }}
            >
              {svc.price}
              <span
                className="text-[0.85rem] transition-transform duration-200 group-hover:translate-x-0.5"
                style={{ color: "rgba(26,26,26,0.35)" }}
              >
                →
              </span>
            </span>
          </a>
        ))}

        <p
          data-design-id={`${designIdPrefix}-vat`}
          className="px-6 py-4 text-[0.68rem] tracking-[0.08em]"
          style={{ color: "rgba(26, 26, 26, 0.35)" }}
        >
          All prices + VAT
        </p>
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
      <div
        data-design-id="services-grid"
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-start"
      >
        <ServiceCard
          title="EMERGE Cost"
          designIdPrefix="service-cost"
          headerBg="#E6DED4"
          panelBg="#F0EDE8"
          services={[
            {
              name: "Design Stage Costing",
              price: "€300 + VAT",
              designId: "service-cost-item-1",
            },
            {
              name: "Pre-Tender Detailed Cost Estimate",
              price: "€600 + VAT",
              designId: "service-cost-item-2",
            },
            {
              name: "Post-Tender Analysis",
              price: "€300 + VAT",
              designId: "service-cost-item-3",
            },
          ]}
        />

        <ServiceCard
          title="EMERGE Planning"
          designIdPrefix="service-planning"
          headerBg="#EEE7E0"
          panelBg="#F4F1ED"
          services={[
            {
              name: "Planning & Design Statement (Basic)",
              price: "€400 + VAT",
              designId: "service-planning-item-1",
            },
            {
              name: "Planning & Design Statement (Detailed)",
              price: "€800 + VAT",
              designId: "service-planning-item-2",
            },
            {
              name: "Response to Further Information",
              price: "€150 + VAT",
              designId: "service-planning-item-3",
            },
          ]}
        />

        <ServiceCard
          title="EMERGE Studio"
          designIdPrefix="service-studio"
          headerBg="#F5F0EB"
          panelBg="#F7F5F2"
          services={[
            {
              name: "Feasibility Report",
              price: "€500 + VAT",
              designId: "service-studio-item-1",
            },
            {
              name: "Concept Document / Project Brief Response",
              price: "€500 + VAT",
              designId: "service-studio-item-2",
            },
          ]}
        />
      </div>
    </section>
  );
}