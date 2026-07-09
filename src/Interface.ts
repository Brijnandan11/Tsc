// ======================================================
// INTERFACE
// ======================================================

interface User {
    name: string;
    age: number;
}

const user1: User = {
    name: "Brij",
    age: 20
};

console.log(user1);


// ======================================================
// INTERFACE WITH OPTIONAL PROPERTY
// ======================================================

interface Student {
    name: string;
    age: number;
    college?: string; // Optional
}

const student1: Student = {
    name: "Rahul",
    age: 21
};

console.log(student1);


// ======================================================
// INTERFACE WITH READONLY PROPERTY
// ======================================================

interface Employee {
    readonly id: number;
    name: string;
}

const emp: Employee = {
    id: 101,
    name: "Brij"
};

console.log(emp);

//  Error
// emp.id = 200;


// ======================================================
// USING INTERFACE IN A FUNCTION
// ======================================================

interface Person {
    name: string;
    age: number;
}

function printPerson(person: Person) {
    console.log(person.name);
    console.log(person.age);
}

printPerson({
    name: "Amit",
    age: 25
});


// ======================================================
// INTERFACE FOR ARRAYS OF OBJECTS
// ======================================================

interface Product {
    id: number;
    name: string;
    price: number;
}

const products: Product[] = [
    {
        id: 1,
        name: "Laptop",
        price: 50000
    },
    {
        id: 2,
        name: "Mouse",
        price: 1000
    }
];

console.log(products);