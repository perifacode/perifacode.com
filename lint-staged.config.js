module.exports = {
  "src/**/*.{ts,tsx}": ["prettier --write"],
  'linters': {
    '*.js': [
      'eslint'
    ],
    '**/*.+(js|json|less|css|ts|tsx|md)': [
      'prettier',
      'jest --findRelatedTests',
      'git add',
    ]
  }
}