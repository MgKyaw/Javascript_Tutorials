let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

// setTimeout(user.sayHi, 1000); // Hello, undefined!

// let f = user.sayHi;
// setTimeout(f, 1000); // lost user context

// setTimeout(function() {
//   user.sayHi(); // Hello, John!
// }, 1000);

setTimeout(() => user.sayHi(), 1000); // Hello, John!

// ...the value of user changes within 1 second
user = {
  sayHi() { alert("Another user in setTimeout!"); }
};
