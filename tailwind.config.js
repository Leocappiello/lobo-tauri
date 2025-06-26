/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Esto es clave para detectar clases en tus archivos
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',
      },
    },
  },
  plugins: [],
}
