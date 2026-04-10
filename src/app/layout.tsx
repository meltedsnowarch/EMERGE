import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
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
  title: "EMERGE — Practice Support for Architects",
  description:
    "AI-assisted cost estimating, planning reports and project support for sole practitioners and small practices. RIAI registered.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${sourceSerif.variable}`}>
      <head>
        <script
          data-design-ignore="true"
          dangerouslySetInnerHTML={{
            __html: `(function(){if(window===window.parent||window.__DESIGN_NAV_REPORTER__)return;window.__DESIGN_NAV_REPORTER__=true;function report(){try{window.parent.postMessage({type:'IFRAME_URL_CHANGE',payload:{url:location.origin+location.pathname+location.hash}},'*');}catch(e){}}report();var ps=history.pushState,rs=history.replaceState;history.pushState=function(){ps.apply(this,arguments);report();};history.replaceState=function(){rs.apply(this,arguments);report();};window.addEventListener('popstate',report);window.addEventListener('hashchange',report);window.addEventListener('load',report);})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased font-sans">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
