// import() expressions

// Dynamic import() provides an asynchronous way to import modules. It is supported in both CommonJS and ES modules, and can be used to load both CommonJS and ES modules.

// import.meta#
// Type: <Object>
// The import.meta meta property is an Object that contains the following properties. It is only supported in ES modules.

// import.meta.dirname#
// History
// Type: <string> The directory name of the current module.
// This is the same as the path.dirname() of the import.meta.filename.

// Caveat: only present on file: modules.

// import.meta.filename#
// History
// Type: <string> The full absolute path and filename of the current module, with symlinks resolved.
// This is the same as the url.fileURLToPath() of the import.meta.url.

// Caveat only local modules support this property. Modules not using the file: protocol will not provide it.

// import.meta.url#
// Type: <string> The absolute file: URL of the module.
// This is defined exactly the same as it is in browsers providing the URL of the current module file.

// This enables useful patterns such as relative file loading:

import { readFileSync } from 'node:fs';
const buffer = readFileSync(new URL('./data.proto', import.meta.url)); 
