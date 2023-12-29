/*  LET VS CONST VS VAR */
// var = Function Scope
// Let and Const = Block Scope

// var myName = " thapa technical ";
// console.log(myName);

// myName = "Anil kumar";
// console.log(myName);




// let myName = " thapa technical ";
// console.log(myName);

// myName = "Anil kumar";
// console.log(myName);




// const myName = " thapa technical ";
// console.log(myName);

// myName = "Anil kumar";
// console.log(myName);


/*
function biodata() {
    var myFirstName = " anil ";
    console.log(myFirstName);

    if (true) {
        var myLastName = "kumar";
        console.log('inner ' + myLastName);
        console.log('inner ' + myFirstName);
    }
    console.log('innerOuter' + myLastName);
}

biodata();

*/


/*
function biodata() {
    let myFirstName = " anil ";
    console.log(myFirstName);

    if (true) {
        let myLastName = "kumar";
        console.log('inner ' + myLastName);
        console.log('inner ' + myFirstName);
    }
    console.log('innerOuter' + myLastName);
}

biodata();

*/



/*
function biodata() {
    const myFirstName = " anil ";
    console.log(myFirstName);

    if (true) {
        const myLastName = "kumar";
        console.log('inner ' + myLastName);
        console.log('inner ' + myFirstName);
    }
    console.log('innerOuter' + myLastName);
}

biodata();

*/


for (let num = 1; num <= 10; num++) {
    let tableOf = 12;
   // console.log(tableOf + " * " + num + " = " + tableOf * num);
   console.log(`${tableOf} * ${num} = ${tableOf * num}`);
    
}