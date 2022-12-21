/* eslint-disable @typescript-eslint/no-var-requires */
const prettierConfig = require('./.prettierrc.json')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/no-multiple-template-root': 'off',
    'prettier/prettier': ['error', prettierConfig],
  },
}
