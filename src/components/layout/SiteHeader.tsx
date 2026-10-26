"use client";

import { useState, useTransition } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { Languages, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { usePathname, useRouter } from "@/i18n/navigation";
import { WHATSAPP_URL } from "@/lib/contact";

export function SiteHeader() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  function changeLocale() {
    const href = `${pathname}${window.location.search}${window.location.hash}`;
    startTransition(() => {
      router.replace(href, { locale: locale === "ar" ? "en" : "ar", scroll: false });
    });
  }

  return (
    <header data-motion="nav" data-entrance className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-3 md:px-10 md:py-4">
      <a
        href="#home"
        aria-label={t("home")}
        className="rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <BrandLogo />
      </a>
      <nav
        aria-label={t("navigation")}
        className="hidden items-center gap-7 md:flex"
      >
        <a
          href="#home"
          aria-current="page"
          className="border-b-2 border-primary pb-1 text-sm font-bold text-accent"
        >
          {t("home")}
        </a>
        <a href="#services" className="pb-1 text-sm font-bold text-muted hover:text-accent focus-visible:outline-2 focus-visible:outline-accent">{t("services")}</a>
        <a href="#work" className="pb-1 text-sm font-bold text-muted hover:text-accent focus-visible:outline-2 focus-visible:outline-accent">{t("work")}</a>
        <a href="#about" className="pb-1 text-sm font-bold text-muted hover:text-accent focus-visible:outline-2 focus-visible:outline-accent">{t("about")}</a>
      </nav>
      <div className="flex items-center gap-3 sm:gap-4">
        <ThemeToggle />
        <Button
          variant="ghost"
          size="icon"
          className="font-serif text-sm"
          onClick={changeLocale}
          disabled={isPending}
          title={locale === "ar" ? "Switch to English" : "التبديل إلى العربية"}
          aria-label={
            locale === "ar" ? "Switch to English" : "التبديل إلى العربية"
          }
        >
          <Languages className="size-5" aria-hidden="true" />
        </Button>
        <div className="hidden sm:block"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center justify-center rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
          {t("contact")}
        </a></div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={open ? t("closeMenu") : t("openMenu")}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>
      <AnimatePresence>
      {open && (
        <motion.nav
          initial={reduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
          transition={{ duration: reduceMotion ? 0 : 0.18 }}
          id="mobile-navigation"
          aria-label={t("navigation")}
          className="absolute inset-x-6 top-full flex flex-col gap-1 rounded-2xl border border-border bg-surface p-4 shadow-xl md:hidden"
        >
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="rounded-lg px-4 py-3 text-accent"
          >
            {t("home")}
          </a>
          <a href="#services" onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-muted hover:text-accent focus-visible:outline-2 focus-visible:outline-accent">{t("services")}</a>
          <a href="#work" onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-muted hover:text-accent focus-visible:outline-2 focus-visible:outline-accent">{t("work")}</a>
          <a href="#about" onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-muted hover:text-accent focus-visible:outline-2 focus-visible:outline-accent">{t("about")}</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-6 font-bold text-primary-foreground hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">{t("contact")}</a>
        </motion.nav>
      )}
      </AnimatePresence>
    </header>
  );
}

