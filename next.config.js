/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Allowed origins for dev server's cross-origin requests
  // Add your LAN IP when viewing the site from another device on the network.
  // Format: include the scheme and port (e.g. "http://192.168.1.5:3000")
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://192.168.1.5:3000",
    "http://192.168.1.5",
  ],
}

module.exports = nextConfig
