import { ArrowRight } from "lucide-react";
import partnerImg from "@/assets/visa-partner.jpg";
import employerImg from "@/assets/visa-employer.jpg";

const visas = [
  {
    img: partnerImg,
    alt: "Partner visas",
    title: "Partner visas",
    desc: "Partner visas let the partner, spouse or de facto of an Australian citizen or permanent resident, or eligible New Zealand citizen live in Australia.",
    subclasses: [
      { code: "820", name: "Partner visa · Short term" },
      { code: "801", name: "Partner visa · Permanent" },
      { code: "309", name: "Partner Provisional Visa" },
      { code: "100", name: "Partner Migrant Visa" },
      { code: "300", name: "Prospective Marriage visa" },
    ],
  },
  {
    img: employerImg,
    alt: "Employer sponsored visas",
    title: "Employer sponsored visas",
    desc: "Employer sponsored visas let people working for Australian employers live and work in their designated professional field in Australia.",
    subclasses: [
      { code: "482", name: "Skills in Demand (SID) visa" },
      { code: "186", name: "Employer Nomination Scheme visa" },
    ],
  },
];

export function Visas() {
  return (
    <section style={{ background: "#F1E1E1", padding: "0 80px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "112px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: "48px" }}>

        <div style={{ maxWidth: "792px", display: "flex", flexDirection: "column", gap: "24px", alignItems: "center" }}>
          <h2 className="font-serif font-bold text-center" style={{ fontSize: "52.8px", lineHeight: "64px", letterSpacing: "-1.28px", color: "#6C0000" }}>
            Australia visas we specialise in
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "23.6px", lineHeight: "36px", letterSpacing: "-0.16px", color: "#525252", textAlign: "center", margin: 0 }}>
            Our expert team knows what it takes to prepare successful applications for a variety of visas.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", width: "100%" }}>
          {visas.map((visa) => (
            <div key={visa.title} style={{ border: "1px solid #D1D2DE", background: "white", display: "flex", flexDirection: "column" }}>
              <div style={{ overflow: "hidden" }}>
                <img src={visa.img} alt={visa.alt} style={{ width: "100%", aspectRatio: "630/420", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ background: "white", padding: "32px", display: "flex", flexDirection: "column", gap: "0", flex: 1, justifyContent: "space-between" }}>
                <div>
                  <h3 className="font-serif font-bold" style={{ fontSize: "34.1px", lineHeight: "40px", letterSpacing: "-0.8px", color: "#6C0000", margin: "0 0 8px" }}>
                    {visa.title}
                  </h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "15.6px", lineHeight: "24px", letterSpacing: "-0.16px", color: "#424242", margin: 0 }}>
                    {visa.desc}
                  </p>

                  <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "15.8px", lineHeight: "20.8px", letterSpacing: "-0.16px", color: "#6C0000", margin: "16px 0 0" }}>
                    Subclasses
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px", marginBottom: "24px" }}>
                    {visa.subclasses.map((s) => (
                      <div key={s.code} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ background: "rgba(244,200,69,0.2)", borderRadius: "1.92px", padding: "5px 12px", fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "12px", lineHeight: "16.2px", letterSpacing: "-0.16px", color: "#424242" }}>
                          {s.code}
                        </span>
                        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "21px", letterSpacing: "-0.16px", color: "#00417C" }}>
                          {s.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#get-started"
                  className="inline-flex items-center justify-center transition-opacity hover:opacity-90"
                  style={{ background: "#F4C845", border: "1px solid #F4C845", borderRadius: "4px", padding: "17px 29px", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.16px", color: "#141414", textDecoration: "none", alignSelf: "flex-start" }}
                >
                  Check your eligibility
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
