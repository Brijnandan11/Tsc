// ======================================================
// CLASSES, OBJECTS & CONSTRUCTOR (PUBLIC SHORTHAND)
// ======================================================

/*
Class
-----
A blueprint for creating objects.

Object
------
An instance of a class.

Constructor
-----------
A special method that runs automatically
when an object is created using the 'new' keyword.

The 'public' keyword automatically:
1. Creates the property.
2. Assigns the value.
So you don't need to write:
    this.name = name;
    this.age = age;
*/


// ======================================================
// 1. BASIC CLASS USING PUBLIC CONSTRUCTOR
// ======================================================

class Student {
    constructor(
        public name: string,
        public age: number
    ) {}
}

const student1 = new Student("Brij", 20);
const student2 = new Student("Rahul", 22);

console.log(student1);
console.log(student2);


// ======================================================
// ACCESSING PROPERTIES
// ======================================================

console.log(student1.name); // Brij
console.log(student1.age);  // 20


// ======================================================
// MODIFYING PROPERTIES
// ======================================================

student1.age = 21;

console.log(student1);


// ======================================================
// MULTIPLE OBJECTS
// ======================================================

class Car {

    constructor(
        public brand: string,
        public model: string,
        public price: number
    ) {}
}

const car1 = new Car("Toyota", "Fortuner", 4500000);
const car2 = new Car("BMW", "X5", 9500000);
const car3 = new Car("Audi", "A6", 7000000);

console.log(car1);
console.log(car2);
console.log(car3);


// ======================================================
// DEFAULT VALUES
// ======================================================

class Laptop {

    constructor(
        public brand: string,
        public ram: number = 8,
        public storage: number = 512
    ) {}
}

const laptop1 = new Laptop("Dell");
const laptop2 = new Laptop("HP", 16, 1024);

console.log(laptop1);
console.log(laptop2);


// ======================================================
// READONLY PROPERTY
// ======================================================

class Book {

    constructor(
        public readonly id: number,
        public title: string
    ) {}
}

const book = new Book(1, "TypeScript");

console.log(book);

//   Error
// book.id = 2;


// ======================================================
// PUBLIC IS DEFAULT
// ======================================================

class Mobile {

    constructor(
        public brand: string,
        public model: string,
        public price: number
    ) {}
}

const phone = new Mobile("Apple", "iPhone 16", 90000);

console.log(phone.brand);
console.log(phone.model);
console.log(phone.price);


// ======================================================
// ANOTHER EXAMPLE
// ======================================================

class User {

    constructor(
        public username: string,
        public email: string,
        public isAdmin: boolean
    ) {}
}

const user1 = new User(
    "brij11",
    "brij@gmail.com",
    false
);

console.log(user1.username);
console.log(user1.email);
console.log(user1.isAdmin);

// ======================================================
// CLASS WITH METHODS
// ======================================================

class Employee {

    constructor(
        public name: string,
        public salary: number
    ) {}

    showDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Salary: ${this.salary}`);
    }
}

const emp1 = new Employee("Brij", 50000);

emp1.showDetails();


// ======================================================
// WHAT HAPPENS INTERNALLY?
// ======================================================`

/*

When you write

class Student {

    constructor(
        public name: string,
        public age: number
    ) {}

}

TypeScript automatically converts it to:

--------------------------------------------------

class Student {

    name: string;
    age: number;

    constructor(name: string, age: number) {

        this.name = name;
        this.age = age;

    }

}

--------------------------------------------------

So,

public name: string

means

1. Create property "name"
2. Assign constructor value automatically

*/


// ======================================================
// SUMMARY
// ======================================================

/*

class
-----
Blueprint

object
------
Instance of class

constructor
-----------
Runs automatically when using new.

new
---
Creates an object.

public
------
Creates property + assigns value automatically.

Access Property
---------------
object.property

Example

student.name

Modify Property
---------------
student.age = 21

Keywords
--------
class
new
constructor
public
this

*/