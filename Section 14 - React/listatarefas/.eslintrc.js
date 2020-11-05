/* eslint-disable key-spacing */
/* eslint-disable quotes */
module.exports = {
  env: {
    browser: true,
    2018: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],

  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],

  rules: {
    // eslint-disable-next-line comma-dangle
    "react/jsx-filename-estension": 0,
    // eslint-disable-next-line comma-dangle
    "react/state-in-constructor": 0
  },
};
