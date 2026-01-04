function getScore(x) {
   function score(y) {
      return x + y;
    }
   return score;
}
// The this here refers to window object and hence this variable will be created in the window.
var initial = getScore(2);
var final = initial(3);
