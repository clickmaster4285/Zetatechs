import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Credentials } from "@/components/site/Credentials";
import { Services } from "@/components/site/Services";
import { Partners } from "@/components/site/Partners";
import { Solutions } from "@/components/site/Solutions";
import { StackSection } from "@/components/site/StackSection";
import { Platforms } from "@/components/site/Platforms";
import { Signals } from "@/components/site/Signals";
import { Footer } from "@/components/site/Footer";
import { ScrollFX } from "@/components/site/ScrollFX";

const title = "Zeta — Powering Sovereign Digital Infrastructure";
const description =
  "Telecommunications and digital infrastructure: terrestrial fiber routes, IP transit, data centre colocation and managed carrier services.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <ScrollFX />
      <Nav />
      <main>
        <Hero />
        <Credentials />
        <Services />
        <Partners />
        <Solutions />
        <StackSection />
        <Platforms />
        <Signals />

      </main>
      <Footer />
    </div>
  );
}
