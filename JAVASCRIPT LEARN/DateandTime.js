
/*                      DATE AND TIME              */



// Javascript date objects represents a single moment in time in a platform-independent format. Date objects contains a number that represents milliseconds since 1 january 1970 UTC.




//  CREATING  DATE OBJECTS
//  There are 4 ways to create a new date object:


// new Date()
// new Date(year, month, day, hours, minutes, seconds, miliseconds)
     // it takes 7 arguments
// new Date(miliseconds)
      // we cannot avoid month section
// new Date (date string)








// new Date()
// Date objects are created with the new Date() constructor.


/*
let currDate = new Date();
console.log(currDate);


console.log(new Date());
console.log(new Date().toLocaleString());   // 9/15/2022, 1:25:01 PM
console.log(new Date().toString());   // thu sep 15 2022  23:10:29 GMT+0530 (India Standard Time)

*/




//  Date.now()

// Returns the numeric value corresponding to the current time- the number of milliseconds elapsed since january 1, 1970  00:00:00 UTC


// console.log(Date.now());




//New Date(year, month, ...)
//7 numbers specify year,month,day, hour,minute,second,and millisecond (in that order)
// Note: Javascript counts months from 0 to 11.

// January is 0.  December is 11.


// var d = new Date(2022, 9, 15, 11, 30, 30, 0);
// console.log(d.toLocaleString());


// new Date(dateString)
// new Date(dateString) creates a new date object from a date string


 var d = new Date("October 13, 2021 11:13:00");
console.log(d.toLocaleString());


// new Date(milliseconds)
// new Date(milliseconds)  creates a new date objects as zero time plus milliseconds