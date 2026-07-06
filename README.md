# HAVEN — Church Framework (PREMIUM tier)

A premium, 3D-animated church website on the standard PowerStudio zero-build stack.
Built per the Expensive-Website-Playbook: light-dust three.js hero (the "dust drift"
recipe re-tuned as sanctuary light shafts), fx.js motion pass, Cinzel inscriptional
display type, candlelit near-black + amber gold.

**Signature feature:** the "Find Your Place" ministry finder — visitors pick who they
are ("Coming with kids", "I need support"…) and get matched ministries with meeting
times, then one click pre-fills the Plan-a-Visit form.

## Files
- `index.html` — structure only; JSON-LD `Church` schema included
- `styles.css` — all theming via `:root` custom properties
- `app.js` — data arrays at top (SEEKERS, MINISTRIES, TEAM, GIVING, STORIES)
- `fx.js` — shared premium-effects library (reveals, counters, tilt, magnetic, parallax)
- `three-scene.js` — hero dust-drift scene (deferred CDN module, reduced-motion safe)

## Selling checklist (per client)
1. `:root` `--brand` + display font if the church has branding
2. Rewrite the data arrays: real ministries, staff, service times, stories
3. Swap pinned Pexels URLs in `PEXELS_PHOTOS` for the client's real photos
4. Set `CONFIG.web3formsKey` (until then the form falls back to mailto)
5. Update JSON-LD address/phone + map embed query
6. Giving cards: link to the client's provider (Tithe.ly, CanadaHelps, PayPal…)

## Performance notes ("seamless" checklist)
- three.js is a deferred ES module — page fully renders before any 3D loads
- Render loop pauses off-screen / hidden tab; DPR clamped to 2; fewer motes on mobile
- Below-fold sections use `content-visibility: auto` (skipped until scrolled near)
- Images: pinned Pexels CDN with width params, `loading="lazy"` below fold, `decoding="async"`
- All scroll/pointer listeners passive; effects respect `prefers-reduced-motion`

## Preview
```bash
python3 -m http.server 5640 --directory .
```
Or `preview_start` with the `church` launch config.
