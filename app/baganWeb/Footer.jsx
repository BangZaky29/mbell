"use client"

import Image from "next/image"
import { Sparkles } from "lucide-react"
import "@/css/Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <Sparkles className="footer-sparkle" />
          <Image 
            src="/assets/logoBrand.png" 
            alt="MBELLA"
            width={520}
            height={260}
            className="footer-logo"
            priority
          />
          <span className="sr-only">MBELLA</span>
        </div>

        <p className="footer-text-main">
          Professional Makeup Artist • Bella Aprillian
        </p>
        <p className="footer-text-copyright">
          © 2025 MBELLA. All rights reserved.
        </p>
      </div>
    </footer>
  )
}