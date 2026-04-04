"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      data-design-id="header"
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm"
    >
      <div
        data-design-id="header-inner"
        className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-5"
      >
        <a
          href="/"
          data-design-id="header-logo"
          className="text-[1.1rem] font-semibold tracking-tightest text-foreground uppercase"
        >
          EMERGE
        </a>

        <nav
          data-design-id="header-nav-desktop"
          className="hidden md:flex items-center gap-10"
        >
          <a
            href="#"
            data-design-id="header-link-architects"
            className="text-[0.82rem] tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase"
          >
            Architects
          </a>
          <a
            href="#"
            data-design-id="header-link-builders"
            className="text-[0.82rem] tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase"
          >
            Builders
          </a>
          <a
            href="#"
            data-design-id="header-link-contact"
            className="text-[0.82rem] tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase"
          >
            Contact
          </a>
          <a
            href="#"
            data-design-id="header-cta-submit"
            className="text-[0.82rem] tracking-wide text-primary-foreground bg-foreground px-5 py-2.5 hover:bg-foreground/85 transition-colors duration-300 uppercase"
          >
            Submit Drawings
          </a>
        </nav>

        <button
          data-design-id="header-menu-toggle"
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            data-design-id="header-menu-line-1"
            className={`block w-5 h-[1.5px] bg-foreground transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            data-design-id="header-menu-line-2"
            className={`block w-5 h-[1.5px] bg-foreground transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            data-design-id="header-menu-line-3"
            className={`block w-5 h-[1.5px] bg-foreground transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav
          data-design-id="header-nav-mobile"
          className="md:hidden border-t border-border bg-background px-6 py-8 flex flex-col gap-6"
        >
          <a
            href="#"
            data-design-id="header-mobile-link-architects"
            className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors uppercase"
          >
            Architects
          </a>
          <a
            href="#"
            data-design-id="header-mobile-link-builders"
            className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors uppercase"
          >
            Builders
          </a>
          <a
            href="#"
            data-design-id="header-mobile-link-contact"
            className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors uppercase"
          >
            Contact
          </a>
          <a
            href="#"
            data-design-id="header-mobile-cta-submit"
            className="text-sm tracking-wide text-primary-foreground bg-foreground px-5 py-3 text-center hover:bg-foreground/85 transition-colors uppercase"
          >
            Submit Drawings
          </a>
        </nav>
      )}
    </header>
  );
}