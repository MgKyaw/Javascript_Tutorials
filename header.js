var headers = new Headers();
headers.append('Content-Type', 'text/json');
headers.append('X-Custom-Header', 'SomeValue');

//We can achieve the same can by passing an object literal to the constructor

var headers = new Headers({
    'Content-Type': 'text/json',
    'X-Custom-Header': 'SomeValue'
});
