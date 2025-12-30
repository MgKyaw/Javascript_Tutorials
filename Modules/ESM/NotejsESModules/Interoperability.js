// Importing a CommonJS module

import { default as cjs } from 'cjs';
// Identical to the above
import cjsSugar from 'cjs';

console.log(cjs);
console.log(cjs === cjsSugar);
// Prints:
//   <module.exports>
//   true
