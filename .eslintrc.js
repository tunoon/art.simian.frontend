module.exports = {
  extends: ['taro'],
  rules: {
    'no-unused-vars': ['error', { varsIgnorePattern: 'Taro' }],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] }
    ],
    quotes: ['error', 'single'],
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-template': 'error',
    'import/prefer-default-export': 'off',
    'import/order': 'error',
    // 'import/no-default-export': ['error', 'camel-case'],
  },
  parser: 'babel-eslint',
  plugins: ['typescript']
};
