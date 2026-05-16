import { Cloud, FileStack, HandHeart } from "lucide-react";

const cards = [
  {
    icon: Cloud,
    title: "You get peace of mind",
    body: "Relax knowing your application is being prepared by an experienced team of migration agents and immigration lawyers. With our no visa, no fee guarantee, you'll get a refund if your application is unsuccessful.",
  },
  {
    icon: FileStack,
    title: "We do the heavy lifting",
    body: "We'll cut your hours of work from 100 down to 20 by preparing your application for you. Long-form statements, photo albums, travel history, government forms and more — handled to the highest standard by your agent.",
  },
  {
    icon: HandHeart,
    title: "You get premium support",
    body: "Great support starts at your initial consult. Once you decide to proceed, you'll get same-day responses and unlimited consults during your application. Post-lodgement, we organise tasks like medicals and tracking too.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <h2 className="max-w-3xl text-center font-serif text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl mx-auto">
          Why choose Masterguides for your Australian visa?
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-2xl bg-cream/[0.06] p-8 ring-1 ring-cream/10 backdrop-blur"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-gold/90 text-navy">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-6 font-serif text-2xl text-cream">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-cream/80">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
