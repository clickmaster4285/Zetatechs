import { NetworkCanvas } from "./NetworkCanvas";
import heroVideo from "@/assets/headerVdo.mp4";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-[72px]">
      {/* Background Video - moved to be behind everything */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Reduced overlay opacity so video is more visible */}
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* Network Canvas - now above video */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-full opacity-90 lg:w-[62%]">
        <NetworkCanvas />
      </div>
      
      {/* Gradient overlay - now above video */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_20%_30%,color-mix(in_oklab,var(--background)_10%,transparent),var(--background)_75%)]" />

      {/* Content - highest z-index */}
      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-72px)] max-w-[1400px] flex-col justify-between px-6 pb-8 pt-14 lg:px-14">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-foreground/60">
            Telecommunications &amp; Digital Infrastructure
          </p>

          <h1
            className="mt-10 font-display text-[clamp(2.6rem,9.4vw,8.5rem)] font-semibold uppercase leading-[0.86] tracking-[-0.015em] text-foreground"
            style={{ fontStretch: "78%" }}
          >
            <span className="block">Powering</span>
            <span className="block">Sovereign</span>
            <span className="block text-accent">Digital</span>
            <span className="block">Infrastructure</span>
          </h1>
        </div>

        <div className="mt-16 border-t border-hairline pt-6">
          <div className="grid gap-6 md:grid-cols-3 md:items-center">
            <div className="flex items-center gap-4">
              <span className="h-px w-9 bg-foreground/45" />
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/60">
                Scroll through the network
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Invisible infrastructure powering visible progress—from terrestrial routes to machine
              intelligence.
            </p>
            <div className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.24em] text-foreground/45 md:text-right">
              <div>PK / 30.3753° N</div>
              <div>69.3451° E</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}