module.exports = {
  content: [
    './components/*.{html,js,ts,vue}',
    './layouts/*.{html,js,ts,vue}',
    './pages/*.{html,js,ts,vue}',
    './app.vue',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'inter': ['inter', 'sans-serif'],
      'poppins': ['poppins', 'serif'],
      'fira-mono': ['fira-mono'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('prettier-plugin-tailwindcss'),
    require('daisyui'),
  ],
  // daisyUI config (optional)
  daisyui: {
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
