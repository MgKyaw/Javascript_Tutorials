// function loadScript(src) {
//   // creates a <script> tag and append it to the page
//   // this causes the script with given src to start loading and run when complete
//   let script = document.createElement('script');
//   script.src = src;
//   document.head.append(script);
// }

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(script);

  document.head.append(script);
}

loadScript('/my/script.js', function() {
  // the callback runs after the script is loaded
  newFunction(); // so now it works

});

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Cool, the script ${script.src} is loaded`);
  alert( _ ); // _ is a function declared in the loaded script
});

loadScript('/my/script.js', function(script) {

  alert(`Cool, the ${script.src} is loaded, let's load one more`);

  loadScript('/my/script2.js', function(script) {
    alert(`Cool, the second script is loaded`);
  });

});