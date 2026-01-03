const myNode = document.getElementById('myNodeId');

function removeNode() {
  document.body.removeChild(document.getElementById('myNodeId'));
}

removeNode();

/* myNode is now detached from the DOM but still retained in memory,
as it is captured in the myNode variable */
