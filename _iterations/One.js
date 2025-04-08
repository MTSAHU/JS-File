// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("Found 5");
    }  
    // console.log(element);                 

}
//    console.log(element);

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`); // outer loop
    for (let j = 1; j <=10; j++) {
        // console.log(`inner loop value: ${j} and inner loop index: ${i}`); // inner loop

        // console.log(i + '*' + j + '=' + i * j); // inner loop index multiply with inner loop value
    }

}

let myArray = ["flash", "batman", "superman"]
    // console.log(myArray.length); // check array length
for (let index = 0; index < myArray.length; index++)  // index start from 0 we doesn't use (<= in last it return undefined) we just use < 
    {
    const element = myArray[index]; // myArray mean names and index mean index num start from 0
    // console.log(element);
}   

//++++++ break and continue ++++++//

for (let index = 1; index <=20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        break;     // break to stop and continue to next line
    }
    console.log(`Value of i is ${index}`);
}


