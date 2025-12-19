// 📁 main.js
// import {default as User, sayHi} from './user.js';

// new User('John');

import * as user from './user.js';

let User = user.default; // the default export
new User('John');