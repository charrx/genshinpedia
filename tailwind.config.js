module.exports = {
  content: [
    './views/**/*.ejs',
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto']
      },
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
