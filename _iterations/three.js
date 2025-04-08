// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = " Hello World!"; // const greet = greetings

for ( const greet of greetings) {
    // console.log(`Each char is ${greet}`); 
}

// Maps

const map = new Map()
map.set("IN", "India",)
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("IN", "India") // double value

// console.log(map); // it doesn't return same double value

for (const[key, value] of map) {
    // console.log(key, ':-', value); // key and value return
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for(const[key, value] of myObject) {
    console.log(key , ':-', value)
}