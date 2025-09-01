// Destructuring Assignment Syntax

// The destructuring assignment syntax unpack object properties into variables:

const person = {
    Name: "Sam",
    Location: "New York",
    Age: 25
};


    console.log(person.Age);

    //Destructuring 
    let { Name, Location, } = person;
    console.log(Name);

    // Create an Object
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {firstName, lastName, country = "US"} = user;
console.log(user);
console.log(country); // Output: "US"
    