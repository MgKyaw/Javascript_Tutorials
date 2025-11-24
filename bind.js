// let user = {
//   firstName: "John"
// };

// function func() {
//   alert(this.firstName);
// }

// let funcUser = func.bind(user);
// funcUser(); // John

// funcUser("Hello"); // Hello, John (argument "Hello" is passed, and this=user)

// let user = {
//   firstName: "John",
//   sayHi() {
//     alert(`Hello, ${this.firstName}!`);
//   }
// };

// let sayHi = user.sayHi.bind(user); // (*)

// // can run it without an object
// sayHi(); // Hello, John!

// setTimeout(sayHi, 1000); // Hello, John!

// // even if the value of user changes within 1 second
// // sayHi uses the pre-bound value which is reference to the old user object
// user = {
//   sayHi() { alert("Another user in setTimeout!"); }
// };

let user = {
  firstName: "John",
  say(phrase) {
    alert(`${phrase}, ${this.firstName}!`);
  }
};

let say = user.say.bind(user);

say("Hello"); // Hello, John! ("Hello" argument is passed to say)
say("Bye"); // Bye, John! ("Bye" is passed to say)

for (let key in user) {
  if (typeof user[key] == 'function') {
    user[key] = user[key].bind(user);
  }
}
