// tokenizer & parser mock data
const formats = [
  {
    format: 'gdd-gmm:gyy+-+gHH|gMM.gss',
    tokens: ['gdd', '-', 'gmm', ':', 'gyy', '+', '-', '+', 'gHH', '|', 'gMM', '.', 'gss'],
    now: new Date('2015-08-09T07:03:08.006'),
    display: '09-08:15+-+07|03.08'
  },
  {
    format: 'pgyyyy-A-pgmmmm::pjmmmm=pjdd',
    tokens: ['pgyyyy', '-', 'A', '-', 'pgmmmm', ':', ':', 'pjmmmm', '=', 'pjdd'],
    now: new Date('2015-09-02T07:03:08.006'),
    display: '۲۰۱۵-A-سپتامبر::شهریور=۱۱'
  }
]

const masks = [
  {
    raw: new Date('2020-08-26T03:27:49.669'),
    gd: '26',
    pgd: '۲۶',
    jd: '5',
    pjd: '۵',
    //
    gdd: '26',
    pgdd: '۲۶',
    jdd: '05',
    pjdd: '۰۵',
    //
    gddd: 'Wed',
    pgddd: 'ونز',
    jddd: 'Cha',
    pjddd: 'چ',
    //
    gdddd: 'Wednesday',
    pgdddd: 'ونزدی',
    jdddd: 'CharShanbe',
    pjdddd: 'چهارشنبه',
    //
    gm: '8',
    pgm: '۸',
    jm: '6',
    pjm: '۶',
    //
    gmm: '08',
    pgmm: '۰۸',
    jmm: '06',
    pjmm: '۰۶',
    //
    gmmm: 'Aug',
    pgmmm: 'آگو',
    jmmm: 'Sha',
    pjmmm: 'شهر',
    //
    gmmmm: 'August',
    pgmmmm: 'آگوست',
    jmmmm: 'Shahrivar',
    pjmmmm: 'شهریور',
    //
    gyy: '20',
    pgyy: '۲۰',
    jyy: '99',
    pjyy: '۹۹',
    //
    gyyyy: '2020',
    pgyyyy: '۲۰۲۰',
    jyyyy: '1399',
    pjyyyy: '۱۳۹۹',
    //
    gh: '3',
    pgh: '۳',
    jh: '3',
    pjh: '۳',
    //
    ghh: '03',
    pghh: '۰۳',
    jhh: '03',
    pjhh: '۰۳',
    //
    gH: '3',
    pgH: '۳',
    jH: '3',
    pjH: '۳',
    //
    gHH: '03',
    pgHH: '۰۳',
    jHH: '03',
    pjHH: '۰۳',
    //
    gM: '27',
    pgM: '۲۷',
    jM: '27',
    pjM: '۲۷',
    //
    gMM: '27',
    pgMM: '۲۷',
    jMM: '27',
    pjMM: '۲۷',
    //
    gs: '49',
    pgs: '۴۹',
    js: '49',
    pjs: '۴۹',
    //
    gss: '49',
    pgss: '۴۹',
    jss: '49',
    pjss: '۴۹',
    //
    gt: 'a',
    pgt: 'ق',
    jt: 'a',
    pjt: 'ق',
    //
    gtt: 'am',
    pgtt: 'ق.ظ',
    jtt: 'am',
    pjtt: 'ق.ظ',
    //
    gT: 'A',
    pgT: 'ق',
    jT: 'A',
    pjT: 'ق',
    //
    gTT: 'AM',
    pgTT: 'ق.ظ',
    jTT: 'AM',
    pjTT: 'ق.ظ'
  },
  {
    raw: new Date('2003-12-01T12:16:06.003'),
    gd: '1',
    pgd: '۱',
    jd: '10',
    pjd: '۱۰',
    //
    gdd: '01',
    pgdd: '۰۱',
    jdd: '10',
    pjdd: '۱۰',
    //
    gddd: 'Mon',
    pgddd: 'مان',
    jddd: 'DoS',
    pjddd: 'د',
    //
    gdddd: 'Monday',
    pgdddd: 'ماندی',
    jdddd: 'DoShanbe',
    pjdddd: 'دوشنبه',
    //
    gm: '12',
    pgm: '۱۲',
    jm: '9',
    pjm: '۹',
    //
    gmm: '12',
    pgmm: '۱۲',
    jmm: '09',
    pjmm: '۰۹',
    //
    gmmm: 'Dec',
    pgmmm: 'دسا',
    jmmm: 'Aza',
    pjmmm: 'آذر',
    //
    gmmmm: 'December',
    pgmmmm: 'دسامبر',
    jmmmm: 'Azar',
    pjmmmm: 'آذر',
    //
    gyy: '03',
    pgyy: '۰۳',
    jyy: '82',
    pjyy: '۸۲',
    //
    gyyyy: '2003',
    pgyyyy: '۲۰۰۳',
    jyyyy: '1382',
    pjyyyy: '۱۳۸۲',
    //
    gh: '12',
    pgh: '۱۲',
    jh: '12',
    pjh: '۱۲',
    //
    ghh: '12',
    pghh: '۱۲',
    jhh: '12',
    pjhh: '۱۲',
    //
    gH: '12',
    pgH: '۱۲',
    jH: '12',
    pjH: '۱۲',
    //
    gHH: '12',
    pgHH: '۱۲',
    jHH: '12',
    pjHH: '۱۲',
    //
    gM: '16',
    pgM: '۱۶',
    jM: '16',
    pjM: '۱۶',
    //
    gMM: '16',
    pgMM: '۱۶',
    jMM: '16',
    pjMM: '۱۶',
    //
    gs: '6',
    pgs: '۶',
    js: '6',
    pjs: '۶',
    //
    gss: '06',
    pgss: '۰۶',
    jss: '06',
    pjss: '۰۶',
    //
    gt: 'p',
    pgt: 'ب',
    jt: 'p',
    pjt: 'ب',
    //
    gtt: 'pm',
    pgtt: 'ب.ظ',
    jtt: 'pm',
    pjtt: 'ب.ظ',
    //
    gT: 'P',
    pgT: 'ب',
    jT: 'P',
    pjT: 'ب',
    //
    gTT: 'PM',
    pgTT: 'ب.ظ',
    jTT: 'PM',
    pjTT: 'ب.ظ'
  }
]

// Array of Gregorian dates and their respective Jalali equivalent.
const dates = [
  {
    raw: new Date('1993-11-02T16:13:59.200'),
    gregorian: {
      Year: 1993,
      Month: 11,
      Day: 2
    },
    jalali: {
      Year: 1372,
      Month: 8,
      Day: 11
    }
  },
  {
    raw: new Date('1944-06-06T01:13:59.200'),
    gregorian: {
      Year: 1944,
      Month: 6,
      Day: 6
    },
    jalali: {
      Year: 1323,
      Month: 3,
      Day: 16
    }
  },
  {
    raw: new Date('1845-03-03T01:13:59.200'),
    gregorian: {
      Year: 1845,
      Month: 3,
      Day: 3
    },
    jalali: {
      Year: 1223,
      Month: 12,
      Day: 12
    }
  },
  {
    raw: new Date('2000-02-29T01:13:59.200'),
    gregorian: {
      Year: 2000,
      Month: 2,
      Day: 29
    },
    jalali: {
      Year: 1378,
      Month: 12,
      Day: 10
    }
  },
  {
    raw: new Date('2017-03-20T01:13:59.200'),
    gregorian: {
      Year: 2017,
      Month: 3,
      Day: 20
    },
    jalali: {
      Year: 1395,
      Month: 12,
      Day: 30
    }
  }
]

module.exports = {
  formats,
  masks,
  dates
}
