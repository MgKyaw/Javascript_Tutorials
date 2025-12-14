function* gen() {
   var a = yield 10;
   var b = yield a + 5;
   yield b;
}

var seq = gen();