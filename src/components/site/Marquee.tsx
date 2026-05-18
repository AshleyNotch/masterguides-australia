import logo from "@/assets/logo.svg";

const items = [
  "Australian Immigration Lawyers",
  "4.9 ⭐️ Google Reviews",
  "MARA-Registered Migration Agents",
  "No visa, No fee guarantee",
];

// Build the flat array: text, logo, text, logo, ...
function buildTrack() {
  const track: Array<{ type: "text"; value: string } | { type: "logo" }> = [];
  items.forEach((text) => {
    track.push({ type: "text", value: text });
    track.push({ type: "logo" });
  });
  return track;
}

const track = [...buildTrack(), ...buildTrack()];

export function Marquee() {
  return (
    <div style={{ background: "#1C1E4B", overflow: "hidden", padding: "18px 0" }}>
      <div
        className="animate-marquee"
        style={{ display: "flex", alignItems: "center", gap: "63px", width: "max-content", whiteSpace: "nowrap" }}
      >
        {track.map((item, i) =>
          item.type === "text" ? (
            <span
              key={i}
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "-0.16px",
                color: "#F4C845",
              }}
            >
              {item.value}
            </span>
          ) : (
            <div
              key={i}
              style={{ width: "44px", height: "44px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <img
                src={logo}
                alt=""
                style={{ width: "44px", height: "44px", objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
