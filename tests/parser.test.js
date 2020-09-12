/* eslint-env jest */

const pdp = require('../lib/parser')
const data = require('./mock-data').formats
const cacheTypes = ['FIFO', 'LRU', undefined]

test('tokenize', () => {
  data.forEach(d => {
    expect(pdp.tokenize(d.format)).toEqual(d.tokens)
  })
})
describe('parser', () => {
  test('masks - default cache', () => {
    const parse = pdp.parser()
    data.forEach(d => {
      expect(parse(d.format, d.now)).toBe(d.display)
    })
  })
  test('limited cache - no hit', () => {
    cacheTypes.forEach(cacheType => {
      const parse = pdp.parser(100, cacheType)
      for (let i = 0; i < 1000; i++) {
        expect(parse(`gyyyy-gm-gd ${i}`, new Date('2013-02-07T08:05:09.001'))).toBe(`2013-2-7 ${i}`)
      }
    })
  })
  test('limited cache - hit', () => {
    cacheTypes.forEach(cacheType => {
      const parse = pdp.parser(100, cacheType)
      for (let j = 0; j < 10; j++) {
        for (let i = 0; i < 100; i++) {
          expect(parse(`gyyyy-gm-gd ${i}`, new Date('2013-02-07T08:05:09.001'))).toBe(`2013-2-7 ${i}`)
        }
      }
    })
  })
  test('limited cache - hit - overflow', () => {
    cacheTypes.forEach(cacheType => {
      const parse = pdp.parser(10, cacheType)
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          expect(parse(`gyyyy-gm-gd ${i}`, new Date('2013-02-07T08:05:09.001'))).toBe(`2013-2-7 ${i}`)
        }
      }
    })
  })
  test('unlimited cache', () => {
    cacheTypes.forEach(cacheType => {
      const parse = pdp.parser(0, cacheType)
      for (let i = 0; i < 100; i++) {
        expect(parse(`gyyyy-gm-gd ${i}`, new Date('2013-02-07T08:05:09.001'))).toBe(`2013-2-7 ${i}`)
      }
    })
  })
})
