"use client"

import { Button } from "@/components/ui/button"
import PropTypes from "prop-types"
import "@/css/HeroSection.css"

export default function HeroSection({ scrollToSection, handleWhatsApp }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-flowers">
        <div className="flower-float flower-1">🌸</div>
        <div className="flower-float-delay-1 flower-2">💐</div>
        <div className="flower-float-delay-2 flower-3">🌺</div>
        <div className="flower-float flower-4">🌷</div>
        <div className="flower-float-delay-1 flower-5">🌹</div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your Beauty
          </h1>
          <p className="hero-subtitle">Professional Makeup Artist</p>
          <p className="hero-name">Bella Aprillian</p>
          <div className="hero-buttons">
            <Button onClick={handleWhatsApp} size="lg" className="hero-button-primary">
              Book Appointment
            </Button>
            <Button onClick={() => scrollToSection("portfolio")} variant="outline" size="lg" className="hero-button-secondary">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// PropTypes untuk validasi props
HeroSection.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
  handleWhatsApp: PropTypes.func.isRequired,
}
