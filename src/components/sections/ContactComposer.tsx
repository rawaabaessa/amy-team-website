"use client";

import { useState } from "react";
import { ArrowUpLeft } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

const PROJECT_TYPES = ["website", "app", "game", "other"] as const;
type ProjectType = (typeof PROJECT_TYPES)[number];

export interface ContactComposerCopy {
  types: Record<ProjectType, string>;
  messages: Record<ProjectType, string>;
  typeLabel: string;
  ideaLabel: string;
  optional: string;
  placeholder: string;
  send: string;
}

export function ContactComposer({ copy }: { copy: ContactComposerCopy }) {
  const [projectType, setProjectType] = useState<ProjectType>("website");
  const [idea, setIdea] = useState("");
  const message = `${copy.messages[projectType]}${idea.trim() ? `\n\n${idea.trim()}` : ""}`;

  return (
    <div data-motion="reveal" className="contact-composer min-w-0 rounded-2xl bg-background p-5 text-foreground sm:p-8">
      <fieldset>
        <legend className="mb-4 text-lg font-bold">{copy.typeLabel}</legend>
        <div className="flex flex-wrap gap-2">
          {PROJECT_TYPES.map((type) => (
            <label key={type} className="cursor-pointer">
              <input
                type="radio"
                name="project-type"
                value={type}
                checked={projectType === type}
                onChange={() => setProjectType(type)}
                className="peer sr-only"
              />
              <span className="inline-flex min-h-11 items-center rounded-full border border-border px-4 text-sm transition-colors peer-checked:border-accent peer-checked:bg-accent peer-checked:text-background peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-accent hover:border-accent">
                {copy.types[type]}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <label htmlFor="project-idea" className="mt-7 block text-lg font-bold">
        {copy.ideaLabel}{" "}
        <span className="text-sm font-normal text-muted">{copy.optional}</span>
      </label>
      <textarea
        id="project-idea"
        name="idea"
        value={idea}
        onChange={(event) => setIdea(event.target.value)}
        maxLength={1000}
        rows={4}
        placeholder={copy.placeholder}
        className="mt-3 block w-full resize-y rounded-lg border border-border bg-surface p-4 text-base leading-7 text-foreground caret-accent placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      />
      <a
        href={`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-5 flex min-h-14 items-center justify-between gap-4 rounded-xl bg-primary px-5 py-3 text-base font-bold text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        {copy.send}
        <ArrowUpLeft
          aria-hidden="true"
          className="size-6 ltr:rotate-90 motion-safe:transition-transform motion-safe:group-hover:-translate-y-0.5"
        />
      </a>
    </div>
  );
}
