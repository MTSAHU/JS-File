/*Class Inheritance
To create a class inheritance, use the extends keyword.
A class created with a class inheritance inherits all the methods from another class:*/

//Example 
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      // Call the constructor of the parent class (Animal)
      super(name);
      this.breed = breed;
    }
  
    speak() {
      // Override the speak method of the parent class
      console.log(`${this.name} barks!`);
    }
  
    wagTail() {
      console.log(`${this.name} wags its tail.`);
    }
  }
  
  class Cat extends Animal {
    constructor(name, color) {
      super(name);
      this.color = color;
    }
  
    speak() {
      console.log(`${this.name} meows.`);
    }
  
    scratch() {
      console.log(`${this.name} scratches.`);
    }
  }
  
  // Creating instances of the classes
  const genericAnimal = new Animal("Generic Animal");
  const myDog = new Dog("Buddy", "Golden Retriever");
  const myCat = new Cat("Whiskers", "Calico");
  
  // Calling methods
  genericAnimal.speak(); // Output: Generic Animal makes a sound.
  myDog.speak();       // Output: Buddy barks!
  myDog.wagTail();     // Output: Buddy wags its tail.
  myCat.speak();       // Output: Whiskers meows.
  myCat.scratch();     // Output: Whiskers scratches.
  
  // Checking inheritance using instanceof
  console.log(myDog instanceof Animal); // Output: true
  console.log(myCat instanceof Animal); // Output: true
  console.log(genericAnimal instanceof Dog); // Output: false 

