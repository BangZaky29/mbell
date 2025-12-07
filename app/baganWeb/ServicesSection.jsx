"use client"

import { Card } from "@/components/ui/card"
import "@/css/ServicesSection.css"

export default function ServicesSection() {
  const services = [
  { 
    title: "Makeup Pengantin", 
    desc: "Buat hari pernikahanmu tak terlupakan dengan makeup pengantin yang memukau", 
    icon: "👰" 
  },
  { 
    title: "Makeup Pesta", 
    desc: "Tampilan glamor untuk acara spesial dan perayaan", 
    icon: "🎉" 
  },
  { 
    title: "Makeup Wisuda", 
    desc: "Makeup segar dan elegan untuk hari pencapaian besarmu", 
    icon: "🎓" 
  },
  { 
    title: "Makeup Photoshoot", 
    desc: "Makeup profesional yang terlihat sempurna di kamera", 
    icon: "📸" 
  },
  { 
    title: "Acara Spesial", 
    desc: "Makeup khusus untuk momen spesial dalam hidupmu", 
    icon: "✨" 
  },
  { 
    title: "Kelas Makeup", 
    desc: "Pelajari teknik dan tips makeup profesional", 
    icon: "💄" 
  },
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