import stack from "@/assets/stack.png";

const layers = [
  { title: "Connectivity", sub: "Fiber & gateways" },
  { title: "Core Cloud", sub: "Virtualised hosts" },
  { title: "Data Centre", sub: "Regional compounds" },
  { title: "Data", sub: "Secure telemetry" },
  { title: "Intelligence", sub: "Automation & analysis", accent: true },
];

export function StackSection() {
  return (
    <section
      id="stack"
      className="relative overflow-hidden bg-background py-24 text-foreground lg:py-32"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 lg:grid-cols-12 lg:gap-8 lg:px-14">
        <div className="lg:col-span-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/45">
            03 / Core Ecosystem
          </p>

          <h2 className="mt-8 font-display text-[clamp(2.2rem,3.6vw,3.6rem)] font-semibold uppercase leading-[0.92] tracking-tight">
            The
            <br />
            Sovereign
            <br />
            <span className="text-accent">Intelligence</span>
            <br />
            Stack
          </h2>

          <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Core telecommunications and machine intelligence unified inside one
            secure ecosystem.
          </p>

          <a
            href="#solutions"
            className="mt-10 inline-flex items-center gap-3 border border-hairline px-7 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Explore the stack
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="lg:col-span-5">
          <img
            src={stack}
            alt="Isometric red holographic stack of infrastructure layers"
            loading="lazy"
            decoding="async"
            className="mx-auto w-full max-w-[620px] select-none mix-blend-screen"
          />
        </div>

        <div className="lg:col-span-3">
          <ul>
            {layers.map((l) => (
              <li
                key={l.title}
                className="flex items-start gap-4 border-t border-hairline py-6 last:border-b"
              >
                <span
                  className={`mt-2 h-[5px] w-[5px] shrink-0 rounded-full ${
                    l.accent ? "bg-accent" : "bg-foreground/40"
                  }`}
                />
                <div>
                  <p
                    className={`font-display text-base font-bold tracking-tight ${
                      l.accent ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {l.title}
                  </p>
                  <p
                    className={`mt-1 text-xs ${
                      l.accent ? "text-accent/70" : "text-muted-foreground"
                    }`}
                  >
                    {l.sub}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
