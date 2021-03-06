module.exports = {
  extends: [
    'taro',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  rules: {
    'no-unused-vars': ['error', { varsIgnorePattern: 'Taro' }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: 'Taro' }
    ],
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx', '.tsx'] }
    ],
    quotes: ['error', 'single'],
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-template': 'error',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    'import/no-named-as-default': 'off',
    'import/order': 'error',
    'import/first': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ]
  },
  parser: '@typescript-eslint/parser',
  plugins: ['typescript', '@typescript-eslint']
};
