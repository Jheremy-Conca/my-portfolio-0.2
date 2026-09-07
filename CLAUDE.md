# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Vite dev server
npm run build      # production build to dist/
npm run preview    # serve the built dist/ locally
npm run lint       # ESLint (flat config) with --fix
npm run format     # Prettier --write over src/ + tests/
npm test           # Vitest (single run); npm run test:watch for watch mode
```

Run a single test file: `npx vitest run tests/useLocale.spec.js`.

## Stack

Vue 3 (SFCs, `<script setup>` only) + Vue Router 4 + Vite 7. No TypeScript, no Pinia.
- **Tailwind CSS v4** via `@tailwindcss/vite` — configured entirely in `src/style.css`
  (`@import 'tailwindcss'`, `@theme inline`, design tokens on `:root`). No `tailwind.config.js`.
- **Fonts** are self-hosted via `@fontsource-variable/*`, imported in `main.js`. Tokens
  `--font-display` (Space Grotesk — headings, big numerals) and `--font-sans` (Inter — body/UI)
  live on `:root`; `style.css` applies display to `h1..h4`/`.font-display` and sans to `body`.
  Don't add Google Fonts `@import`s back into component styles.
- **shadcn-vue** components under `src/components/ui/` (built on `reka-ui`). `components.json`
  holds the shadcn-vue CLI config. These files are generated/vendored — ESLint ignores them,
  don't hand-edit unless updating the primitive itself.
- Icons: `@iconify/vue` (`<Icon icon="mdi:..." />`). shadcn's default lucide is not installed.
- Tests: Vitest + `@vue/test-utils`, jsdom env, `tests/setup.js` stubs `fetch` and clears
  `localStorage` before each test. Config lives in `vite.config.js` (`test` block).
- `@` is aliased to `src/` (vite.config.js + jsconfig.json). Existing code still uses
  relative imports; `@/...` is used inside `src/components/ui/`.

## Architecture

SPA. Routes in `src/router/router.js`: `/` → `views/Home.vue` (eager), `/projects` and the
catch-all 404 are lazy-imported. `App.vue` renders `<ControlsBar />` + `<router-view />` and
calls `useTheme()` once so the saved background color applies on load regardless of route.
`public/_redirects` (Netlify) and `vercel.json` provide the SPA history fallback.

### Home page = bento grid of cards

`Home.vue` owns a 12-column CSS grid (`.bento-grid`) and places one card component per cell,
assigning span/placement via wrapper classes (`.card-about`, `.card-github`, …). Responsive
breakpoints (992px → 6 cols, 640px → 1 col) live in `Home.vue`'s scoped styles. To add or move
a card: edit both the template placement and the matching `grid-column: span N` rule.

Card components live in `src/components/cards/`. Each is self-contained (own fetch logic, own
scoped styles). `components/ui/BaseCard.vue` is the shared shell (rounded corners, shadow,
hover lift, `bg` prop). Most cards wrap their content in `<BaseCard>`.

### ControlsBar

`src/components/ControlsBar.vue` is a fixed floating cluster (top-right, on every route) with
two shadcn-vue controls: a language toggle (`Button`) and a background-color picker
(`DropdownMenu` of swatches). It is the primary UI for both features; `LanguageCard` in the
bento grid is a second entry point to the same shared locale state.

### Composables (`src/composables/`)

Plain functions returning refs/computed. External APIs are called directly from the browser
(no backend, no API keys).

- `useLocale.js` — module-level `es`/`en` state backed by `localStorage['portfolio-locale']`,
  with an inline flat `dictionary`. `t` is a computed of the active dictionary. **All UI chrome
  goes through `t`**; project titles/descriptions in `Projects.vue` are intentionally left in
  Spanish (author content, not chrome). Exposes `locale`, `toggleLang`, `setLocale`, `t`.
- `useTheme.js` — module-level background color backed by `localStorage['portfolio-bg-color']`,
  applied by setting the `--bg-color` CSS variable on `<html>` (body reads it). `BG_PRESETS`
  is the swatch list. This is the **only** place that mutates the global background — cards
  must not touch `document.body.style`.
- `useWeather.js` — Open-Meteo weather for a hardcoded Lima lat/long; also drives the
  time-of-day image from `public/*.png`. Clears its clock interval on unmount. (Replaced the
  old `useWeatherChat.js`, which had a half-implemented chatbot.)
- `useDiscord.js` — Discord presence via `api.lanyard.rest` (hardcoded user ID). Returns raw
  `presence`; the human-readable label is translated in `DiscordCard.vue` via `t`.
- `useLastfm.js` — now-playing track via `api-lastfm.onrender.com` (separate personal
  service); polls on an interval and clears it on unmount.

### Data that lives in source

- Projects list: a `ref([...])` array literal inside `views/Projects.vue`. Screenshots are
  imported from `src/assets/projects/<slug>/`. Filter chips derive their tech list from the
  `stack` arrays.
- Tech stack icons: `src/constants/techIcons.js`.

## Conventions

- Comments and UI copy are in Spanish; keep that when editing. Commit messages are Spanish too.
- Prettier: no semicolons, single quotes, trailing commas, 80 col (`.prettierrc.json`). Run
  `npm run format` after edits.
- The `overrides` block in `package.json` pins `@tanstack/virtual-core` to `3.17.8` because
  the registry tarball for the version reka-ui otherwise resolves (3.17.9) currently 404s.
  Remove it once upstream is fixed.
- `package.json` `name` is `jheremyxv`.
- Assets by absolute path (e.g. `/madrugada.png`, `/senku.png`) resolve from `public/`;
  assets `import`ed in script resolve from `src/assets/` through Vite.
