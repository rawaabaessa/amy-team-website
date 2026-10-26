import { useLocale, useTranslations } from "next-intl";
import { ArrowLeft } from "lucide-react";
import { ProductScene } from "@/components/hero-lab/ProductScene";
import { heroLabContent } from "@/components/hero-lab/content";

export function Hero() {
  const t = useTranslations("Hero");
  const locale = useLocale();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex flex-1 flex-col items-center justify-center px-6 pt-16 pb-20 text-center sm:pt-20 sm:pb-24"
    >
      <h1
        id="hero-title"
        className="flex flex-col items-center gap-3 font-display text-5xl leading-tight font-bold sm:gap-4 sm:text-6xl lg:text-7xl"
      >
        <span>{t("intro")}</span>
        <span className="relative isolate inline-block px-8 py-2 text-primary-foreground sm:px-14 sm:py-3">
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 rotate-3 rounded-2xl bg-primary"
          />
          {t("highlight")}
        </span>
        <span>{t("ending")}</span>
      </h1>
      <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:mt-9 sm:text-lg">
        {t("description")}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-6 text-base font-bold text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">{t("start")}</a>
        <a href="#work" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 text-base font-bold text-foreground transition-colors hover:border-accent hover:bg-border focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
          {t("work")}
          <ArrowLeft className="size-4 ltr:rotate-180" aria-hidden="true" />
        </a>
      </div>
      <ProductScene copy={heroLabContent[locale === "ar" ? "ar" : "en"]} />
    </section>
  );
}
