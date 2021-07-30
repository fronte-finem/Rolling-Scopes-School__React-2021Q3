// https://github.com/prettier/eslint-plugin-prettier#recommended-configuration

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript', 'plugin:prettier/recommended'],
  ignorePatterns: [
    '.eslintrc.js',
    'webpack.config.ts',
    'babel.config.js',
    'linaria.config.js',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
  },
};
