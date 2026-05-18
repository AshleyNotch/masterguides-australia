import { Scale } from "lucide-react";

const items = [
  "Australian Immigration Lawyers",
  "4.9 ⭐ Google Reviews",
  "MARA-Registered Migration Agents",
  "No visa, No fee guarantee",
];

export function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden" style={{ background: "#1C1E4B", height: "80px" }}>
      <div className="flex h-full w-max animate-marquee items-center gap-16 whitespace-nowrap px-8">
        {doubled.map((text, i) => (
          <div key={i} className="flex items-center gap-16">
            <span
              className="font-medium"
              style={{ fontSize: "14px", letterSpacing: "-0.16px", color: "#F4C845" }}
            >
              {text}
            </span>
            <span
              className="grid shrink-0 place-items-center rounded-full border"
              style={{ width: "44px", height: "44px", borderColor: "#F4C845", color: "#F4C845" }}
            >
              <Scale className="h-5 w-5" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
