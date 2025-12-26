alert(user); // no such variable (each module has independent variables)

// Correct way
import {user} from './user.js';

document.body.innerHTML = user; // John