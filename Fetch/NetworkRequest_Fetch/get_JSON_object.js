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