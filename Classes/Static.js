class MyClass {
    static staticProperty = "This is a static property";
  
    constructor(instanceProperty) {
      this.instanceProperty = instanceProperty;
    }
  
    static staticMethod() {
      console.log("This is a static method.");
      console.log(MyClass.staticProperty); // Accessing static property within the static method
    }
  
    instanceMethod() {
      console.log("This is an instance method.");
      console.log(this.instanceProperty); // Accessing instance property
      console.log(MyClass.staticProperty); // Accessing static property from an instance method
    }
  }
  
  // Accessing static members directly on the class (correct way)
  console.log(MyClass.staticProperty);
  MyClass.staticMethod();
  
  // Creating instances of the class
  const instance1 = new MyClass("Instance 1 Property");
  const instance2 = new MyClass("Instance 2 Property");
  
  // Accessing instance members (requires an instance)
  instance1.instanceMethod();
  instance2.instanceMethod();
  
  // Incorrect attempt to call static method on an instance (will cause TypeError)
  // instance2.staticMethod(); // This line will throw the TypeError
  
  // Accessing static property through an instance (works, but not the intended way)
  console.log(instance1.staticProperty); // JavaScript allows this, but it's less clear
  
  // Correct way to call the static method:
  MyClass.staticMethod();