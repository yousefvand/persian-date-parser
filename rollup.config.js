import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
const version = require('./package.json').version

export default {
  input: './lib/parser.js',
  inlineDynamicImports: true,
  output: {
    format: 'cjs',
    exports: 'auto',
    esModule: false,
    file: './dist/pdp.js',
    intro:
`/*
  Bundled for QML from "Persian date parser v${version}"
  https://github.com/yousefvand/persian-date-parser
*/
    
const module = {};`
  },
  plugins: [
    resolve(),
    commonjs()
  ]
}
