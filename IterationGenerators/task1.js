function* gen() {
   var a = yield 10;
   var b = yield a + 5;
   yield b;
}

var seq = gen();

// what will each of these return?
seq.next(15);
seq.next(60);
seq.next(32);
seq.next(4);

// Output
// {value: 20, done: false}
// {value: 65, done: false}
// {value: 37, done: false}
// {value: 9, done: false}