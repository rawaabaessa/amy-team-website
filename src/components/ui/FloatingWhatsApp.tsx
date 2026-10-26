import { useTranslations } from "next-intl";
import { WHATSAPP_URL } from "@/lib/contact";

export function FloatingWhatsApp() {
  const t = useTranslations("WhatsApp");

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("label")}
      title={t("label")}
      style={{
        position: "fixed",
        top: "auto",
        bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))",
        insetInlineEnd: "1.25rem",
      }}
      className="floating-whatsapp fixed z-40 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_6px_20px_rgb(0_0_0/0.22)] hover:bg-[#1ebe5d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <svg aria-hidden="true" viewBox="0 0 32 32" fill="none" className="size-8">
        <path d="M16 4C9.37 4 4 9.37 4 16c0 2.18.58 4.23 1.6 6L4 28l6-1.6A12 12 0 1 0 16 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="m11.3 9.2 1.6 3.5-1.5 1.7c1.1 2.4 2.8 4.1 5.2 5.2l1.7-1.5 3.5 1.6c.4.2.5.6.4 1-.4 1.7-1.8 2.5-3.3 2.2-5.5-1-9.6-5.1-10.6-10.6-.3-1.5.5-2.9 2.2-3.3.4-.1.6 0 .8.2Z" fill="currentColor" />
      </svg>
    </a>
  );
}
