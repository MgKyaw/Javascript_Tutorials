var uint8 = new Uint8Array([15, 192, 16]);

for (
   // initialisation
   var iter = uint8[Symbol.iterator](),
   next = iter.next(),
   byte = next.value;

   // iterative check
   !next.done;

   // iterative expressions
   next = iter.next(),
   byte = next.value
)

{
   console.log(byte);
}
