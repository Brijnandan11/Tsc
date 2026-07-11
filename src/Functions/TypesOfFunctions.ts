// ======================================================
// FUNCTION TYPES
// ======================================================

// Variable can store only functions
// that take two numbers and return a number.

let calculate: (a: number, b: number) => number;

calculate = function(a, b) {
    return a + b;
};

console.log(calculate(10, 20));


// Another function

calculate = (x, y) => x * y;

console.log(calculate(5, 4));


// Wrong

// calculate = (a: string, b: string) => a + b;

// ❌ Error