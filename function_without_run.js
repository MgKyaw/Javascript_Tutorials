function myFunction(){
  // JS internally creates an object and refers it as this
  
  // User explicitly adds required properties and methods to the object
  this.someKey = 1;
  this.inner = function(){
    console.log(this);
  }
  
  // JS internally returns the object
}

const obj = new myFunction();
obj.inner()           // {someKey: 1, inner: ƒ} with myFunction prototype
