module.exports = {
  extends: ['taro'],
  rules: {
    'no-unused-vars': ['error', { varsIgnorePattern: 'Taro' }],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] }
    ],
    quotes: [0, 'single']
  },
  parser: 'babel-eslint',
  plugins: ['typescript']
};
