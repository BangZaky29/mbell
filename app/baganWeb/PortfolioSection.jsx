"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import "@/css/PortfolioSection.css"

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("akad tanpa siger")
  const router = useRouter()

  const portfolioItems = [
  // === Akad Tanpa Siger ===
  { id: 1, category: "akad tanpa siger", image: "/assets/akadTanpaSiger/akadTanpaSiger_03.jpg" },
  { id: 2, category: "akad tanpa siger", image: "/assets/akadTanpaSiger/akadTanpaSiger_03.jpg" },
  { id: 3, category: "akad tanpa siger", image: "/assets/akadTanpaSiger/akadTanpaSiger_10.jpg" },
  { id: 4, category: "akad tanpa siger", image: "/assets/akadTanpaSiger/akadTanpaSiger_06.jpg" },
  { id: 5, category: "akad tanpa siger", image: "/assets/akadTanpaSiger/akadTanpaSiger_07.jpg" },
  { id: 6, category: "akad tanpa siger", image: "/assets/akadTanpaSiger/akadTanpaSiger_12.jpg" },

  // === Bridesmaid ===
  { id: 6, category: "bridesmaid", image: "/assets/Bridesmaid/Bridesmaid_01.jpg" },
  { id: 7, category: "bridesmaid", image: "/assets/Bridesmaid/Bridesmaid_02.jpg" },
  { id: 8, category: "bridesmaid", image: "/assets/Bridesmaid/Bridesmaid_03.jpg" },
  { id: 9, category: "bridesmaid", image: "/assets/Bridesmaid/Bridesmaid_04.jpg" },
  { id: 10, category: "bridesmaid", image: "/assets/Bridesmaid/Bridesmaid_05.jpg" },

  // === Lamaran ===
  { id: 11, category: "lamaran", image: "/assets/Lamaran/Lamaran_03.jpg" },
  { id: 12, category: "lamaran", image: "/assets/Lamaran/Lamaran_04.jpg" },
  { id: 13, category: "lamaran", image: "/assets/Lamaran/Lamaran_06.jpg" },

  // === Akad ===
  { id: 14, category: "akad", image: "/assets/makeUP-akad/akad_01.jpg" },
  { id: 15, category: "akad", image: "/assets/makeUP-akad/akad_02.jpg" },
  { id: 16, category: "akad", image: "/assets/makeUP-akad/akad_03.jpg" },
  { id: 17, category: "akad", image: "/assets/makeUP-akad/akad_05.jpg" },
  { id: 18, category: "akad", image: "/assets/makeUP-akad/akad_07.jpg" },

  // === Pesta ===
  { id: 19, category: "pesta", image: "/assets/pesta/pesta_02.jpg" },
  { id: 20, category: "pesta", image: "/assets/pesta/pesta_04.jpg" },
  { id: 21, category: "pesta", image: "/assets/pesta/pesta_06.jpg" },
  { id: 22, category: "pesta", image: "/assets/pesta/pesta_08.jpg" },

  // === Natural (ambil dari photo_grid) ===
  { id: 23, category: "natural", image: "/assets/photo_grid/bella_01.jpg" },
  { id: 24, category: "natural", image: "/assets/photo_grid/bella_06.jpg" },
  { id: 25, category: "natural", image: "/assets/photo_grid/bella_07.jpg" },

  // === Pre Wedding ===
  { id: 26, category: "pre wedding", image: "/assets/preWedding/preWedding_01.jpg" },
  { id: 27, category: "pre wedding", image: "/assets/preWedding/preWedding_02.jpg" },
  { id: 28, category: "pre wedding", image: "/assets/preWedding/preWedding_03.JPG" },
  { id: 29, category: "pre wedding", image: "/assets/preWedding/preWedding_04.JPG" },

  // === Siraman ===
  { id: 30, category: "siraman", image: "/assets/siraman/siraman_01.jpg" },
  { id: 31, category: "siraman", image: "/assets/siraman/siraman_02.jpg" },
  { id: 32, category: "siraman", image: "/assets/siraman/siraman_03.jpg" },
  { id: 33, category: "siraman", image: "/assets/siraman/siraman_04.jpg" },

  // === Wisuda ===
  { id: 34, category: "wisuda", image: "/assets/wisuda/wisuda_01.jpg" },
  { id: 35, category: "wisuda", image: "/assets/wisuda/wisuda_02.jpg" },
  { id: 36, category: "wisuda", image: "/assets/wisuda/wisuda_03.jpg" },
  { id: 37, category: "wisuda", image: "/assets/wisuda/wisuda_04.jpg" },
];


  const filteredPortfolio = portfolioItems.filter(
    (item) => item.category === activeFilter
  );

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="portfolio-title">Portfolio</h2>
          <p className="portfolio-subtitle">Browse through my recent work</p>

          <div className="portfolio-filters">
            {[
              "akad tanpa siger",
              "akad",
              "natural",
              "pesta",
              "wisuda",
              "pre wedding",
              "siraman",
              "lamaran",
              "bridesmaid",
            ].map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? "default" : "outline"}
                className="portfolio-filter-btn capitalize"
              >
                {filter}
              </Button>
            ))}
          </div>

        </div>

        <div className="portfolio-grid">
          {filteredPortfolio.map((item) => (
            <div key={item.id} className="portfolio-item">
              <img
                src={item.image || "/placeholder.svg"}
                alt={`Portfolio ${item.id}`}
                className="portfolio-image"
              />
              <div className="portfolio-overlay" />
            </div>
          ))}
        </div>
        
        <div className="portfolio-seemore-container">
          <Button
            onClick={() => router.push('/baganWeb/portfolioGrid')}
            variant="default"
            className="portfolio-seemore-btn"
          >
            see more portfolio..
          </Button>
        </div>
      </div>
    </section>
  )
}