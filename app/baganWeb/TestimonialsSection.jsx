"use client"

import { Card } from "@/components/ui/card"
import "@/css/TestimonialsSection.css"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah L.",
      text: "Bella made me feel like a princess on my wedding day. Her attention to detail is amazing!",
      rating: 5,
    },
    { 
      name: "Rina M.", 
      text: "Professional, friendly, and incredibly talented. My makeup lasted all day!", 
      rating: 5 
    },
    { 
      name: "Diana K.", 
      text: "Best makeup artist in town! The results exceeded my expectations.", 
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