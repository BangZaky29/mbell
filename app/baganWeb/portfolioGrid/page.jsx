import { loadPortfolioData } from "./portfolioData";
import PortfolioGridClient from "./portfolioClient";
import Header from "@/app/baganWeb/Header";
import Footer from "@/app/baganWeb/Footer";
import "./PortfolioGrid.css";

export default function Page() {
  const portfolioData = loadPortfolioData(); // server-side

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <PortfolioGridClient data={portfolioData} />

      <Footer />
    </div>
  );
}
