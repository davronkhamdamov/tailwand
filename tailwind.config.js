{
  import('tailwindcss').Config
}
module.exports = {
  node: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      'hero-1': '80px',
      'text-1': '16px',
      'text-2': '3px',
      'hot-2': '30px',
      'hot-3': '25px',
      'hot-4': '60px',
    },
    screens: {
      'container': '1100px',
      'xl': '1380px',
      '2xl': '1636px',
    },
    fontWeight: {
      'font-2': 700,
      'font-6': 600,
      'font-3': 500,
    },
    red: {
      DEFAULT: '#EC5757',
      light: '#FF9797',
    },
  },
  plugins: [],
}