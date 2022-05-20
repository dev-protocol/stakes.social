const lineClamp = require('@tailwindcss/line-clamp')

module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        clever: ['Clever', 'sans-serif']
      }
    }
  },
  plugins: [lineClamp]
}
