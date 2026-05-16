import { ArrowRight, ListChecks, Handshake } from "lucide-react";

const steps = [
  {
    n: "1",
    title: "Take the eligibility quiz",
    body: "Answer a few simple questions to find the right visa for you and check if you're eligible to apply with Masterguides.",
  },
  {
    n: "2",
    title: "Have a consult with an expert",
    body: "Attend a 20-minute, obligation-free call with one of our migration experts.",
  },
  {
    n: "3",
    title: "Get a personalised plan",
    body: "Receive a tailored plan covering evidence requirements, timelines and milestones for your migration goals.",
  },
  {
    n: "4",
    title: "We do the heavy lifting",
    body: "You provide the basic info — we draft statements, build evidence albums and prepare your legal forms.",
  },
  {
    n: "5",
    title: "Final review and lodgement",
    body: "Your application is reviewed by multiple migration experts before being lodged with the Department of Home Affairs.",
  },
  {
    n: "6",
    title: "Receive post-lodgement support",
    body: "We keep you updated on processing times and help with tasks like organising your medical and Medicare.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-28">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-gold text-navy">
              <ListChecks className="h-8 w-8" />
            </span>
            <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
              How it works
            </h2>
            <p className="mt-4 max-w-md text-lg text-foreground/70">
              Our process is designed by migration experts — clear, calm and built around you.
            </p>
            <a
              href="#get-started"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground"
            >
              Get started <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <ol className="space-y-6">
            {steps.map((s) => (
              <li
                key={s.n}
                className="flex gap-5 rounded-xl border border-border bg-card p-6"
              >
                <span className="font-serif text-4xl leading-none text-primary">{s.n}.</span>
                <div>
                  <h3 className="font-serif text-2xl text-navy">{s.title}</h3>
                  <p className="mt-1 text-foreground/70">{s.body}</p>
                </div>
              </li>
            ))}
            <li className="flex items-center gap-5 rounded-xl bg-primary p-6 text-primary-foreground">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-gold text-navy">
                <Handshake className="h-6 w-6" />
              </span>
              <h3 className="font-serif text-2xl text-cream">Get your visa!</h3>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
