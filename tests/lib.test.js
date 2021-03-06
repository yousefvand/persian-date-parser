/* eslint-env jest */

const data = require('./mock-data').formats
// const parser = require('../dist/node')
const parser = require('../index')

describe('library', () => {
  test('node.js', () => {
    const parse = parser()
    data.forEach(d => {
      expect(parse(d.format, d.now, true)).toBe(d.display)
      expect(parse(d.format, d.now, false)).toBe(d.display)
      // console.log(PersianDateParser.parse('pjyyyy/pjmm/pjdd pjHH:pjMM pjTT', new Date()))
    })
  })
})
