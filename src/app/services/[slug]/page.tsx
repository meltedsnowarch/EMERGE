import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  SERVICES,
  CATEGORY_LABELS,
  getServiceBySlug,
} from "@/lib/services";

/* ── Static params ──────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

/* ── Metadata ───────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.title} — ${service.price}. Practice support for architects in Ireland.`,
  };
}

/* ── Page ───────────────────────────────────────────────────────────────── */
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const categoryLabel = CATEGORY_LABELS[service.category];

  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto">

        {/* ── Breadcrumb ─────────────────────────────────────────────── */}
        <div className="mb-6 animate-fade-up">
          <Link
            href="/#services"
            className="text-xs font-semibold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors"
          >
            &larr; {categoryLabel}
          </Link>
        </div>

        {/* ── Title ──────────────────────────────────────────────────── */}
        <div className="mb-8 animate-fade-up">
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-tight">
            {service.title}
          </h1>
        </div>

        {/* ── Content grid ───────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

          {/* Left — description (2/3 width) */}
          <div className="md:col-span-2 animate-fade-up space-y-4">
            {/* Description paragraphs */}
            {service.description.map((para, i) => (
              <p key={i} className="text-sm leading-[1.8]" style={{ color: "#1A1A1A" }}>
                {para}
              </p>
            ))}

            {/* What you send me */}
            <div className="pt-4">
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "rgba(26,26,26,0.4)" }}>
                What you send me
              </p>
              <ul className="space-y-1">
                {service.sendMe.map((item, i) => (
                  <li key={i} className="text-sm leading-[1.8] flex gap-2" style={{ color: "#1A1A1A" }}>
                    <span style={{ color: "rgba(26,26,26,0.3)" }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What you get back */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "rgba(26,26,26,0.4)" }}>
                What you get back
              </p>
              <ul className="space-y-1">
                {service.getBack.map((item, i) => (
                  <li key={i} className="text-sm leading-[1.8] flex gap-2" style={{ color: "#1A1A1A" }}>
                    <span style={{ color: "rgba(26,26,26,0.3)" }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — sidebar (1/3 width) */}
          <div className="animate-fade-up-delay-1">
            <div
              className="border p-6 space-y-6"
              style={{ background: "#F5F0EB", borderColor: "rgba(26,26,26,0.12)" }}
            >
              <p className="text-sm text-stone-700 leading-relaxed">
                Prepared by James Lawler, MRIAI
              </p>
              <p className="text-sm font-semibold" style={{ color: "#1A1A1A" }}>
                {service.price}
              </p>
              <Link
                href="/contact"
                className="block text-center text-sm font-semibold uppercase tracking-widest py-3 px-4 transition-opacity hover:opacity-80"
                style={{ background: "#b7b4a1", color: "#1A1A1A" }}
              >
                Book Now
              </Link>
            </div>
          </div>

        </div>

        {/* ── Back ───────────────────────────────────────────────────── */}
        <div className="mt-16 pt-10 border-t border-stone-100 animate-fade-up-delay-2">
          <Link
            href="/#services"
            className="text-xs font-semibold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors"
          >
            &larr; Back to all services
          </Link>
        </div>

      </div>
    </div>
  );
}