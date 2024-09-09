module.exports = {
    extends: 'eslint:recommended',
    rules: {
      'react/no-unknown-property': ['error', { ignore: ['className'] }],
    },
  };