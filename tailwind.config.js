module.exports = {
  content: [],
  theme: {
    extend: {},
    fontFamily: {
      'inter': ['inter', 'sans-serif'],
      'poppins': ['poppins', 'serif'],
      'space-mono': ['space-mono']
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    themes: [
      {
        rosepine: {
          "primary": "#ea9a97",
          "secondary": "#3e8fb0",
          "accent": "#eb6f92",
          "neutral": "#393552",
          "base-100": "#191724",
          "info": "#9ccfd8",
          "success": "#c4a7e7",
          "warning": "#f6c177",
          "error": "#b4637a",
        },
      },
    ],
  },
}
