//singleton
//object.create

const mySym = Symbol("key1")

const jsUser = {
name: "Amit",
"fullName": "Amit Sahu",
[mySym]: "mykey1",
age: 19,
location: "Delhi",
email: "jY7aL@example.com",
isLoggedIn: false,
lastLoginDays: ["Monday", "Tuesday"]

}

// console.log(jsUser ["email"]); // single one by one execution
// console.log(jsUser.name);
// console.log(jsUser.fullName);

// console.log(jsUser.name, jsUser.fullName, jsUser.age, jsUser.location, jsUser.email, jsUser.isLoggedIn, jsUser.lastLoginDays); // executed in single 

jsUser.email = "Amit@Amazon"

Object.freeze(jsUser) // this is used to freeze so that furture updation not done

// console.log(jsUser.email);

jsUser.email = "Amit@meta"
// console.log(jsUser.email);

jsUser.greeting = function(){
    // console.log("hello JS user");
    
}
  jsUser.greetingTwo = function(){
    // console.log(`Hello JS user, ${this.name}`);
    
}

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

//+++++++++++++++++++++++++++object.js2++++++++++++++++++++++++++++++//


// const tinderUser = {} // this also can be used
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Amit"
tinderUser.isLoggedIn = false

// console.log(tinderUser); ,/ this return all the values
// console.log(tinderUser.name); // this return only name

const regularUser = {
  email : "Sahu@123",
  fullName : {              // in FullName we nested userFullName and than first and last name
    userFullName : {
      firstName : "Amit",
      lastName : "Sahu"
    }
  }
}

// console.log(regularUser) // this return all the values

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 } // this is used to prnt the object ditto

const obj3 = Object.assign({}, obj1, obj2, obj4) // this is used to assing the object in new 

// console.log(obj3); 

// const obj3 = {...obj1, ...obj2, ...obj4} ' this method also used to assign the object
//  console.log(obj3);


const users = [
  {
    id: 1,
    email: "abc@mail.com"
  },
  {
    id: 1,
    email: "abc@mail.com"
  },
  {
    id: 1,
    email: "abc@mail.com"
  },

]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
  coursename: "JS in hindi",
  price: "999",
  courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(courseInstructor);
console.log(instructor);

 const newObject = {
  name : "Amit",
  coursename : "JS in hindi",
  price : "free",
}






