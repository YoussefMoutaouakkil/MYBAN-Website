import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
<<<<<<< HEAD
    outDir: "dist",
=======
    outDir: "build",
>>>>>>> parent of 2d286f4 (t)
  },
  plugins: [react()],
});
