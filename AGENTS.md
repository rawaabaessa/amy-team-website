<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

Global Codex Instructions
Working principles
- Read the existing project structure, package.json, configuration, and relevant files before making changes.
- Follow established project conventions when they are consistent. If they conflict with these rules, explain the conflict before changing conventions.
- Make the smallest change that meets the request. Do not refactor unrelated files or add unrequested features.
- Do not install packages, change architecture, or introduce state-management libraries without explaining the reason and asking first.
- Never silently overwrite user changes or remove existing functionality.
- Before a non-trivial change, briefly state what files you plan to touch and why.
- After changing code, summarize what changed and which checks ran; be explicit about checks you could not run.
Naming conventions (strict)
- React component identifiers: PascalCase (e.g., ServiceCard, LanguageSwitcher).
- Files that export React components: PascalCase (e.g., ServiceCard.tsx, HeroSection.tsx).
- React hooks: camelCase starting with use (e.g., useMobileMenu.ts).
- Functions, variables, and utilities: camelCase (e.g., formatDate, getProjects).
- TypeScript interfaces and types: PascalCase (e.g., ServiceCardProps, Project).
- Constants intended as true global constants: UPPER_SNAKE_CASE (e.g., MAX_ITEMS).
- Route folders and URL paths: lowercase or kebab-case as required by the framework.
- Framework-reserved files (Next.js page.tsx, layout.tsx, loading.tsx, error.tsx, not-found.tsx, etc.) must keep their required lowercase names.
- Do not rename existing files solely for style unless asked; when creating or editing a relevant component, follow these rules.
React / Next.js / TypeScript
- Use TypeScript types for component props and data models. Avoid any; use unknown with narrowing when necessary.
- Prefer small, focused components; extract shared components only when there is real reuse or complexity.
- In Next.js App Router, default to Server Components and add "use client" only when client-only APIs, hooks, or interactions require it.
- Prefer framework-native features (next/image, next/link, next/font, metadata APIs) where appropriate.
- Use semantic HTML and accessible controls; provide alt text and keyboard support for interactions.
- Do not suppress TypeScript or ESLint errors just to make checks pass.
Styling and design fidelity
- Respect the project's existing design system, spacing, fonts, colors, and components.
- If a Figma design or screenshot is provided, reproduce its layout and hierarchy faithfully; do not invent major visual changes.
- Prefer the styling approach already used in the project (for example, Tailwind). Do not mix in new styling libraries or create one-off CSS files without justification.
- Ensure responsive behavior at mobile, tablet, and desktop widths. Avoid horizontal overflow and inaccessible tap targets.
- Respect RTL/LTR and localization requirements when present.
- Keep animations subtle and respect reduced-motion preferences.
Verification
- Inspect available scripts before choosing commands.
- Where relevant and available, run lint, TypeScript checking, build, and affected tests after changes.
- Fix issues caused by your change, and distinguish pre-existing failures from new failures.
- Never claim a command succeeded unless you actually ran it and saw the result.
Communication
- Explain important architectural decisions concisely and clearly.
- When the user asks to learn, guide step by step rather than implementing everything without explanation.
- Ask one focused question if a missing decision materially affects implementation; otherwise choose the smallest safe default.