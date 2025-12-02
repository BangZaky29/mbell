import type React from "react"
import type { Metadata } from "next"
// <CHANGE> Updated fonts to elegant serif and sans-serif for MBELLA brand
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  // <CHANGE> Updated metadata for MBELLA makeup artist website
  title: "MBELLA - Professional Makeup Artist | Bella Aprillian",
  description:
    "Professional makeup artist specializing in bridal, party, and special event makeup. Book your appointment with Bella Aprillian today.",
  generator: "v0.app",
  keywords: ["makeup artist", "bridal makeup", "party makeup", "Bella Aprillian", "MBELLA", "professional makeup"],
  icons: {
    shortcut: [
      { url: "/assets/logoBrand.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/logoBrand.png", sizes: "64x64", type: "image/png" },
    ],
    icon: [
      { url: "/assets/logoBrand.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/logoBrand.png", sizes: "64x64", type: "image/png" },
    ],
    apple: [
      { url: "/assets/logoBrand.png", sizes: "180x180" },
    ],
  },
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
