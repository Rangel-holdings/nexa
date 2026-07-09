# Nexa Rx

First brand mockup for **Nexa Rx** — homepage inspired by [mycare.md](https://mycare.md/) structure, styled with the Nexa brand kit (midnight navy + teal sage + soft sand).

## Run

```bash
npm install
npm run dev
```

## Deploy (Vercel)

Repo: [github.com/Emmanuelombaye/nexa](https://github.com/Emmanuelombaye/nexa)

1. Import the repo in Vercel  
2. Framework preset: **Vite** (or leave auto)  
3. Build: `npm run build` · Output: `dist`  
4. `vercel.json` already sets SPA rewrites + asset caching  

Favicon: `/favicon.svg` (NX monogram on midnight navy)

## Brand assets

Source brand boards live in `public/brand/` (copied from the design PNGs in this folder).

| File | Use |
|------|-----|
| `brand-guide-offers.png` | Hero / treatment imagery |
| `brand-guide-light.png` | Treatment cards |
| `brand-guide-dark.png` | Dark brand band |
| `logo-suite-*.png` | Logo / identity panels |
| `digital-icons.png` | Floating brand visual |

## Homepage sections (mycare.md flow)

1. Trust bar  
2. Hero (“Your care. Your way.”) + featured Tirzepatide card  
3. Social proof strip  
4. Treatments grid (GLP-1, TRT, HRT, Peptides)  
5. Doctor-led quality + stats  
6. How it works (4 steps)  
7. Brand story band  
8. FAQ  
9. Final CTA + footer  

## Next

Wire real product photos, intake funnel, and Patient Center when ready.
