module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import', 'unused-imports'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          // ここに書いた順序で間に1行空行をあけつつ整頓される
          { pattern: 'src/components/**', group: 'internal', position: 'before' },
          { pattern: 'src/pages/**', group: 'internal', position: 'before' },
          { pattern: 'src/repositories/**', group: 'internal', position: 'before' },
          { pattern: 'src/types/**', group: 'internal', position: 'before' },
          { pattern: 'src/utils/**', group: 'internal', position: 'before' },
          // styles
          // 最後尾にしたいのでgroupをindex扱いにする
          { pattern: './**.module.scss', group: 'index', position: 'before' },
        ],
      },
    ],
  },
};
