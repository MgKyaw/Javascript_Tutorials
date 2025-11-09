let john = { name: "John" };

// the object can be accessed, john is the reference to it

// overwrite the reference
john = null;

// the object will be removed from memory

//// Example 2

let john2 = { name: "John" };

let array = [ john2 ];

john2 = null; // overwrite the reference

// the object previously referenced by john is stored inside the array
// therefore it won't be garbage-collected
// we can get it as array[0]

//// Map example
let john3 = { name: "John" };

let map = new Map();
map.set(john3, "...");

john3 = null; // overwrite the reference

// john is stored inside the map,
// we can get it by using map.keys()

//// WeakMap example
let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // works fine (object key)

// can't use a string as the key
weakMap.set("test", "Whoops"); // Error, because "test" is not an object

//// Overwrite in WeakMap
let john4 = { name: "John" };

let weakMap2 = new WeakMap();
weakMap.set(john4, "...");

john4 = null; // overwrite the reference

// john is removed from memory!