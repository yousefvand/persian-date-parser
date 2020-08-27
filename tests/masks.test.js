/* eslint-env jest */

const data = require('./mock-data').masks
const masks = require('../lib/masks')

describe('masks', () => {
  // d
  test('d', () => {
    // d - Day of the month as digits. No leading zero for single-digit days.
    data.forEach(d => {
      expect(masks.gd(d.raw)).toBe(d.gd)
      expect(masks.pgd(d.raw)).toBe(d.pgd)
      expect(masks.jd(d.raw)).toBe(d.jd)
      expect(masks.pjd(d.raw)).toBe(d.pjd)
    })
  })
  test('dd', () => {
    // dd - Day of the month as digits. Leading zero for single-digit days.
    data.forEach(d => {
      expect(masks.gdd(d.raw)).toBe(d.gdd)
      expect(masks.pgdd(d.raw)).toBe(d.pgdd)
      expect(masks.jdd(d.raw)).toBe(d.jdd)
      expect(masks.pjdd(d.raw)).toBe(d.pjdd)
    })
  })
  test('ddd', () => {
    // ddd - Day of the week as a three-letter abbreviation. Persian -> one-letter.
    data.forEach(d => {
      expect(masks.gddd(d.raw)).toBe(d.gddd)
      expect(masks.pgddd(d.raw)).toBe(d.pgddd)
      expect(masks.jddd(d.raw)).toBe(d.jddd)
      expect(masks.pjddd(d.raw)).toBe(d.pjddd)
    })
  })
  test('dddd', () => {
    // dddd - Day of the week as its full name.
    data.forEach(d => {
      expect(masks.gdddd(d.raw)).toBe(d.gdddd)
      expect(masks.pgdddd(d.raw)).toBe(d.pgdddd)
      expect(masks.jdddd(d.raw)).toBe(d.jdddd)
      expect(masks.pjdddd(d.raw)).toBe(d.pjdddd)
    })
  })
  test('m', () => {
    // m - Month as digits. No leading zero for single-digit months.
    data.forEach(d => {
      expect(masks.gm(d.raw)).toBe(d.gm)
      expect(masks.pgm(d.raw)).toBe(d.pgm)
      expect(masks.jm(d.raw)).toBe(d.jm)
      expect(masks.pjm(d.raw)).toBe(d.pjm)
    })
  })
  test('mm', () => {
    // mm - Month as digits. Leading zero for single-digit months.
    data.forEach(d => {
      expect(masks.gmm(d.raw)).toBe(d.gmm)
      expect(masks.pgmm(d.raw)).toBe(d.pgmm)
      expect(masks.jmm(d.raw)).toBe(d.jmm)
      expect(masks.pjmm(d.raw)).toBe(d.pjmm)
    })
  })
  test('mmm', () => {
    // mmm - Month as a three-letter abbreviation.
    data.forEach(d => {
      expect(masks.gmmm(d.raw)).toBe(d.gmmm)
      expect(masks.pgmmm(d.raw)).toBe(d.pgmmm)
      expect(masks.jmmm(d.raw)).toBe(d.jmmm)
      expect(masks.pjmmm(d.raw)).toBe(d.pjmmm)
    })
  })
  test('mmmm', () => {
    // mmmm - Month as its full name.
    data.forEach(d => {
      expect(masks.gmmmm(d.raw)).toBe(d.gmmmm)
      expect(masks.pgmmmm(d.raw)).toBe(d.pgmmmm)
      expect(masks.jmmmm(d.raw)).toBe(d.jmmmm)
      expect(masks.pjmmmm(d.raw)).toBe(d.pjmmmm)
    })
  })
  test('yy', () => {
    // yy - Year as last two digits. Leading zero for years less than 10.
    data.forEach(d => {
      expect(masks.gyy(d.raw)).toBe(d.gyy)
      expect(masks.pgyy(d.raw)).toBe(d.pgyy)
      expect(masks.jyy(d.raw)).toBe(d.jyy)
      expect(masks.pjyy(d.raw)).toBe(d.pjyy)
    })
  })
  test('yyyy', () => {
    // yyyy - Year represented by four digits.
    data.forEach(d => {
      expect(masks.gyyyy(d.raw)).toBe(d.gyyyy)
      expect(masks.pgyyyy(d.raw)).toBe(d.pgyyyy)
      expect(masks.jyyyy(d.raw)).toBe(d.jyyyy)
      expect(masks.pjyyyy(d.raw)).toBe(d.pjyyyy)
    })
  })
  test('h', () => {
    // h - Hours. No leading zero for single-digit hours (12-hour clock).
    data.forEach(d => {
      expect(masks.gh(d.raw)).toBe(d.gh)
      expect(masks.pgh(d.raw)).toBe(d.pgh)
      expect(masks.jh(d.raw)).toBe(d.jh)
      expect(masks.pjh(d.raw)).toBe(d.pjh)
    })
  })
  test('hh', () => {
    // hh - Hours. Leading zero for single-digit hours (12-hour clock).
    data.forEach(d => {
      expect(masks.ghh(d.raw)).toBe(d.ghh)
      expect(masks.pghh(d.raw)).toBe(d.pghh)
      expect(masks.jhh(d.raw)).toBe(d.jhh)
      expect(masks.pjhh(d.raw)).toBe(d.pjhh)
    })
  })
  test('H', () => {
    // H - Hours. No leading zero for single-digit hours (24-hour clock).
    data.forEach(d => {
      expect(masks.gH(d.raw)).toBe(d.gH)
      expect(masks.pgH(d.raw)).toBe(d.pgH)
      expect(masks.jH(d.raw)).toBe(d.jH)
      expect(masks.pjH(d.raw)).toBe(d.pjH)
    })
  })
  test('HH', () => {
    // HH - Hours. Leading zero for single-digit hours (24-hour clock).
    data.forEach(d => {
      expect(masks.gHH(d.raw)).toBe(d.gHH)
      expect(masks.pgHH(d.raw)).toBe(d.pgHH)
      expect(masks.jHH(d.raw)).toBe(d.jHH)
      expect(masks.pjHH(d.raw)).toBe(d.pjHH)
    })
  })
  test('M', () => {
    // M - Minutes. No leading zero for single-digit minutes.
    data.forEach(d => {
      expect(masks.gM(d.raw)).toBe(d.gM)
      expect(masks.pgM(d.raw)).toBe(d.pgM)
      expect(masks.jM(d.raw)).toBe(d.jM)
      expect(masks.pjM(d.raw)).toBe(d.pjM)
    })
  })
  test('MM', () => {
    // MM - Minutes. Leading zero for single-digit minutes.
    data.forEach(d => {
      expect(masks.gMM(d.raw)).toBe(d.gMM)
      expect(masks.pgMM(d.raw)).toBe(d.pgMM)
      expect(masks.jMM(d.raw)).toBe(d.jMM)
      expect(masks.pjMM(d.raw)).toBe(d.pjMM)
    })
  })
  test('s', () => {
    // s - Seconds. No leading zero for single-digit seconds.
    data.forEach(d => {
      expect(masks.gs(d.raw)).toBe(d.gs)
      expect(masks.pgs(d.raw)).toBe(d.pgs)
      expect(masks.js(d.raw)).toBe(d.js)
      expect(masks.pjs(d.raw)).toBe(d.pjs)
    })
  })
  test('ss', () => {
    // ss - Seconds. Leading zero for single-digit seconds.
    data.forEach(d => {
      expect(masks.gss(d.raw)).toBe(d.gss)
      expect(masks.pgss(d.raw)).toBe(d.pgss)
      expect(masks.jss(d.raw)).toBe(d.jss)
      expect(masks.pjss(d.raw)).toBe(d.pjss)
    })
  })
  test('t', () => {
    // t - Lowercase, single-character time marker string: a or p.
    data.forEach(d => {
      expect(masks.gt(d.raw)).toBe(d.gt)
      expect(masks.pgt(d.raw)).toBe(d.pgt)
      expect(masks.jt(d.raw)).toBe(d.jt)
      expect(masks.pjt(d.raw)).toBe(d.pjt)
    })
  })
  test('tt', () => {
    // tt - Lowercase, two-character time marker string: am or pm.
    data.forEach(d => {
      expect(masks.gtt(d.raw)).toBe(d.gtt)
      expect(masks.pgtt(d.raw)).toBe(d.pgtt)
      expect(masks.jtt(d.raw)).toBe(d.jtt)
      expect(masks.pjtt(d.raw)).toBe(d.pjtt)
    })
  })
  test('T', () => {
    // T - Uppercase, single-character time marker string: A or P.
    data.forEach(d => {
      expect(masks.gT(d.raw)).toBe(d.gT)
      expect(masks.pgT(d.raw)).toBe(d.pgT)
      expect(masks.jT(d.raw)).toBe(d.jT)
      expect(masks.pjT(d.raw)).toBe(d.pjT)
    })
  })
  test('TT', () => {
    // TT - Uppercase, two-character time marker string: AM or PM.
    data.forEach(d => {
      expect(masks.gTT(d.raw)).toBe(d.gTT)
      expect(masks.pgTT(d.raw)).toBe(d.pgTT)
      expect(masks.jTT(d.raw)).toBe(d.jTT)
      expect(masks.pjTT(d.raw)).toBe(d.pjTT)
    })
  })
})
