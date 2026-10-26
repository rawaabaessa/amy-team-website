import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import karadenizPreview from "../../../public/images/projects/karadeniz-desktop.png";

const PROJECT_URL = "https://karadeniztoptan.com.tr/";

export function Projects() {
  const t = useTranslations("Projects");

  return (
    <section id="work" aria-labelledby="projects-title" className="mx-auto w-full max-w-5xl scroll-mt-8 px-6 pt-6 pb-24 text-start sm:px-10">
      <h2 data-motion="reveal" id="projects-title" className="font-display text-3xl leading-snug font-bold">{t("title")}</h2>
      <p className="mt-5 max-w-lg text-sm leading-6 text-muted">{t("description")}</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <article data-motion="project" aria-labelledby="karadeniz-title" className="overflow-hidden rounded-2xl border border-border bg-surface">
          <a href={PROJECT_URL} target="_blank" rel="noopener noreferrer" aria-label={t("previewLink")} className="relative block overflow-hidden rounded-b-2xl focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-accent">
            <Image data-motion="preview" src={karadenizPreview} alt={t("imageAlt")} sizes="(min-width: 1024px) 460px, (min-width: 768px) 45vw, 90vw" className="aspect-[2.15/1] w-full object-cover object-top" />
            <span className="absolute end-4 top-2 rounded-full border border-accent/30 bg-surface/95 px-6 py-1 text-xs text-foreground">{t("featured")}</span>
          </a>
          <div className="px-4 pt-3 pb-2">
            <h3 id="karadeniz-title" className="text-xl font-bold" translate="no"><bdi>Karadeniz Toptan</bdi></h3>
            <p className="mt-1 text-sm leading-5 text-muted">{t("projectDescription")}</p>
            <a href={PROJECT_URL} target="_blank" rel="noopener noreferrer" aria-label={t("visitLabel")} className="mt-2 flex min-h-11 w-fit items-center gap-2 rounded text-xs font-bold text-accent hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
              {t("visit")}<ArrowLeft aria-hidden="true" className="size-3 ltr:rotate-180" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
