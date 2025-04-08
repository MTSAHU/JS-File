/*  
1. Promise States:
A promise can be in one of three states:

Pending: The initial state, neither fulfilled nor rejected.
Fulfilled (Resolved): The operation completed successfully, and the promise has a resulting value.
Rejected: The operation failed, and the promise has a reason for the failure (an error).  
*/ 

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const Success = Math.random() > 0.5;

        if (Success) {
            resolve("Operation Successful");
        } else {
            reject("Operation Failed");
        }
    },1000);
});

promise                  // Use Case of Catch Error Management, Prevent Unhandled Rejections, Promise Chaining
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })
    

//Example 2  Simple Promise//

const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Operation Successful");
    },2000)
});

mypromise
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })

//Chaining Promise//
const getUserData = new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "Alice" }), 1000);
  });
  
  getUserData
    .then((user) => {
      console.log("User:", user);
      return new Promise((resolve) => {
        setTimeout(() => resolve({ id: user.id, posts: ["Post 1", "Post 2"] }), 1000);
      });
    })
    .then((posts) => {
      console.log("Posts:", posts);
    })
    .catch((error) => {
      console.error("Error:", error);
    });    