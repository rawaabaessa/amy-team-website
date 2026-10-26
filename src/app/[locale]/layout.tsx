import type { Metadata } from "next";
import localFont from "next/font/local";
import { getLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { SiteProvider } from "@/components/providers/SiteProvider";
import "../globals.css";

const sans = localFont({
  src: [
    {
      path: "../../../public/fonts/Thmanyah-Font-Family/thmanyah typeface/thmanyahsans/woff2/thmanyahsans-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../../public/fonts/Thmanyah-Font-Family/thmanyah typeface/thmanyahsans/woff2/thmanyahsans-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-thmanyah-sans",
  display: "swap",
});
const display = localFont({
  src: "../../../public/fonts/Thmanyah-Font-Family/thmanyah typeface/thmanyahserifdisplay/woff2/thmanyahserifdisplay-Bold.woff2",
  variable: "--font-thmanyah-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ايمي ستدويو",
  description:
    "نبني مواقع وتطبيقات وبرامج حديثة تجمع بين التصميم الواضح والأداء المتقن.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
}: LayoutProps<"/[locale]">) {
  const locale = await getLocale();
  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${sans.variable} ${display.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script src="/theme-init.js" async />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
