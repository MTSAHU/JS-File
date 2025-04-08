const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map((num) => {
//     return num + 10
// } ) it add 10 to each number

const newNums = myNumbers // create newNums (pass myNumbers)
                .map((num) => num * 10) // first multiply by 10 to each
                .map( (num) => num + 1) // add 1 to each
                .filter( (num) => num >= 40) // filter only greater than 40



console.log(newNums);