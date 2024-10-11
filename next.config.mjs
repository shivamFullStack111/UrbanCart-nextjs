/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.meesho.com",
      "images.bewakoof.com",
      "cdn.dummyjson.com",
      "plus.unsplash.com",
      "encrypted-tbn1.gstatic.com",
    ], // Add your external image hostnames here
    // Optionally, configure other image settings like deviceSizes, imageSizes, etc.
  },
};

export default nextConfig;
