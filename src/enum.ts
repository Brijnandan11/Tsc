// ======================================================
// ENUMS (ENUMERATION) IN TYPESCRIPT
// ======================================================

// An enum is a collection of named constants.

// ======================================================
// CUSTOM NUMBER VALUES
// ======================================================

enum StatusCode {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}

console.log(StatusCode.Success);    // 200
console.log(StatusCode.NotFound);   // 404
console.log(StatusCode.ServerError);// 500


// ======================================================
// STRING ENUM
// ======================================================

enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

let role: Role = Role.Admin;

console.log(role); // ADMIN


// ======================================================
// USING ENUM IN IF STATEMENTS
// ======================================================

enum PaymentStatus {
    Pending = "PENDING",
    Success = "SUCCESS",
    Failed = "FAILED"
}

let payment = PaymentStatus.Success;

if (payment === PaymentStatus.Success) {
    console.log("Payment Successful");
}


// ======================================================
// USING ENUM IN FUNCTIONS
// ======================================================

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday
}

function printDay(day: Day) {
    console.log(day);
}

printDay(Day.Wednesday); // 2
