import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="get-started" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-5 py-24 text-center lg:px-10 lg:py-32">
        <h2 className="font-serif text-5xl leading-tight text-cream sm:text-6xl">
          Ready to make a move?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/80">
          Answer a few quick questions and discover whether you're eligible to apply for a
          visa with Masterguides.
        </p>
        <a
          href="#"
          className="mt-10 inline-flex items-center gap-2 rounded-md bg-gold px-7 py-4 text-base font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5"
        >
          Get started <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
