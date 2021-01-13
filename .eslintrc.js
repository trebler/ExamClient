const path = require('path');

module.exports = {
  root: true,
  env: {
    commonjs: true
  },
  plugins: [
    '@typescript-eslint',
    'vue'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:vue/vue3-recommended',

    "plugin:prettier/recommended",
    'prettier/@typescript-eslint',
    'prettier/vue'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
    '@typescript-eslint/no-empty-function': ['warn'],
    eqeqeq: 'warn'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    project: path.resolve(__dirname, 'tsconfig.json'),
    extraFileExtensions: ['.vue']
  }
};
