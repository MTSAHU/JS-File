const coding = ["js", "cpp", "python", "ruby"]

// forEach iteration
// coding.forEach(function (val){
//     console.log(val);
    
// })

coding.forEach((item) => {
    // console.log(item);
})

function printMe(item){  // create a funtion whose name PrintMe that have (item) 
    // console.log(item); // return item
}

coding.forEach(printMe) // call the function printMe (Assign the value of coding)


coding.forEach((item, index, arr)=> {
    // console.log(item, index, arr); index start from zero
})

const myCoding = [
{
    languageName: "js",
    languageFileName: "js"
},
{
    languageName: "java",
    languageFileName: "java"
},
{
    languageName: "python",
    languageFileName: "py"
},

]

myCoding.forEach((item)=> {
    console.log(item.languageName);
})
