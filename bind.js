let user = {
  firstName: "John"
};

function func() {
  alert(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // John

funcUser("Hello"); // Hello, John (argument "Hello" is passed, and this=user)
