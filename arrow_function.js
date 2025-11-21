function outer(){ 
    let inner = () => { 
      console.log(this);
    };
    inner()
  } 

const objA = {
  someKey: 1,
  outer : outer, 
};
const objB = {
  someKey: 2,
}

// In this example, each time when inner function is called, 
// JS simply takes the this value from outer function
outer();            // Window {}
objA.outer();       // {someKey: 1, outer: ƒ} --> objA
outer.call(objB)    // {someKey: 2} --> objB
