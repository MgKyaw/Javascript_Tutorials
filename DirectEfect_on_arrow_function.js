const myFunction = () => {
  console.log(this);
}

const objA = {
  myFunction: myFunction,
  inner: () => {
    console.log(this);
  }
}

const objB = {}

myFunction();                   // Window {}
objA.myFunction()               // Window {}
objA.inner()                    // Window {}
myFunction.call(objB);          // Window {}
const objC = new myFunction()   // myFunction is not a constructor
