
// Normal way of writing function

/*
console.log(sum());
function sum() {
    let a = 5; b = 6;
    let sum = a + b;
    return `the sum of the two number is ${sum}`;
}

*/


// How to convert in into Fat Arrow Function


const sum = () => {
   // let a = 5; b = 6;
    // let sum = a + b;
    // return `the sum of the two number is ${sum}`;
   // return `the sum of the two number is ${a+b}`;
   /* return */  `the sum of the two number is ${(a = 5)+(b = 6)}`;
}
console.log(sum());