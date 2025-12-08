import Header from '@/app/baganWeb/Header';
import Footer from '@/app/baganWeb/Footer';
import PortfolioGridClient from './portfolioClient';
import { loadPortfolioData } from "./portfolioData";
import "./PortfolioGrid.css";  // ← cara yang benar


export default function Page() {
  const portfolioData = loadPortfolioData(); // ← SERVER SIDE

  return (
    <>
      <Header />
      <PortfolioGridClient data={portfolioData} />
      <Footer />
    </>
  );
}
