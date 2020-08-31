const Names = require('./names')

// const id = a => a
const constant = c => a => c
const digiPad = d => d < 10 ? `0${d}` : '' + d
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)
const chain = fns => now => fns.map(f => f(now)).join('')
// const pad = (s, l = 2, p = '0') => new Array(l - ('' + s).length).fill(p).join('') + s
// const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const persianNumber = str => str.split('').map(persianDigit).join('')
const persianDigit = char => isNaN(char) ? char : Names.persianDigits[parseInt(char)]
// const indexOfAny = (s, ts) => ts.map(t => s.indexOf(t)).filter(i => i > -1).sort().reverse().reduce((p, c) => c, -1)
// const indexOfAny = (string, targets) => {
//   const result = targets.map(t => string.indexOf(t)).filter(i => i > -1).sort()
//   return result.length ? result[0] : -1
// }

// const memoize = fn => {
//   const cache = {}
//   return arg => {
//     if (!(arg in cache)) {
//       cache[arg] = fn(arg)
//     }
//     return cache[arg]
//   }
// }

const objectShift = (obj, count = 1) => {
  for (const key in obj) {
    if (count <= 0) {
      break
    }
    delete obj[key]
    count--
  }
  return obj
}

module.exports = {
  constant,
  digiPad,
  pipe,
  chain,
  persianNumber,
  persianDigit,
  objectShift
}
