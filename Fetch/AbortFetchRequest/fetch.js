fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('success!');
  })
  .catch(error => {
    console.log('API failure' + error);
  });

// Aborting the request

var controller = new AbortController();
var signal = controller.signal;

controller.abort();

