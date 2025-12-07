"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Instagram, Send, Phone, Calendar } from "lucide-react"
import PropTypes from "prop-types"
import "@/css/ContactSection.css"

export default function ContactSection({ handleWhatsApp }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    reservationDate: "",
    message: ""
  })

  const serviceOptions = [
    "Bridal Makeup",
    "Party Makeup",
    "Graduation Makeup",
    "Photoshoot Makeup",
    "Special Events",
    "Makeup Class"
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }))
  }

  const formatDate = (dateString) => {
    if (!dateString) return '-'
    const date = new Date(dateString)
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }
    return date.toLocaleDateString('id-ID', options)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const waMessage = `*New Booking Request from MBELL Website*

*Name:* ${formData.name || '-'}
*Email:* ${formData.email || '-'}
*Service Interested:* ${formData.service || '-'}
*Reservation Date:* ${formatDate(formData.reservationDate)}

*Message:*
${formData.message || '-'}`

    const encodedMessage = encodeURIComponent(waMessage)
    window.open(`https://wa.me/6288293473765?text=${encodedMessage}`, "_blank")

    setFormData({
      name: "",
      email: "",
      service: "",
      reservationDate: "",
      message: ""
    })
  }

  // Get today's date in YYYY-MM-DD format for min attribute
  const getTodayDate = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Ready to book your appointment? Let's create something beautiful together!
          </p>
        </div>

        <Card className="contact-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-form-field">
                <label className="contact-label">Name</label>
                <Input 
                  name="name"
                  placeholder="Your name" 
                  className="w-full"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="contact-form-field">
                <label className="contact-label">Email</label>
                <Input 
                  name="email"
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Service Interested */}
            <div className="contact-form-field">
              <label className="contact-label">Service Interested</label>
              <Select
                value={formData.service}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map(service => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Reservation Date - NEW */}
            <div className="contact-form-field">
              <label className="contact-label">Reservation Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <Input 
                  name="reservationDate"
                  type="date"
                  className="w-full pl-10"
                  value={formData.reservationDate}
                  onChange={handleInputChange}
                  min={getTodayDate()}
                />
              </div>
            </div>

            <div className="contact-form-field">
              <label className="contact-label">Message</label>
              <Textarea 
                name="message"
                placeholder="Tell me about your event..." 
                className="contact-textarea"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            <Button type="submit" size="lg" className="contact-submit-btn">
              <Send className="w-5 h-5 mr-2" />
              Send via WhatsApp
            </Button>
          </form>

          <div className="contact-info-section">
            <h3 className="contact-info-title">Connect With Me</h3>
            <div className="contact-info-grid">
              <a href="mailto:baprilian29@gmail.com" className="contact-info-item">
                <Mail className="contact-info-icon" />
                <div>
                  <p className="contact-info-label">Email</p>
                  <p className="contact-info-value">baprilian29@gmail.com</p>
                </div>
              </a>
              <a
                href="https://wa.me/6288293473765"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item"
              >
                <Phone className="contact-info-icon" />
                <div>
                  <p className="contact-info-label">WhatsApp</p>
                  <p className="contact-info-value">+62 882-9347-3765</p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/bellaaprrrr_/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item"
              >
                <Instagram className="contact-info-icon" />
                <div>
                  <p className="contact-info-label">Personal Instagram</p>
                  <p className="contact-info-value">@bellaaprrrr_</p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/mbell.makeup/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item"
              >
                <Instagram className="contact-info-icon" />
                <div>
                  <p className="contact-info-label">Brand Instagram</p>
                  <p className="contact-info-value">@mbell.makeup</p>
                </div>
              </a>
              <a
                href="https://www.tiktok.com/@bella_aprilian?lang=id-ID"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item contact-info-item-full"
              >
                <Send className="contact-info-icon" />
                <div>
                  <p className="contact-info-label">TikTok</p>
                  <p className="contact-info-value">@bella_aprilian</p>
                </div>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

ContactSection.propTypes = {
  handleWhatsApp: PropTypes.func
}