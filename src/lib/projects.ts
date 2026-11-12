export type Project = {
  slug: string;
  name: string;
  tags: string[];
  image: string;
  url: string;
  featured: boolean;
  contactOnly?: boolean;
  status: 'Client platform' | 'Product' | 'Concept study' | 'Interface preview';
  summary: string;
  mockup: { domain: string; accent: string; eyebrow: string };
  caseStudy: {
    overview: string;
    brief: string;
    experience: string;
    features: string[];
    mediaNote?: string;
  };
};

// Portfolio order is editorial: keep it consistent across every work surface.
export const projects: Project[] = [
  {
    slug: 'dealhobe', name: 'DealHobe', tags: ['E-commerce'], featured: true,
    image: '/projects/dealhobe.webp', url: 'https://dealhobe.com', status: 'Client platform',
    summary: 'Beauty and skincare, made easy to shop.',
    mockup: { domain: 'dealhobe.com', accent: '#d697a7', eyebrow: 'E-commerce' },
    caseStudy: {
      overview: 'An online beauty storefront built around product discovery, clear categories and a direct path to the shopping bag.',
      brief: 'Help customers navigate a broad beauty catalogue, understand current offers and find products for their everyday routine.',
      experience: 'Campaign-led imagery introduces the store, while category navigation, brand collections and concern-based browsing give customers several ways into the catalogue. Product cards keep the next shopping action close at hand.',
      features: ['Beauty and skincare catalogue', 'Category, brand and concern-based discovery', 'Campaign and offer collections', 'Product variants and shopping bag', 'Customer accounts and order journeys'],
    },
  },
  {
    slug: 'seltiv-slms', name: 'Seltiv SLMS', tags: ['Software', 'Education'], featured: true,
    image: '/projects/slms.webp', url: 'https://seltiv-slms.netlify.app/', status: 'Product',
    summary: 'The school day, connected from admissions to accounts.',
    mockup: { domain: 'slms.seltiv.com', accent: '#56bfb2', eyebrow: 'White-label custom software' },
    caseStudy: {
      overview: 'A Student Lifecycle Management System connecting admissions, student records, attendance, academics and school finance.',
      brief: 'Give school administrators, teachers, parents and accountants workspaces suited to their responsibilities, with a connected record of the student journey.',
      experience: 'The product separates daily work into four portals. Administrators oversee the school, teachers handle attendance and marks, parents follow their children’s progress, and accounts teams manage fees and payroll. School identity and deployment can be configured for each institution.',
      features: ['Admissions and student records', 'Attendance and academic workflows', 'Teacher, parent, admin and accounts portals', 'Fees, payroll and reporting', 'Institution branding and self-hosted deployment', 'Local AI assistance for marking allocations'],
      mediaNote: 'Product imagery uses the project’s seeded demonstration data. Payment and messaging integrations vary by deployment.',
    },
  },
  {
    slug: 'promusic', name: 'ProMusic', tags: ['E-commerce'], featured: true,
    image: '/projects/promusic.webp', url: 'https://promusic.com.bd', status: 'Client platform',
    summary: 'A storefront for instruments, studio and stage gear.',
    mockup: { domain: 'promusic.com.bd', accent: '#c6a654', eyebrow: 'E-commerce' },
    caseStudy: {
      overview: 'A music retail experience bringing instruments, recording equipment and performance essentials into one searchable catalogue.',
      brief: 'Make a specialist catalogue approachable for new musicians while giving experienced buyers fast routes to the brands and equipment they know.',
      experience: 'Category and brand navigation sit alongside search, new arrivals and discounts. Product listings make equipment and pricing easy to compare, and account, wishlist and cart journeys support the buying process.',
      features: ['Instrument and audio equipment catalogue', 'Brand and category discovery', 'Search, new arrivals and discounts', 'Wishlist and customer accounts', 'Cart and order tracking'],
    },
  },
  {
    slug: 'tofiza', name: 'Tofiza', tags: ['Platform', 'Travel'], featured: true,
    image: '/projects/tofiza.webp', url: 'https://tofiza.com', status: 'Client platform',
    summary: 'Hotel discovery and booking, from search to stay.',
    mockup: { domain: 'tofiza.com', accent: '#5c9fc5', eyebrow: 'Travel aggregator' },
    caseStudy: {
      overview: 'A travel booking platform focused on discovering and reserving hotel stays in Cox’s Bazar.',
      brief: 'Bring property discovery, date selection, room availability and booking into a clear journey for travellers.',
      experience: 'The search experience starts with a destination, dates and guest count. Property information, location guidance and booking support help travellers compare stays before moving into room selection and confirmation.',
      features: ['Destination and date-based hotel search', 'Property listings and room information', 'Guest and room selection', 'Booking and confirmation journeys', 'Property partner onboarding'],
    },
  },
  {
    slug: 'agency-erp-crm', name: 'Agency & Corporate ERP', tags: ['Software', 'Concept'], featured: true, contactOnly: true,
    image: '/projects/agency-erp.svg', url: '/contact', status: 'Concept study',
    summary: 'One workspace for leads, delivery, people and finance.',
    mockup: { domain: 'Agency workspace / Demo', accent: '#aaa0e5', eyebrow: 'ERP & CRM · Concept' },
    caseStudy: {
      overview: 'An ERP and CRM concept for agencies and corporate teams that need a shared view of business development and delivery.',
      brief: 'Explore how the sales pipeline, project workload and financial picture could sit together, rather than being managed across disconnected spreadsheets.',
      experience: 'The proposed workspace connects a lead pipeline with active projects, team allocation and invoices. The overview makes the relationship between winning work and delivering it visible at a glance.',
      features: ['Lead and deal pipeline', 'Projects and delivery milestones', 'Team capacity and assignments', 'Invoices and receivables', 'Management overview and reporting'],
      mediaNote: 'An original interface concept with illustrative data, available to scope and build around your organisation.',
    },
  },
  {
    slug: 'cinema-ticketing', name: 'Cinema Hall & Ticketing', tags: ['Software', 'Ticketing'], featured: false, contactOnly: true,
    image: '/projects/cinema-ticketing.svg', url: '/contact', status: 'Interface preview',
    summary: 'Cinema operations, showtimes and seat booking in one flow.',
    mockup: { domain: 'Cinema operations / Preview', accent: '#e3a06e', eyebrow: 'Cinema management & ticketing' },
    caseStudy: {
      overview: 'Cinema hall management and electronic ticketing, connecting the audience’s booking journey with the venue’s operational workflow.',
      brief: 'Bring films, screenings and seat availability together so audiences can choose a show and the cinema team can manage the booking process.',
      experience: 'The interface preview explores screening selection and a visual seat plan alongside a booking summary. The supplied project repository identifies Anando Cinema as the client and includes administration, user access and ticketing implementation.',
      features: ['Film and screening management', 'Showtime selection', 'Visual seat selection', 'Booking and ticketing workflow', 'Administration and staff access'],
      mediaNote: 'A newly drawn interface preview informed by the supplied cinema project. The original hosted deployment was paused when this portfolio was updated; this is not a capture of a running deployment.',
    },
  },
  {
    slug: 'ai-support-agent', name: 'AI Support Agent', tags: ['AI', 'Concept'], featured: true, contactOnly: true,
    image: '/projects/ai-support.svg', url: '/contact', status: 'Concept study',
    summary: 'Helpful replies and support calls, with a human handoff.',
    mockup: { domain: 'Support workspace / Demo', accent: '#78d5a1', eyebrow: 'AI replies & voice support · Concept' },
    caseStudy: {
      overview: 'A custom AI-agent concept for answering routine customer messages and assisting with support calls.',
      brief: 'Explore a support experience that can use business knowledge to answer common questions, while keeping escalation to a person straightforward.',
      experience: 'The proposed workspace brings customer conversations, suggested answers and call assistance together. Knowledge sources and action history remain visible, and uncertain or sensitive requests can move to a human queue.',
      features: ['Automated replies grounded in business knowledge', 'Voice support and call summaries', 'Conversation context and action history', 'Human escalation and approvals', 'Connections to existing support tools'],
      mediaNote: 'An original concept interface with a scripted demonstration conversation. Integrations and capabilities are scoped for each implementation.',
    },
  },
  {
    slug: 'eventghor', name: 'EventGhor', tags: ['Platform', 'Ticketing'], featured: true,
    image: '/projects/eventghor.svg', url: 'https://eventghor.vercel.app/', status: 'Client platform',
    summary: 'Event management, ticket sales and entry, connected.',
    mockup: { domain: 'eventghor.vercel.app', accent: '#ad99ed', eyebrow: 'Event management & ticketing' },
    caseStudy: {
      overview: 'An event management and ticketing platform for organisers and the people attending their events.',
      brief: 'Connect event setup, ticket inventory and admission in a workflow that organisers can follow from planning through event day.',
      experience: 'The preview brings event discovery, event categories and organiser tools together. The attendee journey centres on finding an event, choosing tickets and receiving the information needed for entry.',
      features: ['Event discovery and listings', 'Organiser event management', 'Ticket categories and inventory', 'Booking and ticket confirmation', 'Entry and check-in workflows'],
      mediaNote: 'Captured from the supplied preview deployment, which contains demonstration event listings. Original EventGhor artwork replaces the placeholder hero in this portfolio presentation.',
    },
  },
  {
    slug: 'showbizface', name: 'ShowbizFace', tags: ['Platform', 'Media'], featured: false,
    image: '/projects/showbizface.webp', url: 'https://www.showbizface.com', status: 'Client platform',
    summary: 'A place for entertainment professionals and production resources.',
    mockup: { domain: 'showbizface.com', accent: '#a7bcdf', eyebrow: 'Entertainment platform' },
    caseStudy: {
      overview: 'A platform connecting entertainment professionals, shared updates and resources for production.',
      brief: 'Give people working in entertainment a place to be discovered and to find the people, equipment and spaces around a production.',
      experience: 'Professional discovery sits alongside a social feed and production-resource categories. Visitors can browse people, equipment, props and venues, with account access supporting participation in the platform.',
      features: ['Professional discovery', 'Community posts and highlights', 'Equipment and props listings', 'Production venue discovery', 'Search and member accounts'],
    },
  },
  {
    slug: 'themallbd', name: 'The Mall BD', tags: ['E-commerce'], featured: false,
    image: '/projects/themallbd.webp', url: 'https://www.themallbd.com', status: 'Client platform',
    summary: 'Beauty, personal care and lifestyle shopping at scale.',
    mockup: { domain: 'themallbd.com', accent: '#d299c0', eyebrow: 'E-commerce' },
    caseStudy: {
      overview: 'A multi-category online store spanning beauty, personal care and lifestyle products.',
      brief: 'Organise a large retail catalogue around familiar shopping categories, offers and brands so customers can move between discovery and buying.',
      experience: 'Category navigation and promotional collections introduce the catalogue. Brand and product pages, wishlist actions and a shopping cart give customers several routes to the items they want.',
      features: ['Multi-category product catalogue', 'Brand and category navigation', 'Promotional collections and sales', 'Product details and wishlist', 'Cart and customer account journeys'],
    },
  },
  {
    slug: 'mark-designers', name: 'Mark Designers Ltd.', tags: ['Website'], featured: false,
    image: '/projects/markdesigners.webp', url: 'https://www.markdesignersltd.com', status: 'Client platform',
    summary: 'A digital introduction to a garment manufacturing group.',
    mockup: { domain: 'markdesignersltd.com', accent: '#bdad8a', eyebrow: 'Corporate website' },
    caseStudy: {
      overview: 'A corporate website presenting the people, manufacturing facilities and product capabilities of Mark Designers Ltd.',
      brief: 'Help prospective partners understand the group’s manufacturing capabilities and find the company information and product references they need.',
      experience: 'The site introduces the company through a visual homepage, then leads visitors into its story, facilities, products and compliance information. Downloadable company and product documents support more detailed enquiries.',
      features: ['Company story and group introduction', 'Manufacturing facility profiles', 'Product collections', 'Compliance and certification information', 'Company profile, catalogue and contact routes'],
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const showcaseProjects = projects.slice(0, 4);

export function getHomepageProjectHref(project: Project) {
  return project.contactOnly ? '/contact' : project.url;
}
