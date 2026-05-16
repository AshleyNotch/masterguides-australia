import { Link } from "@tanstack/react-router";
import { Compass, ChevronDown, ArrowRight, Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Partner visa", hasMenu: true },
  { label: "Employer sponsor visas", hasMenu: true },
  { label: "For businesses", hasMenu: false },
  { label: "Why we're different", hasMenu: true },
  { label: "Learn", hasMenu: true },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-2 text-primary">
          <span className="grid h-8 w-8 place-items-center rounded-full border border-primary">
            <Compass className="h-4 w-4" />
          </span>
          <span className="font-serif text-2xl tracking-tight">Masterguides</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-foreground/80 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
            >
              {item.label}
              {item.hasMenu && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#get-started"
            className="hidden items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-flex"
          >
            Get started
            <ArrowRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-cream lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center justify-between rounded-md px-3 py-3 text-left text-sm font-medium hover:bg-muted"
              >
                {item.label}
                {item.hasMenu && <ChevronDown className="h-4 w-4 opacity-60" />}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
