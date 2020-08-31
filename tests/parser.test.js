/* eslint-env jest */

const pdp = require('../lib/parser')
const data = require('./mock-data').formats

test('tokenize', () => {
  data.forEach(d => {
    expect(pdp.tokenize(d.format)).toEqual(d.tokens)
  })
})
describe('parser', () => {
  test('no cache', () => {
    const parse = pdp.parser()
    data.forEach(d => {
      expect(parse(d.format, d.now)).toBe(d.display)
    })
  })
  test('limited cache - no hit', () => {
    const parse = pdp.parser(100)
    for (let i = 0; i < 1000; i++) {
      expect(parse(`gyyyy-gm-gd ${i}`, new Date('2013-02-07T08:05:09.001'))).toBe(`2013-2-7 ${i}`)
    }
  })
  test('limited cache - hit', () => {
    const parse = pdp.parser(100)
    for (let j = 0; j < 10; j++) {
      for (let i = 0; i < 100; i++) {
        expect(parse(`gyyyy-gm-gd ${i}`, new Date('2013-02-07T08:05:09.001'))).toBe(`2013-2-7 ${i}`)
      }
    }
  })
  test('limited cache - hit - overflow', () => {
    const parse = pdp.parser(10)
    for (let j = 0; j < 20; j++) {
      for (let i = 0; i < 20; i++) {
        expect(parse(`gyyyy-gm-gd ${i}`, new Date('2013-02-07T08:05:09.001'))).toBe(`2013-2-7 ${i}`)
      }
    }
  })
  test('unlimited cache', () => {
    const parse = pdp.parser(0)
    for (let i = 0; i < 100; i++) {
      expect(parse(`gyyyy-gm-gd ${i}`, new Date('2013-02-07T08:05:09.001'))).toBe(`2013-2-7 ${i}`)
    }
  })
})
