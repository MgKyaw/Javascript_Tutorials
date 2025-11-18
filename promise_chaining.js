var p = new Promise(function(resolve, reject) {
    resolve("Data1");
});

var p2 = p.then(function(data) {
    // callback returns a non-promise value
    // in this case a string
    return "Data2";
});

console.log(p2);

var p = new Promise(function(resolve, reject) {
    resolve("OK");
});

var p2 = p.then(function(data) {
    // callback throws an error
    throw "Sorry";
});

console.log(p2);

var p = new Promise(function(resolve, reject) {
    reject("Sorry");
});

var p2 = p.then(null, function(data) {
    // callback throws an error
    throw "Sorry again";
});

console.log(p2);

