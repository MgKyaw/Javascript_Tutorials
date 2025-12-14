function* positiveInts() {
   for (var i = 0; true; i++) {
      yield i; // execution resumes right from here
   }
}

var seq = positiveInts();

console.log(seq.next()); // first time
// {value: 1, done: false}

console.log(seq.next()); // second time
