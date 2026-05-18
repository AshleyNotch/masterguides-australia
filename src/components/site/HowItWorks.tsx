import { ArrowRight, Handshake } from "lucide-react";

const steps = [
  {
    n: "1",
    title: "Take the eligibility quiz",
    desc: "Answer a few simple questions to find which visa is right for you and whether you're eligible to apply with Masterguides.",
  },
  {
    n: "2",
    title: "Have a consult with an expert",
    desc: "Attend a 20 minute, obligation-free call with one of our experts.",
  },
  {
    n: "3",
    title: "Get your personalised plan based on your migration goals",
    desc: "Receive a personalised plan for how to secure your visa, covering evidence requirements, timelines and more.",
  },
  {
    n: "4",
    title: "We'll do the heavy lifting for you",
    desc: "You provide the basic info, then we do the heavy lifting of drafting statements, creating evidence albums and drafting legal forms.",
  },
  {
    n: "5",
    title: "Final review and lodgement",
    desc: "Your application undergoes multiple reviews from our migration experts prior to being lodged with the Government.",
  },
  {
    n: "6",
    title: "Receive post-lodgement support",
    desc: "We'll keep you updated on your visa processing time and support you with post-lodgement tasks like organising your medical exam and medicare explication.",
  },
];

export function HowItWorks() {
  return (
    <section style={{ background: "white", padding: "112px 160px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "0.75fr 1fr", gap: "128px", maxWidth: "1280px", margin: "0 auto" }}>

        {/* Left sticky column */}
        <div style={{ position: "sticky", top: "100px", alignSelf: "start", display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ width: "104px", height: "104px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Handshake style={{ width: "80px", height: "80px", color: "#1C1E4B" }} />
          </div>
          <h2 className="font-serif font-bold" style={{ fontSize: "55.1px", lineHeight: "64px", letterSpacing: "-1.28px", color: "#1C1E4B", margin: 0 }}>
            How it works
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "24px", lineHeight: "36px", letterSpacing: "-0.16px", color: "#424242", margin: 0 }}>
            Our process is designed by migration experts.
          </p>
          <div style={{ paddingTop: "8px" }}>
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-90"
              style={{ background: "#F4C845", border: "1px solid #F4C845", borderRadius: "4px", padding: "17px 29px", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.16px", color: "#141414", textDecoration: "none" }}
            >
              Get started
              <ArrowRight style={{ width: "24px", height: "24px" }} />
            </a>
          </div>
        </div>

        {/* Right timeline */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "64px" }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: "-64px", top: "32px", bottom: "0", width: "2px", background: "rgba(10,55,96,0.57)" }} />

          {steps.map((step, i) => (
            <div key={i} style={{ position: "relative", paddingTop: "16px" }}>
              {/* Timeline dot */}
              <div style={{ position: "absolute", left: "-80px", top: "23px", width: "20px", height: "20px", borderRadius: "50%", background: "rgba(0,65,124,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "14px", height: "14px", borderRadius: "7px", background: "rgba(0,65,124,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "4px", background: "#00417C" }} />
                </div>
              </div>
              <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "19.8px", lineHeight: "30px", letterSpacing: "-0.2px", color: "#141414", margin: "0 0 8px" }}>
                {step.n}. {step.title}
              </h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "15.9px", lineHeight: "24px", letterSpacing: "-0.16px", color: "#525252", margin: 0 }}>
                {step.desc}
              </p>
            </div>
          ))}

          {/* Final */}
          <div style={{ position: "relative", paddingTop: "5.6px" }}>
            <div style={{ position: "absolute", left: "-80px", top: "23px", width: "20px", height: "20px", borderRadius: "50%", background: "rgba(0,65,124,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "14px", height: "14px", borderRadius: "7px", background: "rgba(0,65,124,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "4px", background: "#00417C" }} />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <h3 className="font-serif" style={{ fontWeight: 900, fontSize: "33.9px", lineHeight: "40px", letterSpacing: "-0.8px", color: "#00417C", margin: 0 }}>
                Get your visa!
              </h3>
              <Handshake style={{ width: "40px", height: "40px", color: "#00417C" }} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
