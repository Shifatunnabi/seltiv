export interface Project {
  name: string;
  category: string[];
  image: string;
  url: string;
  showInHome: boolean;
}

export const projects: Project[] = [
  {
    name: "FinTrack Dashboard",
    category: ["Website Development", "SaaS"],
    image: "/clients/clay.jpg", // Placeholder until I have actual square images
    url: "https://www.google.com",
    showInHome: true,
  },
  {
    name: "Bloom E-Commerce",
    category: ["Branding", "Marketing"],
    image: "/clients/dg.jpg",
    url: "https://www.google.com",
    showInHome: true,
  },
  {
    name: "NovaMed Platform",
    category: ["Software Development"],
    image: "/clients/ecd.jpg",
    url: "https://www.google.com",
    showInHome: true,
  },
  {
    name: "GrowthOS Agency",
    category: ["Marketing", "Content"],
    image: "/clients/eventghor.jpg",
    url: "https://www.google.com",
    showInHome: true,
  },
  {
    name: "Kode Academy",
    category: ["Website Development", "Content"],
    image: "/clients/fowzia.jpg",
    url: "https://www.google.com",
    showInHome: true,
  },
  {
    name: "ArcLight Studios",
    category: ["Branding", "Website Development"],
    image: "/clients/gm.jpg",
    url: "https://www.google.com",
    showInHome: true,
  },
  {
    name: "Digital Pulse",
    category: ["Marketing"],
    image: "/clients/mdl.jpg",
    url: "https://www.google.com",
    showInHome: false,
  },
];
