import { Check, X, Compass } from "lucide-react";

const rows = [
  {
    label: "Peace of mind",
    sub: "Apply for the right visa, with confidence in a high-quality application.",
    us: true,
    diy: false,
  },
  {
    label: "Applicant workload",
    sub: "We take on your most time-consuming tasks — statements, evidence albums, travel history.",
    us: "15–30 hours",
    diy: "100+ hours",
  },
  {
    label: "Clear instructions",
    sub: "Step-by-step guidance from day one to lodgement.",
    us: true,
    diy: false,
  },
  {
    label: "Unlimited support from a lawyer or migration agent",
    sub: "Same-day answers when you need them.",
    us: true,
    diy: false,
  },
  {
    label: "Price",
    sub: "Affordable, transparent flat fees — no hidden costs.",
    us: "$4,500 AUD",
    diy: "$0 AUD",
  },
  {
    label: "Post-lodgement support",
    sub: "Medicals, Medicare, progress updates — we stay with you.",
    us: true,
    diy: false,
  },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="grid h-9 w-9 place-items-center rounded-full bg-mint">
        <Check className="h-5 w-5 text-primary" strokeWidth={3} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="grid h-9 w-9 place-items-center rounded-full bg-muted">
        <X className="h-5 w-5 text-foreground/50" strokeWidth={3} />
      </span>
    );
  }
  return <span className="font-serif text-2xl text-navy">{value}</span>;
}

export function Compare() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
            How does Masterguides compare to preparing your own visa application?
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Let's break down the key differences.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
          {/* Header */}
          <div className="grid grid-cols-[1.6fr_1fr_1fr] items-center gap-4 border-b border-border bg-muted/50 px-6 py-5 sm:gap-8 sm:px-10">
            <div />
            <div className="flex items-center gap-2 text-primary">
              <Compass className="h-5 w-5" />
              <span className="font-serif text-xl">Masterguides</span>
            </div>
            <div className="font-serif text-xl text-foreground/70">DIY</div>
          </div>

          {rows.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-[1.6fr_1fr_1fr] items-center gap-4 px-6 py-6 sm:gap-8 sm:px-10 ${
                i !== rows.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div>
                <div className="font-serif text-xl text-navy">{r.label}</div>
                <div className="mt-1 text-sm text-foreground/65">{r.sub}</div>
              </div>
              <div><Cell value={r.us} /></div>
              <div><Cell value={r.diy} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
