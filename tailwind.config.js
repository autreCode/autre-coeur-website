/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './*.{html,js}',
  ],
  theme: {
    colors: {
      'body': '#fcfcfc',
      'code-body': '#f4f4f4',
      'code-text': '#666',
      'white': '#fff',
      'black': '#000',
      'grey': '#525a6e',
      'orange': '#c04b27',
      'selected-text': '#424242',
      'lgrey': '#b0b0b0',
      'hovering': '#e6ecd6',
      'theme': '#2b2738',
      'nav': '#9b9b9b',
      'secondary': '#121213',
      'badge': '#3f3f51',
      'input-border': '#121213',
      'input': '#2a2a35'
    },
    fontFamily: {
      'poppins': ["'Poppins'", 'sans-serif']
    }
  },
  variants: {
    extend: {},
  }
}