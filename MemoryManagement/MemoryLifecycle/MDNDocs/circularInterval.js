setInterval(() => {
  let node = document.getElementById('myNode');
  if (node) {
    node.innerText = someExternalResource; 
  }
}, 2000)

/* even if node is removed, if the interval is active this cannot be removed, 
and neither can someExternalResource */
