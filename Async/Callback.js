/*
A callback function is a function passed as an argument to another function,
which is then invoked inside the outer function to complete some kind of action.

Essentially, you're telling the outer function, "Hey, when you're done with
what you're doing, call this other function for me."

Common uses include:
- Asynchronous operations (like fetching data, timeouts)
- Event handling (like button clicks)
- Array methods (like map, filter, reduce)
*/

// EXAMPLE 1 Synchronous Callback

function Greet(name, callback) {
    const greeting = `Hello, ${name}!`;
    callback(greeting);
}

function printGreeting(message) {
    console.log(message);
}

Greet("Amit", printGreeting );

// EXAMPLE 2 Asynchronous Callback

function delayedGreeting(name, callback) {
    setTimeout(() => {
        const greeting = `DelayedGreeting ${name}!`;
        callback(greeting);

    }, 2000);
}

delayedGreeting("Rahul" , printGreeting);

//Example 3: Array.map with a callback

const numbers = [1, 2, 3, 4, 5];
const SquaredNumbers = numbers.map((num) => num * num);
console.log(SquaredNumbers);

//The map method takes a callback function. This callback is applied to each
//element of the numbers array, and the results are collected into a new array.

//Example 5: callback that handles errors.

function fetchData(url, successCallback, errorCallback) {
    fetch(url).then(response => {
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    }).then(data => {
      successCallback(data);
    }).catch(error => {
      errorCallback(error);
    });
  }
  
  function handleSuccess(data) {
    console.log('Data received:', data);
  }
  
  function handleError(error) {
    console.error('Error fetching data:', error);
  }
  
  //Simulate a successful fetch
  fetchData('https://jsonplaceholder.typicode.com/todos/1', handleSuccess, handleError);
  
  //Simulate a failed fetch
  fetchData('https://jsonplaceholder.typicode.com/todos/999', handleSuccess, handleError);

