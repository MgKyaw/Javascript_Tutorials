// BigInt addition
const a = 1n + 2n; // 3n
// Division with BigInts round towards zero
const b = 1n / 2n; // 0n
// Bitwise operations with BigInts do not truncate either side
const c = 40000000000000000n >> 2n; // 10000000000000000n

const d = 8n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead

const e = 1n + 2; // TypeError: Cannot mix BigInt and other types

const f = Number(1n) + 2; // 3
const g = 1n + BigInt(2); // 3n

const h = 1n > 2; // false
const i = 3 > 2n; // true

