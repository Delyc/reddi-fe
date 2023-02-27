/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['encrypted-tbn0.gstatic.com', 'i.etsystatic.com', 'res.cloudinary.com']
  }
}

module.exports = nextConfig

