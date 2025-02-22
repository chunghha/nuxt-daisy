module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh',
        '100v': '100vh',
      },
    },
    fontFamily: {
      'inter': ['inter', 'sans-serif'],
      'poppins': ['poppins', 'serif'],
      'fira-mono': ['fira-mono'],
    },
  },
  plugins: ['@tailwindcss/typography', 'prettier-plugin-tailwindcss'],
}
