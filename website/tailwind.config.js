module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      textColor: {
        skin: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
        },
      },
      backgroundColor: {
        skin: {
          'fill-primary': 'var(--color-fill-primary)',
          'fill-secondary': 'var(--color-fill-secondary)',
          'button-primary': 'var(--color-button-primary)',
          'button-primary-hover': 'var(--color-button-primary-hover)',
        },
      },
      fontFamily: {
        skin: ['var(--font-family)'],
      },
    },
  },
  plugins: [],
};
