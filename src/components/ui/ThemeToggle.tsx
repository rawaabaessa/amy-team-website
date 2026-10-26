"use client";

import { Sun, Moon } from "lucide-react";
import { useLayoutEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "./Button";

export function ThemeToggle() {
  const t = useTranslations("Header");
  const locale = useLocale();

  useLayoutEffect(() => {
    // Locale navigation updates the root HTML class; restore the saved theme
    // before paint, just as the initial document script does on a full load.
    try {
      document.documentElement.classList.toggle("dark", localStorage.getItem("amy-theme") !== "light");
    } catch {
      // Keep the current appearance when browser storage is unavailable.
    }
  }, [locale]);

  function toggleTheme() {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("amy-theme", dark ? "dark" : "light");
    } catch {
      // The toggle remains usable when browser storage is unavailable.
    }
  }
  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={t("theme")}>
      <span className="flex h-6 w-11 items-center rounded-full bg-toggle p-0.5" dir="ltr">
        <span className="flex size-5 translate-x-0 items-center justify-center rounded-full bg-white text-primary transition-transform motion-reduce:transition-none dark:translate-x-5">
          <Sun className="hidden size-4 dark:block" aria-hidden="true" />
          <Moon className="size-3.5 dark:hidden" aria-hidden="true" />
        </span>
      </span>
    </Button>
  );
}
