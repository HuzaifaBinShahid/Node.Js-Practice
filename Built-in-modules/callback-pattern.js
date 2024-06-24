// ------------- Call Back Patterns -------------- //

function greet(name){
    console.log(`Hello ${name}`);
}

// The first (greet) function is a callback function as it is called by other function


function greetHuzaifa (greetFn){
    const name  = 'Huzaifa';
    greetFn(name);
}

// This second (greetHuzaifa) function is a higherorder function as it is talking a function in its arguments.

greetHuzaifa(greet);