// Template strings use backticks (`) instead of quotes and can include:

//     Multiple lines without \n
//     Expressions inside ${}
//     Quotes without escaping


const name = "John";
const age = 30;

const message = `Hello, ${name} You are ${age} years old.`
console.log(message);

// simple Calc//

let quantity = 5;
let price = 10;

const total = `Total is :${quantity * price}.`
console.log(total);