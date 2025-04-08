const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc}, currVal: ${currVal}`);
//     return acc + currVal
// }, 0)  +++ (acc = index , currval = val)

const myTotal = myNums.reduce((acc, currVal) => acc + currVal, 0)

console.log(myTotal); // it adds all the values

const shoppingCart = [ // const
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) =>
acc + item.price, 0) // add total course and total couse price 

console.log(priceToPay);