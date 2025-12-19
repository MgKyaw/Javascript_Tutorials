// 📁 main.js
// import {default as User, sayHi} from './user.js';

// new User('John');

import * as user from './user.js';

import User from './user.js';
import LoginForm from './loginForm.js';
import func from '/path/to/func.js';

let User = user.default; // the default export
new User('John');