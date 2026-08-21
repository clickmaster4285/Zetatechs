import { useState, useRef, useEffect } from "react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import logoColor from "@/assets/zeta-logo-color.png";
import servicesImg from "@/assets/menu-services.jpg";
import productsGlobeImg from "@/assets/menu-products-globe.jpg";
import productsTabletImg from "@/assets/menu-products-tablet.jpg";

const topLinks = [
  { label: "About", href: "#about" },
  { label: "Blogs & Events", href: "#blogs" },
  { label: "Careers", href: "#careers" },
];

const serviceCards = [
  {
    title: "Connectivity",
    subtitle: "Connectivity Infrastructure",
    href: "#services",
  },
  {
    title: "Wholesale Voice",
    subtitle: "Voice Services",
    href: "#services",
  },
  {
    title: "CPaaS",
    subtitle: "Communications Platform",
    href: "#services",
  },
  {
    title: "A2P Messaging",
    subtitle: "Business Messaging",
    href: "#services",
  },
];

const cloudLinks = [
  { label: "Explore", href: "#services", featured: true },
  { label: "Core Cloud", href: "#services" },
  { label: "Data Center", href: "#services" },
  { label: "Intelligent Automation", href: "#services" },
  { label: "Network Intelligence", href: "#services" },
];

const productItems = [
  { title: "ConnectHub", href: "#products" },
  { title: "CloudHub", href: "#products" },
  { title: "Zekli", href: "#products" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<"services" | "products" | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<"services" | "products" | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = (key: "services" | "products") => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMega(key);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMega(null), 120);
  };

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-background/85 backdrop-blur-md"
      onMouseLeave={handleLeave}
    >
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 lg:px-14">
        <a href="#top" aria-label="Zeta home" className="flex shrink-0 items-center gap-3">
          <img
            src={logoColor}
            alt="Zeta Technologies logo"
            width={44}
            height={44}
            className="h-10 w-auto"
          />
          <span className="hidden font-display text-xs font-bold uppercase leading-[1.15] tracking-tight sm:block">
            Zeta
            <br />
            Technologies
          </span>
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          <a
            href="#about"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-foreground"
          >
            About
          </a>

          {/* Services mega trigger */}
          <div
            className="relative"
            onMouseEnter={() => handleEnter("services")}
          >
            <button
              type="button"
              onClick={() => setActiveMega(activeMega === "services" ? null : "services")}
              className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-foreground"
            >
              Services
              <ChevronDown
                size={12}
                className={`transition-transform ${activeMega === "services" ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {/* Products mega trigger */}
          <div
            className="relative"
            onMouseEnter={() => handleEnter("products")}
          >
            <button
              type="button"
              onClick={() => setActiveMega(activeMega === "products" ? null : "products")}
              className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-foreground"
            >
              Products
              <ChevronDown
                size={12}
                className={`transition-transform ${activeMega === "products" ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {topLinks.slice(1).map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group relative hidden bg-accent px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-foreground transition-opacity hover:opacity-85 sm:inline-block"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-4 flex select-none items-center gap-2 whitespace-nowrap rounded-full border border-accent/40 bg-background/40 px-2.5 py-1 font-mono text-[9px] normal-case tracking-[0.12em] text-foreground/80 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:-right-8 group-hover:-top-10 group-hover:opacity-100"
            >
              <span className="text-base">🤖</span>
              Submit form
            </span>
            Talk to Zeta
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="p-2 text-foreground lg:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Desktop mega menus */}
      {activeMega && (
        <div
          className="absolute inset-x-0 top-[72px] border-b border-hairline bg-background/95 backdrop-blur-xl"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleLeave}
        >
          <div className="mx-auto max-w-[1400px] px-6 py-10 lg:px-14">
            {activeMega === "services" ? <ServicesMega /> : <ProductsMega />}
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[72px] z-50 h-[calc(100vh-72px)] overflow-y-auto border-t border-hairline bg-background lg:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-6 py-4">
            <a
              href="#about"
              onClick={() => setMobileOpen(false)}
              className="border-b border-hairline py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70"
            >
              About
            </a>

            {/* Services mobile accordion */}
            <div className="border-b border-hairline">
              <button
                type="button"
                onClick={() => setMobileExpanded((v) => (v === "services" ? null : "services"))}
                className="flex w-full items-center justify-between py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70"
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform ${mobileExpanded === "services" ? "rotate-180" : ""}`}
                />
              </button>
              {mobileExpanded === "services" && (
                <div className="pb-4">
                  <ServicesMega mobile />
                </div>
              )}
            </div>

            {/* Products mobile accordion */}
            <div className="border-b border-hairline">
              <button
                type="button"
                onClick={() => setMobileExpanded((v) => (v === "products" ? null : "products"))}
                className="flex w-full items-center justify-between py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70"
              >
                Products
                <ChevronDown
                  size={14}
                  className={`transition-transform ${mobileExpanded === "products" ? "rotate-180" : ""}`}
                />
              </button>
              {mobileExpanded === "products" && (
                <div className="pb-4">
                  <ProductsMega mobile />
                </div>
              )}
            </div>

            {topLinks.slice(1).map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-hairline py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-5 bg-accent px-6 py-3 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-accent-foreground"
            >
              Talk to Zeta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function ServicesMega({ mobile = false }: { mobile?: boolean }) {
  return (
    <div
      className={`overflow-hidden border border-hairline bg-background ${mobile ? "rounded-lg" : "rounded-2xl"}`}
    >
      <div
        className={`grid ${mobile ? "grid-cols-1" : "lg:grid-cols-[28%_1fr_28%]"}`}
      >
        {/* Left panel */}
        <div
          className={`relative overflow-hidden bg-[radial-gradient(ellipse_at_top_left,oklch(0.58_0.24_22/0.18),var(--background)_70%)] p-8 ${mobile ? "" : "lg:border-r lg:border-hairline"}`}
        >
          <h3 className="font-display text-3xl font-normal tracking-tight text-foreground">
            Services
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Optimising operational tasks &amp; infrastructure processes using secure, low-latency AI pipelines.
          </p>
          <img
            src={servicesImg}
            alt="Connectivity infrastructure"
            width={768}
            height={512}
            loading="lazy"
            className="mt-8 aspect-[16/10] w-full rounded-lg object-cover"
          />
        </div>

        {/* Middle panel */}
        <div
          className={`p-8 ${mobile ? "" : "lg:border-r lg:border-hairline"}`}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/40">
            Our Services
          </p>
          <div className={`mt-8 grid gap-6 ${mobile ? "grid-cols-1 sm:grid-cols-2" : "sm:grid-cols-2"}`}>
            {serviceCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group block"
              >
                <h4 className="font-display text-base font-semibold uppercase tracking-wide text-foreground">
                  {card.title}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  {card.subtitle}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.14em] text-accent transition-colors group-hover:text-accent/80">
                  Explore <ArrowUpRight size={12} />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right panel */}
        <div className="bg-[radial-gradient(ellipse_at_top_right,oklch(0.58_0.24_22/0.10),var(--background)_70%)] p-8">
          <h4 className="font-display text-base font-semibold uppercase tracking-wide text-foreground">
            Cloud Computing
          </h4>
          <p className="mt-2 text-sm text-muted-foreground">
            Sovereign Intelligence Stack
          </p>
          <ul className="mt-6 space-y-4">
            {cloudLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`inline-block font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                    link.featured
                      ? "text-accent hover:text-accent/80"
                      : "text-foreground/70 underline decoration-hairline underline-offset-4 hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {link.featured && <ArrowUpRight size={12} className="ml-1 inline" />}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ProductsMega({ mobile = false }: { mobile?: boolean }) {
  return (
    <div
      className={`overflow-hidden border border-hairline bg-background ${mobile ? "rounded-lg" : "rounded-2xl"}`}
    >
      <div
        className={`grid ${mobile ? "grid-cols-1" : "lg:grid-cols-[28%_1fr_32%]"}`}
      >
        {/* Left panel */}
        <div
          className={`relative overflow-hidden bg-[radial-gradient(ellipse_at_top_left,oklch(0.58_0.24_22/0.18),var(--background)_70%)] p-8 ${mobile ? "" : "lg:border-r lg:border-hairline"}`}
        >
          <h3 className="font-display text-3xl font-normal tracking-tight text-foreground">
            Products
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Zeta Technologies delivers cutting-edge telecom, cloud, and cybersecurity solutions that transform how enterprises connect, communicate, and compete in the digital age.
          </p>
          <img
            src={productsGlobeImg}
            alt="Global network products"
            width={768}
            height={512}
            loading="lazy"
            className="mt-8 aspect-[16/10] w-full rounded-lg object-cover"
          />
        </div>

        {/* Middle panel */}
        <div
          className={`p-8 ${mobile ? "" : "lg:border-r lg:border-hairline"}`}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/40">
            Our Products
          </p>
          <div className="mt-8 divide-y divide-hairline">
            {productItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex items-center justify-between py-5 transition-colors"
              >
                <span className="font-display text-lg font-semibold uppercase tracking-wide text-foreground/80 transition-colors group-hover:text-foreground">
                  {item.title}
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-foreground/50 transition-colors group-hover:text-foreground"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Right panel */}
        <div className="bg-[radial-gradient(ellipse_at_top_right,oklch(0.58_0.24_22/0.10),var(--background)_70%)] p-8">
          <img
            src={productsTabletImg}
            alt="ConnectHub platform"
            width={768}
            height={512}
            loading="lazy"
            className="aspect-[16/10] w-full rounded-lg object-cover"
          />
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Next-Generation Software Platform For Programmatic Global Connectivity And Virtual SD-WAN Telemetry Control.
          </p>
          <a
            href="#products"
            className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.14em] text-accent transition-colors hover:text-accent/80"
          >
            Explore ConnectHub <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
