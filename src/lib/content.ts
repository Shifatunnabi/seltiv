// Single source of truth for site copy. Edit prices, services and work here.

export const SITE_URL = 'https://www.seltiv.com';
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@seltiv.com';
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
    slug: 'ai-agents',
    index: '01',
    title: 'AI Agents & Automation',
    short: 'Agents',
    pitch:
      'Agents that answer customers, qualify leads, process documents and run back-office workflows, with a human approving anything that matters.',
    outcomes: ['Support & sales agents', 'Document & invoice processing', 'Workflow automation', 'CRM / ERP integrations'],
    tags: ['OpenAI', 'Claude', 'LangGraph', 'n8n', 'RAG', 'Evals'],
    from: '$2,500',
    timeline: '2–4 weeks',
    art: '/art/ai-agents.svg',
    idealFor: 'Teams drowning in repetitive enquiries, documents or data entry.',
    deliverables: ['Workflow audit & ROI map', 'Production agent with tool access', 'Human-in-the-loop approvals', 'Evaluation suite & monitoring', 'Runbook & team training'],
  },
  {
    slug: 'ai-products',
    index: '02',
    title: 'AI Products',
    short: 'AI Products',
    pitch:
      'Copilots, AI-native apps and LLM features designed as real products: fast, grounded in your data, measurable and safe to ship.',
    outcomes: ['Copilots & assistants', 'AI features in existing apps', 'Search & knowledge tools', 'Voice & vision apps'],
    tags: ['LLMs', 'Vector search', 'Next.js', 'Python', 'Streaming UI'],
    from: '$6,000',
    timeline: '4–8 weeks',
    art: '/art/ai-products.svg',
    idealFor: 'Founders and product teams adding AI to a product or launching an AI-native one.',
    deliverables: ['Product & UX strategy', 'Model selection & prompt design', 'Retrieval over your data', 'Streaming, responsive UI', 'Usage analytics & cost controls'],
  },
  {
    slug: 'saas',
    index: '03',
    title: 'SaaS Products',
    short: 'SaaS',
    pitch:
      'From idea to paying users. We design, build and launch SaaS platforms, with billing, auth, dashboards and the infrastructure to scale.',
    outcomes: ['MVP in 6–10 weeks', 'Multi-tenant platforms', 'Billing & subscriptions', 'Admin & analytics'],
    tags: ['Next.js', 'Node', 'PostgreSQL', 'Stripe', 'AWS', 'Supabase'],
    from: '$8,000',
    timeline: '6–10 weeks',
    art: '/art/saas.svg',
    idealFor: 'Founders validating an idea or replacing a manual service with a product.',
    deliverables: ['Product discovery & scope', 'Brand-ready UI design', 'Auth, billing & roles', 'Admin dashboard', 'Cloud deployment & CI/CD'],
  },
  {
    slug: 'software',
    index: '04',
    title: 'Custom Software',
    short: 'Software',
    pitch:
      'ERPs, portals and internal tools shaped around how your business actually runs, replacing spreadsheets and disconnected apps.',
    outcomes: ['ERP & operations systems', 'Client & vendor portals', 'Internal tools', 'Mobile apps'],
    tags: ['React', 'Flutter', 'Node', 'PostgreSQL', 'APIs', 'Docker'],
    from: '$5,000',
    timeline: '4–12 weeks',
    art: '/art/software.svg',
    idealFor: 'Operations-heavy businesses outgrowing spreadsheets and off-the-shelf tools.',
    deliverables: ['Process mapping', 'Custom modules & permissions', 'Integrations with existing tools', 'Data migration', 'Training & ongoing support'],
  },
  {
    slug: 'websites',
    index: '05',
    title: 'Websites & Commerce',
    short: 'Websites',
    pitch:
      'High-performance websites and online stores that load fast, rank well and convert. Designed to be the best salesperson you have.',
    outcomes: ['Marketing websites', 'E-commerce stores', 'Landing pages', 'CMS & SEO'],
    tags: ['Next.js', 'Headless CMS', 'Shopify', 'Framer Motion', 'SEO'],
    from: '$1,500',
    timeline: '2–5 weeks',
    art: '/art/websites.svg',
    idealFor: 'Brands that need a site that wins trust and turns visitors into customers.',
    deliverables: ['Sitemap & conversion strategy', 'Custom design system', 'Next.js / Shopify build', 'CMS your team can edit', 'Technical SEO & analytics'],
  },
];

export type Project = {
  name: string;
  tags: string[];
  image: string;
  url: string;
  year: string;
  summary: string;
};

export const projects: Project[] = [
  { name: 'The Mall BD', tags: ['E-commerce', 'Platform'], image: '/clients/themall.jpg', url: 'https://www.themallbd.com', year: '2025', summary: 'Multi-category beauty commerce platform.' },
  { name: 'ShowbizFace', tags: ['Website', 'Media'], image: '/clients/showbizface.jpg', url: 'https://www.showbizface.com', year: '2025', summary: 'Entertainment media publishing site.' },
  { name: 'Directors Guild', tags: ['Website', 'Identity'], image: '/clients/dg.jpg', url: 'https://www.directorsguildbd.com/', year: '2024', summary: 'Digital home for a national film guild.' },
  { name: 'Eventghor', tags: ['Platform', 'Marketing'], image: '/clients/eventghor.jpg', url: 'https://www.eventghor.com', year: '2024', summary: 'Event services booking platform.' },
  { name: 'Joytoy', tags: ['E-commerce', 'Identity'], image: '/clients/joytoy.jpg', url: 'https://joytoy.vercel.app', year: '2025', summary: 'Playful storefront for a toy brand.' },
  { name: 'Swindon Home Removals', tags: ['Website', 'UK'], image: '/clients/swindon.jpg', url: '#', year: '2024', summary: 'Lead-generating site for a UK removals firm.' },
  { name: 'Alimento', tags: ['Website', 'Identity'], image: '/clients/alimento.jpg', url: 'https://alimento-theta.vercel.app', year: '2025', summary: 'Food brand website and identity.' },
  { name: 'Bangladesh ECD Network', tags: ['Website', 'Non-profit'], image: '/clients/ecd.jpg', url: 'https://www.ben-ecd.net', year: '2024', summary: 'Knowledge hub for a national network.' },
  { name: 'Fowzia Foods', tags: ['Website', 'Commerce'], image: '/clients/fowzia.jpg', url: '#', year: '2024', summary: 'Product catalogue for a food producer.' },
  { name: 'Planetary Health Academia', tags: ['Website', 'Education'], image: '/clients/pha.jpg', url: '#', year: '2024', summary: 'Academic platform and resources.' },
  { name: 'Tanin Furniture', tags: ['Website', 'Commerce'], image: '/clients/tanin.jpg', url: '#', year: '2024', summary: 'Furniture showroom online.' },
  { name: 'Mark Designers Ltd.', tags: ['Website', 'Identity'], image: '/clients/mdl.jpg', url: '#', year: '2023', summary: 'Portfolio site for a design firm.' },
  { name: 'Goldmark', tags: ['Website', 'Identity'], image: '/clients/gm.jpg', url: '#', year: '2023', summary: 'Corporate website and brand system.' },
];

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
    price: '$1,500',
    unit: 'starting, one-time',
    bestFor: 'Businesses that need a fast, beautiful, high-converting web presence.',
    includes: ['Strategy, copy direction & UX', 'Custom design, no templates', 'Next.js build, CMS & SEO', 'Analytics & speed tuning', '30 days of post-launch care'],
    cta: 'Start a website',
  },
  {
    name: 'Build',
    tagline: 'AI, SaaS & custom software',
    price: '$2,500',
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
      'Five things, all to a high standard: AI agents & automation, AI products, SaaS products, custom software (ERPs, portals, internal tools) and high-performance websites & online stores. One team covers strategy, design, engineering and launch.',
  },
  {
    question: 'Do we need to be an "AI company" to work with you?',
    answer:
      'No. Many clients come to us for a website, a store or a custom system. We are AI-first in how we work, so we will point out where automation or AI can save time or make money, but only recommend it when it pays for itself.',
  },
  {
    question: 'How much does a project cost?',
    answer:
      'Websites start from $1,500, custom software from $5,000, AI agents from $2,500 and SaaS MVPs from $8,000. Larger builds are priced by milestone after a paid discovery, which is credited to the build. You always get a fixed quote before work begins.',
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
