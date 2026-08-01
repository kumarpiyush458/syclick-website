import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Syclick",
    short_name: "Syclick",
    description:
      "AI-powered front desk employees for healthcare providers.",

    start_url: "/",
    scope: "/",

    display: "standalone",

    background_color: "#050816",
    theme_color: "#050816",

    orientation: "portrait",

    icons: [
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}