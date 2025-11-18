let value = 1;

doSomething(() => {
  value = 2;
});

console.log(value); // 1 or 2?

// Synchronous
function doSomething(callback) {
  callback();
}

// Asynchronous
function doSomethingAsync(callback) {
  setTimeout(callback, 0);
}