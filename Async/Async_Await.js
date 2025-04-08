//Async/await in JavaScript is a syntactic sugar built on top of promises, making asynchronous code easier to write and read. //
/*
1. async Keyword:

The async keyword is used to define an asynchronous function.
An async function implicitly returns a promise.
If the function returns a value, that value is wrapped in a resolved promise.
If the function throws an error, that error is wrapped in a rejected promise. 
*/

// async function myAsyncFunction() {
//     return "Hello,Async";
// };

// myAsyncFunction().then(console.log);

// async function myAsyncErrorFunction() {                 Do NOT USE THIS TYPE OF FUNCTION
//     return  new Error ("Something went wrong!");
// };

// myAsyncErrorFunction().catch(console.error);

// Example 1: Fetching data from an API
async function fetchUserData(userId) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error; // Re-throw the error to be handled elsewhere
    }
  }
  
  // Example usage:
  async function displayUserData(userId) {
    try {
      const user = await fetchUserData(userId);
      console.log("User data:", user);
    } catch (error) {
      console.error("Failed to display user data:", error);
    }
  }
  
  displayUserData(1); // Fetch and display user with ID 1
  
  // Example 2: Sequential asynchronous operations
  async function processDataSequentially(data) {
    try {
      const processed1 = await processStep1(data);
      const processed2 = await processStep2(processed1);
      const finalResult = await processStep3(processed2);
      return finalResult;
    } catch (error) {
      console.error("Error during sequential processing:", error);
      throw error;
    }
  }
  
  async function processStep1(input) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(input * 2), 200);
    });
  }
  
  async function processStep2(input) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(input + 10), 100);
    });
  }
  
  async function processStep3(input) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`Final: ${input}`), 300);
    });
  }
  
  processDataSequentially(5).then(console.log).catch(console.error);
  
  // Example 3: Parallel asynchronous operations using Promise.all()
  async function fetchMultipleUsers(userIds) {
    try {
      const promises = userIds.map((id) => fetchUserData(id));
      const users = await Promise.all(promises);
      return users;
    } catch (error) {
      console.error("Error fetching multiple users:", error);
      throw error;
    }
  }
  
  fetchMultipleUsers([1, 2, 3]).then(console.log).catch(console.error);
  
  //Example 4: Async generator function.
  
  async function* asyncGenerator(array) {
    for (const item of array) {
      await new Promise(resolve => setTimeout(resolve, 100)); //simulate async delay
      yield item;
    }
  }
  
  async function consumeGenerator(array) {
    for await (const item of asyncGenerator(array)) {
      console.log(item);
    }
  }
  
  consumeGenerator([1,2,3,4,5]);
  
  //Example 5: Timeout using promises and async/await
  
  async function timeoutPromise(promise, ms) {
    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), ms)
    );
    return Promise.race([promise, timeout]);
  }
  
  async function fetchDataWithTimeout(userId){
    try{
      const user = await timeoutPromise(fetchUserData(userId), 500);
      console.log("User data with timeout: ", user);
    }catch (e){
      console.log("Timeout or other error", e)
    }
  }
  
  fetchDataWithTimeout(1);
  fetchDataWithTimeout(100); // likely to timeout.


/*
2. await Keyword:

The await keyword can only be used inside an async function.
It pauses the execution of the async function until a promise is resolved.   
The await keyword returns the resolved value of the promise.
If the promise is rejected, the await keyword throws an error. 
*/