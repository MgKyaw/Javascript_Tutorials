function positiveInts(n) {
   var i = 1;
   var max = (n < 1 || typeof n !== "number") ? 1 : n;
   return {
      next: function() {
         if (i > max) return {value: undefined, done: true}
         return {value: i++, done: false}
      }
   }
}

var seq = positiveInts(3);

seq.next(); // {value: 1, done: false}
seq.next(); // {value: 2, done: false}
seq.next(); // {value: 3, done: false}
seq.next(); // {value: undefined, done: true}
