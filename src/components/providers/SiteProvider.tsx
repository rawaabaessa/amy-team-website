import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export async function SiteProvider({ children }: { children: ReactNode }) {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={{ Header: messages.Header }}>
      {children}
    </NextIntlClientProvider>
  );
}
