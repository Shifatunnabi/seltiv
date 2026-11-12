'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState, type FormEvent } from 'react';
import { capabilities } from '@/lib/content';
import { Arrow } from '@/components/ui/Button';

const SERVICES = [...capabilities.map((c) => ({ id: c.slug, label: c.title })), { id: 'fractional', label: 'Brand / marketing / content' }];
const BUDGETS = ['< $1k', '$1k – $3k', '$3k – $5k', '$5k – $10k', '$10k+'];

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
        active ? 'border-signal bg-signal text-ink' : 'border-line text-fog hover:border-white/40 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
}

function Field({ label, name, type = 'text', required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="group block">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
        {label}
        {required && <span className="text-signal"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border-b border-line bg-transparent pb-3 text-xl text-white outline-none transition-colors placeholder:text-white/20 focus:border-signal"
      />
    </label>
  );
}

export default function ContactForm({ initialService }: { initialService?: string }) {
  const [services, setServices] = useState<string[]>(initialService && SERVICES.some((s) => s.id === initialService) ? [initialService] : []);
  const [budget, setBudget] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const toggle = (id: string) => setServices((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setState('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('name'),
          email: fd.get('email'),
          phone: fd.get('phone'),
          company: fd.get('company'),
          description: fd.get('description'),
          budget,
          services: services.map((id) => SERVICES.find((s) => s.id === id)?.label).filter(Boolean),
        }),
      });
      if (!res.ok) throw new Error();
      setState('sent');
      form.reset();
      setServices([]);
      setBudget('');
    } catch {
      setState('error');
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {state === 'sent' ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[26px] bg-signal p-10 text-ink"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.14em]">Message received</p>
            <p className="display mt-6 text-5xl">
              Thank you. <span className="serif-accent">Talk soon.</span>
            </p>
            <p className="mt-4 max-w-[40ch] text-ink/75">We reply within one business day with next steps and a time for your intro call.</p>
            <button onClick={() => setState('idle')} className="mt-8 font-mono text-xs uppercase tracking-[0.14em] underline underline-offset-4">
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
            <fieldset>
              <legend className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">What can we build for you?</legend>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((s) => (
                  <Chip key={s.id} active={services.includes(s.id)} onClick={() => toggle(s.id)}>
                    {s.label}
                  </Chip>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-10 sm:grid-cols-2">
              <Field label="Your name" name="name" required placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" required placeholder="jane@company.com" />
              <Field label="Company" name="company" placeholder="Company name" />
              <Field label="Phone / WhatsApp" name="phone" type="tel" placeholder="+44 …" />
            </div>

            <fieldset>
              <legend className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Budget</legend>
              <div className="flex flex-wrap gap-2">
                {BUDGETS.map((b) => (
                  <Chip key={b} active={budget === b} onClick={() => setBudget(budget === b ? '' : b)}>
                    {b}
                  </Chip>
                ))}
              </div>
            </fieldset>

            <label className="block">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                Tell us about the project<span className="text-signal"> *</span>
              </span>
              <textarea
                name="description"
                required
                rows={4}
                placeholder="Goals, timeline, links, anything that helps…"
                className="mt-2 w-full resize-none border-b border-line bg-transparent pb-3 text-xl text-white outline-none transition-colors placeholder:text-white/20 focus:border-signal"
              />
            </label>

            <div className="flex flex-wrap items-center gap-6">
              <button type="submit" disabled={state === 'sending'} className="btn btn-primary disabled:opacity-60">
                <span>{state === 'sending' ? 'Sending…' : 'Send enquiry'}</span>
                <span className="btn-icon">
                  <Arrow />
                </span>
              </button>
              {state === 'error' && <p className="text-sm text-red-400">Something went wrong. Please email us directly.</p>}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
