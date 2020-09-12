const Utils = require('./utils')
const Masks = require('./masks')
const utils = require('./utils')
const { FIFOCache, LRUCache } = require('./cache-provider')

// descending in length. Shorter tokens are subsets of longer ones in each group.
const tokens = [
  'pgdddd', 'pjdddd', 'gdddd', 'jdddd',
  'pgddd', 'pjddd', 'gddd', 'jddd',
  'pgdd', 'pjdd', 'gdd', 'jdd',
  'pgd', 'pjd', 'gd', 'jd',
  //
  'pgmmmm', 'pjmmmm', 'gmmmm', 'jmmmm',
  'pgmmm', 'pjmmm', 'gmmm', 'jmmm',
  'pgmm', 'pjmm', 'gmm', 'jmm',
  'pgm', 'pjm', 'gm', 'jm',
  //
  'pgyyyy', 'pjyyyy', 'gyyyy', 'jyyyy',
  'pgyy', 'pjyy', 'gyy', 'jyy',
  //
  'pghh', 'pjhh', 'ghh', 'jhh',
  'pgh', 'pjh', 'gh', 'jh',
  //
  'pgHH', 'pjHH', 'gHH', 'jHH',
  'pgH', 'pjH', 'gH', 'jH',
  //
  'pgMM', 'pjMM', 'gMM', 'jMM',
  'pgM', 'pjM', 'gM', 'jM',
  //
  'pgss', 'pjss', 'gss', 'jss',
  'pgs', 'pjs', 'gs', 'js',
  //
  'pgtt', 'pjtt', 'gtt', 'jtt',
  'pgt', 'pjt', 'gt', 'jt',
  //
  'pgTT', 'pjTT', 'gTT', 'jTT',
  'pgT', 'pjT', 'gT', 'jT'
]

function tokenize (format, result = []) {
  if (format.length === 0) {
    return result
  }
  for (const token of tokens) {
    if (format.startsWith(token)) {
      result.push(token)
      return tokenize(format.substring(token.length), result)
    }
  }
  // not optimized for consecutive non-tokens in favor of common usage
  result.push(format[0])
  return tokenize(format.substring(1), result)
}

const parser = (cacheCapacity = -1, cacheType='FIFO') => {
  if (cacheCapacity < 0) {
    return (format, now) =>
      Utils.chain(tokenize(format).map(t => Masks[t] ? Masks[t] : Utils.constant(t)))(now)
  }
  cacheCapacity = cacheCapacity === 0 ? Number.POSITIVE_INFINITY : cacheCapacity
  let fnCache
  if (cacheType.toUpperCase() === 'LRU') {
    fnCache = new LRUCache(cacheCapacity)
  } else { // fail safe
    fnCache = new FIFOCache(cacheCapacity)
  }
  return (format, now) => {
    if (fnCache.has(format)) {
      return fnCache.get(format)(now)
    } else {
      const fns = tokenize(format).map(t => Masks[t] ? Masks[t] : Utils.constant(t))
      fnCache.set(format, Utils.chain(fns))
      return fnCache.get(format)(now)
    }
  }
}

module.exports = {
  tokenize,
  parser
}
