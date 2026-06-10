export interface Project {
  name: string;
  category: string[];
  image: string;
  url: string;
  showInHome: boolean;
}

export const projects: Project[] = [
  {
    name: "The Mall BD",
    category: ["Website Development", "SaaS"],
    image: "/clients/themall.jpg", // Placeholder until I have actual square images
    url: "https://www.themallbd.com",
    showInHome: true,
  },
  {
    name: "ShowbizFace",
    category: ["Website Development", "Marketing"],
    image: "/clients/showbizface.jpg", // Placeholder until I have actual square images
    url: "https://www.showbizface.com",
    showInHome: true,
  },
  {
    name: "Joytoy",
    category: ["Branding", "Website Development"],
    image: "/clients/joytoy.jpg",
    url: "https://joytoy.vercel.app",
    showInHome: true,
  },
  {
    name: "Alimento",
    category: ["Branding", "Website Development"],
    image: "/clients/alimento.jpg",
    url: "https://alimento-theta.vercel.app",
    showInHome: true,
  },
  {
    name: "Bangladesh ECD Network",
    category: ["Website Development"],
    image: "/clients/ecd.jpg",
    url: "https://www.ben-ecd.net",
    showInHome: false,
  },
  {
    name: "Directors Guild",
    category: ["Branding", "Website Development"],
    image: "/clients/dg.jpg",
    url: "https://www.directorsguildbd.com/",
    showInHome: true,
  },
  {
    name: "Eventghor",
    category: ["Website Development", "Content", "Marketing"],
    image: "/clients/eventghor.jpg",
    url: "https://www.eventghor.com",
    showInHome: false,
  },
  {
    name: "Fowzia Foods",
    category: ["Website Development", "Content", "Marketing"],
    image: "/clients/fowzia.jpg",
    url: "https://www.fowzianomzz.com/",
    showInHome: false,
  },
  {
    name: "Goldmark",
    category: ["Branding", "Website Development"],
    image: "/clients/gm.jpg",
    url: "https://www.ranifood.com.bd/",
    showInHome: false,
  },
  {
    name: "Mark Designers Ltd.",
    category: ["Branding", "Website Development"],
    image: "/clients/mdl.jpg",
    url: "https://markdesigners.vercel.app",
    showInHome: true,
  },
  {
    name: "Planetary Health Academia",
    category: ["Branding", "Website Development"],
    image: "/clients/pha.jpg",
    url: "https://www.planetaryhealthacademia.org/",
    showInHome: false,
  },
  {
    name: "Swindon Home Removals",
    category: ["Branding", "Website Development"],
    image: "/clients/swindon.jpg",
    url: "https://www.swindonhomeremovals.com",
    showInHome: false,
  },
  {
    name: "Tanin Furniture",
    category: ["Branding", "Website Development"],
    image: "/clients/tanin.jpg",
    url: "https://tanin-group.vercel.app/",
    showInHome: false,
  },
];
