const tailwindcss = require('tailwindcss')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,css,svelte}'],
  theme: {
    colors: {
      primary: colors.amber,
      secondar: colors.slate,
      white: colors.white,
      gray: colors.stone,
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      fancy: ['Pushster', 'cursive'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp')
  ],
}
