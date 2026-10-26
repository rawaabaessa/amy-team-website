import { ArrowUpLeft, Code2, Layers, MousePointer2 } from "lucide-react";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("About");

  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto w-full max-w-5xl scroll-mt-8 px-6 pb-24 selection:bg-accent selection:text-background sm:px-10">
      <div className="grid items-center gap-12 border-t border-border pt-12 md:grid-cols-2 md:gap-12 md:pt-16">
        <div>
          <h2 id="about-title" className="font-display text-4xl leading-[1.35] font-bold text-balance sm:text-5xl">
            {t("title")}
            <span className="mt-2 block text-accent">{t("highlight")}</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground">{t("description")}</p>
          <p className="mt-4 text-base leading-8 text-muted">{t("belief")}</p>
          <a href="#work" className="group mt-8 inline-flex min-h-11 items-center gap-4 border-b border-accent pb-2 text-base font-bold text-foreground transition-colors hover:text-accent focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
            {t("work")}
            <ArrowUpLeft aria-hidden="true" className="size-5 ltr:rotate-90 motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:-translate-y-0.5" />
          </a>
        </div>

        <figure className="min-w-0">
          <div aria-hidden="true" className="relative pb-2">
            <div className="relative w-[88%] rounded-xl border border-border bg-surface">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3 text-xs text-muted">
                <Layers className="size-4 text-accent" />
                <span>{t("design")}</span>
              </div>
              <div className="p-5 sm:p-6">
                <div className="mb-5 flex items-center justify-between" dir="ltr">
                  <span className="text-sm font-bold tracking-tight">amy<span className="text-accent">.</span></span>
                  <div className="flex gap-1.5">
                    <span className="size-2 rounded-full bg-accent" />
                    <span className="size-2 rounded-full bg-accent/40" />
                    <span className="size-2 rounded-full bg-accent/20" />
                  </div>
                </div>
                <div className="relative border border-accent p-4">
                  <span className="absolute -start-1 -top-1 size-2 border border-accent bg-background" />
                  <span className="absolute -end-1 -top-1 size-2 border border-accent bg-background" />
                  <span className="absolute -start-1 -bottom-1 size-2 border border-accent bg-background" />
                  <span className="absolute -end-1 -bottom-1 size-2 border border-accent bg-background" />
                  <p className="font-display text-2xl leading-snug font-bold">{t("previewTitle")}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{t("previewDescription")}</p>
                  <div className="mt-4 flex gap-2" dir="ltr">
                    <span className="h-2 w-12 rounded-full bg-accent" />
                    <span className="h-2 w-8 rounded-full bg-border" />
                  </div>
                  <MousePointer2 className="absolute -end-4 bottom-3 size-7 fill-accent text-background" strokeWidth={1.5} />
                </div>
              </div>
            </div>
            <div className="relative ms-auto -mt-3 w-[86%] rounded-xl border border-border bg-background sm:-mt-5">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3 text-xs text-muted">
                <Code2 className="size-4 text-accent" />
                <span>{t("development")}</span>
                <span className="ms-auto font-mono text-xs" dir="ltr">interface.css</span>
              </div>
              <pre dir="ltr" className="px-5 py-5 font-mono text-xs leading-6 sm:text-sm" translate="no"><code><span className="text-accent">{`.idea {`}</span>{`\n  display: grid;\n  gap: 1rem;\n  color: var(--foreground);\n`}<span className="text-accent">{`}`}</span></code></pre>
            </div>
          </div>
          <figcaption className="mt-4 text-center text-sm leading-6 text-muted">{t("caption")}</figcaption>
        </figure>
      </div>
    </section>
  );
}
