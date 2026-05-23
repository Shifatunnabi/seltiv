import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import PortfolioPageContent from '@/components/portfolio/PortfolioPageContent';
import { projects } from '@/data/portfolio';

export const metadata = {
  title: 'Portfolio — Seltiv',
  description: 'Explore our latest work across digital development, branding, and strategic marketing.',
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <PortfolioPageContent projects={projects} />
      <Footer />
    </>
  );
}
