import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['books.google.com'], // Adicione o domínio permitido
  },
};

export default nextConfig;
