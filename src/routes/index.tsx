import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Compare } from "@/components/site/Compare";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Visas } from "@/components/site/Visas";
import { Stories } from "@/components/site/Stories";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Masterguides Australia — Immigration lawyers & migration agents" },
      {
        name: "description",
        content:
          "Australian immigration lawyers and MARA-registered migration agents. Let our team guide you through your visa application — partner, employer sponsored and more.",
      },
      { property: "og:title", content: "Masterguides Australia — Immigration lawyers & migration agents" },
      {
        property: "og:description",
        content: "Expert guidance for Australian visa applications. No visa, no fee guarantee.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <WhyChoose />
        <Compare />
        <HowItWorks />
        <Visas />
        <Stories />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
