// ======================================================
// REST PARAMETERS
// ======================================================

function sum(...numbers: number[]) {

    let total = 0;

    for(const num of numbers){
        total += num;
    }

    return total;
}

console.log(sum(10,20));

console.log(sum(10,20,30));

console.log(sum(10,20,30,40,50));


// Another Example

function printNames(...names: string[]) {

    for(const name of names){
        console.log(name);
    }

}

printNames("Brij","Rahul","Amit");