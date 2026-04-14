export default function ContactCTA() {
  return (
    <section
      id="contact"
      data-design-id="contact"
      className="px-6 md:px-10 lg:px-16 py-16 md:py-24 border-t border-border/60"
    >
      <div data-design-id="contact-inner" className="max-w-2xl">

        {/* Profile block */}
        <div
          data-design-id="contact-profile"
          className="flex flex-col sm:flex-row items-start gap-8 mb-10 animate-fade-up"
        >
          <div data-design-id="contact-bio">
            <h2
              data-design-id="contact-name"
              className="text-[0.9rem] font-semibold mb-3 tracking-tight"
              style={{ color: "#1A1A1A" }}
            >
              James Lawler &middot; MRIAI &middot;{" "}
              <a
                href="https://www.meltedsnow.net"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-60 transition-opacity"
                style={{ color: "#1A1A1A" }}
              >
                Meltedsnow Architects
              </a>
            </h2>
            <p
              data-design-id="contact-bio-text"
              className="text-[0.85rem] leading-relaxed"
              style={{ color: "rgba(26,26,26,0.6)" }}
            >
              James is a Dublin-based architect with over 30 years of experience in
              residential design. EMERGE Studio provides AI-assisted practice support
              for sole practitioners and small practices — producing cost estimates,
              planning reports and project documents, reviewed and signed off by a
              registered professional. Your drawings are treated as strictly
              confidential and deleted within 30 days of completion.
            </p>
          </div>
        </div>

        {/* Call to action line */}
        <p
          data-design-id="contact-cta-line"
          className="mb-6 text-[0.9rem] font-semibold tracking-tight animate-fade-up-delay-1"
          style={{ color: "#1A1A1A" }}
        >
          To get started, contact James directly:
        </p>

        {/* Contact details */}
        <div
          data-design-id="contact-details"
          className="space-y-3 animate-fade-up-delay-1"
        >
          {/* Phone */}
          <div className="flex items-center gap-4">
            <span
              className="text-[0.68rem] font-semibold uppercase tracking-widest w-10 flex-shrink-0"
              style={{ color: "rgba(26,26,26,0.35)" }}
            >
              Tel
            </span>
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="tel:0834516091"
                className="text-[0.85rem] font-medium hover:opacity-60 transition-opacity"
                style={{ color: "#1A1A1A" }}
              >
                083 451 6091
              </a>
              <a
                href="https://wa.me/353834516091"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <span
              className="text-[0.68rem] font-semibold uppercase tracking-widest w-10 flex-shrink-0"
              style={{ color: "rgba(26,26,26,0.35)" }}
            >
              Email
            </span>
            <a
              href="mailto:emergearchservices@protonmail.com"
              className="text-[0.85rem] font-medium hover:opacity-60 transition-opacity"
              style={{ color: "#1A1A1A" }}
            >
              emergearchservices@protonmail.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}