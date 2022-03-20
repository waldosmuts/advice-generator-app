module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/*.html"
  ],
  theme: {
    extend: {
      colors: {
        "fem-neon-green": "hsl(150, 100%, 66%)",
        "fem-light-cyan": "hsl(193, 38%, 86%)",
        "fem-gray-blue": "hsl(217, 19%, 38%)",
        "fem-dark-gray-blue": "hsl(217, 19%, 24%)",
        "fem-dark-blue": "hsl(218, 23%, 16%)"
      },
      boxShadow: {
        'glow': '0px 0px 40px 10px rgba(82,255,168,0.76)',
      },
    },
    fontFamily: {
      "manrope": ['Manrope', 'sans-serif']
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
      "wide-af": '.45em'
    },
    fontSize: {
      'xxs': '.65rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '2/5xl': '1.75rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },
  plugins: [],
}
