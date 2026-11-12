import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

// Usage: node scripts/compose-eventghor-mockup.mjs <capture.jpg> <geometry.json>
// Keeps the preview's real interface; replaces its placeholder hero with original vector artwork.
const [capturePath, geometryPath] = process.argv.slice(2);
if (!capturePath || !geometryPath) throw new Error('Provide a source capture and its recorded hero geometry.');
const photo = await readFile(capturePath);
const meta = await sharp(photo).metadata();
const { hero } = JSON.parse(await readFile(geometryPath, 'utf8'));
const banner = `<defs><linearGradient id="hero-bg" x2="1" y2="1"><stop stop-color="#211535"/><stop offset="1" stop-color="#67429b"/></linearGradient></defs>
<rect width="1600" height="570" fill="url(#hero-bg)"/>
<circle cx="1310" cy="280" r="380" fill="none" stroke="#d3b8ef" stroke-width="2" opacity=".25"/>
<circle cx="1310" cy="280" r="280" fill="none" stroke="#d3b8ef" stroke-width="2" opacity=".25"/>
<path d="M1000 0l600 470M1120 0l480 360" stroke="#bc9ce4" stroke-width="25" opacity=".15"/>
<g font-family="Arial, sans-serif"><text x="76" y="80" font-size="23" letter-spacing="5" fill="#d8c9eb">EVENTGHOR / DISCOVER WHAT’S NEXT</text>
<text x="76" y="220" font-size="88" font-weight="700" letter-spacing="-4" fill="#fff">Good people.</text>
<text x="76" y="320" font-size="88" font-weight="700" letter-spacing="-4" fill="#c3e6b9">Great experiences.</text>
<text x="80" y="384" font-size="28" fill="#e0d4ee">Discover events. Book your place. Make it a memory.</text>
<rect x="78" y="437" width="293" height="67" rx="34" fill="#fff"/>
<text x="114" y="480" font-size="27" fill="#3d225a" font-weight="600">Explore events →</text>
<g transform="translate(1120 95) rotate(9 170 180)"><rect width="330" height="390" rx="20" fill="#c3e6b9"/><circle cy="275" r="22" fill="#583582"/><circle cx="330" cy="275" r="22" fill="#583582"/>
<text x="32" y="56" font-size="18" letter-spacing="4" fill="#3b4d39">YOUR NEXT GREAT</text><text x="32" y="122" font-size="49" font-weight="700" fill="#273a2b">DAY OUT.</text>
<text x="32" y="185" font-size="24" fill="#476345">Music · Culture · Community</text><path d="M30 275h270" stroke="#476345" stroke-dasharray="8 8"/>
<text x="32" y="331" font-size="24" fill="#273a2b" font-weight="600">EVENTGHOR</text><text x="32" y="362" font-size="17" fill="#476345">Your people. Your place.</text></g></g>`;
await writeFile(new URL('../public/projects/eventghor-hero.svg',import.meta.url),`<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="570" viewBox="0 0 1600 570"><title>EventGhor original event discovery banner</title>${banner}</svg>`);
const cropLeft=80, width=meta.width-160;
const composition=`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${meta.height}" viewBox="${cropLeft} 0 ${width} ${meta.height}"><title>EventGhor preview website with new portfolio hero artwork</title><desc>Captured from eventghor.vercel.app. The placeholder hero is replaced with original EventGhor artwork for this portfolio presentation.</desc><image href="data:image/jpeg;base64,${photo.toString('base64')}" width="${meta.width}" height="${meta.height}"/><defs><clipPath id="hero-clip"><rect x="${hero.x}" y="${hero.y}" width="${hero.width}" height="${hero.height}" rx="16"/></clipPath></defs><g clip-path="url(#hero-clip)"><svg x="${hero.x}" y="${hero.y}" width="${hero.width}" height="${hero.height}" viewBox="0 0 1600 570" preserveAspectRatio="none">${banner}</svg></g></svg>`;
await writeFile(new URL('../public/projects/eventghor.svg',import.meta.url),composition);
