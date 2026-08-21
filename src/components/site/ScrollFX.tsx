import { useEffect } from "react";

/**
 * Global scroll effects: reveal-on-enter for every section's content
 * plus subtle parallax drift on section imagery.
 * Purely presentational, respects prefers-reduced-motion.
 */
export function ScrollFX() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section"),
    );

    // --- Reveal ---
    const targets: HTMLElement[] = [];
    sections.forEach((section) => {
      const kids = Array.from(
        section.querySelectorAll<HTMLElement>(
          "h1,h2,h3,p,img,li,article,a[class*='bg-accent'],a[class*='border-hairline'],[data-reveal]",
        ),
      ).filter((el) => !el.closest("[data-reveal-group]"));

      const groups = new Map<HTMLElement, HTMLElement[]>();
      kids.forEach((el) => {
        const parent = (el.parentElement as HTMLElement) ?? section;
        const arr = groups.get(parent) ?? [];
        arr.push(el);
        groups.set(parent, arr);
      });

      groups.forEach((arr) => {
        arr.forEach((el, i) => {
          el.classList.add("fx-reveal");
          el.style.setProperty("--fx-delay", `${Math.min(i, 6) * 80}ms`);
          targets.push(el);
        });
      });
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("fx-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    targets.forEach((t) => io.observe(t));

    // --- Parallax ---
    const parallax = sections.flatMap((section) =>
      Array.from(section.querySelectorAll<HTMLElement>("img"))
        .filter((el) => !el.hasAttribute("data-fx-skip"))
        .map((el, i) => ({
          el,
          speed: i % 2 === 0 ? 0.4 : 0.24,
        })),
    );
    parallax.forEach(({ el }) => el.classList.add("fx-parallax"));

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      parallax.forEach(({ el, speed }) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const progress = (r.top + r.height / 2 - vh / 2) / vh;
        el.style.setProperty("--fx-y", `${(-progress * speed * 100).toFixed(2)}px`);
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
