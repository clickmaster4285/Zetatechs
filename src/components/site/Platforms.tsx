import p1 from "@/assets/platform-1.jpg";
import p2 from "@/assets/platform-2.jpg";
import p3 from "@/assets/platform-3.webp";

const platforms = [
  {
    label: "Connectivity Platform / 01",
    title: "ConnectHub",
    body: "Applications, orchestration and provisioning unified in a single console for operators and enterprise clients.",
    img: p1,
    alt: "Hand interacting with a glowing red touch interface",
  },
  {
    label: "Cloud Platform / 02",
    title: "CloudHub",
    body: "A sovereign cloud control plane for deploying, scaling and securing workloads across regional infrastructure.",
    img: p2,
    alt: "Red streams of data flowing through a dark server corridor",
  },
  {
    label: "Intelligence Platform / 03",
    title: "ZetAI",
    body: "Our integrated intelligence layer turns raw network telemetry into predictive, operational insight.",
    img: p3,
    alt: "Red glowing network of connected nodes and lines",
  },
];

export function Platforms() {
  return (
    <section
      id="platforms"
      className="section-light relative overflow-hidden bg-background py-24 text-foreground lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-accent/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-14">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/45">
          04 / Products
        </p>

        <h2 className="mt-8 max-w-4xl font-display text-[clamp(2.2rem,5.4vw,4.6rem)] font-semibold uppercase leading-[0.94] tracking-tight lg:ml-auto lg:max-w-3xl lg:text-right">
          Purpose-Built{" "}
          <span className="text-accent">Platforms</span> Powered by Zeta
          Infrastructure.
        </h2>

        <div className="mt-20 space-y-0">
          {platforms.map((p) => (
            <article
              key={p.title}
              className="grid gap-8 border-t border-hairline py-12 md:grid-cols-12 md:items-start"
            >
              <div className="md:col-span-5 lg:col-span-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/45">
                  {p.label}
                </p>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>

              <div className="md:col-span-7 lg:col-span-8 lg:-mr-14">
                <img
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/8] w-full select-none border-0 object-cover object-center outline-none ring-0"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
