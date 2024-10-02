/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.meesho.com", "images.bewakoof.com"], // Add your external image hostnames here
    // Optionally, configure other image settings like deviceSizes, imageSizes, etc.
  },
};

export default nextConfig;
