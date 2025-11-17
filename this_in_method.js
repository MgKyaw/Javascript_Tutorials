// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     // "this" is the "current object"
//     alert(this.name);
//     // alert(user.name); // "user" instead of "this"
//   }

// };

// user.sayHi(); // John

// let admin = user;
// user = null; // overwrite to make things obvious

// admin.sayHi(); //


let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert( user.name ); // leads to an error
  }

};


let admin = user;
user = null; // overwrite to make things obvious

admin.sayHi(); //