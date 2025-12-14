function* positiveInts() {
   for (var i = 0; true; i++) {
      yield i;
   }
}

var seq = positiveInts();

console.log(seq.next()); // first time
