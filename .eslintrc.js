module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'semi': [2, 'always'],
    'no-console': 'off',
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'no-lonely-if': 0,
    '@typescript-eslint/no-lonely-if': 0,
    '@typescript-eslint/camelcase': 'off',
  }
};
