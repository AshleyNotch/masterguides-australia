import logo from "@/assets/logo.svg";
import { Scale } from "lucide-react";

const navCols = [
  {
    heading: "Visa types",
    links: ["Partner visas", "Employer sponsored visas", "For businesses"],
  },
  {
    heading: "Company",
    links: ["Meet the team", "Blog"],
  },
  {
    heading: "Support",
    links: ["FAQs", "Contact us"],
  },
  {
    heading: "Follow us",
    links: ["TikTok", "Instagram", "LinkedIn", "Facebook"],
  },
];

export function Footer() {
  return (
    <footer style={{ background: "#00417C", padding: "80px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" }}>

        {/* Top grid: logo col + nav cols */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 3.21fr", gap: "96px" }}>

          {/* Logo + address + hours */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "16px" }}>
            <img src={logo} alt="Masterguides Australia" style={{ height: "60px", width: "auto", filter: "brightness(0) invert(1)", alignSelf: "flex-start" }} />

            <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "13.8px", lineHeight: "21px", letterSpacing: "-0.16px", color: "white", margin: 0 }}>
              381, Level 2, 66 Victor Crescent,<br />Narre Warren, Victoria 3805
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "10.8px", lineHeight: "16.5px", letterSpacing: "0.875px", color: "rgba(255,255,255,0.55)", textTransform: "uppercase" }}>
                Business hours
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <div style={{ display: "flex", gap: "0" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", lineHeight: "19.5px", color: "rgba(255,255,255,0.65)", width: "110px" }}>Mon – Fri</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", lineHeight: "19.5px", color: "white" }}>9:00 AM – 5:00 PM</span>
                </div>
                <div style={{ display: "flex", gap: "0" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", lineHeight: "19.5px", color: "rgba(255,255,255,0.65)", width: "110px" }}>Sat – Sun</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", lineHeight: "19.5px", color: "rgba(255,255,255,0.38)" }}>Closed</span>
                </div>
              </div>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "10.7px", lineHeight: "16.5px", color: "rgba(255,255,255,0.4)", letterSpacing: "-0.16px" }}>
                Melbourne time (AEST/AEDT)
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontStyle: "italic", fontSize: "11.6px", lineHeight: "18px", color: "white" }}>Members of</span>
              <div style={{ display: "flex", gap: "22px", alignItems: "center" }}>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} style={{ width: "53px", height: "32px", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Scale style={{ width: "20px", height: "20px", color: "rgba(255,255,255,0.6)" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Nav columns */}
          <div style={{ display: "grid", gridTemplateColumns: "167px 93px 1fr 1fr", gap: "40px" }}>
            {navCols.map((col) => (
              <div key={col.heading} style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.16px", color: "white", margin: "0 0 16px" }}>
                  {col.heading}
                </p>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "13.8px", lineHeight: "21px", letterSpacing: "-0.16px", color: "white", textDecoration: "none", padding: "8px 0", display: "block" }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Divider with logo */}
        <div style={{ position: "relative", height: "49px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", left: "-80px", right: "-80px", height: "1px", background: "white", top: "50%" }} />
          <div style={{ position: "absolute", left: "50%", transform: "translate(-50%, -50%)", top: "50%", background: "#00417C", padding: "0 16px" }}>
            <img src={logo} alt="Masterguides" style={{ height: "40px", width: "auto", filter: "brightness(0) invert(1)" }} />
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13.9px", lineHeight: "21px", color: "#FFF397", letterSpacing: "-0.16px" }}>
              © 2026 Masterguides Australia PVT (LTD)
            </span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13.9px", lineHeight: "21px", color: "#FFF397", letterSpacing: "-0.16px" }}>
              Tess McLinden, Principal Lawyer, LPN 5515273
            </span>
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service", "Code of Conduct"].map((item) => (
              <a key={item} href="#" style={{ fontFamily: "Inter, sans-serif", fontSize: "13.9px", lineHeight: "21px", color: "#FFF397", letterSpacing: "-0.16px", textDecoration: "none" }}>
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
