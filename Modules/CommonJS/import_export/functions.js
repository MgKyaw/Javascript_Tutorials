const add = (num1, num2) => num1 + num2;

console.log(module);

// node functions.js
// output
// {
//   id: '.',
//   path: 'D:\\project\\javascript\\Javascript_Tutorials\\Modules\\CommonJS\\import_export',
//   exports: {},
//   filename: 'D:\\project\\javascript\\Javascript_Tutorials\\Modules\\CommonJS\\import_export\\functions.js',    
//   loaded: false,
//   children: [],
//   paths: [
//     'D:\\project\\javascript\\Javascript_Tutorials\\Modules\\CommonJS\\import_export\\node_modules',
//     'D:\\project\\javascript\\Javascript_Tutorials\\Modules\\CommonJS\\node_modules',
//     'D:\\project\\javascript\\Javascript_Tutorials\\Modules\\node_modules',
//     'D:\\project\\javascript\\Javascript_Tutorials\\node_modules',
//     'D:\\project\\javascript\\node_modules',
//     'D:\\project\\node_modules',
//     'D:\\node_modules'
//   ],
//   [Symbol(kIsMainSymbol)]: true,
//   [Symbol(kIsCachedByESMLoader)]: false,
//   [Symbol(kURL)]: undefined,
//   [Symbol(kFormat)]: undefined,
//   [Symbol(kIsExecuting)]: true
// }

module.exports.add = add;
module.exports.name = "";

console.log(module);
// Output
// {
//   id: '.',
//   path: 'D:\\project\\javascript\\Javascript_Tutorials\\Modules\\CommonJS\\import_export',
//   exports: { add: [Function: add] },
//   filename: 'D:\\project\\javascript\\Javascript_Tutorials\\Modules\\CommonJS\\import_export\\functions.js',    
//   loaded: false,
//   children: [],
//   paths: [
//     'D:\\project\\javascript\\Javascript_Tutorials\\Modules\\CommonJS\\import_export\\node_modules',
//     'D:\\project\\javascript\\Javascript_Tutorials\\Modules\\CommonJS\\node_modules',
//     'D:\\project\\javascript\\Javascript_Tutorials\\Modules\\node_modules',
//     'D:\\project\\javascript\\Javascript_Tutorials\\node_modules',
//     'D:\\project\\javascript\\node_modules',
//     'D:\\project\\node_modules',
//     'D:\\node_modules'
//   ],
//   [Symbol(kIsMainSymbol)]: true,
//   [Symbol(kIsCachedByESMLoader)]: false,
//   [Symbol(kURL)]: undefined,
//   [Symbol(kFormat)]: undefined,
//   [Symbol(kIsExecuting)]: true
// }
