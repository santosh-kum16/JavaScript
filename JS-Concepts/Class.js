// ES6 class Declaration

class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

/**
 This Person class behaves like the Person type in the previous example. However, instead of using a constructor/prototype pattern, it uses the class keyword.

In the Person class, the constructor() is where you can initialize the properties of an instance. JavaScript automatically calls the constructor() method when you instantiate an object of the class.

The following creates a new Person object, which will automatically call the constructor() of the Person class:
 */