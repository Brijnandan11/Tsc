// ======================================================
// FUNCTIONS IN TYPESCRIPT
// ======================================================

// Function without parameters
function greet(): void {
    console.log("Hello");
}

greet();


// Function with parameters
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 20));


// Function returning string
function getName(): string {
    return "Brij";
}

console.log(getName());


// Function returning boolean
function isEven(num: number): boolean {
    return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(7));


// Arrow Function
const multiply = (a: number, b: number): number => {
    return a * b;
};

console.log(multiply(5, 4));


// Function Expression
const divide = function(a: number, b: number): number {
    return a / b;
};

console.log(divide(20, 4));