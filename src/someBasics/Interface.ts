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


// ======================================================
// INTERFACE EXTENDS ANOTHER INTERFACE
// ======================================================

interface Animal {
    name: string;
}

interface Dog extends Animal { // extends ka matlab ye hai ki jo jo animal m property hai vo toh dog ke 
    breed: string;             //pass hongi hi but aur property jo dog m hai vo bhi hongi 
}

const dog: Dog = {
    name: "Tommy",
    breed: "Labrador"
};

console.log(dog);


// ======================================================
// TYPE ALIAS
// ======================================================

type UserType = {
    name: string;
    age: number;
};

const user2: UserType = {
    name: "Rohan",
    age: 22
};

console.log(user2);


// ======================================================
// TYPE ALIAS WITH UNION TYPES
// ======================================================

type Status = "Pending" | "Success" | "Failed";

let payment: Status = "Success";

console.log(payment);


// ======================================================
// TYPE ALIAS FOR PRIMITIVES
// ======================================================

type ID = number;

let userId: ID = 101;

console.log(userId);


// ======================================================
// TYPE ALIAS WITH INTERSECTION (&)
// ======================================================

type Address = {
    city: string;
};

type Customer = {
    name: string;
};

type CustomerDetails = Customer & Address;

const customer: CustomerDetails = {
    name: "Brij",
    city: "Delhi"
};

console.log(customer);


// ======================================================
// INTERFACE MERGING
// ======================================================

interface Car {
    brand: string;
}

interface Car {
    model: string;
}

const car: Car = {
    brand: "Toyota",
    model: "Fortuner"
};

console.log(car);


// ======================================================
// SUMMARY
// ======================================================

/*

INTERFACE
---------
Used mainly for object shapes.

interface User {
    name: string;
    age: number;
}

Features
--------
✔ Objects
✔ Functions
✔ Classes
✔ Extends
✔ Declaration Merging

----------------------------------------

TYPE ALIAS
----------

type User = {
    name: string;
    age: number;
};

Features
--------
✔ Objects
✔ Primitive Types
✔ Union Types
✔ Intersection Types
✔ Tuples
✔ Function Types

----------------------------------------

WHEN TO USE WHAT?

Use Interface
-------------
✔ Object structures
✔ API responses
✔ Class implementations
✔ Large projects

Use Type
--------
✔ Union Types
✔ Primitive aliases
✔ Tuples
✔ Function types
✔ Intersections

----------------------------------------

INTERFACE vs TYPE

Interface
---------
interface User {}

✔ Can extend
✔ Can merge
✔ Best for object shapes

Type
----
type User = {}

✔ Can create unions
✔ Can create intersections
✔ Can alias primitives
✔ Can alias tuples
✔ More flexible

*/