// ======================================================
// ARRAYS IN TYPESCRIPT
// ======================================================

// 1. Number Array
let numbers: number[] = [10, 20, 30];
console.log(numbers); // [10, 20, 30]

// 2. String Array
let names: string[] = ["Brij", "Rahul", "Amit"];
console.log(names);

// 3. Boolean Array
let flags: boolean[] = [true, false, true];
console.log(flags);

// 4. Empty Array
let marks: number[] = [];
marks.push(95);
marks.push(88);
console.log(marks); // [95, 88]

// ======================================================
// ACCESSING ELEMENTS
// ======================================================

let fruits: string[] = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango

// ======================================================
// CHANGING VALUES
// ======================================================

fruits[1] = "Orange";

console.log(fruits); // ["Apple", "Orange", "Mango"]

// ======================================================
// ARRAY LENGTH
// ======================================================

console.log(fruits.length); // 3

// ======================================================
// ADDING ELEMENTS
// ======================================================

fruits.push("Grapes");      // Add at end
fruits.unshift("Kiwi");     // Add at beginning

console.log(fruits);

// ======================================================
// REMOVING ELEMENTS
// ======================================================

fruits.pop();      // Remove last
fruits.shift();    // Remove first

console.log(fruits);

// ======================================================
// LOOPING THROUGH ARRAY
// ======================================================

let colors: string[] = ["Red", "Green", "Blue"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// ======================================================
// for...of LOOP
// ======================================================

for (const color of colors) {
    console.log(color);
}

// ======================================================
// ARRAY OF OBJECTS
// ======================================================

let users: { name: string; age: number }[] = [
    { name: "Brij", age: 20 },
    { name: "Rahul", age: 22 }
];

// console.log(users[0].name); // Brij
// console.log(users[1].age);  // 22

// ======================================================
// MIXED TYPES (Union Types)
// ======================================================

let values: (string | number)[] = ["Brij", 20, "Developer", 95];

console.log(values);

// ======================================================
// COMMON ARRAY METHODS
// ======================================================

let nums: number[] = [1, 2, 3, 4, 5];

// Add
nums.push(6);

// Remove last
nums.pop();

// Check value
console.log(nums.includes(3)); // true

// Find index
console.log(nums.indexOf(4)); // 3

// Reverse
console.log(nums.reverse());

// ======================================================
// SUMMARY
// ======================================================

/*
Declare Array
-------------
let arr: number[] = [1, 2, 3];

Common Methods
--------------
push()       -> Add at end
pop()        -> Remove last
shift()      -> Remove first
unshift()    -> Add at beginning
length       -> Total elements
includes()   -> Check if value exists
indexOf()    -> Find index
reverse()    -> Reverse array

Loop
----
for
for...of

Array Types
-----------
number[]
string[]
boolean[]
object[]
(string | number)[]
*/