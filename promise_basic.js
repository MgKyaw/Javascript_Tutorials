var timerPromise = new Promise(function(resolve, reject) {
   setTimeout(function() {
      resolve('Hello');
   }, 3000);
});

