module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // より厳しいルールにするには`plugin:vue/strongly-recommended` もしくは `plugin:vue/recommended` に切り替えることを検討してください。
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
    // 'plugin:vue/essential'
    // 'eslint:standard'
  ],
  // *.vue files を lint にかけるために必要
  plugins: [
    'vue'
  ],
  // ここにカスタムルールを追加します。
  rules: {
    'semi': [2, 'never'],
    'quotes': [1, 'single'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    // https://prettier.io/docs/en/options.html のオプションを指定できる
    'prettier/prettier': ['error', { 'semi': false , "singleQuote": true}]
  }
}
