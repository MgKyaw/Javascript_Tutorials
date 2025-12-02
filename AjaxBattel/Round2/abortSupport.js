const xhr = new XMLHttpRequest();
xhr.open("GET", "/service");
xhr.send();

// ...

xhr.onabort = () => console.log("aborted");
xhr.abort();
