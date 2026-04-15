export type ServiceCategory = "cost" | "planning" | "design";

export interface Service {
  slug: string;
  title: string;
  price: string;
  category: ServiceCategory;
}

export const CATEGORY_LABELS: Record<ServiceCategory, string> = {
  cost:     "COST",
  planning: "PLANNING",
  design:   "DESIGN",
};

export const CATEGORY_ORDER: ServiceCategory[] = ["cost", "planning", "design"];

export const CATEGORY_BG: Record<ServiceCategory, { header: string; body: string }> = {
  cost:     { header: "#E6DED4", body: "#F0EDE8" },
  planning: { header: "#E6DED4", body: "#F4F1ED" },
  design:   { header: "#E6DED4", body: "#F7F5F2" },
};

export const SERVICES: Service[] = [
  // ── COST ────────────────────────────────────────────────────────────
  {
    slug: "design-stage-costing",
    title: "Design Stage Costing",
    price: "€300 + VAT",
    category: "cost",
  },
  {
    slug: "pre-tender-cost-estimate",
    title: "Pre-Tender Detailed Cost Estimate",
    price: "€600 + VAT",
    category: "cost",
  },
  {
    slug: "post-tender-analysis",
    title: "Post-Tender Analysis",
    price: "€300 + VAT",
    category: "cost",
  },

  // ── PLANNING ─────────────────────────────────────────────────────────
  {
    slug: "planning-design-statement-basic",
    title: "Planning & Design Statement (Basic)",
    price: "€400 + VAT",
    category: "planning",
  },
  {
    slug: "planning-design-statement-detailed",
    title: "Planning & Design Statement (Detailed)",
    price: "€800 + VAT",
    category: "planning",
  },
  {
    slug: "response-further-information",
    title: "Response to Further Information",
    price: "€150 + VAT",
    category: "planning",
  },

  // ── DESIGN ───────────────────────────────────────────────────────────
  {
    slug: "feasibility-report",
    title: "Feasibility Report",
    price: "€500 + VAT",
    category: "design",
  },
  {
    slug: "concept-document",
    title: "Concept Document / Project Brief Response",
    price: "€500 + VAT",
    category: "design",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return SERVICES.filter((s) => s.category === category);
}