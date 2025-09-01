//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.//

const arr1 = [1,2,3]
const arr2 = [4,5,6]
const combined = [...arr1, ...arr2]
console.log(combined);

//

const num = [1,2,3,4,5]
const [one,two, ...rest] = num
console.log(num)
console.log(rest)


// Spread Operator With Objects
const car = {
    Brand : "Toyota",
    Model : "Camry",
    Year : 2020
}

const newCar = {
    Type : "Honda",
    Color : "Red",
    Year : 2021
}

const combinedCar = {...car, ...newCar}
console.log(combinedCar)