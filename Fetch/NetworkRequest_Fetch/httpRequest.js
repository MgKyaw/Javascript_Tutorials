function reqListener() {
  console.log(this.responseText);
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "http://www.example.org/example.txt");
req.send();

// Handling binary data

const req2 = new XMLHttpRequest();
req2.open("GET", url);
// retrieve data unprocessed as a binary string
req2.overrideMimeType("text/plain; charset=x-user-defined");
/* … */
