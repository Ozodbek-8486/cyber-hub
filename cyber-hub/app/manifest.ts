import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "H4CK Hub",
    short_name: "H4CK",
    description: "Zamonaviy, etik kiberxavfsizlik portal: yangiliklar, asboblar, mini CTF.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#34d399",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
