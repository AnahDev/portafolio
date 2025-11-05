/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.githubassets.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
      },
      // Añade otros dominios según necesites
    ],
  },
};

export default nextConfig;
