/* eslint-env jest */

const data = require('./mock-data').formats
const parser = require('../lib/parser')

describe('parser', () => {
  test('tokenize', () => {
    data.forEach(d => {
      expect(parser.tokenize(d.format)).toEqual(d.tokens)
    })
  })
  test('parse', () => {
    data.forEach(d => {
      expect(parser.parse(d.format, d.now, true)).toBe(d.display)
      expect(parser.parse(d.format, d.now, false)).toBe(d.display)
    })
  })
})
