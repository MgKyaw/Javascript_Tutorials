function myFunction(){
  return {
    someKey: 1,
  }
}

const obj = new myFunction();
console.log(obj);    // {someKey: 1} without myFunction prototype
