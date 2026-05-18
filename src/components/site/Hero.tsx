import { ArrowRight, Banknote, Handshake, Lightbulb } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

export function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      <div
        className="mx-auto flex items-center"
        style={{ maxWidth: "1280px", padding: "80px 0", gap: "0px" }}
      >

        {/* ── Left column: 768px ── */}
        <div
          className="flex flex-col"
          style={{ width: "768px", minWidth: "768px", gap: "24px" }}
        >
          {/* H1 */}
          <h1
            className="font-serif font-bold"
            style={{
              fontSize: "68.8px",
              lineHeight: "80px",
              letterSpacing: "-1.6px",
              color: "#1C1E4B",
            }}
          >
            Your Trusted<br />Australian Visa<br />Experts
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: "23.8px",
              lineHeight: "36px",
              letterSpacing: "-0.16px",
              color: "#424242",
              fontWeight: 400,
            }}
          >
            Let our MARA-registered migration team handle the complexity so you
            can focus on building your future life in Australia.
          </p>

          {/* Trust badges */}
          <ul
            className="flex flex-wrap items-center content-start"
            style={{ gap: "0px 36.5px", paddingTop: "8px" }}
          >
            {[
              { Icon: Banknote,  text: "No visa,\nno fee" },
              { Icon: Handshake, text: "MARA Registered\nMigration Agents" },
              { Icon: Lightbulb, text: "Expert visa &\nmigration guidance" },
            ].map(({ Icon, text }) => (
              <li
                key={text}
                className="flex items-center"
                style={{ paddingTop: "4px", paddingLeft: "8px", paddingBottom: "8px" }}
              >
                <span
                  className="flex items-center justify-center shrink-0"
                  style={{ width: "48px", height: "48px", paddingRight: "16px" }}
                >
                  <Icon style={{ width: "40px", height: "40px", color: "#141414" }} />
                </span>
                <span
                  className="whitespace-pre-line"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "18px",
                    lineHeight: "18px",
                    letterSpacing: "-0.16px",
                    color: "#424242",
                  }}
                >
                  {text}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div style={{ paddingTop: "8px" }}>
            <a
              href="#get-started"
              className="inline-flex items-center transition-opacity hover:opacity-90"
              style={{
                background: "#F4C845",
                border: "1px solid #F4C845",
                borderRadius: "4px",
                padding: "17px 29px",
                gap: "8px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "-0.16px",
                color: "#141414",
                textDecoration: "none",
              }}
            >
              Check Your Eligibility Free
              <ArrowRight style={{ width: "24px", height: "24px" }} />
            </a>
          </div>
        </div>

        {/* ── Right column: hero image ── */}
        <div className="shrink-0 flex items-center justify-center" style={{ width: "512px" }}>
          <img
            src={heroImage}
            alt="Visa application overview"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}
