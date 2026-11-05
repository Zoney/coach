# Øyvinds Coaching

Små, håndlagde løpeplaner (Jack Daniels-inspirert) som en Next.js-side.

- Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript · next-intl
- **Kjører på app-serveren hos Hetzner** som https://coach.zoney.no (standalone-bygg,
  `apper.sh deploy coach` på Workshop etter push til `main`; Vercel bygger ikke,
  se `vercel.json`). coach.oyvindbs.no sendes videre (308) med samme sti.
- **To språk:** alle sider ligger under `/no/…` og `/en/…`. Språket står bare i
  adressen: **ingen informasjonskapsler** (serverens regel, sjekkes hver time).
  `proxy.ts` viser `/` direkte (200) på norsk ved norsk `Accept-Language`, ellers
  engelsk, og sender andre stier uten prefiks (gamle lenker som `/terreng`) til
  `/no/…` eller `/en/…` etter samme regel. UI-tekster bor i `messages/*.json`.
- **Personvern:** `/no/personvern` og `/en/personvern` (også `/personvern`), lenket
  fra bunnteksten. Endres hva sida lagrer eller laster, endres den sida samtidig.
- **Ingen tredjeparter:** CSP og sikkerhetsheadere i `next.config.ts`; skriften
  (Geist) kommer fra npm-pakken `geist` og serveres fra egen server.
- **Planer:** én mappe per plan i `content/<slug>/` med `no.tsx` og `en.tsx`
  (ukedata som `Week[]`, prosa som JSX) og en `index.ts` som samler dem.
  `content/index.ts` registrerer slug → plan og kortene på forsida.
  Rendering skjer i `components/running-plan.tsx` (tabell på desktop, uke-kort
  på mobil, fargekodet etter økt-type via `classify()` i `lib/plans.ts`).
- **Ny plan:** lag `content/<slug>/{no,en,index}.tsx`, legg den inn i `PLANS`
  og `CATALOG` i `content/index.ts`. Ruta `/[locale]/<slug>` genereres statisk.

```bash
npm ci
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build      # .next/standalone/server.js
```
