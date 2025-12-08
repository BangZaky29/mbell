"use client";

import { useState } from "react";

export default function PortfolioGridClient({ data }) {

  const categoryKeys = Object.keys(data.categories);
    const [activeFilter, setActiveFilter] = useState("all");


  // hanya foto dari folder aktif
  const filteredPhotos = data.categories[activeFilter].photos;

  // Pastikan ALL muncul pertama
    const orderedCategories = [
    ["all", data.categories["all"]],
    ...Object.entries(data.categories).filter(([key]) => key !== "all")
    ];

    const filterButtons = orderedCategories.map(([key, cat]) => ({
    id: key,
    label: cat.name,
    }));


  return (
    <div className="portfolio-container">

      <div className="portfolio-header">
        <h1 className="portfolio-title">Portfolio</h1>
        <p className="portfolio-subtitle">Browse through my recent work</p>
      </div>

      <div className="filter-buttons">
        {filterButtons.map((btn) => (
          <button
            key={btn.id}
            className={`filter-btn ${activeFilter === btn.id ? "active" : ""}`}
            onClick={() => setActiveFilter(btn.id)}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="photo-grid">
        {filteredPhotos.map((photo, index) => {
          const pattern = data.gridPatterns[index % data.gridPatterns.length];

          return (
            <div key={photo.id} className={`grid-item ${pattern}`}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="grid-image"
                loading="lazy"
              />

              <div className="image-overlay">
                <span className="overlay-text">{activeFilter}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
