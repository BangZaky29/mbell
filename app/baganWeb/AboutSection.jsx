"use client"

import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import "@/css/AboutSection.css"

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img
              src="/assets/photo_grid/bella_01.jpg"
              alt="Bella Aprillian"
              className="about-image"
            />
          </div>
          <div className="about-content">
            <h2 className="about-title">About Bella</h2>
            <p className="about-text">
              Welcome to MBELL! I'm Bella Aprillian, a passionate makeup artist dedicated to enhancing your natural
              beauty and making you feel confident for every special moment in your life.
            </p>
            <p className="about-text">
              With years of experience in bridal makeup, special events, and professional photoshoots, I specialize in
              creating looks that are both timeless and modern. Every face tells a unique story, and I'm here to help
              you shine on your most important days.
            </p>
            <p className="about-text">
              My approach combines professional techniques with a personal touch, ensuring that you not only look
              beautiful but feel amazing too.
            </p>
            <div className="about-button-wrapper">
              <a href="https://www.instagram.com/mbell.makeup/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <Instagram className="w-5 h-5 mr-2" />
                  Follow mbell.makeup
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}