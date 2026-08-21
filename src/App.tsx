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

export default function App() {
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
