import { Link } from "@tanstack/react-router";
import { Scale, ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Visas",          hasMenu: true  },
  { label: "About Us",       hasMenu: false },
  { label: "Client Stories", hasMenu: false },
  { label: "Contact Us",     hasMenu: false },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[#FFFBF5]">
      <div
        className="mx-auto flex max-w-[1440px] items-center justify-between"
        style={{ padding: "14.5px 72px", height: "74px" }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <span
            className="grid place-items-center rounded-full border-2 shrink-0"
            style={{ width: "31px", height: "31px", borderColor: "#00417C" }}
          >
            <Scale className="h-4 w-4" style={{ color: "#00417C" }} />
          </span>
          <span
            className="font-serif font-bold"
            style={{ fontSize: "20px", lineHeight: "24px", letterSpacing: "-0.16px", color: "#00417C" }}
          >
            Masterguides Australia
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center lg:flex" style={{ gap: "8px" }}>
          {navItems.map((item) => (
            <button
              key={item.label}
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition-colors hover:bg-black/5"
              style={{ fontSize: "16px", letterSpacing: "-0.16px", color: "#141414" }}
            >
              {item.label}
              {item.hasMenu && <ChevronDown className="h-4 w-4 opacity-60" />}
            </button>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#get-started"
            className="hidden items-center gap-2 font-semibold transition-colors hover:bg-[#00417C] hover:text-white sm:inline-flex"
            style={{
              border: "1px solid #00417C",
              borderRadius: "4px",
              padding: "8px 20px",
              height: "42px",
              fontSize: "14px",
              letterSpacing: "-0.16px",
              color: "#00417C",
            }}
          >
            Book a Free Call
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-black/20 lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-black/10 bg-[#FFFBF5] lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center justify-between rounded-md px-3 py-3 text-left font-medium hover:bg-black/5"
                style={{ fontSize: "16px", color: "#141414" }}
              >
                {item.label}
                {item.hasMenu && <ChevronDown className="h-4 w-4 opacity-60" />}
              </button>
            ))}
            <a
              href="#get-started"
              className="mt-2 inline-flex items-center justify-center gap-2 font-semibold"
              style={{
                border: "1px solid #00417C",
                borderRadius: "4px",
                padding: "10px 20px",
                fontSize: "14px",
                color: "#00417C",
              }}
            >
              Book a Free Call
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
