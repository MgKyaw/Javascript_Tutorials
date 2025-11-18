var timerPromise = new Promise(function(resolve, reject) {
   setTimeout(function() {
      resolve('Hello');
   }, 3000);
});

timerPromise.then(function(value) {
   console.log(value);
});

new Promise(function(resolve, reject) {
   setTimeout(function() {
      resolve('Hello');
   }, 3000);
})
.then(function(value) {
   console.log(value);
});

function delay(time) {
   var d = new Date();
   while (new Date() - d < time);
}

var promise = new Promise(function(resolve, reject) {
   delay(5000); // Delay the page render for 5 seconds
   console.log("OK!")
});

