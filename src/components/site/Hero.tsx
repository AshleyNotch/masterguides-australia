import { ArrowRight, Banknote, Handshake, Lightbulb, Files, FileUser, FileHeart, Network, FileSearch, Contact } from "lucide-react";
import heroCouple from "@/assets/hero-couple.jpg";
import heroTeam from "@/assets/hero-team.jpg";

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
            Your Trusted Australian Visa Experts
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
            className="flex flex-wrap items-center"
            style={{ gap: "0px 36.5px", paddingTop: "8px" }}
          >
            {[
              { Icon: Banknote,  text: "No visa,\nno fee" },
              { Icon: Handshake, text: "MARA Registered\nMigration Agents" },
              { Icon: Lightbulb, text: "Expert visa &\nmigration guidance" },
            ].map(({ Icon, text }) => (
              <li key={text} className="flex items-center" style={{ paddingBottom: "8px" }}>
                <span
                  className="flex items-center justify-center shrink-0"
                  style={{ width: "48px", height: "48px", paddingRight: "16px" }}
                >
                  <Icon style={{ width: "32px", height: "32px", color: "#141414" }} />
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
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-90"
              style={{
                background: "#F4C845",
                border: "1px solid #F4C845",
                borderRadius: "4px",
                padding: "16px 28px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
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

        {/* ── Right column: collage 512×469px ── */}
        <div
          className="relative shrink-0"
          style={{ width: "512px", height: "469px" }}
        >

          {/* 1. App overview card — back, -11deg */}
          <div
            className="absolute"
            style={{
              width: "263px",
              top: "-22px",
              left: "-26px",
              transform: "rotate(-11deg)",
              background: "#FFFFFF",
              boxShadow: "0px 3px 10px rgba(0,0,0,0.08)",
              padding: "20px",
              zIndex: 10,
            }}
          >
            <Files style={{ width: "40px", height: "40px", color: "#1C1E4B", marginBottom: "12px" }} />
            <p
              className="font-serif italic font-bold"
              style={{ fontSize: "20px", color: "#1C1E4B", marginBottom: "16px" }}
            >
              Application overview
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                [FileUser,   "Character history"],
                [FileHeart,  "Nature of commitment"],
                [Network,    "Social aspects"],
                [FileSearch, "General"],
                [Contact,    "Identity"],
              ].map(([Icon, label], i, arr) => (
                <li
                  key={label as string}
                  className="flex items-center gap-3"
                  style={{
                    borderBottom: i < arr.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none",
                    paddingBottom: "10px",
                    marginBottom: i < arr.length - 1 ? "10px" : 0,
                    fontSize: "13px",
                    color: "#424242",
                  }}
                >
                  <Icon style={{ width: "18px", height: "18px", color: "#1C1E4B", opacity: 0.7, flexShrink: 0 }} />
                  <span>{label as string}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Couple polaroid — z20, top-right */}
          <div
            className="absolute"
            style={{
              width: "233px",
              top: "20px",
              left: "271px",
              background: "#FFFFFF",
              border: "1px solid #D6D6D6",
              padding: "8px 8px 20px",
              boxShadow: "0px 3px 3px rgba(0,0,0,0.05)",
              zIndex: 20,
            }}
          >
            <img
              src={heroCouple}
              alt="Couple on Australian beach"
              style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* 3. Sticky note — z20, behind team photo */}
          <div
            className="absolute"
            style={{
              left: "54px",
              right: "257px",
              top: "316px",
              background: "#C7E1D3",
              transform: "rotate(-4deg)",
              padding: "14px",
              zIndex: 20,
            }}
          >
            <Handshake
              style={{ width: "54px", height: "54px", color: "#141414", opacity: 0.7, marginBottom: "10px" }}
            />
            <p
              className="font-serif font-bold"
              style={{
                fontSize: "17.2px",
                lineHeight: "20px",
                letterSpacing: "-0.036em",
                color: "#424242",
              }}
            >
              Your agent is ready to<br />proceed
            </p>
          </div>

          {/* 4. Team photo — z30, on top of sticky note */}
          <div
            className="absolute"
            style={{
              width: "249px",
              top: "266px",
              left: "260px",
              background: "#FFFFFF",
              padding: "5px 5px 26px",
              boxShadow: "0px 3px 3px rgba(0,0,0,0.05)",
              transform: "rotate(2deg)",
              zIndex: 30,
            }}
          >
            <img
              src={heroTeam}
              alt="Our team helping clients"
              style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
