import { fractional } from '@/lib/content';
import FadeUp from '@/components/motion/FadeUp';
import Link from 'next/link';
import { FiPenTool, FiTrendingUp, FiFilm } from 'react-icons/fi';

const icons = [FiPenTool, FiTrendingUp, FiFilm];

export default function Fractional() {
  return (
    <section className="relative pb-4 md:pb-8">
      <div className="wrap">
        <FadeUp>
          <div className="grid gap-10 rounded-[26px] border border-line p-7 md:p-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-5">Also available</p>
              <h3 className="display text-[clamp(1.9rem,3vw,2.8rem)] text-white">
                Your fractional growth partner
              </h3>
              <p className="mt-4 max-w-[38ch] text-fog">
                For clients we build with, we can also handle the brand, marketing and content around the product, so
                launch and growth stay in one place.
              </p>
            </div>
            <ul className="grid gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-3 lg:col-span-8">
              {fractional.map((f, i) => {
                const Icon = icons[i];
                return (
                  <li key={f.title} className="flex flex-col justify-between gap-8 bg-ink p-6">
                    <Icon className="h-6 w-6 text-signal" strokeWidth={1.5} aria-hidden="true" focusable="false" />
                    <div>
                      <p className="text-lg font-medium text-white">{f.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-fog">{f.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="lg:col-span-12">
              <Link href="/contact" className="link-u font-mono text-xs uppercase tracking-[0.14em] text-white">
                Ask about fractional support <span className="arrow-inline">→</span>
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
