import assert from 'node:assert/strict';

const origin = process.argv[2] || 'http://localhost:3000';
const canonicalOrigin = 'https://seltiv.com';
const decode = (value) => value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#x27;', "'").replaceAll('&lt;', '<').replaceAll('&gt;', '>');
const attributes = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1], decode(m[2])]));
const robots = await (await fetch(`${origin}/robots.txt`)).text();
assert.match(robots, /User-Agent: \*/i);
assert.match(robots, /^Allow: \/$/m);
assert.match(robots, /^Disallow: \/api\//m);
assert.ok(!/^Disallow: \/$/m.test(robots));
assert.ok(robots.includes(`${canonicalOrigin}/sitemap.xml`));

const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decode(match[1]));
assert.equal(urls.length, 21, 'Five main pages, five service pages and eleven case studies');
assert.equal(urls.filter((url) => url.includes('/services/')).length, 5);
assert.equal(urls.filter((url) => url.includes('/work/')).length, 11);
assert.equal(new Set(urls).size, urls.length);
assert.ok(!sitemap.includes('https://www.seltiv.com'));

let cursor = 0;
await Promise.all(Array.from({ length: 4 }, async () => {
  while (cursor < urls.length) {
    const url = urls[cursor++];
    assert.equal(new URL(url).origin, canonicalOrigin);
    const path = new URL(url).pathname;
    const response = await fetch(`${origin}${path}`, { headers: { 'User-Agent': 'facebookexternalhit/1.1' } });
    assert.equal(response.status, 200, path);
    const html = await response.text();
    const head = html.split('</head>')[0];
    const metas = [...head.matchAll(/<meta\b[^>]*>/g)].map((m) => attributes(m[0]));
    const getMeta = (key) => metas.find((m) => m.name === key || m.property === key)?.content;
    const links = [...head.matchAll(/<link\b[^>]*>/g)].map((m) => attributes(m[0]));
    assert.equal(new URL(links.find((link) => link.rel === 'canonical')?.href).href, new URL(url).href, `${path} canonical`);
    const title = decode(head.match(/<title>(.*?)<\/title>/s)?.[1] || '');
    assert.ok(title.startsWith('SELTIV | '), `${path} title prefix`);
    assert.ok(getMeta('description')?.length > 70, `${path} description`);
    assert.equal(new URL(getMeta('og:url')).href, new URL(url).href, `${path} share URL`);
    assert.ok(getMeta('og:title')?.startsWith('SELTIV | '), `${path} share title`);
    assert.equal(getMeta('twitter:card'), 'summary_large_image');
    assert.ok(!getMeta('robots')?.includes('noindex'));
    const imageUrl = getMeta('og:image');
    assert.ok(imageUrl?.startsWith(`${canonicalOrigin}/og/`), `${path} social image`);
    const imageResponse = await fetch(`${origin}${new URL(imageUrl).pathname}`);
    assert.equal(imageResponse.status, 200, imageUrl);
    assert.match(imageResponse.headers.get('content-type'), /image\/png/);
    const image = Buffer.from(await imageResponse.arrayBuffer());
    assert.equal(image.readUInt32BE(16), 1200);
    assert.equal(image.readUInt32BE(20), 630);
    const data = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].flatMap((m) => {
      const parsed = JSON.parse(m[1]); return Array.isArray(parsed) ? parsed : [parsed];
    });
    const org = data.find((item) => item['@type'] === 'Organization');
    assert.equal(org?.url, canonicalOrigin);
    assert.ok(org.sameAs.includes('https://www.facebook.com/people/Seltiv/61587017200359/'));
    assert.ok(org.sameAs.includes('https://bd.linkedin.com/company/seltiv'));
    if (path.startsWith('/services/')) {
      assert.ok(data.some((item) => item['@type'] === 'BreadcrumbList'));
      const service = data.find((item) => item['@type'] === 'Service');
      assert.ok(service?.offers.priceSpecification.minPrice > 0);
      const visiblePrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(service.offers.priceSpecification.minPrice);
      assert.ok(html.includes(visiblePrice));
      assert.ok(data.some((item) => item['@type'] === 'FAQPage'));
    }
    if (path.startsWith('/work/')) assert.ok(data.some((item) => item['@type'] === 'CreativeWork'));
  }
}));
assert.equal((await fetch(`${origin}/services/not-a-service`)).status, 404);
assert.equal((await fetch(`${origin}/og/not-a-card`)).status, 404);
console.log(`PASS: ${urls.length} canonical pages, SELTIV-prefixed titles, unique share URLs, 1200×630 PNGs, business profiles, structured data, sitemap and crawl rules.`);
