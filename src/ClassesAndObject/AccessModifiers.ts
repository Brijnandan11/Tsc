// ======================================================
// ACCESS MODIFIERS IN TYPESCRIPT
// ======================================================

/*
Access Modifiers control where a class property
or method can be accessed.

There are three access modifiers:

1. public
2. private
3. protected
*/


// agr access modifiers ke aange readonly lg jaye toh uska mtlb ye hota hai ki iss propety ko tum only read kr skte ho, usme koi value assign ya update nhi kr skte ho.


// ======================================================
// 1. PUBLIC
// ======================================================

/*
Public members can be accessed
from anywhere.

It is the default access modifier.
*/

class Student {

    constructor(
        public name: string,
        public age: number
    ) {}
}

const student = new Student("Brij", 20);

console.log(student.name); // Brij
console.log(student.age);  // 20

student.age = 21;

console.log(student.age); // 21


// ======================================================
// 2. PRIVATE
// ======================================================

/*
Private members can only be accessed
inside the same class.
*/

class BankAccount {

    constructor(
        public owner: string,
        private balance: number
    ) {}

    showBalance() {
        console.log(this.balance);
    }
}

const account = new BankAccount("Brij", 50000);

console.log(account.owner); // Brij

//  Error
// console.log(account.balance);

account.showBalance(); // 50000


// ======================================================
// 3. PROTECTED
// ======================================================

/*
Protected members can be accessed

✔ Inside the class
✔ Inside child classes

❌ Cannot be accessed outside the class
*/

class Animal {

    constructor(
        protected name: string
    ) {}

    showName() {
        console.log(this.name);
    }
}

class Dog extends Animal {

    bark() {
        console.log(`${this.name} is Barking`);
    }
}

const dog = new Dog("Tommy");

dog.bark();

//  Error
// console.log(dog.name);


// ======================================================
// PUBLIC EXAMPLE
// ======================================================

class Car {

    constructor(
        public brand: string,
        public model: string
    ) {}
}

const car = new Car("Toyota", "Fortuner");

console.log(car.brand);
console.log(car.model);


// ======================================================
// PRIVATE EXAMPLE
// ======================================================

class Employee {

    constructor(
        public name: string,
        private salary: number
    ) {}

    getSalary() {
        return this.salary;
    }
}

const emp = new Employee("Rahul", 70000);

console.log(emp.name);

console.log(emp.getSalary());

//  Error
// console.log(emp.salary);


// ======================================================
// PROTECTED EXAMPLE
// ======================================================

class Person {

    constructor(
        protected city: string
    ) {}
}

class StudentInfo extends Person {

    display() {
        console.log(this.city);
    }
}

const info = new StudentInfo("Delhi");

info.display();

//  Error
// console.log(info.city);


// ======================================================
// SUMMARY
// ======================================================

/*

public
------

✔ Inside class
✔ Outside class
✔ Child class

-------------------------

private
-------

✔ Inside class

❌ Outside class
❌ Child class

-------------------------

protected
---------

✔ Inside class
✔ Child class

❌ Outside class

-------------------------

Example

class User {

    constructor(
        public name: string,
        private password: string,
        protected city: string
    ) {}

}

-------------------------

Accessibility

                 Inside   Outside   Child

public             ✔         ✔        ✔

private            ✔         ❌       ❌

protected          ✔         ❌       ✔

*/