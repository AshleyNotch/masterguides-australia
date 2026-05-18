import { ArrowRight } from "lucide-react";

// CTA section image — add cta-image.jpg to src/assets/ to replace this placeholder
const ctaImage = "https://www.figma.com/api/mcp/asset/116e61fa-95b4-42cb-ae1d-b6a88f13c41f";

export function CTA() {
  return (
    <section id="get-started" style={{ display: "flex", overflow: "hidden" }}>

      {/* Left: yellow */}
      <div style={{ flex: 1, background: "#FFF397", padding: "127px 64px 64px", display: "flex", flexDirection: "column", gap: "32px" }}>
        <h2 className="font-serif font-bold" style={{ fontSize: "54.1px", lineHeight: "64px", letterSpacing: "-1.28px", color: "#1C1E4B", margin: 0 }}>
          Ready to make a move?
        </h2>
        <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "17.6px", lineHeight: "27px", letterSpacing: "-0.16px", color: "#424242", margin: 0, maxWidth: "668px" }}>
          To get started, answer a few questions, and discover if you're eligible to apply for a visa with Masterguides.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 transition-opacity hover:opacity-90"
          style={{ background: "#00417C", border: "1px solid #00417C", borderRadius: "4px", padding: "17px 29px", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.16px", color: "white", textDecoration: "none", alignSelf: "flex-start" }}
        >
          Get started
          <ArrowRight style={{ width: "24px", height: "24px" }} />
        </a>
      </div>

      {/* Right: image */}
      <div style={{ width: "485px", flexShrink: 0, position: "relative" }}>
        <img
          src={ctaImage}
          alt="Ready to make a move"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

    </section>
  );
}
