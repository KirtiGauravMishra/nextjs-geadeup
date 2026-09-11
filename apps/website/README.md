# Ascend — marketing website

The public marketing site (home, "for institutes", contact, legal). Separate app
from the CRM/learning app — see the architecture in
`../../docs/EdTech-Platform-MVP-Requirements-v1.0.pdf` (§4, §6.18).

## Stack

- Next.js (App Router), TypeScript
- Tailwind CSS v4 (CSS-first config — see `src/app/globals.css`)
- `next/font` — self-hosted Manrope (display) + Public Sans (body)

## Rendering

This is deployed as a **Node server** (`next start`), not a static export —
the App Router prerenders pages that have nothing dynamic in them by default,
so `src/app/page.tsx` sets `export const dynamic = "force-dynamic"` to make
the homepage genuinely render per request. Drop that export on any page
that's pure marketing copy if you'd rather have it prerendered for speed;
nothing here needs `output: "export"`.

## What's here now

- **Home** (`/`) — hero, feature grid, a 5-video sample-lesson showcase,
  the institute-partnership pitch, closing CTA.
- **For institutes** (`/institutes`) — explains the commission-agreement
  model and a lead-capture form.
- **Contact** (`/contact`) — a simple contact form.
- **Legal** (`/legal/[terms|privacy|refunds]`) — placeholder pages so the
  footer has nowhere broken to link to; swap in the real policies before
  launch.

Both lead forms are client-side only right now (they just confirm receipt in
the UI) — each has a `// TODO` marking where to POST to the backend once the
CRM API exists.

## Videos

`src/lib/videos.ts` lists 5 placeholder clips (Maths, Physics, Chemistry,
Biology, English) pointing at Google's public sample-video bucket, purely so
the "watch a sample lesson" flow is real and clickable before the actual
catalogue is recorded. `VideoCard` just plays whatever URL is in `src` —
swap these for signed Bunny.net Stream playback URLs when real lessons exist;
no component changes needed.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

```bash
pnpm build && pnpm start   # production build, respects $PORT
```

## Deploying (Render, or any Node host)

1. Push this repo to GitHub.
2. On Render: **New → Web Service**, connect the repo.
   - **Root directory:** `apps/website`
   - **Build command:** `pnpm install && pnpm build`
   - **Start command:** `pnpm start`
   - **Environment:** Node 20+. No env vars required yet.
3. Render sets `$PORT` automatically — `next start` already reads it, so no
   changes are needed to `package.json`.

Any other Node host (Railway, Fly, a plain VM) works the same way: install,
build, start, and the platform's `$PORT` is picked up automatically.
