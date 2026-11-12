export const serviceDetails: Record<string, {
  searchTitle: string;
  description: string;
  questions: { question: string; answer: string }[];
  projects: string[];
}> = {
  websites: {
    searchTitle: 'Website & E-commerce Development in Bangladesh',
    description: 'Custom websites and online stores from {price}. Seltiv in Dhaka builds responsive sites with CMS, product catalogues, technical SEO and analytics.',
    questions: [
      { question: 'What kinds of websites do you build?', answer: 'We build business websites, e-commerce stores, landing pages and content-managed sites. The scope follows your customers, catalogue and publishing workflow.' },
      { question: 'Can our team update the website after launch?', answer: 'Yes. A suitable CMS can be included so your team can update content and products without editing code. We agree the editing workflow during discovery.' },
      { question: 'Can you improve an existing website?', answer: 'Yes. We can review an existing site, plan a redesign or migration, and address usability, performance and technical SEO as part of an agreed scope.' },
    ],
    projects: ['dealhobe', 'promusic', 'themallbd', 'mark-designers'],
  },
  'ai-agents': {
    searchTitle: 'AI Agent Development & Workflow Automation',
    description: 'Custom AI agents and workflow automation from {price}. Seltiv builds support agents, document workflows and CRM integrations with human approvals.',
    questions: [
      { question: 'Which workflows can an AI agent handle?', answer: 'Typical scopes include answering routine enquiries, qualifying leads, processing documents and updating connected tools. We identify a bounded workflow and test it against real examples before launch.' },
      { question: 'Can the agent connect to our existing systems?', answer: 'We can scope integrations with your CRM, ERP, helpdesk or internal APIs. Access, permissions and available interfaces are reviewed before we agree the build.' },
      { question: 'When does a person stay in control?', answer: 'We define handoff and approval rules for uncertain answers or consequential actions. Evaluation, activity logs and monitoring are part of making the workflow reviewable.' },
    ],
    projects: ['ai-support-agent'],
  },
  software: {
    searchTitle: 'Custom Software Development for Web, Desktop & Mobile',
    description: 'Custom software from {price} for Windows, Linux, Android, iOS and web. Seltiv builds ERP, CRM, portals and internal tools around your operations.',
    questions: [
      { question: 'Which platforms can you develop for?', answer: 'We build for Windows, Linux, Android, iOS and the web. We select the platform or combination of platforms that fits your users, hardware, integrations and budget.' },
      { question: 'Can you build an ERP or CRM around our business?', answer: 'Yes. We map your processes and scope modules such as sales, projects, inventory, finance, reporting and access control around how your team works.' },
      { question: 'Can the software use our branding?', answer: 'White-label branding can be part of the scope, along with permissions, deployment, migration and training. Your proposal sets out the features and ownership arrangements.' },
    ],
    projects: ['seltiv-slms', 'agency-erp-crm', 'cinema-ticketing'],
  },
  'ai-products': {
    searchTitle: 'AI Product Development & LLM Applications',
    description: 'AI product development from {price}. Seltiv designs copilots, knowledge search and AI features with grounded data, usable interfaces and cost controls.',
    questions: [
      { question: 'Can you add AI to an existing product?', answer: 'Yes. We can scope a focused feature such as knowledge search, a copilot or document assistance, and integrate it with your existing application and data access rules.' },
      { question: 'How do you choose a model and data approach?', answer: 'We compare the task, latency, quality, deployment and cost requirements. Retrieval, model selection and evaluation follow the product’s needs and available data.' },
      { question: 'What happens after the prototype?', answer: 'An agreed build can take the prototype into a responsive interface, application integrations, evaluation, usage analytics and deployment. We define the production scope before implementation.' },
    ],
    projects: ['seltiv-slms', 'ai-support-agent'],
  },
  saas: {
    searchTitle: 'SaaS Development & MVP Platforms',
    description: 'SaaS platforms and MVPs from {price}. Seltiv scopes product design, authentication, subscriptions, admin dashboards and cloud deployment.',
    questions: [
      { question: 'Can you help launch a SaaS MVP?', answer: 'Yes. We help define a focused first release, design the user journeys and build the core experience. Typical MVP timelines are 6–10 weeks, depending on scope and integrations.' },
      { question: 'Can you include subscriptions and multiple user roles?', answer: 'Authentication, permissions, subscription billing and administration can be included in the agreed scope. We choose the tenancy and billing approach around the business model.' },
      { question: 'Can you continue working on the product after launch?', answer: 'Yes. We can scope ongoing improvements and support through a separate engagement, with a roadmap and a regular review of priorities.' },
    ],
    projects: ['agency-erp-crm'],
  },
};
