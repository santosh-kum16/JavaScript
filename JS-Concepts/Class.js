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

let santosh = new Person("Santosh Kumar");

let name = santosh.getName();
console.log(name); //Santosh Kumar

// To verify the fact that classes are special functions, you can use the typeof operator of to check the type of the Person class.
console.log(typeof Person); // function
// It returns function as expected.

//The santosh object is also an instance of the Person and Object types:-
console.log(santosh instanceof Person); // true
console.log(santosh instanceof Object); // true