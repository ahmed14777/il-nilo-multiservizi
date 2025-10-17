import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./styles/**/*.{css}", "./config/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: { ink: "#0f172a", slateish: "#F3F7FA" },
      boxShadow: { soft: "0 8px 30px rgba(0,0,0,0.06)" }
    }
  },
  plugins: []
} satisfies Config;
