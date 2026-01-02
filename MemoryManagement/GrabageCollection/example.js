// user has a reference to the object
let user = {
  name: "John"
};

// <global> user => Object name: "John"

// If the value of user is overwritten, the reference is lost:
user = null;

// Object name: "John" loses it's pointer => becomes unused object
// Now John becomes unreachable. There’s no way to access it, no references to it. Garbage collector will junk the data and free the memory.

user = {
  name: "John"
};

let admin = user;

//    <global>   user ->  object name: "John"
//    <global>   admin ->  object name: "John"

user = null;

//Then the object is still reachable via admin global variable, so it must stay in memory. If we overwrite admin too, then it can be removed.
