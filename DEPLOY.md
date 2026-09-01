# Deploy Ground Crew South at /ground-crew-south/

Preferred live URL: https://brucknerdemo.com/ground-crew-south/

Public production URL from this ship: https://gkjz2dtsm7-max.github.io/ground-crew-south/

Do not delete or rewrite the existing root password door on brucknerdemo.com. This desk is a public subpath, not the vault.

## Base path

1. `vite.config` base: `/ground-crew-south/`
2. Router basename: `/ground-crew-south`
3. `public/CNAME` is `brucknerdemo.com` in source only
4. `public/404.html` is the SPA fallback

When this app is hosted as its own root (Grok preview or a grok.me host), leave base at `/` so the desk still loads. The About and Home pages still print the preferred live path.

## Vercel rewrite (subpath on brucknerdemo.com)

`vercel.json` in this repo already maps:

1. `/ground-crew-south` to the desk
2. `/ground-crew-south/:path*` to desk routes

Attach the custom domain on the host that already serves brucknerdemo.com. Add only the `/ground-crew-south` rewrite. Leave `/` and the vault gate alone. Do not tap Connect Domain on a new project. DNS is already on Vercel for the vault.

## GitHub Pages (this ship)

Custom domain attach is blocked from this sandbox. The static build is public at:

https://gkjz2dtsm7-max.github.io/ground-crew-south/

Host notes:

1. User Pages repo `gkjz2dtsm7-max.github.io` serves the desk under `/ground-crew-south/`
2. No CNAME file is published. Publishing `brucknerdemo.com` as CNAME would steal the vault domain
3. Root `404.html` is the SPA so `/ground-crew-south/seats` hydrates on refresh
4. Product source stays in https://github.com/gkjz2dtsm7-max/ground-crew-south

Then point brucknerdemo.com/ground-crew-south/ at that host, or copy `dist/` into the brucknerdemo.com `/ground-crew-south/` folder without touching the root door.

## Ownable after a Grok plan change

1. Clone https://github.com/gkjz2dtsm7-max/ground-crew-south
2. `npm install`
3. `npm run build`
4. Upload `dist/` as a static site under `/ground-crew-south/`

No login. No paid APIs. Seed JSON only.
