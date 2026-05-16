import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What's the difference between an immigration lawyer and a migration agent?",
    a: "Both can help with Australian visa applications. Immigration lawyers are qualified legal practitioners who can provide legal advice and represent you in court. Migration agents are registered with MARA and specialise in visa applications. At Masterguides, our lawyers handle partner visa applications while our registered agents specialise in employer sponsored visas — so you always get the right expert for your case.",
  },
  {
    q: "How much does an immigration lawyer cost in Australia?",
    a: "Fees vary widely across the industry. At Masterguides we believe in transparent pricing — our flat fees are published, with no hidden costs. Plus, our no-visa, no-fee guarantee means if your visa isn't approved, you don't pay our service fee.",
  },
  {
    q: "Do I need a migration agent for an employer sponsored visa?",
    a: "While you can apply yourself, working with a registered migration agent significantly improves your chances. Subclasses 482 and 186 require detailed documentation and sponsor compliance. Our MARA-registered agents have helped hundreds of applicants and businesses successfully navigate the process.",
  },
  {
    q: "Do I need an immigration lawyer for a partner visa?",
    a: "Partner visa applications (820/801 onshore or 309/100 offshore) require extensive evidence of a genuine relationship. A lawyer ensures your application meets all requirements and can handle complex legal issues that arise along the way.",
  },
  {
    q: "How do I choose the right migration agent or immigration lawyer?",
    a: "Check that migration agents hold a valid MARN and lawyers hold an LPN. Look for proven outcomes, transparent pricing and ongoing support. A good provider will offer a free initial consultation to assess your case before you commit.",
  },
  {
    q: "How do I know if a migration agent is legit?",
    a: "All migration agents in Australia must hold a valid MARN issued by MARA — verifiable on the official MARA website. Be wary of anyone who can't provide their MARN, guarantees visa approval, or pressures you to pay before explaining their services.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-4xl px-5 py-20 lg:px-10 lg:py-28">
        <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
          FAQs about our migration agents and immigration lawyers
        </h2>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-serif text-xl text-navy sm:text-2xl">{f.q}</span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 pr-12 text-foreground/75">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
