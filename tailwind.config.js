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
        mona: ['"Mona Sans"', 'serif'],
      },
      // Custom colors
      colors: {
        'clr-primary': '#2E5077',
        'clr-primary-text': '#1a2637',
        'clr-secondary': '#4DA1A9',
        'clr-accent': '#79D7BE',
        'clr-neutral': '#F6F4F0',
      },
      backgroundImage: {
        'add-queries-bg': "url('/images/review-illustrator.png')", // Replace with your image path
      },
    },
  },
  plugins: [],
};
