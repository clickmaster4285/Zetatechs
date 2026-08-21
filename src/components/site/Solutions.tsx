import img1 from "@/assets/sec4-1.png";
import img2 from "@/assets/sec4-2.png";
import img3 from "@/assets/sec4-3.png";
import img4 from "@/assets/sec4-4.png";
import img5 from "@/assets/sec4-5.png";
import img6 from "@/assets/sec4-6.png";
import img7 from "@/assets/sec4-7.png";

type Card = {
  no: string;
  title: string;
  body: string;
  img: string;
  alt: string;
  span: string;
};

const cards: Card[] = [
  {
    no: "01",
    title: "Connectivity",
    body: "Carrier-grade terrestrial and cross-border connectivity engineered for low latency and continuous uptime.",
    img: img1,
    alt: "Two glowing red puzzle pieces joining together",
    span: "lg:col-span-2",
  },
  {
    no: "02",
    title: "Cloud Computing",
    body: "Sovereign cloud and colocation capacity with elastic compute, storage and secure tenancy.",
    img: img2,
    alt: "Red glowing cloud server over a binary data ring",
    span: "lg:col-span-1",
  },
  {
    no: "03",
    title: "Intelligent Automation",
    body: "AI-driven orchestration that automates provisioning, assurance and network operations end to end.",
    img: img3,
    alt: "Red robotic arm with automation interface panels",
    span: "lg:col-span-1",
  },
  {
    no: "04",
    title: "Network Intelligence",
    body: "Real-time visibility, routing intelligence and analytics across the entire network fabric.",
    img: img4,
    alt: "Red glowing globe connected to network nodes",
    span: "lg:col-span-1",
  },
  {
    no: "05",
    title: "Wholesale Voice",
    body: "High-capacity international voice termination with quality routing and fraud protection.",
    img: img5,
    alt: "Red voice routing hub connected to towers and data centres",
    span: "lg:col-span-1",
  },
  {
    no: "06",
    title: "A2P Messaging",
    body: "Secure application-to-person messaging with global reach and enterprise-grade delivery.",
    img: img7,
    alt: "Red glowing smartphone with A2P message bubble and security shield",
    span: "lg:col-span-1",
  },
  {
    no: "07",
    title: "CPaaS",
    body: "Programmable communications APIs for voice, video, chat and messaging, ready to embed in any platform.",
    img: img6,
    alt: "Red CPaaS cloud connected to voice, video and chat API icons",
    span: "lg:col-span-2",
  },
];

export function Solutions() {
  return (
    <section
      id="solutions"
      className="bg-background py-24 text-foreground lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-14">
        <p className="text-left font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/45">
          02 / What we deliver
        </p>

        <div className="mt-8 flex justify-center">
          <h2 className="text-left font-display text-[clamp(2rem,4.6vw,3.9rem)] font-semibold uppercase leading-[0.98] tracking-tight">
            End-to-End
            <br />
            <span className="text-accent">Infrastructure.</span>
            <br />
            Intelligent Solutions.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.no}
              className={`group flex min-h-[390px] flex-col bg-background p-6 transition-colors hover:bg-card sm:p-7 ${c.span}`}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/40">
                {c.no}
              </p>

              <div className="my-8 flex aspect-[16/7] w-full items-center justify-center sm:my-10">
                <img
                  src={c.img}
                  alt={c.alt}
                  loading="lazy"
                  decoding="async"
                  data-fx-skip
                  className="block h-full w-full select-none object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="mx-auto mt-auto max-w-md text-center">
                <h3 className="font-display text-xl font-bold tracking-normal">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
