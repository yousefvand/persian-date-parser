/* eslint-env jest */

const FIFOCache = require('../lib/cache-provider').FIFOCache
const LRUCache = require('../lib/cache-provider').LRUCache

describe('cache', () => {
  test('FIFO', () => {
    const dummy = new FIFOCache()
    expect(dummy._capacity).toBe(1024)
    const cache = new FIFOCache(3)
    expect(cache.size).toBe(0)
    cache.set('a', 1)
    expect(cache.size).toBe(1)
    cache.set('b', 2)
    cache.set('c', 3)
    expect(cache.get('b')).toBe(2)
    cache.set('d', 4)
    expect(cache._cache.has('a')).toBe(false)
    expect(cache._cache.has('d')).toBe(true)
    cache.set('e', 5)
    expect(cache._cache.has('b')).toBe(false)
    expect(cache.get('e')).toBe(5)
    expect(cache.get('f')).toBe(undefined)
  })
  test('LRU', () => {
    const cache = new LRUCache(3)
    expect(cache.size).toBe(0)
    cache.set('a', 1)
    expect(cache.size).toBe(1)
    cache.set('b', 2)
    cache.set('c', 3)
    expect(cache.get('z')).toBe(undefined)
    // order: a, b, c
    expect(cache.get('a')).toBe(1) // order: b, c, a
    expect(cache.get('b')).toBe(2) // // order: c, a, b
    cache.set('d', 4) // c is first => a, b, d
    expect(cache._cache.has('a')).toBe(true)
    expect(cache._cache.has('b')).toBe(true)
    expect(cache._cache.has('d')).toBe(true)
    expect(cache.get('f')).toBe(undefined)
  })
})
