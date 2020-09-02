import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
const version = require('./package.json').version

export default {
  input: './index.js',
  inlineDynamicImports: true,
  output: [
    {
      format: 'cjs',
      exports: 'auto',
      esModule: false,
      file: './dist/plasmoid.js',
      intro:
  `/*
    Bundled for QML from "Persian date parser v${version}"
    https://github.com/yousefvand/persian-date-parser
  */
  
  const module = {};`
    },
    {
      format: 'cjs',
      exports: 'auto',
      esModule: false,
      file: './dist/plasmoid.min.js',
      plugins: [terser()]
    },
    {
      name: 'pdp',
      format: 'umd',
      exports: 'auto',
      esModule: false,
      file: './dist/node.js'
    },
    {
      name: 'pdp',
      format: 'umd',
      exports: 'auto',
      esModule: false,
      file: './dist/node.min.js',
      plugins: [terser()]
    }
  ],
  plugins: [
    resolve(),
    commonjs()
  ]
}
