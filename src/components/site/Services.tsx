import { useEffect, useRef, useState } from "react";
import fiberAsset from "@/assets/services.png";

export function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-light relative overflow-hidden border-t border-hairline bg-background py-24 text-foreground lg:py-32"
    >
      {/* Background image - slides in from the right */}
      <div
        className="absolute inset-0 transition-transform duration-[1200ms] ease-out"
        style={{
          backgroundImage: `url(${fiberAsset})`,
          backgroundSize: "auto 120%",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          transform: isVisible ? "translateX(0%)" : "translateX(100%)",
          // Removed opacity - image is now full brightness
        }}
      />

      {/* Removed the overlay completely since it was dimming the image */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-14">
        <div id="products" className="max-w-xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/45">
            01 / Who we are
          </p>

          <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,4.2rem)] font-semibold uppercase leading-[0.92] tracking-tight text-foreground">
            A <span className="text-accent">Premier</span>
            <br />
            Solutions
            <br />
            Provider
          </h2>

          <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
            Zeta delivers high-performance networking and digital infrastructure
            across terrestrial fiber routes, IP transit, carrier-grade
            colocation and fully managed operations — engineered for low
            latency, resilience and sovereign scale.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-3 bg-accent px-7 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-accent-foreground transition-opacity hover:opacity-90"
          >
            Read More
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}