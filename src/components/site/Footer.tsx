import { Compass } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-4 lg:px-10">
        <div>
          <div className="flex items-center gap-2 text-gold">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold">
              <Compass className="h-4 w-4" />
            </span>
            <span className="font-serif text-2xl">Masterguides</span>
          </div>
          <p className="mt-5 max-w-xs text-sm text-cream/70">
            Australian immigration lawyers and registered migration agents helping you
            build your future in Australia.
          </p>
        </div>

        {[
          ["Visas", ["Partner visa", "Employer sponsored", "Skilled visa", "Business visa"]],
          ["Company", ["About", "Why we're different", "For businesses", "Contact"]],
          ["Resources", ["Eligibility quiz", "Pricing", "Learn", "FAQs"]],
        ].map(([title, items]) => (
          <div key={title as string}>
            <h4 className="font-serif text-lg text-cream">{title as string}</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              {(items as string[]).map((it) => (
                <li key={it}>
                  <a href="#" className="hover:text-gold">{it}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-6 text-xs text-cream/55 sm:flex-row sm:items-center lg:px-10">
          <p>© {new Date().getFullYear()} Masterguides Australia. All rights reserved.</p>
          <p>MARA-Registered · Licensed Legal Practitioners</p>
        </div>
      </div>
    </footer>
  );
}
