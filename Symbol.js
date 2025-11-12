let statuses = {
    OPEN: Symbol('Open'),
    IN_PROGRESS: Symbol('In progress'),
    COMPLETED: Symbol('Completed'),
    HOLD: Symbol('On hold'),
    CANCELED: Symbol('Canceled')
};
// complete a task
task.setStatus(statuses.COMPLETED);


//// Using a symbol as the computed property name of an object
let status = Symbol('status');
let task = {
    [status]: statuses.OPEN,
    description: 'Learn ES6 Symbol'
};
console.log(task);


//// Get all properties
console.log(Object.keys(task)); // ["description"]

console.log(Object.getOwnPropertyNames(task)); // ["description"]

console.log(Object.getOwnPropertySymbols(task)); //[Symbol(status)]
