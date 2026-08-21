const items = [
  { no: "01", tag: "Continuity", title: "15+ Years", accent: "15+", caption: "Operational experience" },
  { no: "02", tag: "Licensed", title: "LDI Operator", caption: "National carrier layer" },
  { no: "03", tag: "Gateway", title: "T-CLS", caption: "Terrestrial exchange" },
  { no: "04", tag: "Reach", title: "Regional Network", caption: "Connected infrastructure" },
];

export function Credentials() {
  return (
    <section id="about" className="border-t border-hairline py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-14">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/70">
              Network Assurance / Infrastructure Credentials
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Trusted foundations for operators, enterprises and institutions.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="h-px w-9 bg-foreground/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/60">
              Sovereign Carrier Foundation
            </span>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.no} className="relative border-t border-hairline pt-8 sm:pr-8">
              <span className="absolute -top-[5px] left-0 h-[10px] w-[10px] rounded-full bg-accent" />
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/45">
                {it.no} / {it.tag}
              </p>
              <h3 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground">
                {it.accent ? (
                  <>
                    <span className="text-accent">{it.accent}</span>{" "}
                    {it.title.replace(it.accent, "").trim()}
                  </>
                ) : (
                  it.title
                )}
              </h3>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/45">
                {it.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
