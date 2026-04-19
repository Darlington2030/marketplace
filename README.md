# CollectMarket — Social Marketplace v4

## Start (single command)
```bash
cd frontend
npm install
npm run build   # compile Lit components
npm start       # http://localhost:4000
```

No separate backend needed — all API routes are embedded in one server.

## Demo Accounts  (password: 123456)
- ComicCollector · ToyTrader · CardMaster  
Or create any new account from the auth modal.

## What was fixed in v4
1. **Auth modal stuck at top** — `<auth-modal>` moved to `<body>` level outside the header.
   The header's `backdrop-filter` was creating a CSS stacking context that trapped
   `position:fixed` children relative to the header instead of the viewport.
2. **Sign In / Create Account did nothing** — Event handlers `@submit=${this._submit}` and
   `@click=${this.close}` were passing unbound method references. Fixed by converting all
   handlers to arrow functions (`@submit=${(e)=>this._submit(e)}`).
3. **Close (✕) button not working** — Same unbound `this` issue. Fixed.
4. **"Unknown error"** — `fetch()` network failures threw `TypeError` which wasn't caught.
   Added try/catch around `fetch()` to surface clear error messages.
5. **Navbar alignment** — Header now uses CSS Grid `1fr auto 1fr` for true 3-column layout
   with logo left, search centered, actions right.

## Architecture
- Single Express server (port 4000) — EJS + all API routes
- Lit Web Components in light DOM — Tailwind CSS works throughout
- HTTP polling (2s, panel-open only) for live chat
- Redux-like store with Zod validation
