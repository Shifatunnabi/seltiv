# Search and social launch

## Live search appearance audit — 12 November 2026

The public `https://seltiv.com` site now serves the branded metadata and all 21
sitemap pages. The live SEO check passed for canonical URLs, titles, descriptions,
social previews, business data and crawl rules. Separate requests using a
Googlebot user-agent confirmed one unique title, one unique description and one
main heading on the homepage and all five service pages; both search icons
responded with HTTP 200. This checks served content, not Google's indexed copy
or access from Google's crawler IPs.

The latest local refinement consistently uses `SELTIV` as the preferred WebSite,
Organization, Open Graph and application name, retaining `Seltiv` as an alternate
name in structured data. Deploy this refinement with the next reviewed release.
The audit script also checks duplicate titles/descriptions, main headings,
business identity consistency and response headers that could suppress search.

After deployment, use an owner-authorized Search Console account to inspect the
homepage and service URLs, request indexing and submit or confirm the sitemap.
Google may select different title text or snippets for individual searches, and
may omit a repeated brand name in a title link. Metadata is a preference, not a
guarantee of exact appearance, ranking, sitelinks or recrawl timing.

## Implemented in this checkout

- Canonical host: `https://seltiv.com`, matching the live redirect from `www`.
- Every page uses `SELTIV | …` titles, its own description, canonical URL,
  Open Graph URL/title/image and large-image Twitter metadata.
- Five indexable service pages describe the service, scope, starting investment,
  typical timing, relevant project studies and questions customers ask.
- Business data identifies Seltiv in Dhaka, Bangladesh, with the supplied official
  Facebook and LinkedIn URLs. Those profiles are also linked in the footer.
- Organization, WebSite, Service, BreadcrumbList, CollectionPage, CreativeWork and
  visible FAQ content use JSON-LD. Concepts and interface previews keep their
  actual status; no invented reviews, ratings, awards or client outcomes are added.
- `/robots.txt` permits public crawling (including search/AI search crawlers under
  the wildcard rule), disallows `/api/` and advertises the canonical sitemap.
- `/sitemap.xml` includes 21 canonical pages and case-study image URLs. The
  `CONTENT_UPDATED` constant in `src/lib/seo.ts` records a real substantive update;
  do not advance it just because a new build runs.
- `/og/[slug]` provides 21 branded 1200×630 PNG previews, generated at build time.

Check a running server with:

```bash
node scripts/check-seo.mjs http://localhost:3000
npm run build
```

Prices come from `src/lib/content.ts`. Service descriptions interpolate the price,
so the metadata, on-page starting investment and service offer data stay aligned.
Project order and case-study content remain in `src/lib/projects.ts`.

## Remaining production steps

1. Deploy this reviewed checkout to the existing production site. Localhost changes
   cannot change the pages currently indexed by Google or shared on social sites.
2. Verify `seltiv.com` in Google Search Console, or use an account with existing
   access. During this update, the signed-in account had no access to the domain
   property and listed no available properties. No ownership, DNS or permission
   changes were made.
3. Add the site to Bing Webmaster Tools or import its verified Search Console
   property. Submit `https://seltiv.com/sitemap.xml` in both services after deployment.
4. If using HTML-tag verification, set the provider's actual token in the hosting
   environment and redeploy. Optional variables supported by the metadata are:

   ```text
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<Google token>
   NEXT_PUBLIC_BING_SITE_VERIFICATION=<Bing token>
   ```

   Domain-property verification may require the exact DNS record Google provides;
   an HTML meta tag does not replace domain verification.
5. Check the public homepage, a service page and a case study using Google's Rich
   Results Test/URL Inspection, Facebook Sharing Debugger and LinkedIn Post
   Inspector. Request a fresh scrape if an older share card is cached.
6. Keep business details, service descriptions, examples and prices current on the
   website and official profiles. Use real client evidence and attributable work.
   If eligible for a Google Business Profile, use the real business location and
   service arrangements; no street address or opening hours were invented here.
7. Monitor indexing, relevant enquiries and search performance in Search Console
   and Bing. Check hosting/CDN logs if legitimate crawlers are being challenged;
   robots.txt permission alone does not override a hosting firewall.

Suggested consistent social profile description for review:

> Seltiv is a product studio based in Dhaka, Bangladesh. We design and build
> websites and e-commerce, AI agents and automation, custom software, AI products
> and SaaS platforms for local and international teams. Explore our work and start
> a project at https://seltiv.com.

No social profile descriptions or posts were changed automatically.

## Guidance used

Google says its normal SEO fundamentals apply to generative AI search, and that
special AI markup or llms.txt files are not required. Indexing, ranking and AI
citations are not guaranteed by technical changes.

- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.openai.com/api/docs/bots

Allowing OAI-SearchBot supports ChatGPT search discovery; it is separate from the
GPTBot training crawler. This update preserves the site's public wildcard crawl
policy rather than changing its training policy.
