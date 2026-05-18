import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What is the difference between an immigration lawyer and a migration agent?",
    a: "An immigration lawyer is a qualified legal practitioner who can provide legal advice and representation, while a migration agent is registered with MARA and specialises in visa applications. At Masterguides, our team includes both.",
  },
  {
    q: "How much does an immigration lawyer cost in Australia?",
    a: "Costs vary depending on visa type and complexity. We offer a no visa, no fee guarantee — if your visa is unsuccessful, you receive a refund.",
  },
  {
    q: "Do I need a migration agent for an employer sponsored visa?",
    a: "While not mandatory, a migration agent significantly improves your chances of a successful application by ensuring all requirements are met correctly.",
  },
  {
    q: "Do I need an immigration lawyer for a partner visa?",
    a: "Partner visas are complex and require substantial evidence. Having an immigration lawyer or migration agent dramatically reduces the risk of refusal.",
  },
  {
    q: "How do I choose the right migration agent or immigration lawyer?",
    a: "Look for MARA registration, relevant experience with your visa type, transparent fees, and strong client reviews. Masterguides ticks all these boxes.",
  },
  {
    q: "What questions should I ask before hiring a migration agent?",
    a: "Ask about their MARA registration number, success rate, how they communicate with clients, and what's included in their fee.",
  },
  {
    q: "How can an immigration lawyer help with my partner visa application?",
    a: "They can assess your eligibility, help gather the right evidence, draft statements, review your application and lodge it correctly — reducing delays and refusals.",
  },
  {
    q: "How do I know if a migration agent is legit?",
    a: "Check their MARA registration at the OMARA website. All Masterguides agents are MARA-registered and compliant.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background: "white", borderTop: "1px solid #D6D6D6", padding: "113px 80px 112px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "0.75fr 1fr", gap: "80px" }}>

          {/* Left sticky heading */}
          <div style={{ position: "sticky", top: "100px", alignSelf: "start" }}>
            <h2 className="font-serif font-bold" style={{ fontSize: "54px", lineHeight: "64px", letterSpacing: "-1.28px", color: "#1C1E4B", margin: 0 }}>
              FAQs about our migration agents and immigration lawyers
            </h2>
          </div>

          {/* Right accordion */}
          <div style={{ borderBottom: "1px solid #A3A3A3" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderTop: "1px solid #A3A3A3" }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "32px" }}
                >
                  <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "19.8px", lineHeight: "30px", letterSpacing: "-0.2px", color: "#141414" }}>
                    {faq.q}
                  </span>
                  <span style={{ flexShrink: 0 }}>
                    {open === i
                      ? <ChevronUp style={{ width: "32px", height: "32px", color: "#141414" }} />
                      : <ChevronDown style={{ width: "32px", height: "32px", color: "#141414" }} />
                    }
                  </span>
                </button>
                {open === i && (
                  <div style={{ paddingBottom: "20px" }}>
                    <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "15.9px", lineHeight: "24px", letterSpacing: "-0.16px", color: "#424242", margin: 0 }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
