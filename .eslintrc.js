module.exports = {
  extends: ['next/core-web-vitals', 'alloy', 'alloy/react', 'alloy/typescript'],
  env: {
    browser: true,
  },
  globals: {},
  rules: {
    'max-params': 0,
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'max-nested-callbacks': 0,
  },
};
