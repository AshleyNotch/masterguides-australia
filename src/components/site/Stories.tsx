import storyImg from "@/assets/story-couple.jpg";

export function Stories() {
  return (
    <section style={{ background: "white", padding: "80px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "48px" }}>
        <h2 className="font-serif font-bold text-center" style={{ fontSize: "52.6px", lineHeight: "64px", letterSpacing: "-1.28px", color: "#1C1E4B" }}>
          Life changing Australian visa success stories
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", maxWidth: "960px", width: "100%", alignItems: "center", gap: "0" }}>

          {/* Photo — rotated -3deg */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ transform: "rotate(-3deg)", boxShadow: "0px 2px 5px rgba(0,0,0,0.15)" }}>
              <img
                src={storyImg}
                alt="Client success story"
                style={{ width: "480px", height: "490px", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>

          {/* Testimonial card — rotated +2deg */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div
              style={{
                transform: "rotate(2deg)",
                background: "#FFF397",
                border: "1px solid #D1D2DE",
                filter: "drop-shadow(0px 2px 3px rgba(0,0,0,0.15))",
                padding: "33px",
                width: "528px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <h3 className="font-serif font-bold" style={{ fontSize: "35.3px", lineHeight: "40px", letterSpacing: "-0.8px", color: "#000", margin: 0 }}>
                Mitch &amp; Mel
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "17.7px", lineHeight: "21.6px", letterSpacing: "-0.16px", color: "#000", margin: 0 }}>
                  Partner Visa (subclass 820)
                </p>
                <div style={{ height: "1px", background: "#F4C845" }} />
                <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "17.7px", lineHeight: "27px", letterSpacing: "-0.16px", color: "#000", margin: 0 }}>
                  "Massive thanks to Matilda for making this entire process smooth, accessible and easy. We couldn't have done it without you."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
