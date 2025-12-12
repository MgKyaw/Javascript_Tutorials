var nums = [1, 5, 16];

var iter = makeIterator(nums);

iter.next(); // {value: 1, done: false}

iter.next(); // {value: 5, done: false}

iter.next(); // {value: 16, done: false}

iter.next(); // {value: undefined, done: true}
iter.next(); // {value: undefined, done: true}
iter.next(); // {value: undefined, done: true}