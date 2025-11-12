let odd  = [1, 3],
    even = [2, 4];
let all = odd.concat(even);
console.log(all); // [1, 3, 2, 4]

let extras = all.concat(5);
console.log(extras); // [1, 3, 2, 4, 5]

let list = {
    0: 'JavaScript',
    1: 'Symbol',
    length: 2
};
let message = ['Learning'].concat(list);
console.log(message); // ["Learning", Object]

let list_2 = {
    0: 'JavaScript',
    1: 'Symbol',
    length: 2,
    [Symbol.isConcatSpreadable]: true
};
let message_2 = ['Learning'].concat(list_2);
console.log(message_2); // ["Learning", "JavaScript", "Symbol"]