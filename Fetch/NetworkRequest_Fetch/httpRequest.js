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

// arraybuffer

const req3 = new XMLHttpRequest();

req3.onload = (e) => {
  const arraybuffer = req.response; // not responseText
  /* … */
};
req3.open("GET", url);
req3.responseType = "arraybuffer";
req3.send();
