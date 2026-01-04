var node = document.createElement('a');
node.id = 'id1';
document.body.appendChild(node);
var main = {
   Id: document.getElementById('id1')
}
function removeElement(){
   document.body.removeChild(document.getElementById('id1'));
}
// The 'this’ here refers to window object and hence this variable will be created in the window.
removeElement();
