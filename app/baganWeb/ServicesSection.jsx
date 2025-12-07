"use client"

import { Card } from "@/components/ui/card"
import "@/css/ServicesSection.css"

export default function ServicesSection() {
  const services = [
    { title: "Bridal Makeup", desc: "Make your wedding day unforgettable with stunning bridal makeup", icon: "👰" },
    { title: "Party Makeup", desc: "Glamorous looks for special occasions and celebrations", icon: "🎉" },
    { title: "Graduation Makeup", desc: "Fresh and elegant makeup for your big achievement day", icon: "🎓" },
    { title: "Photoshoot Makeup", desc: "Professional makeup that looks perfect on camera", icon: "📸" },
    { title: "Special Events", desc: "Custom makeup for any special moment in your life", icon: "✨" },
    { title: "Makeup Class", desc: "Learn professional makeup techniques and tips", icon: "💄" },
  ]

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">My Services</h2>
          <p className="services-subtitle">
            Professional makeup services tailored to your needs and style
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <Card key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}