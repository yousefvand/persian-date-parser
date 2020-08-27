const JCal = require('./jcal')
const Names = require('./names')
const Utils = require('./utils')

// d - Day of the month as digits. No leading zero for single-digit days.
const gd = now => '' + now.getDate(now)
const pgd = Utils.pipe(gd, Utils.persianNumber)
const jd = now => '' + JCal.day(now)
const pjd = Utils.pipe(jd, Utils.persianNumber)

// dd - Day of the month as digits. Leading zero for single-digit days.
const gdd = now => Utils.digiPad(now.getDate(now))
const pgdd = Utils.pipe(gdd, Utils.persianNumber)
const jdd = now => Utils.digiPad(JCal.day(now))
const pjdd = Utils.pipe(jdd, Utils.persianNumber)

// ddd - Day of the week as a three-letter abbreviation. Persian -> one-letter.
const gddd = now => Names.weekDays[now.getDay()].substring(0, 3)
const pgddd = now => Names.weekDaysPingilishAbbr[now.getDay()]
const jddd = now => Names.WeekDaysFingilish[now.getDay()].substring(0, 3)
const pjddd = now => Names.persianWeekDaysAbbr[now.getDay()]

// dddd - Day of the week as its full name.
const gdddd = now => Names.weekDays[now.getDay()]
const pgdddd = now => Names.weekDaysPingilish[now.getDay()]
const jdddd = now => Names.WeekDaysFingilish[now.getDay()]
const pjdddd = now => Names.persianWeekDays[now.getDay()]

// m - Month as digits. No leading zero for single-digit months.
const gm = now => '' + (now.getMonth(now) + 1)
const pgm = Utils.pipe(gm, Utils.persianNumber)
const jm = now => '' + JCal.month(now)
const pjm = Utils.pipe(jm, Utils.persianNumber)

// mm - Month as digits. Leading zero for single-digit months.
const gmm = now => Utils.digiPad(now.getMonth(now) + 1)
const pgmm = Utils.pipe(gmm, Utils.persianNumber)
const jmm = now => Utils.digiPad(JCal.month(now))
const pjmm = Utils.pipe(jmm, Utils.persianNumber)

// mmm - Month as a three-letter abbreviation.
const gmmm = now => Names.months[now.getMonth(now)].substring(0, 3)
const pgmmm = now => Names.monthsPingilishAbbr[now.getMonth(now)].substring(0, 3)
const jmmm = now => Names.persianMonthsFingilish[JCal.month(now) - 1].substring(0, 3)
const pjmmm = now => Names.persianMonthsAbbr[JCal.month(now) - 1]

// mmmm - Month as its full name.
const gmmmm = now => Names.months[now.getMonth(now)]
const pgmmmm = now => Names.monthsPingilish[now.getMonth(now)]
const jmmmm = now => Names.persianMonthsFingilish[JCal.month(now) - 1]
const pjmmmm = now => Names.persianMonths[JCal.month(now) - 1]

// yy - Year as last two digits. Leading zero for years less than 10.
const gyy = now => ('' + now.getFullYear(now)).substring(2)
const pgyy = Utils.pipe(gyy, Utils.persianNumber)
const jyy = now => ('' + JCal.year(now)).substring(2)
const pjyy = Utils.pipe(jyy, Utils.persianNumber)

// yyyy - Year represented by four digits.
const gyyyy = now => ('' + now.getFullYear(now))
const pgyyyy = Utils.pipe(gyyyy, Utils.persianNumber)
const jyyyy = now => ('' + JCal.year(now))
const pjyyyy = Utils.pipe(jyyyy, Utils.persianNumber)

// h - Hours. No leading zero for single-digit hours (12-hour clock).
const gh = now => '' + (now.getHours(now) % 12 || 12)
const pgh = Utils.pipe(gh, Utils.persianNumber)
const jh = gh
const pjh = pgh

// hh - Hours. Leading zero for single-digit hours (12-hour clock).
const ghh = now => Utils.digiPad(now.getHours(now) % 12 || 12)
const pghh = Utils.pipe(ghh, Utils.persianNumber)
const jhh = ghh
const pjhh = pghh

// H - Hours. No leading zero for single-digit hours (24-hour clock).
const gH = now => '' + now.getHours(now)
const pgH = Utils.pipe(gH, Utils.persianNumber)
const jH = gH
const pjH = pgH

// HH - Hours. Leading zero for single-digit hours (24-hour clock).
const gHH = now => Utils.digiPad(now.getHours(now))
const pgHH = Utils.pipe(gHH, Utils.persianNumber)
const jHH = gHH
const pjHH = pgHH

// M - Minutes. No leading zero for single-digit minutes.
const gM = now => '' + now.getMinutes(now)
const pgM = Utils.pipe(gM, Utils.persianNumber)
const jM = gM
const pjM = pgM

// MM - Minutes. Leading zero for single-digit minutes.
const gMM = now => Utils.digiPad(now.getMinutes(now))
const pgMM = Utils.pipe(gMM, Utils.persianNumber)
const jMM = gMM
const pjMM = pgMM

// s - Seconds. No leading zero for single-digit seconds.
const gs = now => '' + now.getSeconds(now)
const pgs = Utils.pipe(gs, Utils.persianNumber)
const js = gs
const pjs = pgs

// ss - Seconds. Leading zero for single-digit seconds.
const gss = now => Utils.digiPad(now.getSeconds(now))
const pgss = Utils.pipe(gss, Utils.persianNumber)
const jss = gss
const pjss = pgss

// t - Lowercase, single-character time marker string: a or p.
const gt = now => now.getHours(now) < 12 ? 'a' : 'p'
const pgt = now => now.getHours(now) < 12 ? 'ق' : 'ب'
const jt = gt
const pjt = pgt

// tt - Lowercase, two-character time marker string: am or pm.
const gtt = now => now.getHours(now) < 12 ? 'am' : 'pm'
const pgtt = now => now.getHours(now) < 12 ? 'ق.ظ' : 'ب.ظ'
const jtt = gtt
const pjtt = pgtt

// T - Uppercase, single-character time marker string: A or P.
const gT = now => now.getHours(now) < 12 ? 'A' : 'P'
const pgT = now => now.getHours(now) < 12 ? 'ق' : 'ب'
const jT = gT
const pjT = pgT

// TT - Uppercase, two-character time marker string: AM or PM.
const gTT = now => now.getHours(now) < 12 ? 'AM' : 'PM'
const pgTT = now => now.getHours(now) < 12 ? 'ق.ظ' : 'ب.ظ'
const jTT = gTT
const pjTT = pgTT

module.exports = {
  gd,
  jd,
  pgd,
  pjd,
  //
  gdd,
  pgdd,
  jdd,
  pjdd,
  //
  gddd,
  pgddd,
  jddd,
  pjddd,
  //
  gdddd,
  pgdddd,
  jdddd,
  pjdddd,
  //
  gm,
  pgm,
  jm,
  pjm,
  //
  gmm,
  pgmm,
  jmm,
  pjmm,
  //
  gmmm,
  pgmmm,
  jmmm,
  pjmmm,
  //
  gmmmm,
  pgmmmm,
  jmmmm,
  pjmmmm,
  //
  gyy,
  pgyy,
  jyy,
  pjyy,
  //
  gyyyy,
  pgyyyy,
  jyyyy,
  pjyyyy,
  //
  gh,
  pgh,
  jh,
  pjh,
  //
  ghh,
  pghh,
  jhh,
  pjhh,
  //
  gH,
  pgH,
  jH,
  pjH,
  //
  gHH,
  pgHH,
  jHH,
  pjHH,
  //
  gM,
  pgM,
  jM,
  pjM,
  //
  gMM,
  pgMM,
  jMM,
  pjMM,
  //
  gs,
  pgs,
  js,
  pjs,
  //
  gss,
  pgss,
  jss,
  pjss,
  //
  gt,
  pgt,
  jt,
  pjt,
  //
  gtt,
  pgtt,
  jtt,
  pjtt,
  //
  gT,
  pgT,
  jT,
  pjT,
  //
  gTT,
  pgTT,
  jTT,
  pjTT
}
