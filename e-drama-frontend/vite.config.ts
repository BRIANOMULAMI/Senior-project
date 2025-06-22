// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Correct import for Tailwind CSS Vite plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // React plugin
    tailwindcss(), // Tailwind CSS plugin - MUST be inside the plugins array
  ],
});
