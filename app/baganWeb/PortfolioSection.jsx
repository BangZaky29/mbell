"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import "@/css/PortfolioSection.css"

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const router = useRouter()

  const portfolioItems = [
    { id: 1, category: "bridal", image: "/assets/photo_grid/bella_01.jpg" },
    { id: 2, category: "party", image: "/assets/photo_grid/bella_02.jpg" },
    { id: 3, category: "natural", image: "/assets/photo_grid/bella_07.jpg" },
    { id: 4, category: "bridal", image: "/assets/photo_grid/bella_08.jpg" },
    { id: 5, category: "glam", image: "/assets/photo_grid/bella_09.jpg" },
    { id: 6, category: "natural", image: "/assets/photo_grid/bella_06.jpg" },
  ]

  const filteredPortfolio =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="portfolio-title">Portfolio</h2>
          <p className="portfolio-subtitle">Browse through my recent work</p>

          <div className="portfolio-filters">
            {["all", "bridal", "party", "natural", "glam"].map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? "default" : "outline"}
                className="portfolio-filter-btn"
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