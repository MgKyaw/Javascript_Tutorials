// import Specifiers

// file: URLs
import './foo.mjs?query=1'; // loads ./foo.mjs with query of "?query=1"
import './foo.mjs?query=2'; // loads ./foo.mjs with query of "?query=2"

// data: imports
// data: URLs are supported for importing with the following MIME types:

// text/javascript for ES modules
// application/json for JSON
// application/wasm for Wasm

import 'data:text/javascript,console.log("hello!");';
import _ from 'data:application/json,"world!"' with { type: 'json' }; 
