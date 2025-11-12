//obj instanceof type;

//type[Symbol.hasInstance](obj);

// class Stack {
// }
// console.log([] instanceof Stack); // false

class Stack {
    static [Symbol.hasInstance](obj) {
        return Array.isArray(obj);
    }
}
console.log([] instanceof Stack); // true
