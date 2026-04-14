export default function Footer() {
  return (
    <footer
      data-design-id="footer"
      className="px-6 md:px-10 lg:px-16 pt-10 pb-12"
    >
      <div
        data-design-id="footer-divider"
        className="w-1/3 h-px mb-6"
        style={{ background: "#E2D9CE" }}
      />
      <p
        data-design-id="footer-attribution"
        className="text-[0.75rem]"
        style={{ color: "rgba(26,26,26,0.35)" }}
      >
        James Lawler &middot; RIAI Registered Member &middot; 2026
      </p>
    </footer>
  );
}