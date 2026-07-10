// ======================================================
// 'this' KEYWORD IN TYPESCRIPT
// ======================================================

/*
The 'this' keyword refers to the CURRENT OBJECT.

It is used inside a class to access the
properties and methods of that object.
*/

//this keyword hum tbb use krte hai jbb hume class ke andar kisi property ko access krna ho ya method ko call krna ho.


// ======================================================
// BASIC EXAMPLE
// ======================================================

class Student {

    constructor(
        public name: string,
        public age: number
    ) {}

    display() {
        console.log(this.name);
        console.log(this.age);
    }
}

const student1 = new Student("Brij", 20);

student1.display();

/*
Output

Brij
20
*/


// ======================================================
// WHY USE 'this'?
// ======================================================

class User {

    constructor(
        public username: string
    ) {}

    showUsername() {
        console.log(this.username);
    }
}

const user1 = new User("brij11");

user1.showUsername();

/*
this.username

means

Current object's username
*/


// ======================================================
// MULTIPLE OBJECTS
// ======================================================

class Car {

    constructor(
        public brand: string,
        public model: string
    ) {}

    display() {
        console.log(this.brand);
        console.log(this.model);
    }
}

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("BMW", "X5");

car1.display();

car2.display();

/*
Output

Toyota
Fortuner

BMW
X5

For car1:
this -> car1

For car2:
this -> car2
*/


// ======================================================
// MODIFYING OBJECT VALUES
// ======================================================

class Employee {

    constructor(
        public name: string,
        public salary: number
    ) {}

    increaseSalary(amount: number) {
        this.salary = this.salary + amount;
    }
}

const emp = new Employee("Brij", 50000);

console.log(emp.salary); // 50000

emp.increaseSalary(10000);

console.log(emp.salary); // 60000


// ======================================================
// 'this' INSIDE CONSTRUCTOR
// ======================================================

class Mobile {

    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }
}

const phone = new Mobile("Apple");

console.log(phone.brand);

/*
this.brand

Left side  -> Object property

brand

Right side -> Constructor parameter
*/


// ======================================================
// SHORTHAND CONSTRUCTOR
// ======================================================

class Laptop {

    constructor(
        public brand: string
    ) {}
}

const laptop = new Laptop("Dell");

console.log(laptop.brand);

/*
TypeScript automatically does:

this.brand = brand;
*/


// ======================================================
// WHAT DOES 'this' REFER TO?
// ======================================================

class Book {

    constructor(
        public title: string
    ) {}

    showTitle() {
        console.log(this.title);
    }
}

const book1 = new Book("TypeScript");
const book2 = new Book("JavaScript");

book1.showTitle(); // TypeScript
book2.showTitle(); // JavaScript

/*
book1.showTitle()

this -> book1

----------------------

book2.showTitle()

this -> book2
*/


// ======================================================
// SUMMARY
// ======================================================

/*

this
----
Refers to the CURRENT OBJECT.

Examples
--------

this.name
this.age
this.salary

Used For
--------

✔ Access object properties
✔ Modify object properties
✔ Call object methods

Example

class Student {

    constructor(
        public name: string
    ) {}

    display() {
        console.log(this.name);
    }

}

const student = new Student("Brij");

student.display();

Output

Brij

Remember

this
↓

Current Object

student.display()

this
↓

student

*/