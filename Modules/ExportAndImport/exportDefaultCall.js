// 📁 main.js
import User from './user.js'; // not {User}, just User

new User('John');

// Named export	                    Default export
// export class User {...}	        export default class User {...}
// import {User} from ...	        import User from ...