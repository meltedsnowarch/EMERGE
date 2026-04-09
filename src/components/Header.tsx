"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      data-design-id="header"
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{ backgroundColor: "rgba(230, 224, 214, 0.95)" }}
    >
      <div
        data-design-id="header-inner"
        className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-5"
      >
        <a
          href="/"
          data-design-id="header-logo"
          className="text-[1.1rem] font-semibold tracking-tightest uppercase"
          style={{ color: "#1A1A1A" }}
        >
          EMERGE
        </a>

        <nav
          data-design-id="header-nav-desktop"
          className="hidden md:flex items-center gap-10"
        >
          <a
            href="#"
            data-design-id="header-link-contact"
            className="text-[0.82rem] tracking-wide transition-colors duration-300 uppercase"
            style={{ color: "rgba(26, 26, 26, 0.7)" }}
          >
            Contact
          </a>
          <a
            href="#"
            data-design-id="header-link-about"
            className="text-[0.82rem] tracking-wide transition-colors duration-300 uppercase"
            style={{ color: "rgba(26, 26, 26, 0.7)" }}
          >
            About
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
            className={`block w-5 h-[1.5px] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
            style={{ backgroundColor: "#1A1A1A" }}
          />
          <span
            data-design-id="header-menu-line-2"
            className={`block w-5 h-[1.5px] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
            style={{ backgroundColor: "#1A1A1A" }}
          />
          <span
            data-design-id="header-menu-line-3"
            className={`block w-5 h-[1.5px] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
            style={{ backgroundColor: "#1A1A1A" }}
          />
        </button>
      </div>

      {menuOpen && (
        <nav
          data-design-id="header-nav-mobile"
          className="md:hidden border-t px-6 py-8 flex flex-col gap-6"
          style={{ backgroundColor: "#F5F0EB", borderColor: "rgba(26, 26, 26, 0.1)" }}
        >
          <a
            href="#"
            data-design-id="header-mobile-link-contact"
            className="text-sm tracking-wide transition-colors uppercase"
            style={{ color: "rgba(26, 26, 26, 0.7)" }}
          >
            Contact
          </a>
          <a
            href="#"
            data-design-id="header-mobile-link-about"
            className="text-sm tracking-wide transition-colors uppercase"
            style={{ color: "rgba(26, 26, 26, 0.7)" }}
          >
            About
          </a>
        </nav>
      )}
    </header>
  );
}