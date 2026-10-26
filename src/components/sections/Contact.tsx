import { getTranslations } from "next-intl/server";
import { ContactComposer } from "./ContactComposer";

export async function Contact() {
  const t = await getTranslations("Contact");
  const types = {
    website: t("types.website"),
    app: t("types.app"),
    game: t("types.game"),
    other: t("types.other"),
  };
  const draft = (type: string) =>
    `${t("greeting")}\n${t("messageType", { type })}`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mt-12 w-full scroll-mt-8 bg-surface py-16 selection:bg-accent selection:text-background sm:mt-20 sm:py-20"
    >
      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 px-6 sm:px-10 md:grid-cols-2 md:gap-12">
        <div>
          <h2
            id="contact-title"
            className="font-display text-5xl leading-[1.25] font-bold text-balance sm:text-6xl"
          >
            {t("title")}
          </h2>
          <p className="mt-6 max-w-sm text-xl leading-9 text-foreground">
            {t("description")}
          </p>
          <p className="mt-5 max-w-sm text-base leading-8 text-muted">
            {t("reassurance")}
          </p>
          {/* <p className="mt-8 font-display text-2xl font-bold text-accent">
            {t("closing")}
          </p> */}
        </div>
        <ContactComposer
          copy={{
            types,
            messages: {
              website: draft(types.website),
              app: draft(types.app),
              game: draft(types.game),
              other: draft(types.other),
            },
            typeLabel: t("typeLabel"),
            ideaLabel: t("ideaLabel"),
            optional: t("optional"),
            placeholder: t("placeholder"),
            send: t("send"),
          }}
        />
      </div>
    </section>
  );
}
