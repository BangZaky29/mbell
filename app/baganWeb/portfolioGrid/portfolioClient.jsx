"use client";

import { useState } from "react";

export default function PortfolioGridClient({ data }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const allPhotos = Object.entries(data.categories).flatMap(([key, cat]) =>
    cat.photos.map((photo) => ({
      ...photo,
      category: key,
    }))
  );

  const filteredPhotos =
    activeFilter === "all"
      ? allPhotos
      : allPhotos.filter((p) => p.category === activeFilter);

  const filterButtons = [
    { id: "all", label: "All" },
    ...Object.entries(data.categories).map(([key, cat]) => ({
      id: key,
      label: cat.name,
    })),
  ];

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
            className={`filter-btn ${
              activeFilter === btn.id ? "active" : ""
            }`}
            onClick={() => setActiveFilter(btn.id)}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="photo-grid">
        {filteredPhotos.map((photo, index) => {
          const pattern =
            data.gridPatterns[index % data.gridPatterns.length];

          return (
            <div key={photo.id} className={`grid-item ${pattern}`}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="grid-image"
                loading="lazy"
              />

              <div className="image-overlay">
                <span className="overlay-text">{photo.category}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
