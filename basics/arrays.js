// array1

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["thor", "ironman", "spiderman"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myHeors) 
 // when you push the value in the array . next to pushline then it gets new value//

 // when you print the value in the array before pustline it gets old value//

// console.log(myHeors[1]);

// array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)
myArr.shift()

// console.log(myArr.includes(9)); // it return true or false check if array includes the value
// console.log(myArr.indexOf(3));
// console.log(myArr)

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// console.log("A", myArr);

//+++++++++++++slice & splice+++++++++++++//
const myn1 = myArr.slice(3, 5) // The .slice() method in JavaScript is used to extract a section of an array and return it as a new array. This method does not modify the original array.

// console.log(myn1);

// console.log("B", myArr);

const myn2 = myArr.splice(2, 3) // The splice() method overwrites the original array.
// console.log("c", myArr);
// console.log(myn2);

//++++++++++++++++Array2++++++++++++++//

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(dc_heros)
//  console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Amit")) // it return true or false
console.log(Array.from("Amit")) // it convert string to array
console.log(Array.from({name: "Amit"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
