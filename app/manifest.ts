import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vargas Trade LLC",
    short_name: "Vargas Trade",
    description:
      "Vargas Trade LLC — comercio electrónico y coordinación de operaciones digitales.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0b2d5c",
    icons: [
      { src: "/logo/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/logo/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
