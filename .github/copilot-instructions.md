# Astro 6.0 Project Guidelines: Bonjwa History Microsite

## Tooling & Context
- **MCP Server:** Use the `@astrojs/mcp` server to fetch the latest documentation for Astro 6.0.6. 
- **Context Awareness:** Before suggesting complex logic (e.g., Middleware or Actions), verify against the live Astro 6 docs via MCP if available.
- **Reference Material:** Prioritize the official Astro 6.x documentation over pre-2025 training data.

## Core Technical Stack
- **Framework:** Astro v6.0.6 (Latest Stable)
- **Architecture:** Content Layer API (Astro 5+)
- **Styling:** Tailwind CSS
- **Typing:** TypeScript (Strict Mode)
- **Validation:** Zod (Imported from 'astro/zod')

## Critical Rules for Astro 6.0
- **Content Collections:** NEVER use `type: 'content'`. ALWAYS use the `loader` with `glob` from `astro/loaders`.
- **Imports:** ALWAYS import `z` from `astro/zod`. Importing `z` from `astro:content` is deprecated.
- **Server Actions:** Use the `defineAction` API in `src/actions/index.ts` for any form handling or state changes.
- **Image Optimization:** Always use the built-in `<Image />` component from `astro:assets`.
- **Routing:** Use the `[...slug].astro` pattern for dynamic content-driven pages.
- **Middleware:** Use the latest `onRequest` syntax for edge-side logic if required.

## Coding Standards & Patterns
1. **Component Structure:** - Keep Logic in the Frontmatter (between `---`).
   - Keep Templates clean and semantic.
   - Use "Astro Islands" (`client:load`, `client:visible`) only when necessary for interactivity.
2. **Data Fetching:** Use `getCollection` or `getEntry` from `astro:content`.
3. **Accessibility (a11y):** Ensure all generated HTML follows WCAG standards (alt tags, aria-labels).
4. **Performance:** Prioritize static generation (SSG). Only use SSR if real-time data is strictly required.
5. **Styling:** Use Tailwind CSS utility classes. Avoid inline styles or scoped `<style>` blocks unless absolutely necessary for complex animations.

## Project Specifics (Bonjwa Microsite)
- **Primary Color:** Bonjwa Green (#1E9761).
- **Tone:** Professional, modern, gaming-oriented.
- **Data Source:** Local Markdown files in `src/content/historie/`.
- **View Transitions:** Use the `<ViewTransitions />` component for seamless navigation.

## Tailwind CSS v4 Standards
- **CSS-First:** Use `@import "tailwindcss";` in global CSS. Do not use legacy `@tailwind` directives.
- **Theme Variables:** Define custom colors and fonts inside the `@theme` block in CSS, not in a separate `tailwind.config.js`.
- **Modern Syntax:** Use the new v4 shorthand for gradients, spacing, and dynamic offsets.
- **Color Palette:** Always use the project-defined colors: `bonjwa-blue`, `bonjwa-dark`, `bonjwa-orange`, and `bonjwa-accent`.
- **In-file Styling:** Prefer utility classes in Astro components. Avoid `@apply` unless repetitive logic is needed.

## Instructions for Copilot
- If a suggested pattern is deprecated in Astro 6, provide the modern alternative immediately.
- Favor clean, modular code over monolithic components.
- When generating content collections, always use `z.coerce.date()` for date fields to ensure proper JS Date object conversion.