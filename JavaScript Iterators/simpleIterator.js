var nums = [1, 5, 16];

var iter = makeIterator(nums);

iter.next(); // {value: 1, done: false}

iter.next(); // {value: 5, done: false}

iter.next(); // {value: 16, done: false}

iter.next(); // {value: undefined, done: true}
iter.next(); // {value: undefined, done: true}
iter.next(); // {value: undefined, done: true}

function makeIterator(array) {
    var i = 0;
    return {
        next: function() {
            if (i > arr.length - 1)
                return {value: undefined, done: true}
            return {value: arr[i++], done: false}
        }
    }
}