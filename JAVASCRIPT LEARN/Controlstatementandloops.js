/* If else */

/*
var tomr = 'sunny';

if (tomr == 'rain') {
    console.log('take a raincoat');
} else {
    console.log('No need to take a raincoat');
}  

*/



/* Write a program that works out wheather if a given is a leap year or not */

/*
var year = 2020;
debugger;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("The year " + year + " is  a leap year");
        } else {
            console.log("The year " + year + " is not a leap year");
        }  
    } else {
        console.log("The year " + year + " is  a leap year");
    }
}else{
    console.log("The year " + year + " is not a leap year");
}
*/

/* What is truthy and falsy values in javascript ? */

/*  
if (score  = 0) {
    console.log("Yay, We loss the game");
} else {
    console.log("OMG, We won the game");
}

*/

/*Conditional(Ternary) Operator */
//variablename = (condition)? value1: value2


/*
var age = 17;
console.log((age >= 18) ? "You can vote" : "You can't vote");
*/

/* SWITCH STATEMENT */

/*
var area = "circle";
var PI = 3.142, l = 5, b = 4, r = 3;
if (area == "circle") {
    console.log("the area of the circle is : " + PI*r**2);
} else if (area =="triangle") {
    console.log("the area of the triangle is : " + (l*b)/2);
} else if (area == "rectangle") {
    console.log("the area of the rectangle is : " + (l*b));
} else{
    console.log("please enter valid data");
}
*/

/*
var area = "circle";
var PI = 3.142, l = 5, b = 4, r = 3;
switch(area){
    case 'circle':
        console.log("the area of the circle is : " + PI*r**2);
        break;

    case 'triangle':
        console.log("the area of the triangle is : " + (l*b)/2);
        break;

    case 'rectangle':
        console.log("the area of the rectangle is : " + (l*b));
        break;

    default:
        console.log("please enter valid data");
        break;
}
*/


/* WHILE LOOP STATEMENT*/
/*
 var num = 0;
// block scope
 while (num <= 10) {
    console.log(num); //infinite loop
    num++;
 }

 */


 /* DO-WHILE LOOP STATEMENT*/


/*
 var num = 0;
  do {
     console.log(num); //infinite loop
     num++;
  }while(num <= 10);
  */


  /* FOR LOOP */

/*
  for(var num = 0; num <= 10; num++){
    console.log(num);
  }
  */

/* Table */

for (var num = 1; num <= 10; num++) {
    var tableOf = 8;
    console.log(tableOf + " * " + num + " = " + tableOf * num);
}