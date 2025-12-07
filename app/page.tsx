"use client"

import Header from "./baganWeb/Header"
import HeroSection from "./baganWeb/HeroSection"
import AboutSection from "./baganWeb/AboutSection"
import ServicesSection from "./baganWeb/ServicesSection"
import PortfolioSection from "./baganWeb/PortfolioSection"
import TestimonialsSection from "./baganWeb/TestimonialsSection"
import ContactSection from "./baganWeb/ContactSection"
import Footer from "./baganWeb/Footer"

export default function MBellaPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/6288293473765", "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} handleWhatsApp={handleWhatsApp} />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection handleWhatsApp={handleWhatsApp} />
      <Footer />
    </div>
  )
}