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
