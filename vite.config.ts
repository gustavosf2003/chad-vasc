import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate", // Automatically updates the service worker
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"], // Static assets for the app
      manifest: {
        name: "Dra. Amanda Vicente", // Full name of your app
        short_name: "Amanda Vicente", // Shorter name for homescreen icons
        description: "Dashboard clínico da Dra. Amanda Vicente", // App description
        theme_color: "#ffffff", // Color of the browser toolbar
        background_color: "#ffffff", // Background color for the splash screen
        display: "standalone", // Ensures it behaves like an app when installed
        scope: "/", // Defines the app's scope
        start_url: "/", // URL to open when the app is launched
        icons: [
          {
            src: "/pwa-192x192.png", // Ensure these files exist in the `public` folder
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Allows importing using "@"
    },
  },
  server: {
    port: 3000, // Local development server port
  },
  build: {
    outDir: "dist", // Ensures the build output folder is `dist`
  },
});
