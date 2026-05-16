import { ArrowRight } from "lucide-react";
import partner from "@/assets/visa-partner.jpg";
import employer from "@/assets/visa-employer.jpg";

const visas = [
  {
    image: partner,
    alt: "Partner visa",
    title: "Partner visas",
    body: "Partner visas let the partner, spouse or de facto of an Australian citizen, permanent resident or eligible New Zealand citizen live in Australia.",
    subs: [
      ["820", "Partner visa · Short term"],
      ["801", "Partner visa · Permanent"],
      ["309", "Partner Provisional Visa"],
      ["100", "Partner Migrant Visa"],
      ["300", "Prospective Marriage Visa"],
    ],
  },
  {
    image: employer,
    alt: "Employer sponsored visa",
    title: "Employer sponsored visas",
    body: "Employer sponsored visas let people working for Australian employers live and work in their designated professional field across Australia.",
    subs: [
      ["482", "Skills in Demand (SID) visa"],
      ["186", "Employer Nomination Scheme visa"],
    ],
  },
];

export function Visas() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
            Australian visas we specialise in
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Our expert team knows what it takes to prepare successful applications across a
            range of visa categories.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {visas.map((v) => (
            <article key={v.title} className="overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={v.image}
                alt={v.alt}
                width={900}
                height={700}
                loading="lazy"
                className="aspect-[5/3] w-full object-cover"
              />
              <div className="p-8">
                <h3 className="font-serif text-3xl text-navy">{v.title}</h3>
                <p className="mt-3 text-foreground/70">{v.body}</p>

                <div className="mt-6 text-sm font-semibold uppercase tracking-wide text-foreground/55">
                  Subclasses
                </div>
                <ul className="mt-3 divide-y divide-border">
                  {v.subs.map(([code, name]) => (
                    <li key={code} className="flex items-center justify-between py-2.5">
                      <div className="flex items-center gap-3">
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-mint font-serif text-sm text-navy">
                          {code}
                        </span>
                        <span className="text-foreground/85">{name}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-foreground/40" />
                    </li>
                  ))}
                </ul>

                <a
                  href="#get-started"
                  className="mt-7 inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground"
                >
                  Check your eligibility <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
