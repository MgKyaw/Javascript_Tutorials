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
