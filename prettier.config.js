// NOTE: prettierの詳細設定
// see: https://zenn.dev/resistance_gowy/articles/91b4f62b9f48ec#(2)prettier%E3%82%92%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB

/** @type {import('prettier').Config} */
module.exports = {
  semi: false, // セミコロン無し
  singleQuote: true, // シングルクォート使う
  printWidth: 90, // 折り返し
  tabWidth: 2, // スペースの単位
  trailingComma: 'all', // 一番後のカンマを残す
  jsxSingleQuote: true, // JSXでシングルクォートを使用
}
