// =====================================================
// PRIMITIVE TYPES
// =====================================================

// string
let name = "Brij";
console.log(name); // Brij

// number
let age = 20;
console.log(age); // 20

// boolean
let isStudent = true;
console.log(isStudent); // true

// bigint
let bigNumber = 12345678901234567890n;
console.log(bigNumber);

// symbol
let id = Symbol("id");
console.log(id);

// null
let data = null;
console.log(data); // null

// undefined
let value = undefined;
console.log(value); // undefined


// =====================================================
// PRIMITIVE VALUES ARE COPIED
// =====================================================

let a = 10;
let b = a; // Copy the value

console.log(a); // 10
console.log(b); // 10

b = 50;

console.log(a); // 10
console.log(b); // 50

// Changing b does NOT change a.


// =====================================================
// REFERENCE TYPE : OBJECT
// =====================================================

let user1 = {
    name: "Brij"
};

let user2 = user1; // Copy the reference

console.log(user1); // { name: "Brij" }
console.log(user2); // { name: "Brij" }

user2.name = "Rahul";

console.log(user1.name); // Rahul
console.log(user2.name); // Rahul

// Both variables point to the same object.