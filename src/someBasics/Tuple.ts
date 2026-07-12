// ======================================================
// TUPLES IN TYPESCRIPT
// ======================================================

// A tuple with two values:
// First value -> string
// Second value -> number

let student: [string, number] = ["Brij", 20];

console.log(student); // ["Brij", 20]

// ======================================================
// ACCESSING VALUES
// ======================================================

console.log(student[0]); // Brij
console.log(student[1]); // 20

// ======================================================
// CHANGING VALUES
// ======================================================

student[0] = "Rahul";
student[1] = 22;

console.log(student); // ["Rahul", 22]

// ======================================================
// INVALID VALUES
// ======================================================

//  Error
// let student1: [string, number] = [20, "Brij"];

//  Error
// let student2: [string, number] = ["Brij"];

//  Error
// let student3: [string, number] = ["Brij", 20, true];

// ======================================================
// MULTIPLE TYPES
// ======================================================

let user: [number, string, boolean] = [101, "Brij", true];

console.log(user);

// Output:
// [101, "Brij", true]

// ======================================================
// ARRAY VS TUPLE
// ======================================================

// Array
let marks: number[] = [90, 85, 70, 95];

// Can have any number of numbers
marks.push(100);

// Tuple
let person: [string, number] = ["Brij", 20];

// Fixed order:
// string -> number

// ======================================================
// TUPLE WITH OPTIONAL VALUE
// ======================================================

let employee: [string, number?];

employee = ["Brij"];
console.log(employee);

employee = ["Rahul", 25];
console.log(employee);

// ======================================================
// READONLY TUPLE
// ======================================================

const point: readonly [number, number] = [10, 20];

console.log(point);

//   Error
// point[0] = 50;

// ======================================================
// FUNCTION RETURNING A TUPLE
// ======================================================

function getUser(): [string, number] {
    return ["Brij", 20];
}

const result = getUser();

console.log(result);

// ======================================================
// DESTRUCTURING A TUPLE
// ======================================================

let [name, age] = student;

console.log(name); // Rahul
console.log(age);  // 22

// ======================================================
// SUMMARY
// ======================================================

/*
Tuple
-----
Stores a fixed number of values.

Syntax
------
let value: [type1, type2]

Example
-------
let student: [string, number] = ["Brij", 20];

Array vs Tuple
--------------
Array
- Same type of values
- Flexible length

Tuple
- Different types allowed
- Fixed order
- Fixed number of elements

Examples
--------
[string, number]
[number, string, boolean]
[string, number?]
readonly [number, number]
*/