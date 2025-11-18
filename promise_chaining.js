var p = new Promise(function(resolve, reject) {
    resolve("Data1");
});

var p2 = p.then(function(data) {
    // callback returns a non-promise value
    // in this case a string
    return "Data2";
});

console.log(p2);

