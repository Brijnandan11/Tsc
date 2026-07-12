// ======================================================
// TYPE INFERENCE & TYPE ANNOTATION IN TYPESCRIPT
// ======================================================

/*
Type Inference
--------------
TypeScript automatically guesses the type.

Type Annotation
---------------
You explicitly tell TypeScript the type.
*/


// ======================================================
// TYPE INFERENCE
// ======================================================

// TypeScript infers 'string'
let name = "Brij";

// TypeScript infers 'number'
let age = 20;

// TypeScript infers 'boolean'
let isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);

// TypeScript automatically knows:
//
// name       -> string
// age        -> number
// isStudent  -> boolean


// ======================================================
// TYPE ANNOTATION
// ======================================================

// You explicitly specify the type.

let firstName: string = "Brij";
let marks: number = 95;
let passed: boolean = true;

console.log(firstName);
console.log(marks);
console.log(passed);


// ======================================================
// ARRAY EXAMPLE
// ======================================================

// Inference
let numbers = [10, 20, 30];
// Type: number[]

// Annotation
let scores: number[] = [90, 85, 70];


// ======================================================
// OBJECT EXAMPLE
// ======================================================

// Inference
let user = {
    name: "Brij",
    age: 20
};

// Type:
// {
//     name: string;
//     age: number;
// }


// Annotation
let student: { name: string; age: number } = {
    name: "Rahul",
    age: 22
};


// ======================================================
// FUNCTION PARAMETERS
// ======================================================

// Parameters should be annotated.

function add(a: number, b: number) {
    return a + b;
}

console.log(add(10, 20));


// ======================================================
// FUNCTION RETURN TYPE
// ======================================================

function multiply(a: number, b: number): number {
    return a * b;
}

console.log(multiply(5, 4));


// ======================================================
// VARIABLE DECLARATION
// ======================================================

// Inference
let city = "Delhi";

// Annotation
let country: string = "India";


// ======================================================
// WHEN INFERENCE FAILS
// ======================================================

// TypeScript cannot know what type
// this variable should be later.

let value;

value = 10;
value = "Hello";
value = true;

// Type becomes 'any' (unless strict settings prevent it).


// Better

let data: string;

data = "TypeScript";


// ======================================================
// SUMMARY
// ======================================================

/*
Type Inference
--------------
TypeScript guesses the type.

Example:
let age = 20;
// age -> number

Advantages
----------
✔ Less code
✔ Cleaner
✔ Recommended when obvious

-------------------------------------

Type Annotation
---------------
You write the type yourself.

Example:
let age: number = 20;

Advantages
----------
✔ More explicit
✔ Better for function parameters
✔ Better for objects and APIs

-------------------------------------

Use Inference
-------------
let name = "Brij";
let age = 20;
let numbers = [1, 2, 3];

-------------------------------------

Use Annotation
--------------
let name: string = "Brij";
let age: number = 20;
let user: { name: string; age: number };

function add(a: number, b: number): number {}

-------------------------------------

Rule of Thumb
-------------
✔ Let TypeScript infer simple variable types.
✔ Add annotations for function parameters, return types (when helpful), complex objects, APIs, and public interfaces.
*/