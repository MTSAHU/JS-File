function saymyname(){
    console.log("A")
    console.log("M")
    console.log("I")
    console.log("T")
}

// saymyname() // calling the function After it print result

function addtwo(){
    let num1 = 4
    let num2 = 5
    let sum = num1 + num2
    console.log(sum)        // inside the function it couldn't print outside 
}

// addtwo() function call

function addtwonumbers(num1, num2){
        let result = num1 + num2
        console.log(result);
}

// addtwonumbers(4, 5) // in this way we can pass the value

// const result  = addtwonumbers(4, 5) +++ decleared the variable
// console.log("result", result);

function loginUserMessage(username = "Amit"){
    if(!username){                  // it check if username is empty return please enter a username
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`  // it return the value
}

// console.log(loginUserMessage("Amit"));

function calculatecartprice(val1, val2, ...num1){
    return num1  // Here you must return the value want if not return then it return undefined
}

// console.log(calculatecartprice(200, 400, 500, 600));

const user = {
    username: "Amit",
    price: 199
    
}

// const pw = {
//     username: "physics",
//     price: 299
// }
  function handleObject(anyobject){
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

  } // in single function we can pass multiple object it helps us not create multiple function//
  

  handleObject(user) 
//   handleObject(pw)
  handleObject({
    username: "Sahu", // in this you write with it
    price: 399
  })

  const myNewArray = [200, 400, 600, 800] // array with values

  function returnSecondValue(getArray){
    return getArray[1] // array index start from 0
  }

  console.log(returnSecondValue(myNewArray));
  console.log(returnSecondValue([200, 400, 600, 800]));
