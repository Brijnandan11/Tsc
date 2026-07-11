// ======================================================
// GETTERS & SETTERS IN TYPESCRIPT
// ======================================================

/*
Getter
------
Used to READ a private property.

Setter
------
Used to UPDATE a private property.

Why?

Because private properties cannot be
accessed directly from outside the class.
*/


// ======================================================
// BASIC EXAMPLE
// ======================================================

class Student {

    constructor(
        public name: string,
        private marks: number
    ) {}

    // Getter
    getMarks() {
        return this.marks;
    }

    // Setter
    setMarks(newMarks: number) {
        this.marks = newMarks;
    }
}

const student = new Student("Brij", 90);

// Read value
console.log(student.getMarks()); // 90

// Update value
student.setMarks(95);

console.log(student.getMarks()); // 95


// ======================================================
// WHY DO WE NEED GETTERS & SETTERS?
// ======================================================

class BankAccount {

    constructor(
        public owner: string,
        private balance: number
    ) {}

    getBalance() {
        return this.balance;
    }

    setBalance(amount: number) {
        this.balance = amount;
    }
}

const account = new BankAccount("Brij", 50000);

// ❌ Error
// console.log(account.balance);

// Read using Getter
console.log(account.getBalance());

// Update using Setter
account.setBalance(60000);

console.log(account.getBalance());


// ======================================================
// SETTER WITH VALIDATION
// ======================================================

class Employee {

    constructor(
        public name: string,
        private salary: number
    ) {}

    getSalary() {
        return this.salary;
    }

    setSalary(newSalary: number) {

        if (newSalary < 0) {
            console.log("Salary cannot be negative");
            return;
        }

        this.salary = newSalary;
    }
}

const emp = new Employee("Rahul", 50000);

console.log(emp.getSalary());

emp.setSalary(70000);

console.log(emp.getSalary());

emp.setSalary(-1000); // Invalid


// ======================================================
// ACTUAL get & set KEYWORDS
// ======================================================

class User {

    constructor(
        private age: number
    ) {}

    get Age() {
        return this.age;
    }

    set Age(value: number) {

        if (value < 0) {
            console.log("Invalid Age");
            return;
        }

        this.age = value;
    }
}

const user = new User(20);

// Getter
console.log(user.Age);

// Setter
user.Age = 25;

console.log(user.Age);


// ======================================================
// SUMMARY
// ======================================================

/*

Getter
------

Used to READ private data.

Syntax

get Age() {
    return this.age;
}

Usage

console.log(user.Age);

--------------------------------

Setter
------

Used to UPDATE private data.

Syntax

set Age(value: number) {
    this.age = value;
}

Usage

user.Age = 25;

--------------------------------

Why Getter & Setter?

✔ Read private data
✔ Update private data
✔ Add validation
✔ Protect object data

--------------------------------

Difference

Getter
------
Returns a value.

Setter
------
Updates a value.

*/