module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:vue/essential', 'airbnb-base', 'plugin:prettier/recommended'],
  // settings: {
  //   'import/resolver': {
  //     alias: {
  //       map: [['@', './src']],
  //       extensions: ['.js', '.jsx', '.ts', '.tsx']
  //     }
  //   }
  // },
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {}
}
