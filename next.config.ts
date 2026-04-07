const nextConfig = {
  // Tambahkan baris ini untuk memperbaiki masalah icon di Next.js 16
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.discordapp.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      {
        protocol: "https",
        hostname: "i.pinimg.com", // TAMBAHKAN INI UNTUK PINTEREST
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
