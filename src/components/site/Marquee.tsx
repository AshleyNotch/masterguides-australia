import { Compass, Star } from "lucide-react";

const items = [
  "Australian Immigration Lawyers",
  "4.9 ★ Google Reviews",
  "MARA-Registered Migration Agents",
  "No visa, No fee guarantee",
  "Trusted by 1,200+ applicants",
  "Australia-wide service",
];

export function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden bg-secondary py-5 text-secondary-foreground">
      <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
        {doubled.map((text, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="grid h-7 w-7 place-items-center rounded-full border border-cream/30">
              <Compass className="h-3.5 w-3.5" />
            </span>
            <span className="flex items-center gap-2 text-sm font-medium text-gold">
              {text.includes("★") && <Star className="h-4 w-4 fill-gold" />}
              {text.replace(" ★ ", " ")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
