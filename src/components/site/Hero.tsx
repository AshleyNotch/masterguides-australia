import { ArrowRight, Banknote, Handshake, Lightbulb, FileText, ClipboardCheck, BadgeCheck, Sparkles } from "lucide-react";
import heroCouple from "@/assets/hero-couple.jpg";
import heroTeam from "@/assets/hero-team.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_1fr] lg:px-10 lg:py-24">
        {/* Copy */}
        <div>
          <h1 className="font-serif text-5xl leading-[1.05] text-navy sm:text-6xl lg:text-7xl">
            Australian immigration lawyers <span className="italic">&</span> migration agents
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/75">
            Let our team guide you through your visa application so you can focus on what
            really matters — your future life in Australia.
          </p>

          <ul className="mt-8 flex flex-wrap items-start gap-x-8 gap-y-4 text-sm font-medium text-foreground/85">
            <li className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-mint/60">
                <Banknote className="h-4 w-4 text-primary" />
              </span>
              No visa,<br />no fee
            </li>
            <li className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-mint/60">
                <Handshake className="h-4 w-4 text-primary" />
              </span>
              Registered<br />migration agents
            </li>
            <li className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-mint/60">
                <Lightbulb className="h-4 w-4 text-primary" />
              </span>
              Experienced<br />immigration lawyers
            </li>
          </ul>

          <a
            href="#get-started"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-4 text-base font-semibold text-gold-foreground shadow-[0_8px_0_-2px_rgba(0,0,0,0.08)] transition-transform hover:translate-y-0.5"
          >
            Check your eligibility
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        {/* Collage */}
        <div className="relative mx-auto h-[520px] w-full max-w-xl lg:h-[560px]">
          {/* Application overview card */}
          <div className="absolute left-0 top-4 w-[300px] rotate-[-6deg] rounded-md bg-card p-5 shadow-xl ring-1 ring-black/5">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <FileText className="h-5 w-5 text-navy" />
              <span className="font-serif text-xl text-navy">Application overview</span>
            </div>
            <ul className="mt-3 space-y-2.5 text-sm text-foreground/80">
              {[
                ["📋", "Character history"],
                ["💞", "Nature of commitment"],
                ["🌐", "Social aspects"],
                ["🔎", "General"],
                ["🪪", "Identity"],
              ].map(([icon, label]) => (
                <li key={label} className="flex items-center gap-3 border-b border-border/60 pb-2 last:border-0">
                  <span>{icon}</span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Polaroid couple */}
          <div className="absolute right-0 top-0 w-[230px] rotate-[6deg] bg-card p-3 shadow-xl ring-1 ring-black/5">
            <img
              src={heroCouple}
              alt="Couple walking on an Australian beach"
              width={800}
              height={800}
              className="aspect-square w-full object-cover"
            />
          </div>

          {/* Team polaroid */}
          <div className="absolute bottom-6 right-4 w-[320px] rotate-[-3deg] bg-card p-3 shadow-2xl ring-1 ring-black/5">
            <img
              src={heroTeam}
              alt="Our team helping clients"
              width={900}
              height={700}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Sticky note */}
          <div className="absolute bottom-0 left-6 w-[240px] rotate-[-4deg] bg-mint p-4 shadow-lg">
            <Sparkles className="h-5 w-5 text-primary" />
            <p className="mt-2 font-serif text-lg leading-snug text-navy">
              Your agent is ready to proceed
            </p>
          </div>

          {/* Tiny badge */}
          <div className="absolute left-[42%] top-[44%] hidden h-14 w-14 rotate-[8deg] place-items-center rounded-full bg-gold text-navy shadow-lg sm:grid">
            <BadgeCheck className="h-7 w-7" />
          </div>

          {/* tiny floating clipboard accent */}
          <ClipboardCheck className="absolute -left-2 top-[44%] h-6 w-6 text-primary/40" />
        </div>
      </div>
    </section>
  );
}
