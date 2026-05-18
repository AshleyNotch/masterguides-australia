// Icon assets from Figma (valid for 7 days — export from Figma to replace permanently)
const iconCloud = "https://www.figma.com/api/mcp/asset/9c3525bb-152b-4fc8-8916-f485648da9f5";
const iconDocs  = "https://www.figma.com/api/mcp/asset/88259454-c63d-408f-8e26-0d993c57ca6b";
const iconHand  = "https://www.figma.com/api/mcp/asset/e091413c-4925-48ff-b15b-19fdcc447463";

const cards = [
  {
    icon: iconCloud,
    bg: "#FFFAD6",
    pb: "80px",
    title: "You get peace of mind",
    paras: [
      "You can relax knowing that your application is being prepared by a team experienced migration agents and immigration lawyers.",
      "We have a no visa, no fee guarantee, so if your visa is unsuccessful you will get a refund.",
    ],
  },
  {
    icon: iconDocs,
    bg: "#FFF397",
    pb: "56px",
    title: "We do the heavy lifting",
    paras: [
      "We'll cut your hours of work from 100 to 20 by preparing your application for you.",
      "Photo albums, long form statements, travel history, government forms and more will be taken off your plate and completed to the highest standard by your agent.",
    ],
  },
  {
    icon: iconHand,
    bg: "#FFFAD6",
    pb: "32px",
    title: "You get premium support",
    paras: [
      "Great support starts with your initial consult. If you decide to proceed, you'll get access to same-day support and unlimited consults during your application process.",
      "Post-lodgement, our team goes the extra mile by organising tasks like your medical and tracking the status of your application.",
    ],
  },
];

export function WhyChoose() {
  return (
    <section style={{ background: "#00417C", padding: "0 80px" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "112px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "48px",
        }}
      >
        {/* Heading */}
        <div style={{ maxWidth: "792px", textAlign: "center" }}>
          <h2
            className="font-serif font-bold"
            style={{
              fontSize: "53.6px",
              lineHeight: "64px",
              letterSpacing: "-1.28px",
              color: "#FFFBF5",
              margin: 0,
            }}
          >
            Why choose Masterguides for your Australian visa?
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
            width: "100%",
          }}
        >
          {cards.map(({ icon, bg, pb, title, paras }) => (
            <div
              key={title}
              style={{
                background: bg,
                padding: `32px 32px ${pb}`,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* Icon */}
              <div style={{ width: "80px", height: "80px", overflow: "hidden" }}>
                <img
                  src={icon}
                  alt=""
                  style={{ width: "80px", height: "80px", objectFit: "contain" }}
                />
              </div>

              {/* Heading */}
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "23.8px",
                  lineHeight: "28.8px",
                  letterSpacing: "-0.16px",
                  color: "#141414",
                  margin: 0,
                  paddingTop: "8px",
                }}
              >
                {title}
              </h3>

              {/* Body */}
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {paras.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      fontSize: "15.9px",
                      lineHeight: "24px",
                      letterSpacing: "-0.16px",
                      color: "#424242",
                      margin: 0,
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
