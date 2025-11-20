function myFunction() {
    console.log(this)
}
myFunction();           // Window {}

//

// function myFunction() {
//     console.log(this)     
//   }
 
const obj = {
  someKey: 1, 
  myFunction: myFunction,
}

obj.myFunction();   
// {someKey: 1, myFunction: ƒ}. ie. obj

//// Nested Function
const obj2 = {
  someKey: 1, 
  outer: function() {
    function inner(){
       console.log(this);
    }     
    inner();
  },
}

obj2.outer();      // Window {}

