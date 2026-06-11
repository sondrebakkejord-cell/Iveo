import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Iveo — Moderne nettsider og hosting",
    short_name: "Iveo",
    description: "Far-og-sønn-team som lager nettsider. Levert på én uke fra 1 990 kr.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafbff",
    theme_color: "#4f46e5",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    lang: "nb-NO",
    categories: ["business", "productivity"],
  };
}
