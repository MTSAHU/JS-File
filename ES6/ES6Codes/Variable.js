// var	Function-scoped variable, can be re-declared and updated.
// let	Block-scoped variable, can be updated but not re-declared.
// const	Block-scoped constant, cannot be re-declared or updated.

// var eg //

var x = 10;
var x = 20;
console.log(x); // 20

// let eg //
let y = 30;
y = 40; // Updated Only
console.log(y); 

//const eg //
const z = 50;
  z = 60; // Error: Assignment to constant variable.
console.log(z); 