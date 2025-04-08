/*
A JavaScript class is not an object.
It is a template for JavaScript objects.
*/

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;

        console.log(this);
    }
}

const myCar = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);


