/* eslint-env jest */

const data = require('./mock-data').formats
const PersianDateParser = require('../index')

test('library', () => {
  data.forEach(d => {
    expect(PersianDateParser.parse(d.format, d.now, true)).toBe(d.display)
    expect(PersianDateParser.parse(d.format, d.now, false)).toBe(d.display)
    // console.log(PersianDateParser.parse('pjyyyy/pjmm/pjdd pjHH:pjMM pjTT', new Date()))
  })
})
