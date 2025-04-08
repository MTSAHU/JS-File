// const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(1));

const otherNumber = 123.45678
//console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++ Maths ++++ //

// console.log(Math);
//  console.log(Math.abs(-4)); // Absoulte value which is positive value return
//  console.log(Math.round(4.6)); // it round off the value
//  console.log(Math.ceil(4.2)); // it round off the value to upper 
//  console.log(Math.floor(4.9)); // it round off the value to lower
//  console.log(Math.min(4, 3, 6, 8)); // it gives min value
//  console.log(Math.max(4, 3, 6, 8)); // it gives max value

// console.log(Math.random()); // getting random num
// console.log(Math.random()*10 + 1); // getting random num with multiply and add 1
// console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 20
 // getting random with min 10 and max 10//

// console.log(Math.floor(Math.random() * (max - min + 1)) + min); //

//+++++++++++++++++ date.js+++++//

let myDate = new Date(); // these are the methods of date.js
// console.log(myDate.toString()); // it gives date in string format //
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate1 = new Date(2023, 0, 23);
// let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate3 = new Date("2023-01-14");
// let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate3.toLocaleString());

let newDate = new Date()
// console.log(newDate);    //exact time
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDate());
// console.log(newDate.getDay()); // some examples of dates//
// console.log(newDate.getFullYear());
// console.log(newDate.toTimeString());

newDate.toLocaleDateString('default',{
    weekday: "long",
   
})

//++++++++++++++++++++ Data types ++++++++//

// primitive data types//
// string, number, boolean, null, undefined, symbol, bigint//

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

// console.log(typeof userEmail);

const heros = ["thor", "spiderman", "ironman"];
let myObj ={
    name: "Amit",
    age: 19,
}

// console.log(myObj); to get object
// console.log(heros);

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
