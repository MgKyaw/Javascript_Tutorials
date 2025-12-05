// let’s get a JSON-object with latest commits from GitHub:

let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let response = await fetch(url);

let commits = await response.json(); // read response body and parse as JSON

alert(commits[0].author.login);

// Or, the same without await, using pure promises syntax:

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => alert(commits[0].author.login));

// To get the response text, await response.text() instead of .json():

let response2 = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

let text = await response2.text(); // read response body as text

alert(text.slice(0, 80) + '...');

// response.blob();

let response3 = await fetch('/article/fetch/logo-fetch.svg');

let blob = await response3.blob(); // download as Blob object

// create <img> for it
let img = document.createElement('img');
img.style = 'position:fixed;top:10px;left:10px;width:100px';
document.body.append(img);

// show it
img.src = URL.createObjectURL(blob);

setTimeout(() => { // hide after three seconds
  img.remove();
  URL.revokeObjectURL(img.src);
}, 3000);

// Important

let text2 = await response.text(); // response body consumed
let parsed = await response.json(); // fails (already consumed)
