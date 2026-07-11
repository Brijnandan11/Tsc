// ======================================================
// STATIC MEMBERS IN TYPESCRIPT
// ======================================================

/*
Static members belong to the CLASS itself,
not to the objects (instances).

That means you don't need to create an object
to access them.

Access using:

ClassName.member
*/


// ======================================================
// STATIC PROPERTY
// ======================================================

class MathHelper {

    static PI = 3.14;
}

console.log(MathHelper.PI); // 3.14

// ❌ Error
// const math = new MathHelper();
// console.log(math.PI);


// ======================================================
// STATIC METHOD
// ======================================================

class Calculator {

    static add(a: number, b: number) {
        return a + b;
    }

    static multiply(a: number, b: number) {
        return a * b;
    }
}

console.log(Calculator.add(10, 20));       // 30
console.log(Calculator.multiply(5, 4));    // 20


// ======================================================
// NORMAL METHOD vs STATIC METHOD
// ======================================================

class Student {

    constructor(
        public name: string
    ) {}

    // Normal Method
    greet() {
        console.log(`Hello ${this.name}`);
    }

    // Static Method
    static collegeName() {
        console.log("AKTU");
    }
}

const student = new Student("Brij");

student.greet();              // ✅

// ❌ Error
// student.collegeName();

Student.collegeName();        // ✅
