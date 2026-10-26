import Image from "next/image";
import { useTranslations } from "next-intl";
import logo from "../../../public/images/amyLogo.png";

export function SiteFooter() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Header");

  return (
    <footer className="bg-background text-foreground">
      <div data-motion="footer" className="mx-auto w-full max-w-5xl px-6 pt-12 pb-7 sm:px-10 sm:pt-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
          <div className="max-w-sm">
            <a
              href="#home"
              aria-label={t("home")}
              className="block w-44 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:w-48"
            >
              <Image
                src={logo}
                alt="AMY"
                sizes="(min-width: 640px) 192px, 176px"
                className="h-auto w-full brightness-30 dark:brightness-100"
              />
            </a>
          </div>
          <nav
            aria-label={t("navigation")}
            className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm font-bold sm:flex sm:flex-wrap sm:gap-x-6 md:max-w-sm"
          >
            {(
              [
                ["services", "services"],
                ["work", "work"],
                ["about", "about"],
                ["contact", "contact"],
              ] as const
            ).map(([id, key]) => (
              <a
                key={id}
                href={`#${id}`}
                className="inline-flex min-h-11 items-center rounded underline-offset-8 hover:text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {nav(key)}
              </a>
            ))}
            <a
              href="#faq"
              className="inline-flex min-h-11 items-center rounded underline-offset-8 hover:text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {t("faq")}
            </a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-2 text-xs leading-6 text-muted sm:flex-row sm:items-center sm:justify-center sm:gap-8">
          <p>{t("copyright", { year: 2026 })}</p>
          {/* <p>{t("note")}</p> */}
        </div>
      </div>
    </footer>
  );
}
