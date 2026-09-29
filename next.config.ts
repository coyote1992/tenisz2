import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/masszazs-kopolyozes", destination: "/regeneracio", permanent: true },
      { source: "/softlaser", destination: "/regeneracio", permanent: true },
      { source: "/koredzes", destination: "/csoportos-orak#koredzes", permanent: true },
      { source: "/good-morning-club", destination: "/csoportos-orak#good-morning-club", permanent: true },
      { source: "/jelentkezes-2026-osz", destination: "/jelentkezes?program=junior", permanent: false },
      { source: "/haziverseny", destination: "/tenisz#versenyek", permanent: false },
      { source: "/verseny", destination: "/tenisz#versenyek", permanent: false },
      { source: "/tabor", destination: "/tenisz", permanent: false },
      { source: "/edzoi-allashirdetes", destination: "/kapcsolat", permanent: false },
    ];
  },
};

export default nextConfig;
