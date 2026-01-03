// allocating memory via regular assignment
const memoryVariable = 'I am assigned';

// allocating memory for an object, and its contained values
const memoryObject = {
    a: 1,
    b: 2,
    c: 3
}

// allocating memory for callable functions
const today = new Date();

// allocating memory via function calls
function changeMemoryVar(newVar) {
    memoryVariable = newVar;
}
