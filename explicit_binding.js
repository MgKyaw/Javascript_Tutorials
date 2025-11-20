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