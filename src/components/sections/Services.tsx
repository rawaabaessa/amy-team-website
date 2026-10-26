import { useLocale, useTranslations } from "next-intl";

type ServiceKind = "web" | "database" | "mobile" | "games" | "desktop";

function ServiceIllustration({ kind }: { kind: ServiceKind }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 280 110" fill="none" className="h-28 w-full max-w-72 text-accent">
      {kind === "web" && <>
        <rect x="12" y="15" width="256" height="78" rx="7" className="fill-background stroke-accent/40" />
        <path d="M19 15H261Q268 15 268 22V28H12V22Q12 15 19 15Z" className="fill-accent/25" />
        <rect x="28" y="36" width="65" height="35" rx="5" className="fill-accent/80" />
        <rect x="103" y="36" width="127" height="6" rx="3" className="fill-accent" />
        <rect x="103" y="49" width="89" height="5" rx="2.5" className="fill-accent/60" />
        <rect x="103" y="62" width="57" height="10" rx="4" className="fill-primary" />
      </>}
      {kind === "database" && <>
        <rect x="74" y="22" width="132" height="29" rx="14.5" className="fill-accent/60 stroke-accent" />
        <rect x="74" y="43" width="132" height="29" rx="14.5" className="fill-accent/35 stroke-accent/70" />
        <rect x="74" y="64" width="132" height="29" rx="14.5" className="fill-accent/20 stroke-accent/60" />
      </>}
      {kind === "mobile" && <>
        <rect x="64" y="36" width="38" height="61" rx="8" className="fill-accent/20 stroke-accent/50" />
        <rect x="110" y="18" width="57" height="83" rx="11" className="fill-accent/30 stroke-accent/70" />
        <rect x="115" y="23" width="47" height="73" rx="7" className="fill-accent/70" />
        <rect x="176" y="34" width="41" height="66" rx="9" className="fill-accent/20 stroke-accent/50" />
      </>}
      {kind === "games" && <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className="text-accent/80">
        <path d="M140 35V17H178V5" />
        <path d="M121 35H159C175 35 183 48 183 63V77C183 93 172 98 162 88L149 73H131L118 88C108 98 97 93 97 77V63C97 48 105 35 121 35Z" />
        <path d="M110 59H126M118 51V67" />
        <path d="M157 52H158M166 61H167M148 61H149M157 70H158" strokeWidth="5" strokeLinecap="square" />
      </g>}
      {kind === "desktop" && <>
        <rect x="93" y="18" width="94" height="76" rx="6" className="fill-background" />
        <path d="M99 24H181V80H99Z" className="fill-accent/40" />
        <path d="M93 83H187V88Q187 95 180 95H100Q93 95 93 88Z" className="fill-accent/75" />
        <path d="M128 95H152V103L166 107H114L128 103Z" className="fill-accent" />
      </>}
    </svg>
  );
}

export function Services() {
  const t = useTranslations("Services");
  const locale = useLocale();
  const kinds: ServiceKind[] = ["web", "database", "mobile", "games", "desktop"];

  return (
    <section id="services" aria-labelledby="services-title" className="mx-auto w-full max-w-5xl scroll-mt-8 px-6 pt-3 pb-24 sm:px-10">
      <div className="grid gap-6 md:grid-cols-2" dir="ltr">
        <div data-motion="reveal" className="flex min-h-60 flex-col items-center justify-center px-5 py-8 text-center md:col-start-2 md:row-start-1" dir={locale === "ar" ? "rtl" : "ltr"}>
          <h2 id="services-title" className="max-w-80 font-display text-3xl leading-snug font-bold sm:text-4xl">{t("title")}</h2>
          <p className="mt-5 max-w-80 text-sm leading-relaxed text-muted">{t("description")}</p>
        </div>
        {kinds.map((kind, index) => (
          <article data-motion="service" key={kind} className="relative flex min-h-64 flex-col items-center justify-end rounded-2xl border border-border bg-surface px-6 pt-12 pb-6 text-center sm:min-h-72">
            <span aria-hidden="true" className="absolute top-4 left-5 font-sans text-4xl leading-none font-bold tabular-nums text-accent">{String(index + 1).padStart(2, "0")}</span>
            <div className="service-illustration flex w-full justify-center"><ServiceIllustration kind={kind} /></div>
            <div dir={locale === "ar" ? "rtl" : "ltr"}>
              <h3 className="mt-4 text-lg font-bold">{t(`${kind}.title`)}</h3>
              <p className="mx-auto mt-2 max-w-72 text-sm leading-relaxed text-muted">{t(`${kind}.description`)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
