function* sequence() {
   console.log("First!");
   yield 1;

   console.log("Second!");
   yield 3;

   console.log("Third!");
   yield 5;

   console.log("Done!");
}

var seq = sequence();

console.log(seq.next());
// Console output
// First!
// {value: 1, done: false}

console.log(seq.next());
// Console output
// Second!
// {value: 3, done: false}

console.log(seq.next());
// Third!
// {value: 5, done: false}

console.log(seq.next());
// Done!
// {value: undefined, done: true}