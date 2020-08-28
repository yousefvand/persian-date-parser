/* eslint-env jest */

const data = require('./mock-data').formats
const pdp = require('../index')

test('library', () => {
  data.forEach(d => {
    expect(pdp(d.format, d.now, true)).toBe(d.display)
    expect(pdp(d.format, d.now, false)).toBe(d.display)
    // console.log(PersianDateParser.parse('pjyyyy/pjmm/pjdd pjHH:pjMM pjTT', new Date()))
  })
})
