import logoWhite from "@/assets/zeta-logo-white.png";

const columns = [
  { title: "Network", links: ["About", "Transit", "Partners"] },
  { title: "Company", links: ["Wholesale Voice", "Cloud", "Careers"] },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-hairline bg-background py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-14">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src={logoWhite}
              alt="Zeta Technologies (Pvt.) Ltd. logo"
              width={340}
              height={100}
              loading="lazy"
              className="h-16 w-auto"
            />
            <p className="mt-8 max-w-xs text-xs leading-relaxed text-muted-foreground">
              Indivisible infrastructure powering national progress.
            </p>
          </div>

          <div id="careers" className="grid gap-10 sm:grid-cols-3 md:col-span-7">
            {columns.map((c) => (
              <div key={c.title}>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/40">
                  {c.title}
                </p>
                <ul className="mt-6 space-y-4">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#top"
                        className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/70 transition-colors hover:text-accent"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/40">
                Contact Info
              </p>
              <ul className="mt-6 space-y-4 text-[11px] leading-relaxed text-foreground/70">
                <li>Suite 17-A/1, Interface Tower</li>
                <li>Clifton, Karachi, Pakistan</li>
                <li>
                  <a href="tel:+922100000000" className="hover:text-accent">
                    +92 21 000 0000
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-hairline pt-8 font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Zeta — All rights reserved</span>
          <span className="flex gap-6">
            <a href="#top" className="hover:text-accent">
              Terms &amp; Conditions
            </a>
            <a href="#top" className="hover:text-accent">
              Privacy
            </a>
            <span>PK / 30.3753° N 69.3451° E</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
