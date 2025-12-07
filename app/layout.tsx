import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "MBELL - Professional Makeup Artist | Bella Aprillian",
  description:
    "Professional makeup artist specializing in bridal, party, and special event makeup. Book your appointment with Bella Aprillian today.",
  generator: "v0.app",
  keywords: ["makeup artist", "bridal makeup", "party makeup", "Bella Aprillian", "MBELL", "professional makeup"],
  icons: {
    // Gunakan logo yang sudah ada
    icon: [
      { url: "/assets/logoBrand.png", sizes: "any" },
    ],
    shortcut: ["/assets/logoBrand.png"],
    apple: [
      { url: "/assets/logoBrand.png", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
}

// Pindahkan themeColor ke viewport export (Next.js 14+)
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1f1f1f" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}