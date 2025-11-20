function myFunction() {
  console.log(this);
}

const obj = {
  someKey: 1,
  myFunction: myFunction,
}

const newFunction = obj.myFunction;
newFunction();    // Window {}

