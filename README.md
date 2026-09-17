# Øyvinds Coaching

Små, håndlagde løpeplaner (Jack Daniels-inspirert) som en Next.js-side.

- Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript · next-intl
- **To språk:** alle sider ligger under `/no/…` og `/en/…`. `proxy.ts` sender
  besøkende uten prefiks til `/no` ved norsk IP (`x-vercel-ip-country`) eller
  norsk `Accept-Language`, ellers til `/en`; språkvelgeren i headeren setter
  `NEXT_LOCALE`-cookien som overstyrer dette. UI-tekster bor i `messages/*.json`.
- **Planer:** én mappe per plan i `content/<slug>/` med `no.tsx` og `en.tsx`
  (ukedata som `Week[]`, prosa som JSX) og en `index.ts` som samler dem.
  `content/index.ts` registrerer slug → plan og kortene på forsida.
  Rendering skjer i `components/running-plan.tsx` (tabell på desktop, uke-kort
  på mobil, fargekodet etter økt-type via `classify()` i `lib/plans.ts`).
- **Ny plan:** lag `content/<slug>/{no,en,index}.tsx`, legg den inn i `PLANS`
  og `CATALOG` i `content/index.ts`. Ruta `/[locale]/<slug>` genereres statisk.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm lint
pnpm typecheck
pnpm build
```
