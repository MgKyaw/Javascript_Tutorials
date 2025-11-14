var a = 'static';

function f1() {
   console.log(a);
}

function f2() {
   var a = 'dynamic';
   f1();
}

// f2();
console.dir(f1);

//// Encapsulate inside an IIFE

(function() {
   var a = 'static';

   function f1() {
      console.log(a);
   }

   function f2() {
      var a = 'dynamic';
      f1();
   }

   // f2();
   console.dir(f1);
})();

