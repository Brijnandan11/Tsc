// ======================================================
// DEFAULT PARAMETERS
// ======================================================

function greet(name: string = "Guest") {
    console.log(`Hello ${name}`);
}

greet();

greet("Brij");


function power(number: number, exponent: number = 2) {
    return number ** exponent;
}

console.log(power(5));

console.log(power(5,3));