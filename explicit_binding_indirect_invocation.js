// function myFunction(param1, param2) {
//     console.log(this)     
//   }
 
// const obj = {
//   someKey: 1, 
// }

// const param1 = 1, param2 = 2;
// myFunction.call(obj, param1, param2)       // {someKey: 1}
// myFunction.apply(obj, [param1, param2])    // {someKey: 1}

function myFunction() {
    console.log(this)     
  }
 
const obj = {
  someKey: 1, 
}

const boundFunction = myFunction.bind(obj)
boundFunction();      // {someKey: 1}