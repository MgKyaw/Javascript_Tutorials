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
