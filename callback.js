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