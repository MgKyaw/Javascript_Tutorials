var request1 = new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "names.txt", true);
    xhr.onload = function(e) {
        if (this.status === 200) { resolve(this); }
    }
    xhr.send();
});

var request2 = request1.then(function(data) {
    // extract the filename from names.txt
    var filename = data.responseText.split("\n")[1];

    // second async operation
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", filename, true);
        xhr.onload = function(e) {
            if (this.status === 200) { resolve(this); }
        }
        xhr.send();
    });
});

request2.then(function(data) {
    alert(data.responseText);
});

