'use client';

import React, { useState } from 'react';
import Header from '@/app/baganWeb/Header';
import Footer from '@/app/baganWeb/Footer';
import './PortfolioGrid.css';

// Portfolio data inline
const portfolioData = {
  categories: {
    bridal: {
      name: "Bridal",
      folder: "akadTanpaSiger",
      photos: Array.from({ length: 13 }, (_, i) => ({
        id: i + 1,
        filename: `akadTanpaSiger_${String(i + 1).padStart(2, '0')}.jpg`,
        alt: `Bridal makeup look ${i + 1}`
      }))
    },
    party: {
      name: "Party",
      folder: "makeUP-akad",
      photos: Array.from({ length: 15 }, (_, i) => ({
        id: i + 14,
        filename: `akad_${String(i + 1).padStart(2, '0')}.jpg`,
        alt: `Party makeup look ${i + 1}`
      }))
    },
    natural: {
      name: "Natural",
      folder: "photo_grid",
      photos: Array.from({ length: 9 }, (_, i) => ({
        id: i + 29,
        filename: `bella_${String(i + 1).padStart(2, '0')}.jpg`,
        alt: `Natural makeup look ${i + 1}`
      }))
    }
  },
  gridPatterns: [
    'grid-item-tall',
  ]
};

export default function PortfolioGridPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Generate photos array dari JSON
  const generatePhotos = () => {
    const photos = [];
    
    Object.entries(portfolioData.categories).forEach(([categoryKey, categoryData]) => {
      categoryData.photos.forEach(photo => {
        photos.push({
          id: photo.id,
          src: `/assets/${categoryData.folder}/${photo.filename}`,
          category: categoryKey,
          alt: photo.alt
        });
      });
    });

    return photos;
  };

  const photos = generatePhotos();

  // Filter foto
  const filteredPhotos = activeFilter === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeFilter);

  // Filter buttons dari JSON
  const filterButtons = [
    { id: 'all', label: 'All' },
    ...Object.entries(portfolioData.categories).map(([key, data]) => ({
      id: key,
      label: data.name
    }))
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header scrollToSection={scrollToSection} />
      
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h1 className="portfolio-title">Portfolio</h1>
          <p className="portfolio-subtitle">Browse through my recent work</p>
        </div>

        <div className="filter-buttons">
          {filterButtons.map(btn => (
            <button 
              key={btn.id}
              className={`filter-btn ${activeFilter === btn.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(btn.id)}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="photo-grid">
          {filteredPhotos.map((photo, index) => {
            const positionClass = portfolioData.gridPatterns[index % portfolioData.gridPatterns.length];
            return (
              <div 
                key={photo.id} 
                className={`grid-item ${positionClass}`}
              >
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

      <Footer />
    </div>
  );
}