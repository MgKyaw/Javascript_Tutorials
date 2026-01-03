/* even if foo and bar don't exist outside this function, the reference-counting algorithm 
won't count these as ready for garbage collection */

function circularFunc() {
    const foo = {};
    const bar = {};
    foo.a = bar;
    bar.a = foo;
}

circularFunc();
