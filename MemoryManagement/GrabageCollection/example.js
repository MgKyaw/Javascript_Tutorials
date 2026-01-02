// user has a reference to the object
let user = {
  name: "John"
};

// <global> user => Object name: "John"

// If the value of user is overwritten, the reference is lost:
user = null;

// Object name: "John" loses it's pointer => becomes unused object
