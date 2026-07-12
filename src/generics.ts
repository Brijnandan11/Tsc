// ======================================================
// GENERICS IN TYPESCRIPT
// ======================================================

/*
Generics allow us to write reusable,
type-safe code.

Syntax

<T>

T = Type (can be any name)
*/


// ======================================================
// WITHOUT GENERICS
// ======================================================

function getNumber(value: number): number {
    return value;
}

function getString(value: string): string {
    return value;
}

console.log(getNumber(10));
console.log(getString("Brij"));


// ======================================================
// WITH GENERICS
// ======================================================

function getValue<T>(value: T): T {
    return value;
}

console.log(getValue<number>(100));
console.log(getValue<string>("Hello"));
console.log(getValue<boolean>(true));


// ======================================================
// TYPE INFERENCE
// ======================================================

// TypeScript automatically infers the type.

console.log(getValue(50));

console.log(getValue("TypeScript"));

console.log(getValue(false));


// ======================================================
// GENERIC ARRAY
// ======================================================

function getFirstElement<T>(arr: T[]): T {
    return arr[0]!;          // we can wite any letter in place of T here
}

console.log(getFirstElement([10, 20, 30]));

console.log(getFirstElement(["A", "B", "C"]));

console.log(getFirstElement([true, false]));


// ======================================================
// MULTIPLE GENERIC TYPES
// ======================================================

function printData<T, U>(value1: T, value2: U) {
    console.log(value1);
    console.log(value2);
}

printData<string, number>("Brij", 20);

printData<boolean, string>(true, "Hello");


// ======================================================
// GENERICS WITH OBJECTS
// ======================================================

function printObject<T>(obj: T): T {
    return obj;
}

const user = printObject({
    name: "Brij",
    age: 20
});

console.log(user);


// ======================================================
// GENERIC INTERFACE
// ======================================================

interface Box<T> {
    value: T;
}

const numberBox: Box<number> = {
    value: 100
};

const stringBox: Box<string> = {
    value: "TypeScript"
};

console.log(numberBox);
console.log(stringBox);


// ======================================================
// GENERIC TYPE ALIAS
// ======================================================

type Data<T> = {
    value: T;
};

const data1: Data<number> = {
    value: 10
};

const data2: Data<string> = {
    value: "Hello"
};

console.log(data1);
console.log(data2);


// ======================================================
// GENERIC CLASS
// ======================================================

class Storage<T> {

    constructor(
        public value: T
    ) {}
}

const numberStorage = new Storage<number>(500);

const stringStorage = new Storage<string>("Brij");

console.log(numberStorage.value);

console.log(stringStorage.value);


// ======================================================
// GENERIC CONSTRAINT
// ======================================================

function printLength<T extends { length: number }>(value: T) {
    console.log(value.length);
}

printLength("Hello");

printLength([1, 2, 3]);

// printLength(100);

// ❌ Error
// Number does not have a length property.


// ======================================================
// SUMMARY
// ======================================================

/*

Generic
-------
Reusable type.

Syntax

<T>

--------------------------------

Generic Function

function getValue<T>(value:T):T

--------------------------------

Generic Array

T[]

--------------------------------

Generic Interface

interface Box<T>

--------------------------------

Generic Type Alias

type Data<T>

--------------------------------

Generic Class

class Storage<T>

--------------------------------

Constraint

<T extends Something>

--------------------------------

Advantages

✔ Reusable code
✔ Type safety
✔ Less duplication
✔ Better autocomplete

*/