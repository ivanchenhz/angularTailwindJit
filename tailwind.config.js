const colors = require('./src/style/tailwindcss/colors');

module.exports = {
  prefix: 'tw-',
  purge: ['./src/**/*.html', './src/**/*.ts'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      theme: colors.blue,

      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      pink: colors.pink,
      blue: colors.blue,
      cyan: colors.cyan,
      cobalt: colors.cobalt,
      green: colors.green,
    },
    boxShadow: {
      DEFAULT: '0 2px 4px rgba(0,0,0,0.16), 0px 1px rgba(0,0,0,0.18)',
      md: '0 4px 8px rgba(0,0,0,0.16), 0px 1px rgba(0,0,0,0.16) ',
      lg: '0 8px 16px rgba(0,0,0,0.16), 0px 1px rgba(0,0,0,0.14)',
      xl: '0 24px 48px rgba(0,0,0,0.2), 0px 1px rgba(0,0,0,0.12)',
      none: 'none',
    },
  },
};
