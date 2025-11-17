let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    alert(this.name);
    // alert(user.name); // "user" instead of "this"
  }

};

user.sayHi(); // John

