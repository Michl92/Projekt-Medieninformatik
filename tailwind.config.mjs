/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Die exakten Bonjwa-Farben für das Branding
        bonjwa: {
          green: '#1E9761',     // Das Haupt-Blau
          dark: '#0F5636',     // Hintergrund
          orange: '#ff8a00',   // Akzentfarbe für CTAs und Highlights
          accent: '#2BE994',   // Glow-Effekte
        },
      },
      fontFamily: {
        // 'Orbitron' ist ein Klassiker für Gaming/Sci-Fi Headlines
        // 'Inter' ist extrem sauber für Lesetext (Markdown Body)
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        // Ein spezieller "Glow"-Effekt für deine Kacheln
        'blue-glow': '0 0 15px rgba(0, 85, 170, 0.4)',
        'orange-glow': '0 0 20px rgba(255, 138, 0, 0.5)',
      },
    },
  },
  plugins: [
    // Das Typography-Plugin ist ESSENZIELL für Markdown-Inhalte
    require('@tailwindcss/typography'),
  ],
}