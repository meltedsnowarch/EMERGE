export type ServiceCategory = "cost" | "planning" | "design";

export interface Service {
  slug: string;
  title: string;
  price: string;
  category: ServiceCategory;
  description: string[];  // one item per paragraph
  sendMe: string[];
  getBack: string[];
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
    description: [
      "When you're working up an initial design with a client, one of the first questions they'll ask is what it's likely to cost. Getting a realistic figure on the table early — before you've spent time on detailed drawings — helps your client make an informed decision and keeps the project on track.",
      "Send me your sketch drawings and a brief description of the proposed works. I'll put together a concise cost estimate that you can present directly to your client. It comes as a clean, professionally formatted report — ready to issue as is, or easy to adapt to your own practice style.",
    ],
    sendMe: [
      "Brief project description.",
      "Sketch or concept drawings.",
    ],
    getBack: [
      "A clear cost estimate report.",
      "Formatted for client presentation.",
      "Ready to issue or customise.",
    ],
  },
  {
    slug: "schedule-of-works",
    title: "Schedule of Works",
    price: "€600 + VAT",
    category: "cost",
    description: [
      "When you're ready to go to tender, builders need a clear and complete list of everything they're being asked to price. A well-structured schedule means you get back comparable, accurate submissions — and fewer queries from contractors during the tender period.",
      "Send me your tender drawing set and specification document. I'll work through the full scope of the project and produce a detailed schedule of all items, areas and quantities — with columns left blank for each builder to populate with their own rates and costs. The document is formatted clearly and can be adapted to your preferences, ready to issue to your tender list.",
    ],
    sendMe: [
      "Tender drawing set.",
      "Specification document.",
    ],
    getBack: [
      "Full itemised schedule of all works.",
      "Areas and quantities measured.",
      "Blank rate columns for builders to complete.",
      "Formatted for issue to your tender list.",
    ],
  },
  {
    slug: "post-tender-analysis",
    title: "Post-Tender Analysis",
    price: "€300 + VAT",
    category: "cost",
    description: [
      "When tenders come back, you need to be able to compare them clearly and make a confident recommendation to your client. Without a structured analysis, it can be difficult to understand where the differences lie and whether the lowest price is actually the best option.",
      "Send me the returned tender submissions. I'll compare them side by side, highlight where figures differ, flag any discrepancies or gaps, and produce a clear summary report. You'll have everything you need to make an informed decision on the most suitable contractor — and to explain that decision to your client with confidence.",
    ],
    sendMe: [
      "Completed tender submissions from all contractors.",
    ],
    getBack: [
      "Side-by-side comparison of all tenders.",
      "Discrepancies and gaps highlighted.",
      "Summary report ready for client presentation.",
    ],
  },

  // ── PLANNING ─────────────────────────────────────────────────────────
  {
    slug: "planning-design-statement-basic",
    title: "Planning & Design Statement (Basic)",
    price: "€400 + VAT",
    category: "planning",
    description: [
      "A planning application is only as strong as the report that accompanies it. Well-drafted supporting documentation demonstrates that the proposal has been properly considered, makes the planner's job easier, and significantly reduces the risk of a request for further information.",
      "Send me your drawings and a brief project description. I'll prepare a clear, professionally structured Planning & Design Statement covering the key elements a planning authority expects to see — site description, planning history, description of the proposed development, policy context and planning assessment. The report is written to support your application and can be issued directly under your practice name.",
      "Suitable for standard residential projects — extensions, attic conversions, dormer alterations and similar applications.",
    ],
    sendMe: [
      "Planning drawings.",
      "Brief project description.",
      "Any relevant planning history.",
    ],
    getBack: [
      "Professionally drafted Planning & Design Statement.",
      "Structured to accompany your planning application.",
      "Ready to issue under your practice name.",
    ],
  },
  {
    slug: "planning-design-statement-detailed",
    title: "Planning & Design Statement (Detailed)",
    price: "€800 + VAT",
    category: "planning",
    description: [
      "Some projects require a more comprehensive report — where the planning history is complex, where the proposal needs to be assessed against specific planning considerations, or where the application is likely to face closer scrutiny from the planning authority.",
      "Send me your drawings, project description and any relevant background information. I'll prepare a detailed Planning & Design Statement that goes beyond the standard narrative to address the specific considerations relevant to your project. This may include sun path and daylight analysis, impact assessments, detailed policy review, or a thorough examination of planning history and precedent.",
      "The report is written to anticipate and address the issues a planner is likely to raise — reducing the risk of a request for further information or an outright refusal.",
      "Suitable for more complex residential projects — applications in Architectural Conservation Areas, works to protected structures, larger extensions, contentious applications, or projects with a complex planning history.",
    ],
    sendMe: [
      "Planning drawings.",
      "Detailed project description.",
      "Planning history and any relevant correspondence.",
      "Any specific reports or surveys already prepared.",
    ],
    getBack: [
      "Comprehensive Planning & Design Statement.",
      "Addressing all relevant planning considerations.",
      "Written to anticipate and respond to likely planning concerns.",
      "Ready to issue under your practice name.",
    ],
  },
  {
    slug: "response-further-information",
    title: "Response to Further Information",
    price: "€150 + VAT",
    category: "planning",
    description: [
      "A request for further information from the planning authority needs to be handled carefully. How you respond can determine whether your application is granted or refused — a clear, well-structured response that directly addresses each point raised gives your application the best chance of success.",
      "Send me the RFI letter from the planning authority along with your drawings and any relevant background information. I'll assess each point raised and prepare a professional response letter that addresses the planning authority's concerns directly and concisely. The letter is ready to submit with your application — drawings and any additional surveys or reports remain your responsibility.",
    ],
    sendMe: [
      "RFI letter from the planning authority.",
      "Existing drawings and project background.",
    ],
    getBack: [
      "Professional response letter addressing each point raised.",
      "Ready to submit to the planning authority.",
      "Issued under your practice name.",
    ],
  },

  // ── DESIGN ───────────────────────────────────────────────────────────
  {
    slug: "feasibility-report",
    title: "Feasibility Report",
    price: "€500 + VAT",
    category: "design",
    description: [
      "Before committing to a full design, you and your client need to understand whether a project is actually viable — physically, financially and in planning terms. A well-prepared feasibility report sets out the key considerations clearly, gives your client confidence in the direction of travel, and provides a solid foundation for the design process ahead.",
      "Send me your site information, brief and sketch thoughts. I'll prepare a concise feasibility report covering the site analysis, planning context, design considerations and an indicative cost estimate. It works as a standalone document for early client meetings, and pairs well with the Design Stage Costing service to give your client a complete picture at the outset.",
      "Suitable for residential projects at the pre-design stage — extensions, new builds, change of use and similar proposals.",
    ],
    sendMe: [
      "Site details and location.",
      "Project brief and client requirements.",
      "Any sketch ideas or early thoughts.",
    ],
    getBack: [
      "Site and context analysis.",
      "Planning considerations and constraints.",
      "Design considerations and opportunities.",
      "Indicative cost estimate.",
      "Formatted for presentation to your client.",
    ],
  },
  {
    slug: "concept-document",
    title: "Concept Document / Project Brief Response",
    price: "€500 + VAT",
    category: "design",
    description: [
      "Once the initial design direction is agreed, having a well-prepared concept document helps you lock in the design with your client before progressing to detailed drawings. It sets out the thinking behind the design clearly and concisely — giving your client something tangible to engage with, and giving you a reference point for everything that follows.",
      "Send me your drawings, design notes and brief. I'll prepare a clear concept document that captures the design intent, responds to the project brief, and sets out the key decisions that have shaped the proposal. It works as a client-facing document you can present at design review stage, and as a useful internal reference as the project develops.",
    ],
    sendMe: [
      "Sketch or concept drawings.",
      "Design notes and brief.",
      "Any relevant site or planning background.",
    ],
    getBack: [
      "Concept document capturing the design intent.",
      "Written response to the project brief.",
      "Formatted for client presentation.",
      "A useful reference document throughout the project.",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return SERVICES.filter((s) => s.category === category);
}