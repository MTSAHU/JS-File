const user = {        // object that have some values
    username: "Amit",
    price: 199,

    welcomeMessage: function(){   // Function have that you wants to return
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sahu" // we can change the value
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     // let username = "Amit"

//     // gettting error
//     console.log(this.username);
// }

// chai()  

const addTwo = (num1, num2) => {
    return num1 + num2
}