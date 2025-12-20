let {hi, bye} = await import('./say.js');

hi();
bye();

let obj = await import('./say.js');
let say = obj.default;
// or, in one line: let {default: say} = await import('./say.js');

say();
