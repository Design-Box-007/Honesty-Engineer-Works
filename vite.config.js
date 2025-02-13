import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/HonestyEngineeringWorks/", // Set base path
  build: {
    outDir: "dist"
  }
});
