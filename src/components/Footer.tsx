export default function Footer() {
  return (
    <footer
      data-design-id="footer"
      className="border-t border-border/60 px-6 md:px-10 lg:px-16 py-14 md:py-16"
    >
      <div
        data-design-id="footer-inner"
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
      >
        <div data-design-id="footer-left" className="flex flex-col gap-3">
          <span
            data-design-id="footer-logo"
            className="text-[1rem] font-semibold tracking-tightest text-foreground uppercase"
          >
            EMERGE
          </span>
          <p
            data-design-id="footer-riai"
            className="text-[0.7rem] tracking-[0.14em] text-foreground/30 uppercase"
          >
            RIAI Registered Practice
          </p>
        </div>

        <nav
          data-design-id="footer-nav"
          className="flex items-center gap-8"
        >
          <a
            href="#"
            data-design-id="footer-link-architects"
            className="text-[0.72rem] tracking-[0.12em] text-foreground/40 hover:text-foreground transition-colors duration-300 uppercase"
          >
            Architects
          </a>
          <a
            href="#"
            data-design-id="footer-link-contact"
            className="text-[0.72rem] tracking-[0.12em] text-foreground/40 hover:text-foreground transition-colors duration-300 uppercase"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}