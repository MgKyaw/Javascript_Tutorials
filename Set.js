const setLike = {
  size: 1,
  has(x) { return x === 'b' },
  * keys() { yield 'b' },
};

assert.deepEqual(
  new Set(['a', 'b', 'c']).difference(setLike),
  new Set(['a', 'c']),
);
assert.deepEqual(
  new Set(['a', 'b', 'c']).difference(setLike),
  new Set(['a', 'c']),
);
assert.equal(
  new Set(['a', 'b', 'c']).isSupersetOf(setLike),
  true,
);
assert.equal(
  new Set(['b']).isSubsetOf(setLike),
  true,
);

//// Infinite Set-Like data
const evenNumbers = {
  has(elem) {
    return (elem % 2) === 0;
  },
  size: Infinity,
  keys() {
    throw new TypeError();
  }
};
assert.deepEqual(
  new Set([0, 1, 2, 3]).difference(evenNumbers),
  new Set([1, 3])
);
assert.deepEqual(
  new Set([0, 1, 2, 3]).intersection(evenNumbers),
  new Set([0, 2])
);