// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://piotrekpkp.github.io",
  base: "/stare-powazki-docs",
  integrations: [
    starlight({
      title: "Stare Powązki",
      favicon: "/favicon.ico",
      customCss: ["./src/styles/powazki.css"],
      defaultLocale: "pl",
      locales: {
        root: {
          label: "Polski",
          lang: "pl",
        },
      },
      logo: {
        light: "./src/assets/logo-black.svg",
        dark: "./src/assets/logo-white.svg",
      },
      components: {
        Footer: "./src/components/Footer.astro",
      },
    }),
  ],
});
