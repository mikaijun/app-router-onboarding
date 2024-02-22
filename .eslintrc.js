// NOTE: ESLintのルールを設定
// see: https://zenn.dev/resistance_gowy/articles/91b4f62b9f48ec#typescript-eslint

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // (A)
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // (B)
    'next/core-web-vitals',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  root: true,
}
