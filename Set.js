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