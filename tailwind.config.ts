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
  plugins: ['@tailwindcss/typography', 'prettier-plugin-tailwindcss', 'daisyui'],
  // daisyUI config (optional)
  daisyui: {
    logs: false,
    themes: [
      {
        dawn: {
          'primary': '#d7827e',
          'secondary': '#286983',
          'accent': '#b4637a',
          'neutral': '#f2e9e1',
          'base-100': '#faf4ed',
          'info': '#56949f',
          'success': '#907aa9',
          'warning': '#ea9d34',
          'error': '#eb6f92',
        },
      },
      {
        rosepine: {
          'primary': '#ea9a97',
          'secondary': '#3e8fb0',
          'accent': '#eb6f92',
          'neutral': '#393552',
          'base-100': '#191724',
          'info': '#9ccfd8',
          'success': '#c4a7e7',
          'warning': '#f6c177',
          'error': '#b4637a',
        },
      },
    ],
  },
}
