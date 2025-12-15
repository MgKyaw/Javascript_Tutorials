alert(user); // no such variable (each module has independent variables)

// Correct way to export variable
import {user} from './user.js';

document.body.innerHTML = user; // John
