
const posts = [
  {
    tag: "Perspective",
    title: "Sovereign cloud is an operating model, not a location.",
    meta: "Insight",
  },
  {
    tag: "Infrastructure",
    title: "Why terrestrial routes matter to regional resilience.",
    meta: "Deep Dive",
  },
  {
    tag: "Intelligence",
    title: "Turning network telemetry into operational intelligence.",
    meta: "Field Notes",
  },
];

export function Signals() {
  return (
    <section id="blogs" className="bg-background py-24 text-foreground lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-14">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/45">
          05 / Zeta Intelligence
        </p>

        <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="font-display text-[clamp(2.2rem,5vw,4.4rem)] font-semibold uppercase leading-[0.92] tracking-tight">
            Signals
            <br />
            From the
            <br />
            <span className="text-accent">Network</span>
            <br />
            Edge.
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground md:mb-4">
            Perspectives on sovereign infrastructure, regional connectivity and
            secure intelligent systems.
          </p>
        </div>

        <ul className="mt-16">
          {posts.map((p) => (
            <li key={p.title} className="border-t border-hairline last:border-b">
              <a
                href="#blogs"
                className="group grid items-center gap-4 py-8 md:grid-cols-12"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/40 md:col-span-2">
                  {p.tag}
                </span>
                <span className="font-display text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-accent md:col-span-8">
                  {p.title}
                </span>
                <span className="flex items-center justify-start gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/40 md:col-span-2 md:justify-end">
                  {p.meta}
                  <span className="h-[7px] w-[7px] bg-foreground/60 transition-colors group-hover:bg-accent" />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="relative mx-auto mt-28 flex aspect-square w-full max-w-[780px] items-center justify-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full bg-card/50"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[7%] rounded-full border border-accent/70 shadow-[0_0_60px_10px_rgba(232,32,63,0.28),inset_0_0_60px_10px_rgba(232,32,63,0.12)]"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">

            <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-accent">
              Build with Zeta
            </p>
            <h3 className="mt-6 max-w-lg font-display text-[clamp(1.6rem,3.6vw,3rem)] font-semibold uppercase leading-[0.98] tracking-tight">
              Infrastructure for what comes next.
            </h3>
            <p className="mt-6 max-w-sm text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Connect with our infrastructure team to design your sovereign
              digital foundation.
            </p>
            <a
              href="#contact"
              className="group relative mt-8 inline-block bg-accent px-7 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-accent-foreground transition-opacity hover:opacity-90"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-4 flex select-none items-center gap-2 whitespace-nowrap rounded-full border border-accent/40 bg-background/40 px-2.5 py-1 font-mono text-[9px] normal-case tracking-[0.12em] text-foreground/80 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:-right-9 group-hover:-top-11 group-hover:opacity-100"
              >
                <span className="text-base">🤖</span>
                Submit form
              </span>
              Talk to Zeta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
