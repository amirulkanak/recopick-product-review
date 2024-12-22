module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Custom media queries screen size
      screens: {
        xs: '340px',
        tab: '834px',
        pc: '1320px',
      },
      // Custom font family
      fontFamily: {
        lato: ['"Lato"', 'sans-serif'],
      },
      // Custom colors
      colors: {
        'clr-woodsmoke': '#131313',
        'clr-paradiso': '#0E7A81',
      },
    },
  },
  plugins: [],
};
