function success() {
    var data = JSON.parse(this.responseText);
    console.log(data);
}

function error(err) {
    console.log('Error Occurred :', err);
}

var xhr = new XMLHttpRequest();
xhr.onload = success;
xhr.onerror = error;
xhr.open('GET', 'https://api.github.com/users/swapnilbangare');
xhr.send();
