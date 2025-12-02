"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Menu, X, Mail, Instagram, Send, Phone } from "lucide-react"

export default function MBellaPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    { title: "Bridal Makeup", desc: "Make your wedding day unforgettable with stunning bridal makeup", icon: "👰" },
    { title: "Party Makeup", desc: "Glamorous looks for special occasions and celebrations", icon: "🎉" },
    { title: "Graduation Makeup", desc: "Fresh and elegant makeup for your big achievement day", icon: "🎓" },
    { title: "Photoshoot Makeup", desc: "Professional makeup that looks perfect on camera", icon: "📸" },
    { title: "Special Events", desc: "Custom makeup for any special moment in your life", icon: "✨" },
    { title: "Makeup Class", desc: "Learn professional makeup techniques and tips", icon: "💄" },
  ]

  const portfolioItems = [
    { id: 1, category: "bridal", image: "/assets/photo_grid/bella_01.jpg" },
    { id: 2, category: "party", image: "/assets/photo_grid/bella_02.jpg" },
    { id: 3, category: "natural", image: "/assets/photo_grid/bella_07.jpg" },
    { id: 4, category: "bridal", image: "/assets/photo_grid/bella_08.jpg" },
    { id: 5, category: "glam", image: "/assets/photo_grid/bella_09.jpg" },
    { id: 6, category: "natural", image: "/assets/photo_grid/bella_06.jpg" },
  ]

  const testimonials = [
    {
      name: "Sarah L.",
      text: "Bella made me feel like a princess on my wedding day. Her attention to detail is amazing!",
      rating: 5,
    },
    { name: "Rina M.", text: "Professional, friendly, and incredibly talented. My makeup lasted all day!", rating: 5 },
    { name: "Diana K.", text: "Best makeup artist in town! The results exceeded my expectations.", rating: 5 },
  ]

  const filteredPortfolio =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/6288293473765", "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Floating Flowers */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="flower-float absolute top-20 left-10 text-4xl opacity-20">🌸</div>
        <div className="flower-float-delay-1 absolute top-40 right-20 text-3xl opacity-20">💐</div>
        <div className="flower-float-delay-2 absolute bottom-40 left-20 text-4xl opacity-20">🌺</div>
        <div className="flower-float absolute top-60 right-40 text-3xl opacity-20">🌷</div>
        <div className="flower-float-delay-1 absolute bottom-20 right-10 text-4xl opacity-20">🌹</div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-40">
            <div className="flex items-center gap-0">
                <Sparkles className="w-10 h-10 text-accent" />
              <div className="flex items-center">
                <Image
                  src="/assets/logoBrand.png"
                  alt="MBELLA"
                  width={640}
                  height={260}
                  className="h-32 md:h-36 lg:h-44 object-contain -ml-2"
                  priority
                />
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-accent transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-accent transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-accent transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-foreground hover:text-accent transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-accent transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-foreground">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left py-2 text-foreground hover:text-accent"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 text-foreground hover:text-accent"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left py-2 text-foreground hover:text-accent"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block w-full text-left py-2 text-foreground hover:text-accent"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 text-foreground hover:text-accent"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              Transform Your Beauty
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4">Professional Makeup Artist</p>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-accent mb-8">Bella Aprillian</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleWhatsApp} size="lg" className="text-lg px-8">
                Book Appointment
              </Button>
              <Button onClick={() => scrollToSection("portfolio")} variant="outline" size="lg" className="text-lg px-8">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/assets/photo_grid/bella_01.jpg"
                alt="Bella Aprillian"
                className="rounded-lg shadow-2xl w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">About Bella</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Welcome to MBELLA! I'm Bella Aprillian, a passionate makeup artist dedicated to enhancing your natural
                beauty and making you feel confident for every special moment in your life.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With years of experience in bridal makeup, special events, and professional photoshoots, I specialize in
                creating looks that are both timeless and modern. Every face tells a unique story, and I'm here to help
                you shine on your most important days.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My approach combines professional techniques with a personal touch, ensuring that you not only look
                beautiful but feel amazing too.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/mbell.makeup/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    <Instagram className="w-5 h-5 mr-2" />
                    Follow MBELLA
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">My Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional makeup services tailored to your needs and style
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Portfolio</h2>
            <p className="text-lg text-muted-foreground mb-8">Browse through my recent work</p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {["all", "bridal", "party", "natural", "glam"].map((filter) => (
                <Button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  variant={activeFilter === filter ? "default" : "outline"}
                  className="capitalize"
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={`Portfolio ${item.id}`}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Client Reviews</h2>
            <p className="text-lg text-muted-foreground">What my clients say about their experience</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-card border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <p className="font-bold text-foreground">— {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Ready to book your appointment? Let's create something beautiful together!
            </p>
          </div>

          <Card className="p-8 sm:p-12 bg-card border-border">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <Input placeholder="Your name" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" className="w-full" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Service Interested</label>
                <Input placeholder="e.g., Bridal Makeup" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <Textarea placeholder="Tell me about your event..." className="w-full h-32" />
              </div>
              <Button onClick={handleWhatsApp} type="button" size="lg" className="w-full text-lg">
                <Send className="w-5 h-5 mr-2" />
                Send via WhatsApp
              </Button>
            </form>

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-bold text-foreground text-xl mb-6 text-center">Connect With Me</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="mailto:baprilian29@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted hover:bg-accent/10 transition-colors"
                >
                  <Mail className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">baprilian29@gmail.com</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/6288293473765"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted hover:bg-accent/10 transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-medium text-foreground">+62 882-9347-3765</p>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/bellaaprrrr_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted hover:bg-accent/10 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Personal Instagram</p>
                    <p className="font-medium text-foreground">@bellaaprrrr_</p>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/mbell.makeup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted hover:bg-accent/10 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Brand Instagram</p>
                    <p className="font-medium text-foreground">@mbell.makeup</p>
                  </div>
                </a>
                <a
                  href="https://www.tiktok.com/@bella_aprilian?lang=id-ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted hover:bg-accent/10 transition-colors sm:col-span-2"
                >
                  <Send className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">TikTok</p>
                    <p className="font-medium text-foreground">@bella_aprilian</p>
                  </div>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8" />
            <div className="flex items-center">
              <Image
                src="/assets/logoBrand.png"
                alt="MBELLA"
                width={520}
                height={260}
                className="h-28 md:h-32 lg:h-36 object-contain mx-auto"
                priority
              />
            </div>
            <span className="sr-only">MBELLA</span>
          </div>
          <p className="text-black mb-4">Professional Makeup Artist • Bella Aprillian</p>
          <p className="text-sm text-black">© 2025 MBELLA. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes floatAnimation {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        .flower-float {
          animation: floatAnimation 6s ease-in-out infinite;
        }
        .flower-float-delay-1 {
          animation: floatAnimation 7s ease-in-out infinite;
          animation-delay: 1s;
        }
        .flower-float-delay-2 {
          animation: floatAnimation 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
