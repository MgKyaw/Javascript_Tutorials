function defineSequence(a, d) {
   return function(n) {
      return a + n * d;
   }
}

var evens = defineSequence(2, 2);
console.log(evens(0), evens(1));

var odds = defineSequence(1, 2);
console.log(odds(0), odds(1), odds(99));

