import zong from "@/assets/partner-zong.png";
import telenor from "@/assets/partner-telenor.png";
import redtone from "@/assets/partner-redtone.png";
import ptcl from "@/assets/partner-ptcl.png";
import cisco from "@/assets/partner-cisco.png";
import acmetel from "@/assets/partner-acmetel.png";
import transworld from "@/assets/partner-transworld.png";

const partners = [
  { name: "Zong 4G", src: zong, h: "h-11" },
  { name: "Telenor", src: telenor, h: "h-11" },
  { name: "Redtone", src: redtone, h: "h-7" },
  { name: "PTCL", src: ptcl, h: "h-11" },
  { name: "Cisco", src: cisco, h: "h-11" },
  { name: "Acmetel", src: acmetel, h: "h-12" },
  { name: "Transworld Home", src: transworld, h: "h-11" },
];

export function Partners() {
  return (
    <section
      id="partners"
      className="bg-background py-20 text-foreground lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-14">
        <h2 className="font-display text-[clamp(2.2rem,5.2vw,4.2rem)] font-semibold uppercase leading-[0.92] tracking-tight">
          Trusted
          <br />
          <span className="text-accent">Partners.</span>
        </h2>

        <div
          data-reveal-group
          className="fx-marquee-mask mt-12 overflow-hidden lg:mt-16"
        >
          <div className="fx-marquee flex w-max items-center gap-x-16 lg:gap-x-24">
            {[...partners, ...partners].map((p, i) => (
              <img
                key={`${p.name}-${i}`}
                src={p.src}
                alt={i < partners.length ? `${p.name} logo` : ""}
                aria-hidden={i >= partners.length}
                loading="lazy"
                decoding="async"
                data-fx-skip
                className={`${p.h} w-auto shrink-0 select-none object-contain opacity-90 transition-opacity duration-300 hover:opacity-100`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
