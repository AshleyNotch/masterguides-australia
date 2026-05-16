import storyImg from "@/assets/story-couple.jpg";
import { Quote } from "lucide-react";

export function Stories() {
  return (
    <section className="bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <h2 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
          Life-changing Australian visa success stories
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <article key={i} className="group overflow-hidden rounded-2xl bg-card ring-1 ring-border">
              <div className="overflow-hidden">
                <img
                  src={storyImg}
                  alt="Visa success story"
                  width={900}
                  height={700}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <Quote className="h-6 w-6 text-gold" />
                <h3 className="mt-3 font-serif text-2xl text-navy">
                  {["Mitch & Mel", "Priya & James", "Sofia & Luca"][i - 1]}
                </h3>
                <p className="text-sm text-foreground/60">
                  {["Partner Visa (820)", "Employer Sponsored (482)", "Partner Visa (309)"][i - 1]}
                </p>
                <p className="mt-3 text-foreground/75">
                  "Massive thanks to the Masterguides team for making the entire process smooth,
                  accessible and easy. We couldn't have done it without you."
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
