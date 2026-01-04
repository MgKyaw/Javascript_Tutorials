var x = []
var bool = false;
function grow(){
  x.push(new Array(100000).join('a'));
  if(bool){
    setTimeout(grow, 1000);
  }
}
function start(){
  grow();
  bool = true;
}
function stop(){
  bool = false;
}
