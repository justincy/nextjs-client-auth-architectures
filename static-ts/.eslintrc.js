module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['import', 'prettier', 'react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'react/prop-types': 'off',

    // We don't need to import React when using Next.js
    'react/react-in-jsx-scope': 'off',

    // Allows us to use JSX in js files
    'react/jsx-filename-extension': 'off',

    // Allows us to spread props
    'react/jsx-props-no-spreading': 'off',

    // When using Link, we specify the href on Link instead of a.
    // Link will add it to a so we leave it off. This disables
    // warnings about a not having an href in JSX.
    'jsx-a11y/anchor-is-valid': 'off',

    // Annoying
    'import/extensions': 'off',

    // We need this to get prettier working with eslint
    'prettier/prettier': ['error']
  }
};
