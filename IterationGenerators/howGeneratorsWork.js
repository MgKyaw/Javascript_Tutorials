function* sequence() {
   console.log("Started!");
   yield 1;
   yield 3;
   yield 5;
}

var seq = sequence(); // nothing logged