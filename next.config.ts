import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio de contenido: todo estático, sin datos dinámicos por request.
  cacheComponents: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
