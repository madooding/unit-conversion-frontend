/* eslint-disable prettier/prettier */
module.exports = {
  plugins: ['stylelint-scss'],
  processers: ['stylelint-processor-html'],
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-config-recommended-vue'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'string-quotes': 'single',
    'import-notation': 'url',
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'declaration-empty-line-before': null,
    'color-function-notation': 'modern',
    'at-rule-no-unknown': [ true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer', 'include', 'mixin'],
      },
    ],
    'scss/at-rule-no-unknown': [ true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer', 'include'],
      },
    ],
    'function-no-unknown': [ true,
      {
        ignoreFunctions: ['theme'],
      },
    ],
  },
}
