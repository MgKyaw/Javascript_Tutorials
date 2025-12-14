function* gen() {
   yield yield 10;
}

var seq = gen();

seq.next(); // {value: 10, done: false}
seq.next(30); // {value: 30, done: false}
seq.next(); // {value: undefined, done: true}
