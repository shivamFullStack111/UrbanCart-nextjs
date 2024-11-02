/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // Add other media types as needed
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]", // Customize output file name
          outputPath: "static/media/", // Customize output directory
        },
      },
    });
    return config;
  },
  reactStrictMode: false,
};

export default nextConfig;
