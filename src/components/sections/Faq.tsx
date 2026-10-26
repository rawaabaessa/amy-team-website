import { Plus, ArrowUpLeft } from "lucide-react";
import { useTranslations } from "next-intl";

export function Faq() {
  const t = useTranslations("Faq");

  return (
    <section id="faq" aria-labelledby="faq-title" className="mx-auto grid w-full max-w-5xl scroll-mt-8 gap-8 px-6 py-12 sm:px-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14 md:py-20">
      <div data-motion="reveal">
        <h2 id="faq-title" className="font-display text-4xl leading-tight font-bold text-balance sm:text-5xl">{t("title")}</h2>
        <p className="mt-5 max-w-sm text-base leading-8 text-muted">{t("description")}</p>
        <a href="#contact" className="mt-5 inline-flex min-h-11 items-center gap-3 rounded text-base font-bold text-accent underline-offset-8 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
          {t("ask")}<ArrowUpLeft aria-hidden="true" className="size-5 ltr:rotate-90" />
        </a>
      </div>
      <div className="min-w-0 space-y-2">
        {(["start", "platforms", "existing", "prepare", "cost"] as const).map((item) => (
          <details key={item} name="project-questions" className="group rounded-xl even:bg-surface/50 open:bg-surface">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 px-3 py-5 text-base leading-7 font-bold transition-colors hover:text-accent focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
              {t(`${item}.question`)}
              <Plus aria-hidden="true" className="size-5 shrink-0 text-accent group-open:rotate-45 motion-safe:transition-transform motion-safe:duration-300" />
            </summary>
            <p className="px-3 pb-6 pe-10 text-base leading-8 text-muted">{t(`${item}.answer`)}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
