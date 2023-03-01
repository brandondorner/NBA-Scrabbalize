module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/prettier',
    'standard-with-typescript'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json'
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'import/order': [1, { groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'] }],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'multiline-ternary': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'prettier/prettier': 'error',
    quotes: ['error', 'single'],
    'react/react-in-jsx-scope': 'off',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true
      }
    ],
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true
      }
    ],
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off'
  }
}
