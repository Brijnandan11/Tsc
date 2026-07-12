// ======================================================
// OPTIONAL PARAMETERS
// ======================================================

function introduce(name: string, age?: number) {

    console.log(name);

    if(age !== undefined){
        console.log(age);
    }
}

introduce("Brij");
introduce("Rahul",22);