"use client"

import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import "@/css/AboutSection.css"

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          {/* Gambar profil Bella */}
          <div className="about-image-wrapper">
            <img
              src="/assets/photo_grid/bella_01.jpg"
              alt="Bella Aprillian"
              className="about-image"
            />
          </div>

          {/* Konten deskripsi tentang Bella */}
          <div className="about-content">
            <h2 className="about-title">About Me</h2>
            <p className="about-text">
              Selamat datang di MBELL! Saya Bella Aprillian, seorang makeup artist yang berdedikasi untuk 
              menonjolkan kecantikan alami Anda dan membuat Anda merasa percaya diri di setiap momen spesial dalam hidup Anda.
            </p>
            <p className="about-text">
              Dengan pengalaman bertahun-tahun dalam makeup pengantin, acara spesial, dan pemotretan profesional, 
              saya mengkhususkan diri dalam menciptakan tampilan yang timeless sekaligus modern. Setiap wajah memiliki cerita unik, 
              dan saya di sini untuk membuat Anda bersinar di hari-hari terpenting Anda.
            </p>
            <p className="about-text">
              Pendekatan saya menggabungkan teknik profesional dengan sentuhan personal, 
              memastikan Anda tidak hanya tampil cantik tetapi juga merasa luar biasa.
            </p>

            {/* Tombol Instagram */}
            <div className="about-button-wrapper">
              <a 
                href="https://www.instagram.com/mbell.makeup/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  <Instagram className="w-5 h-5 mr-2" />
                  Follow @mbell.makeup_
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
