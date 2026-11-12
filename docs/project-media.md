# Portfolio and project media

`src/lib/projects.ts` is the source of truth for the portfolio order, homepage
selection, destinations, image sources and case-study copy.

## Placement and navigation

- `/work` contains exactly the 11 projects in the supplied order. Every card opens
  its own `/work/[slug]` case study in the same tab.
- Homepage Selected Work contains the seven starred entries, in the same order.
- Client homepage cards open the supplied website in a new tab.
- The ERP/CRM and AI-agent homepage cards open `/contact`. Cinema is contact-only
  but appears on `/work` only. EventGhor uses the subsequently supplied Vercel URL.
- The opening reel uses the first four projects.
- The Work page includes a small, muted, readable team-work attribution below the
  grid. It is not hidden or rendered illegibly.

| Order | Project | Homepage | Source / destination |
| --- | --- | --- | --- |
| 1 | DealHobe | Yes | New capture of https://dealhobe.com |
| 2 | Seltiv SLMS | Yes | Finance overview from the supplied local project; https://seltiv-slms.netlify.app/ |
| 3 | ProMusic | Yes | New capture of https://promusic.com.bd |
| 4 | Tofiza | Yes | New capture of https://tofiza.com |
| 5 | Agency & Corporate ERP | Yes; Contact | Original vector concept interface |
| 6 | Cinema Hall & Ticketing | No | New interface preview informed by the supplied cinema repository |
| 7 | AI Support Agent | Yes; Contact | Original vector concept interface |
| 8 | EventGhor | Yes | New capture of https://eventghor.vercel.app/ with original replacement hero |
| 9 | ShowbizFace | No | New capture of https://www.showbizface.com |
| 10 | The Mall BD | No | New capture of https://www.themallbd.com |
| 11 | Mark Designers Ltd. | No | New capture of https://www.markdesignersltd.com |

Captures were updated on 12 November 2026. Side margins and scrollbar gutters are
cropped without resampling. Raster sources are lossless WebP; mockup images use
`unoptimized` so Next.js does not apply another resize or lossy encoding. Original
vector interfaces stay SVG for sharp rendering. Project type is shown in the top
eyebrow, with the project name in the background and no bottom captions.

## Original interfaces and EventGhor banner

`scripts/generate-project-mockups.mjs` creates the ERP/CRM, AI-support and cinema
SVG interfaces. Concept values are illustrative. These images are not presented
as captures of live software; their case studies identify their status.

The cinema repository was inspected at:
https://github.com/sudiptacmd/cinema-hall-ticketing-app

Its hosted deployment was paused, and the inspected media directory did not
contain an application screenshot. The new cinema preview therefore draws the
screening and seat-booking workflow as a source-informed interface study.

EventGhor uses a screenshot of the supplied preview, not the previous project
image. Its placeholder hero is replaced in the portfolio asset with original
EventGhor vector artwork, as requested. The live client deployment is not changed.
The case study notes that it is a preview with demonstration event listings.
`public/projects/eventghor-hero.svg` also preserves the standalone banner.
`scripts/compose-eventghor-mockup.mjs` can recompose a new capture using a JSON
record of its hero's viewport coordinates.

## Future SLMS photo and video sources

The owner has authorised using media from:

`/home/sudipta/Documents/GitHub/seltiv-slms`

The current mockup uses `marketing/img/06-admin-finance.png`, which contains seeded
demo data. Useful folders also include `docs/media`, `video` and
`walkthrough-assets`. The project README distinguishes actual implementation
recordings from earlier concepts; preserve that distinction when choosing media.
