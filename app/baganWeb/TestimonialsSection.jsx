"use client"

import { Card } from "@/components/ui/card"
import "@/css/TestimonialsSection.css"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah L.",
      text: "Bella membuat saya merasa seperti putri di hari pernikahan saya. Perhatiannya terhadap detail luar biasa!",
      rating: 5,
    },
    { 
      name: "Rina M.", 
      text: "Profesional, ramah, dan sangat berbakat. Makeup saya bertahan sepanjang hari!", 
      rating: 5 
    },
    { 
      name: "Diana K.", 
      text: "Makeup artist terbaik di kota! Hasilnya melebihi ekspektasi saya.", 
      rating: 5 
    },
  ]

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Client Reviews</h2>
          <p className="testimonials-subtitle">What my clients say about their experience</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="testimonial-star">⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-name">— {testimonial.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
