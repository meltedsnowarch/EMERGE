import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import ClientBody from "./ClientBody";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "EMERGE Studio — Practice Support for Architects",
    template: "%s | EMERGE Studio",
  },
  description:
    "AI-assisted cost estimating, planning reports and project support for sole practitioners and small practices in Ireland. RIAI registered architect. 48-hour turnaround.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${sourceSerif.variable} h-full antialiased`}>
      <head>
        <script
          data-design-ignore="true"
          dangerouslySetInnerHTML={{
            __html: `(function(){if(window===window.parent||window.__DESIGN_NAV_REPORTER__)return;window.__DESIGN_NAV_REPORTER__=true;function report(){try{window.parent.postMessage({type:'IFRAME_URL_CHANGE',payload:{url:location.origin+location.pathname+location.hash}},'*');}catch(e){}}report();var ps=history.pushState,rs=history.replaceState;history.pushState=function(){ps.apply(this,arguments);report();};history.replaceState=function(){rs.apply(this,arguments);report();};window.addEventListener('popstate',report);window.addEventListener('hashchange',report);window.addEventListener('load',report);})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans bg-white antialiased">

        {/* ── HEADER / NAV ─────────────────────────────────────────────── */}
        <header
          data-design-id="nav"
          className="fixed top-0 left-0 right-0 z-50 border-b"
          style={{ background: "#EEE7E0", borderColor: "rgba(26,26,26,0.1)" }}
        >
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link
              data-design-id="nav-logo"
              href="/"
              className="text-base tracking-tight hover:opacity-80 transition-opacity"
              style={{ color: "#1A1A1A" }}
            >
              <span className="font-bold">EMERGE</span>
              <span className="font-light"> Studio</span>
            </Link>

            <nav
              data-design-id="nav-links"
              className="flex items-center gap-6 sm:gap-8"
            >
              <Link
                href="/#services"
                className="text-sm transition-opacity hidden sm:block hover:opacity-60"
                style={{ color: "#1A1A1A" }}
              >
                Services
              </Link>
              <Link
                href="/#how-it-works"
                className="text-sm transition-opacity hidden sm:block hover:opacity-60"
                style={{ color: "#1A1A1A" }}
              >
                How it works
              </Link>
              <Link
                href="/contact"
                className="text-sm transition-opacity hover:opacity-60"
                style={{ color: "#1A1A1A" }}
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main data-design-id="main" className="flex-1 pt-16">
          <ClientBody>{children}</ClientBody>
        </main>

      </body>
    </html>
  );
}
