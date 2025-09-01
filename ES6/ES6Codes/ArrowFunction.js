//Normal function//
hello = function() {
    return "Hello, World!";
}

console.log(hello());

//Arrow function//
 Namaste = () =>{
    return "Namaste, Duniya!";
 }

console.log(Namaste());

//Function Has only One Statement And return A value//

car = () => "Mahindra SUV"

console.log(car());

// Arrow Function with parameters//
greet = val => "hello " + val;
console.log(greet("Amit"))

//Arrow Function with multiple parameters//
Group = (member1,member2,member3,) => "Group Members are: " + member1 + ", " + member2 + " and " + member3;
console.log(Group("Amit","Zainab","Suresh"))