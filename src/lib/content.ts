// Single source of truth for site copy. Edit prices, services and work here.

export const SITE_URL = 'https://seltiv.com';
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@seltiv.com';
export const SOCIAL_LINKS = [
  { label: 'Facebook', url: 'https://www.facebook.com/people/Seltiv/61587017200359/' },
  { label: 'LinkedIn', url: 'https://bd.linkedin.com/company/seltiv' },
];
export const PHONES = [
  { label: '+880 1885 890605', raw: '+8801885890605' },
  { label: '+880 1706 642396', raw: '+8801706642396' },
];

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export type Capability = {
  slug: string;
  index: string;
  title: string;
  short: string;
  pitch: string;
  outcomes: string[];
  tags: string[];
  from: string;
  timeline: string;
  art: string;
  idealFor: string;
  deliverables: string[];
};

export const capabilities: Capability[] = [
  {
    slug: 'websites',
    index: '01',
    title: 'Websites & E-commerce',
    short: 'Web & E-commerce',
    pitch:
      'High-performance websites and online stores that load fast, rank well and convert. Designed to be the best salesperson you have.',
    outcomes: ['Marketing websites', 'E-commerce stores', 'Landing pages', 'CMS & SEO'],
    tags: ['Next.js', 'Headless CMS', 'Shopify', 'Framer Motion', 'SEO'],
    from: '$399',
    timeline: '2–5 weeks',
    art: '/art/websites.svg',
    idealFor: 'Brands that need a site that wins trust and turns visitors into customers.',
    deliverables: ['Sitemap & conversion strategy', 'Custom design system', 'Next.js / Shopify build', 'CMS your team can edit', 'Technical SEO & analytics'],
  },
  {
    slug: 'ai-agents',
    index: '02',
    title: 'AI Agents & Automation',
    short: 'Agents',
    pitch:
      'Agents that answer customers, qualify leads, process documents and run back-office workflows, with a human approving anything that matters.',
    outcomes: ['Support & sales agents', 'Document & invoice processing', 'Workflow automation', 'CRM / ERP integrations'],
    tags: ['OpenAI', 'Claude', 'LangGraph', 'n8n', 'RAG', 'Evals'],
    from: '$999',
    timeline: '2–4 weeks',
    art: '/art/ai-agents.svg',
    idealFor: 'Teams drowning in repetitive enquiries, documents or data entry.',
    deliverables: ['Workflow audit & ROI map', 'Production agent with tool access', 'Human-in-the-loop approvals', 'Evaluation suite & monitoring', 'Runbook & team training'],
  },
  {
    slug: 'software',
    index: '03',
    title: 'Custom Software',
    short: 'Software',
    pitch:
      'Custom applications for Windows, Linux, Android, iOS and the web. ERPs, portals and internal tools shaped around how your business runs, replacing spreadsheets and disconnected apps.',
    outcomes: ['ERP & operations systems', 'Client & vendor portals', 'Windows & Linux desktop apps', 'Android, iOS & web apps'],
    tags: ['React', 'Flutter', 'Node', 'PostgreSQL', 'APIs', 'Docker'],
    from: '$1,499',
    timeline: '4–12 weeks',
    art: '/art/software.svg',
    idealFor: 'Operations-heavy businesses outgrowing spreadsheets and off-the-shelf tools.',
    deliverables: ['Process mapping', 'Custom modules & permissions', 'Integrations with existing tools', 'Data migration', 'Training & ongoing support'],
  },
  {
    slug: 'ai-products',
    index: '04',
    title: 'AI Products',
    short: 'AI Products',
    pitch:
      'Copilots, AI-native apps and LLM features designed as real products: fast, grounded in your data, measurable and safe to ship.',
    outcomes: ['Copilots & assistants', 'AI features in existing apps', 'Search & knowledge tools', 'Voice & vision apps'],
    tags: ['LLMs', 'Vector search', 'Next.js', 'Python', 'Streaming UI'],
    from: '$3,499',
    timeline: '4–8 weeks',
    art: '/art/ai-products.svg',
    idealFor: 'Founders and product teams adding AI to a product or launching an AI-native one.',
    deliverables: ['Product & UX strategy', 'Model selection & prompt design', 'Retrieval over your data', 'Streaming, responsive UI', 'Usage analytics & cost controls'],
  },
  {
    slug: 'saas',
    index: '05',
    title: 'SaaS Platforms',
    short: 'SaaS',
    pitch:
      'From idea to paying users. We design, build and launch SaaS platforms, with billing, auth, dashboards and the infrastructure to scale.',
    outcomes: ['MVP in 6–10 weeks', 'Multi-tenant platforms', 'Billing & subscriptions', 'Admin & analytics'],
    tags: ['Next.js', 'Node', 'PostgreSQL', 'Stripe', 'AWS', 'Supabase'],
    from: '$3,999',
    timeline: '6–10 weeks',
    art: '/art/saas.svg',
    idealFor: 'Founders validating an idea or replacing a manual service with a product.',
    deliverables: ['Product discovery & scope', 'Brand-ready UI design', 'Auth, billing & roles', 'Admin dashboard', 'Cloud deployment & CI/CD'],
  },
];

export { projects, featuredProjects, showcaseProjects } from './projects';
export type { Project } from './projects';

export const stats = [
  { value: 50, suffix: '+', label: 'Products & sites shipped', note: 'Across commerce, media, education & services' },
  { value: 30, suffix: '+', label: 'Clients served', note: 'Bangladesh, UK and beyond' },
  { value: 3, suffix: '+', label: 'Years building', note: 'One team, design to deployment' },
  { value: 1, suffix: 'wk', label: 'Between live demos', note: 'A staging link from the first sprint' },
];

export const processSteps = [
  {
    n: '01',
    title: 'Discover',
    seltiv: 'We map your goals, users and workflows, find where AI or software creates the most leverage and write a fixed-scope plan.',
    you: 'One 45-minute call and access to the people who know the work.',
    duration: 'Week 0–1',
  },
  {
    n: '02',
    title: 'Design',
    seltiv: 'Product strategy, UX flows and high-fidelity interfaces. For AI, we prototype the agent against real examples before we build.',
    you: 'Review clickable prototypes and give feedback asynchronously.',
    duration: 'Week 1–3',
  },
  {
    n: '03',
    title: 'Build',
    seltiv: 'Weekly sprints with a live staging link. Clean code, tests, evaluations for every AI behaviour and full documentation.',
    you: 'A 30-minute weekly demo. Watch it come alive.',
    duration: 'Week 2–8',
  },
  {
    n: '04',
    title: 'Launch & scale',
    seltiv: 'We deploy, monitor and keep improving: performance, model upgrades, new features and growth experiments.',
    you: 'Grow. We keep the system sharp.',
    duration: 'Ongoing',
  },
];

export type Plan = {
  name: string;
  tagline: string;
  price: string;
  unit: string;
  featured?: boolean;
  bestFor: string;
  includes: string[];
  cta: string;
};

export const plans: Plan[] = [
  {
    name: 'Launch',
    tagline: 'Fixed-scope websites & stores',
    price: '$399',
    unit: 'starting, one-time',
    bestFor: 'Businesses that need a fast, beautiful, high-converting web presence.',
    includes: ['Strategy, copy direction & UX', 'Custom design, no templates', 'Next.js build, CMS & SEO', 'Analytics & speed tuning', '30 days of post-launch care'],
    cta: 'Start a website',
  },
  {
    name: 'Build',
    tagline: 'AI, SaaS & custom software',
    price: '$999',
    unit: 'starting, milestone-based',
    featured: true,
    bestFor: 'Teams shipping an AI agent, a SaaS product or a system that runs the business. Priced per service.',
    includes: ['Paid discovery, credited to the build', 'Product design & prototypes', 'Full-stack + AI engineering', 'Evals, QA & documentation', 'Weekly demos & staging link', '60 days of warranty support'],
    cta: 'Scope a build',
  },
  {
    name: 'Partner',
    tagline: 'Your on-demand product team',
    price: '$3,500',
    unit: 'per month',
    bestFor: 'Companies that need continuous design, engineering and AI capacity.',
    includes: ['Dedicated designer + engineers', '~80 hours of sprint capacity a month', 'AI ops: monitoring & model upgrades', 'Same-day response on weekdays', 'Monthly roadmap & reporting', 'Pause or cancel with 30 days notice'],
    cta: 'Become a partner',
  },
];

/** Monthly brand, marketing and content retainers shown after the fractional section. */
export const fractionalPlans: Plan[] = [
  {
    name: 'Essentials',
    tagline: 'One channel, kept consistent',
    price: '$299',
    unit: 'per month',
    bestFor: 'Businesses that want their brand and one channel looked after without hiring in-house.',
    includes: ['Brand upkeep & design requests', '6 social posts a month', 'On-page SEO', 'Monthly performance report'],
    cta: 'Start with Essentials',
  },
  {
    name: 'Growth',
    tagline: 'Marketing and content together',
    price: '$699',
    unit: 'per month',
    featured: true,
    bestFor: 'Teams ready to pair steady content with paid acquisition and see it measured.',
    includes: ['Everything in Essentials', 'Paid ads management', '10 social posts + 1 short video', '1 SEO article a month', 'Monthly strategy call'],
    cta: 'Choose Growth',
  },
  {
    name: 'Scale',
    tagline: 'A full fractional growth team',
    price: '$1,499',
    unit: 'per month',
    bestFor: 'Companies that want brand, campaigns and content run as one coordinated programme.',
    includes: ['Everything in Growth', 'Multi-channel campaigns & CRO', '3 videos + motion assets', 'Fortnightly strategy call'],
    cta: 'Talk about Scale',
  },
];

export const fractional = [
  { title: 'Brand identity', desc: 'Logo, visual systems and guidelines for the products we build.' },
  { title: 'Performance marketing', desc: 'SEO, paid acquisition and analytics to grow what we launch.' },
  { title: 'Content production', desc: 'Product videos, motion and copy that explain what you do.' },
];

export const stack = ['OpenAI', 'Anthropic Claude', 'LangGraph', 'Next.js', 'React', 'Node.js', 'Python', 'PostgreSQL', 'Supabase', 'AWS', 'Vercel', 'Stripe', 'Flutter', 'n8n', 'Docker', 'Shopify'];

export const faqs = [
  {
    question: 'What does Seltiv build?',
    answer:
      'Five things, all to a high standard: websites & e-commerce, AI agents & automation, custom software for Windows, Linux, Android, iOS and the web, AI products and SaaS platforms. One team covers strategy, design, engineering and launch.',
  },
  {
    question: 'Do we need to be an "AI company" to work with you?',
    answer:
      'No. Many clients come to us for a website, a store or a custom system. We are AI-first in how we work, so we will point out where automation or AI can save time or make money, but only recommend it when it pays for itself.',
  },
  {
    question: 'How much does a project cost?',
    answer:
      'Websites & e-commerce start from $399, AI agents & automation from $999, custom software from $1,499, AI products from $3,499 and SaaS platforms from $3,999. Larger builds are priced by milestone after a paid discovery, which is credited to the build. You always get a fixed quote before work begins.',
  },
  {
    question: 'How long does it take?',
    answer:
      'A marketing website typically takes 2–5 weeks, an AI agent pilot 2–4 weeks and a SaaS MVP 6–10 weeks. You get a live staging link from the first sprint and a demo every week.',
  },
  {
    question: 'How do you make AI reliable?',
    answer:
      'Every agent we ship is grounded in your data, tested against real examples with automated evaluations, logged end-to-end and designed with a human approval step wherever a mistake would be costly.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes. We are a remote-first team working with clients in Bangladesh, the UK and worldwide, with overlap across European and Asian time zones.',
  },
  {
    question: 'Can you also handle branding and marketing?',
    answer:
      'Yes, as a fractional partner. For clients we build with, we can also run brand identity, performance marketing and content production, so launch and growth stay in one place.',
  },
];
