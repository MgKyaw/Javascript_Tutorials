// Import the same module from different files

// 📁 1.js
//import `./alert.js`; // Module is evaluated!

// 📁 1.js
import {admin} from './admin.js';
admin.name = "Pete";
