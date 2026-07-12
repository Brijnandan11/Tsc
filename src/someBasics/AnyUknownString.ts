// ======================================================
// any
// ======================================================

// 'any' disables type checking.
// A variable of type 'any' can store any value.

let value: any = "Brij";

value = 20;
value = true;
value = [1, 2, 3];

console.log(value);

// Avoid using 'any' unless absolutely necessary.


// ======================================================
// unknown
// ======================================================

// 'unknown' can store any value,
// but you MUST check its type before using it.

let userInput: unknown = "Hello";

//  Error
// console.log(userInput.toUpperCase());

if (typeof userInput === "string") {
    console.log(userInput.toUpperCase()); // HELLO
}

userInput = 100;

if (typeof userInput === "number") {
    console.log(userInput + 10); // 110
}


// ======================================================
// any vs unknown
// ======================================================

let a: any = "Brij";
console.log(a.toUpperCase()); // Allowed

let b: unknown = "Brij";

//  Error
// console.log(b.toUpperCase());

if (typeof b === "string") {
    console.log(b.toUpperCase()); // BRIJ
}


// ======================================================
// void
// ======================================================

// A function that returns nothing.

function greet(): void {
    console.log("Hello");
}

greet();


// ======================================================
// null
// ======================================================

// Represents an intentional empty value.

let data: null = null;

console.log(data); // null


// ======================================================
// undefined
// ======================================================

// Represents a variable that has not been assigned a value.

let value2: undefined = undefined;

console.log(value2); // undefined


// ======================================================
// null vs undefined
// ======================================================

let x = null;
let y = undefined;

console.log(x); // null
console.log(y); // undefined

/*
null      -> Intentionally empty value
undefined -> Value not assigned
*/


// ======================================================
// never
// ======================================================

// A function that NEVER returns.

function throwError(): never {
    throw new Error("Something went wrong");
}

// A function with an infinite loop also returns never.

function infiniteLoop(): never {
    while (true) {}
}


// ======================================================
// SUMMARY
// ======================================================

/*
any
---
Can store any value.
No type checking.
Avoid when possible.

Example:
let value: any = 10;

----------------------------

unknown
-------
Can store any value.
Must check the type before using it.

Example:
let value: unknown = "Hello";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}

----------------------------

void
----
Function returns nothing.

Example:
function greet(): void {}

----------------------------

null
----
Intentional empty value.

Example:
let data: null = null;

----------------------------

undefined
---------
Value not assigned.

Example:
let value: undefined = undefined;

----------------------------

never
-----
Function never finishes normally.

Example:
function throwError(): never {
    throw new Error();
}

function infiniteLoop(): never {
    while (true) {}
}

======================================================

Quick Difference

any       -> Anything is allowed (unsafe)
unknown   -> Anything is allowed, but check first (safe)
void      -> Returns nothing
null      -> Intentionally empty
undefined -> No value assigned
never     -> Never returns
*/