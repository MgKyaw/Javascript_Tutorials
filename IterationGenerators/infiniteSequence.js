function* positiveInts() {
   for (var i = 0; true; i++) {
      yield i;
   }
}

var seq = positiveInts();
