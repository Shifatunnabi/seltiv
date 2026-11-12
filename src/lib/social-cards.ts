import { capabilities, projects } from './content';

export const socialCards = [
  { slug: 'home', title: 'Websites. AI. Software.', category: 'Seltiv · Product studio', description: 'Built in Dhaka. Working worldwide.', detail: 'Design → Development → Launch' },
  { slug: 'services', title: 'Five ways to grow.', category: 'Services', description: 'Websites, e-commerce, AI agents, custom software, AI products and SaaS.', detail: 'One team, from first workflow to launch' },
  { slug: 'work', title: 'Built around real work.', category: 'Project studies', description: 'Explore stores, platforms, custom software and product concepts.', detail: 'Seltiv · Selected work' },
  { slug: 'pricing', title: 'Clear scope. Honest pricing.', category: 'Starting project prices', description: `Websites from ${capabilities[0].from} · AI agents from ${capabilities[1].from} · Custom software from ${capabilities[2].from}.`, detail: 'Fixed quotes before work starts' },
  { slug: 'contact', title: 'Let’s build what’s next.', category: 'Start a project', description: 'Tell us what you want to build. We’ll help define the next step.', detail: 'Dhaka, Bangladesh · Working worldwide' },
  ...capabilities.map((service) => ({ slug: `services-${service.slug}`, title: service.title, category: 'Seltiv · Development services', description: service.idealFor, detail: `Projects from ${service.from} USD · ${service.timeline}` })),
  ...projects.map((project) => ({ slug: `work-${project.slug}`, title: project.name, category: `${project.status} · Case study`, description: project.summary, detail: project.mockup.eyebrow })),
];
