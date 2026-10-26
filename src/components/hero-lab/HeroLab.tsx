import {
  ArrowDown,
  ArrowUpLeft,
  ArrowUpRight,
  Code2,
  Globe2,
  Smartphone,
} from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Link } from "@/i18n/navigation";
import { heroLabContent } from "./content";
import { ProductScene } from "./ProductScene";

export function HeroLab({ locale }: { locale: "ar" | "en" }) {
  const copy = heroLabContent[locale];
  const Arrow = locale === "ar" ? ArrowUpLeft : ArrowUpRight;
  const focus =
    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

  return (
    <div className="relative isolate min-h-svh overflow-x-clip bg-background text-foreground">
      <a
        href="#hero-main"
        className={`sr-only z-50 rounded-lg bg-surface p-4 focus:not-sr-only focus:absolute ${focus}`}
      >
        {copy.skip}
      </a>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[850px] bg-[radial-gradient(ellipse_at_50%_38%,var(--color-glow)_0%,transparent_60%)] opacity-[.12]"
      />
      <header className="mx-auto flex max-w-7xl items-center justify-between gap-3 border-b border-border/60 px-5 py-5 sm:px-10">
        <Link href="/" aria-label={copy.home} className={`rounded ${focus}`}>
          <BrandLogo />
        </Link>
        <nav
          aria-label={copy.explore}
          className="hidden items-center gap-8 text-sm text-muted md:flex"
        >
          <a href="#possibilities" className={`hover:text-foreground ${focus}`}>
            {copy.explore}
          </a>
          <a href="#approach" className={`hover:text-foreground ${focus}`}>
            {copy.approach}
          </a>
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggle />
          <Link
            href="/hero-lab"
            locale={locale === "ar" ? "en" : "ar"}
            lang={locale === "ar" ? "en" : "ar"}
            className={`flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-xs hover:bg-surface ${focus}`}
          >
            {locale === "ar" ? "EN" : "عربي"}
          </Link>
        </div>
      </header>
      <main id="hero-main">
        <section
          aria-labelledby="hero-title"
          className="mx-auto max-w-7xl px-5 pt-12 pb-8 text-center sm:px-10 sm:pt-16"
        >
          <p className="inline-flex items-center gap-2 text-xs text-muted">
            <span className="size-1.5 rounded-full bg-accent" />
            {copy.label}
            <span className="ms-2 font-mono text-[10px] text-accent" dir="ltr">
              &lt;amy /&gt;
            </span>
          </p>
          <h1
            id="hero-title"
            className="mx-auto mt-6 max-w-4xl text-[clamp(2.5rem,6.3vw,5.5rem)] leading-[1.22] font-bold tracking-tight text-balance"
          >
            {copy.first}
            <br />
            <span className="relative inline-block text-accent">
              {copy.highlight}
              <svg
                aria-hidden="true"
                viewBox="0 0 400 14"
                preserveAspectRatio="none"
                className="absolute -bottom-3 left-0 h-3 w-full text-primary/40"
              >
                <path
                  d="M3 10Q190-4 397 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-pretty text-muted sm:text-base sm:leading-8">
            {copy.description}
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#approach"
              className={`group inline-flex min-h-12 items-center gap-4 rounded-full bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-primary-hover ${focus}`}
            >
              {copy.cta}
              <Arrow
                className="size-4 transition-transform group-hover:-translate-y-0.5 motion-reduce:transform-none"
                aria-hidden="true"
              />
            </a>
            <a
              href="#possibilities"
              className={`inline-flex min-h-12 items-center gap-3 rounded-full border border-border px-6 text-sm hover:bg-surface ${focus}`}
            >
              {copy.secondary}
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>
          <ProductScene copy={copy} />
        </section>
        <section
          id="possibilities"
          aria-label={copy.explore}
          className="mx-auto grid max-w-6xl scroll-mt-8 gap-5 border-y border-border/70 px-6 py-7 sm:grid-cols-3 sm:px-10"
        >
          {[
            { Icon: Globe2, text: copy.web },
            { Icon: Smartphone, text: copy.app },
            { Icon: Code2, text: copy.systems },
          ].map(({ Icon, text }, index) => (
            <div
              key={text}
              className="flex items-center justify-center gap-3 text-sm"
            >
              <span className="font-mono text-[10px] text-muted">
                0{index + 1}
              </span>
              <Icon className="size-4 text-accent" aria-hidden="true" />
              <h2>{text}</h2>
            </div>
          ))}
        </section>
        <section
          id="approach"
          className="mx-auto max-w-6xl scroll-mt-10 px-6 py-16 sm:px-10 sm:py-20"
        >
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs text-accent">{copy.studio}</p>
              <h2 className="mt-4 text-2xl leading-relaxed font-bold sm:text-3xl">
                {copy.process}
              </h2>
            </div>
            <span className="font-mono text-xs text-muted" dir="ltr">
              IDEA → DESIGN → BUILD → LAUNCH
            </span>
          </div>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {copy.steps.map((step, index) => (
              <li key={step} className="border-t border-border pt-5">
                <span className="font-mono text-xs text-accent">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-base font-bold">{step}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  {copy.stepDescriptions[index]}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-border px-6 py-6 text-xs text-muted sm:px-10">
        <p>{copy.footer}</p>
        <Link href="/" className={`rounded hover:text-foreground ${focus}`}>
          {copy.back} ↗
        </Link>
      </footer>
    </div>
  );
}
