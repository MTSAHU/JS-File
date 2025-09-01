class Car {
    constructor(name){
        this.brand = name;
    }

    present() {
        return 'I have a ' + this.brand;
    }
}

const myCar = new Car("Ford");
myCar.present();

console.log(myCar.brand); // Ford