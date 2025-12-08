'use client';

import React, { useState } from 'react';
import Header from '@/app/baganWeb/Header';
import Footer from '@/app/baganWeb/Footer';
import './PortfolioGrid.css';

export default function PortfolioGridPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Konfigurasi folder dan kategori
  const photoCategories = {
    bridal: {
      folder: 'akadTanpaSiger',
      prefix: 'akadTanpaSiger',
      count: 13
    },
    party: {
      folder: 'makeUP-akad',
      prefix: 'akad',
      count: 15
    },
    natural: {
      folder: 'photo_grid',
      prefix: 'bella',
      count: 9
    }
  };

  // Generate array foto secara dinamis
  const generatePhotos = () => {
    const photos = [];
    let id = 1;

    Object.entries(photoCategories).forEach(([category, config]) => {
      for (let i = 1; i <= config.count; i++) {
        photos.push({
          id: id++,
          src: `/assets/${config.folder}/${config.prefix}_${String(i).padStart(2, '0')}.jpg`,
          category
        });
      }
    });

    return photos;
  };

  const photos = generatePhotos();

  // Filter foto
  const filteredPhotos = activeFilter === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeFilter);

  // Layout grid pattern (berulang untuk semua foto)
  const gridPattern = [
    'grid-item-tall',
  ];

  // Filter buttons config
  const filterButtons = [
    { id: 'all', label: 'All' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'party', label: 'Party' },
    { id: 'natural', label: 'Natural' }
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
            const positionClass = gridPattern[index % gridPattern.length];
            return (
              <div 
                key={photo.id} 
                className={`grid-item ${positionClass}`}
              >
                <img 
                  src={photo.src} 
                  alt={`Portfolio ${photo.category} ${photo.id}`}
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