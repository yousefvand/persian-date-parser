class FIFOCache {
  constructor(capacity = 1024) {
    this._capacity = capacity
    this._cache = new Map()
  }

  get(key) {
    return this._cache.get(key)
  }

  has(key) {
    return this._cache.has(key)
  }

  set(key, value) {
    if (this._cache.size >= this._capacity) {
			this._cache.delete(this._cache.keys().next().value);
		}
		this._cache.set(key, value);
  }

  get size() {
    return this._cache.size
  }
}

class LRUCache extends FIFOCache {
  get(key) { // override get
    const value = this._cache.get(key)
		if (value) { // make it last item
			this._cache.delete(key)
			this._cache.set(key, value)
		}
		return value;
  }
}

module.exports = {
  FIFOCache,
  LRUCache
}
