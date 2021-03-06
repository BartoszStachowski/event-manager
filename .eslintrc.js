module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: ['plugin:vue/essential', 'plugin:prettier/recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    /*"prettier/prettier": ["error",{
      "endOfLine": "auto"}
    ]*/
    "prettier/prettier": ["error", {
      "useTabs": false,
      "endOfLine": 'auto',
      "arrowParens": 'avoid'
    }],

  }
};
