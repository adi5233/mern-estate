import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // if we create any req from frontend localhost:5731 it will go to localhost:3000
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },

  plugins: [react()],
});
