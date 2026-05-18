import { Check, X, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.svg";

const rows = [
  { label: "Peace of mind",                                        mg: "check",      diy: "x"     },
  { label: "Applicant workload",                                   mg: "15-30 hours", diy: "100 hours" },
  { label: "Clear instructions",                                   mg: "check",      diy: "x"     },
  { label: "Unlimited support from an immigration lawyer or migration agent", mg: "check", diy: "x" },
  { label: "Price",                                                mg: "$4500 AUD",  diy: "$0 AUD" },
  { label: "Post-lodgement support",                              mg: "check",      diy: "x"     },
];

function Cell({ value, navy }: { value: string; navy?: boolean }) {
  if (value === "check") return <Check style={{ width: "24px", height: "24px", color: "white", strokeWidth: 2.5 }} />;
  if (value === "x")     return <X     style={{ width: "24px", height: "24px", color: "#A3A3A3", strokeWidth: 2.5 }} />;
  return (
    <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "17.6px", lineHeight: "27px", letterSpacing: "-0.18px", color: navy ? "#FFFAD6" : "#424242", textAlign: "center" }}>
      {value}
    </span>
  );
}

export function Compare() {
  return (
    <section style={{ background: "white", padding: "0 80px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: "64px" }}>

        {/* Heading */}
        <div style={{ maxWidth: "792px", display: "flex", flexDirection: "column", gap: "24px", alignItems: "center" }}>
          <h2 className="font-serif font-bold text-center" style={{ fontSize: "40px", lineHeight: "48px", letterSpacing: "-0.16px", color: "#1C1E4B" }}>
            How does Masterguides compare to preparing your own visa application?
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "15.8px", lineHeight: "24px", letterSpacing: "-0.16px", color: "#424242", textAlign: "center", margin: 0 }}>
            Let's break down the key differences.
          </p>
        </div>

        {/* Table */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
          {/* Header */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
            <div style={{ borderBottom: "1px solid #A3A3A3" }} />
            <div style={{ background: "#00417C", borderBottom: "1px solid #5BA07B", display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", padding: "32px 32px 33px" }}>
              <img src={logo} alt="Masterguides" style={{ height: "41px", width: "41px", filter: "brightness(0) invert(1)" }} />
              <span className="font-serif font-bold" style={{ fontSize: "22px", lineHeight: "normal", color: "white" }}>Masterguides Australia</span>
            </div>
            <div style={{ borderBottom: "1px solid #A3A3A3", display: "flex", alignItems: "center", justifyContent: "center", padding: "31px 32px" }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "32px", lineHeight: "38.4px", letterSpacing: "-0.18px", color: "#424242" }}>DIY</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
              <div style={{ borderBottom: i < rows.length - 1 ? "1px solid #A3A3A3" : "none", padding: "24px 32px", display: "flex", alignItems: "center" }}>
                <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: "27px", letterSpacing: "-0.18px", color: "#424242" }}>
                  {row.label}
                </span>
              </div>
              <div style={{ background: "#00417C", borderBottom: i < rows.length - 1 ? "1px solid #5BA07B" : "none", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 32px" }}>
                <Cell value={row.mg} navy />
              </div>
              <div style={{ borderBottom: i < rows.length - 1 ? "1px solid #A3A3A3" : "none", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 32px" }}>
                <Cell value={row.diy} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div style={{ background: "#C7E1D3", width: "100%", padding: "64px", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "32px", lineHeight: "38.4px", letterSpacing: "-0.32px", color: "#1C1E4B", textAlign: "center", margin: 0 }}>
            Ready to secure your<br />initial consult?
          </h2>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 transition-opacity hover:opacity-90"
            style={{ background: "#00417C", border: "1px solid #00417C", borderRadius: "4px", padding: "17px 29px", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.16px", color: "white", textDecoration: "none" }}
          >
            Get started
            <ArrowRight style={{ width: "24px", height: "24px" }} />
          </a>
        </div>

      </div>
    </section>
  );
}
