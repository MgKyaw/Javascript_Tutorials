// import source libraryModule from './library.wasm';

// const instance1 = await WebAssembly.instantiate(libraryModule, importObject1);

// const instance2 = await WebAssembly.instantiate(libraryModule, importObject2);

const dynamicLibrary = await import.source('./library.wasm');

const instance = await WebAssembly.instantiate(dynamicLibrary, importObject);
