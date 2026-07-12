// ======================================================
// FUNCTION OVERLOADS
// ======================================================

// Overload Signatures

function display(value: string): void;
function display(value: number): void;

// Implementation

function display(value: string | number) {
    console.log(value);
}

display("Brij");

display(20);


// Another Example

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

function combine(a: number | string, b: number | string) {

    return (a as any) + (b as any);

}

console.log(combine(10,20));

console.log(combine("Hello ","World"));