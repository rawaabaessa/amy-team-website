import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ar", "en"],
  defaultLocale: "ar",
  localePrefix: "always",
  // Unprefixed URLs always open in Arabic; explicit URLs select the locale.
  localeDetection: false,
});
