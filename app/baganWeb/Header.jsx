"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import PropTypes from "prop-types"
import "@/css/Header.css"

export default function Header({ scrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMenuClick = (id) => {
    scrollToSection(id)
    setMobileMenuOpen(false)
  }

  return (
    <nav className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo">
            <Image
              src="/assets/logoBrand.png"
              alt="MBELLA"
              width={160}
              height={80}
              className="logo-image"
              priority
            />
          </div>

          <div className="header-menu-desktop">
            <button onClick={() => scrollToSection("home")} className="header-menu-item">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="header-menu-item">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="header-menu-item">
              Services
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="header-menu-item">
              Portfolio
            </button>
            <button onClick={() => scrollToSection("contact")} className="header-menu-item">
              Contact
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="header-mobile-toggle">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="header-menu-mobile">
          <div className="header-menu-mobile-content">
            <button onClick={() => handleMenuClick("home")} className="header-menu-mobile-item">
              Home
            </button>
            <button onClick={() => handleMenuClick("about")} className="header-menu-mobile-item">
              About
            </button>
            <button onClick={() => handleMenuClick("services")} className="header-menu-mobile-item">
              Services
            </button>
            <button onClick={() => handleMenuClick("portfolio")} className="header-menu-mobile-item">
              Portfolio
            </button>
            <button onClick={() => handleMenuClick("contact")} className="header-menu-mobile-item">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

// PropTypes untuk validasi props
Header.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
}
