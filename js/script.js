// ==========================================
// INITIALIZE AOS (Animate On Scroll)
// ==========================================
const AOS = window.AOS // Declare the AOS variable
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
})

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("mainNav")
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// ==========================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offset = 80
      const targetPosition = target.offsetTop - offset
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })

      // Close mobile menu if open
      const navbarCollapse = document.querySelector(".navbar-collapse")
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show")
      }
    }
  })
})

// ==========================================
// ACTIVE NAVIGATION ON SCROLL
// ==========================================
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const scrollY = window.pageYOffset

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 100
    const sectionId = section.getAttribute("id")
    const navLink = document.querySelector(`.navbar-nav a[href="#${sectionId}"]`)

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
        link.classList.remove("active")
      })
      if (navLink) {
        navLink.classList.add("active")
      }
    }
  })
})

// ==========================================
// PORTFOLIO FILTER
// ==========================================
const filterButtons = document.querySelectorAll(".filter-btn")
const portfolioItems = document.querySelectorAll(".portfolio-item")

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"))
    // Add active class to clicked button
    this.classList.add("active")

    const filterValue = this.getAttribute("data-filter")

    portfolioItems.forEach((item) => {
      if (filterValue === "all") {
        item.classList.remove("hide")
        item.style.display = "block"
      } else {
        if (item.getAttribute("data-category") === filterValue) {
          item.classList.remove("hide")
          item.style.display = "block"
        } else {
          item.classList.add("hide")
          setTimeout(() => {
            item.style.display = "none"
          }, 300)
        }
      }
    })
  })
})

// ==========================================
// CONTACT FORM HANDLING
// ==========================================
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form values
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const phone = document.getElementById("phone").value
  const service = document.getElementById("service").value
  const message = document.getElementById("message").value

  // Create WhatsApp message
  const whatsappMessage =
    `Halo MBELLA!%0A%0A` +
    `Nama: ${encodeURIComponent(name)}%0A` +
    `Email: ${encodeURIComponent(email)}%0A` +
    `Telepon: ${encodeURIComponent(phone)}%0A` +
    `Layanan: ${encodeURIComponent(service)}%0A` +
    `Pesan: ${encodeURIComponent(message)}`

  // WhatsApp number (without + and spaces)
  const whatsappNumber = "6288293473765"

  // Open WhatsApp
  window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank")

  // Show success message
  alert("Terima kasih! Anda akan diarahkan ke WhatsApp untuk melanjutkan pemesanan.")

  // Reset form
  contactForm.reset()
})

// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================
const scrollTopBtn = document.getElementById("scrollTop")

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show")
  } else {
    scrollTopBtn.classList.remove("show")
  }
})

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// ==========================================
// LOADING ANIMATION
// ==========================================
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// ==========================================
// PARALLAX EFFECT FOR HERO SECTION
// ==========================================
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallax = document.querySelector(".hero-image")
  if (parallax) {
    const parallaxSpeed = 0.5
    parallax.style.transform = `translateY(${scrolled * parallaxSpeed}px)`
  }
})

// ==========================================
// FLOATING FLOWERS ANIMATION
// ==========================================
const flowers = document.querySelectorAll(".flower")

flowers.forEach((flower, index) => {
  setInterval(
    () => {
      const randomX = Math.random() * 100
      const randomY = Math.random() * 100
      flower.style.left = randomX + "%"
      flower.style.top = randomY + "%"
    },
    15000 + index * 3000,
  )
})

// ==========================================
// COUNTER ANIMATION (for future stats section)
// ==========================================
function animateCounter(element, target, duration) {
  let start = 0
  const increment = target / (duration / 16)
  const timer = setInterval(() => {
    start += increment
    if (start >= target) {
      element.textContent = target
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(start)
    }
  }, 16)
}

// ==========================================
// TYPING EFFECT (optional for hero section)
// ==========================================
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// ==========================================
// IMAGE LAZY LOADING
// ==========================================
const images = document.querySelectorAll("img[data-src]")

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target
      img.src = img.dataset.src
      img.removeAttribute("data-src")
      observer.unobserve(img)
    }
  })
})

images.forEach((img) => imageObserver.observe(img))

// ==========================================
// TESTIMONIAL CAROUSEL AUTO PLAY (if needed)
// ==========================================
function autoPlayTestimonials() {
  const testimonials = document.querySelectorAll(".testimonial-card")
  let currentIndex = 0

  setInterval(() => {
    testimonials[currentIndex].style.opacity = "0.5"
    currentIndex = (currentIndex + 1) % testimonials.length
    testimonials[currentIndex].style.opacity = "1"
  }, 5000)
}

// ==========================================
// FORM VALIDATION
// ==========================================
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function validatePhone(phone) {
  const re = /^[\d\s\-+$$$$]+$/
  return re.test(phone)
}

// Add real-time validation
document.getElementById("email")?.addEventListener("blur", function () {
  if (!validateEmail(this.value)) {
    this.classList.add("is-invalid")
  } else {
    this.classList.remove("is-invalid")
    this.classList.add("is-valid")
  }
})

document.getElementById("phone")?.addEventListener("blur", function () {
  if (!validatePhone(this.value)) {
    this.classList.add("is-invalid")
  } else {
    this.classList.remove("is-invalid")
    this.classList.add("is-valid")
  }
})

// ==========================================
// PRELOADER (optional)
// ==========================================
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader")
  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = "0"
      setTimeout(() => {
        preloader.style.display = "none"
      }, 500)
    }, 1000)
  }
})

// ==========================================
// CONSOLE MESSAGE
// ==========================================
console.log(
  "%c👋 Welcome to MBELLA - Makeup Artistry by Bella Aprillian",
  "font-size: 16px; color: #9b8b88; font-weight: bold;",
)
console.log("%c💄 Professional Makeup Services", "font-size: 12px; color: #d4c5c2;")
console.log("%cWebsite developed with ❤️", "font-size: 10px; color: #6c6c6c;")
