var c = 300
let a = 300
let b = 400

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER:", a,b); // inner scope
}

// console.log(a);              // outer scope
// console.log(b);
// console.log(c);





//++++++++++++++++++++++++++interesting+++++++++++++++++//

console.log(addone(5)) // give a number that you want to print with addone

function addone(num) { // a function that have a number
    return num + 5
}


 addtwo(5)
const addtwo = function(num){
    return num + 2
}

