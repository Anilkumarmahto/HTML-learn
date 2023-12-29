// Traversal in array

/*
var myFriends = ['Anil','Bhola','Shiv'];
console.log(myFriends[myFriends.length -1]);
*/

// Check the length of the element

// console.log(myFriends.length); 


// we use for loop to navigate

/*

var myFriends = ['Anil','Bhola','Shiv'];
for (var i = 0; i<myFriends.length; i++){
    console.log(myFriends[i]);
}

*/

// After ES6 we have for .. in and for .. of loop to

/*
var myFriends = ['Anil','Bhola','Shiv'];
for(let elements in myFriends){
    console.log(elements);
}
*/



/*
var myFriends = ['Anil','Bhola','Shiv'];
for(let elements of myFriends){
    console.log(elements);
}
*/


// Array.prototype.forEach()

/*
var myFriends = ['Anil','Bhola','Shiv'];
myFriends.forEach(function(element, index, array){
    console.log(element + " index : " + index + " " + array);
});

myFriends.forEach((element, index, array) => {
    console.log(element + " index : " + index + " " + array);
});
*/




// 2.  Searching and Filter in an Array

// Array.prototype.indexOf()

// var myFriendNames = ['Anil','Bhola','Shiv','Anil'];
// console.log(myFriendNames.indexOf("anil", 1));



// Array.prototype.lastIndexOf()

// var myFriendNames = ['Anil','Bhola','Shiv','Anil'];
// console.log(myFriendNames.lastIndexOf("Anil", 2));





// Array.prototype.includes()

// var myFriendNames = ['Anil','Bhola','Shiv','Anil'];
// console.log(myFriendNames.lastIndexOf("Anil", 2));


// Array . prototype.find()


//const prices = [200, 300, 350, 400, 450, 500, 600];

/*
//price < 400
 const findElem = prices.find((currVal) => {
    return currVal < 400;
});

console.log(findElem);

*/

/*             OR          */

 //console.log(prices.find((currVal) =>  currVal < 400));



//Array.prototype.findIndex()

//const prices = [200, 300, 350, 400, 450, 500, 600];
//console.log(prices.findIndex((currVal) =>  currVal < 400));


//Array.prototype.filter()

/* 
const prices = [200, 300, 350, 400, 450, 500, 600];

 const newPriceTag = prices.filter((elem, index) => {
     return elem < 400;
 })
 console.log(newPriceTag);   
 */


 // 3. ARRAY SUBSECTION  (how to sort an array )

 // Array.prototype.sort()

//  const months = ['March', 'Jan', 'Feb', 'Dec', 'Nov'];
//  console.log(months.sort());


// const array1 = [1, 30, 4, 21, 100000, 99];
// console.log(array1.sort());



// 4. ARRAY Subsection (Perform CRUD)

// Array.prototype.push()

// const animals = ['pigs', 'goats', 'sheep'];
// const count = animals.push('chicken');
// console.log(animals);
// console.log(count);

/*
const animals = ['pigs', 'goats', 'sheep'];
// const count = animals.push('chicken');
animals.push('chicken', 'cats', 'cow');
console.log(animals);
//console.log(count);
*/


// Array.prototype.Unshift()

//const animals = ['pigs', 'goats', 'sheep'];
// const count = animals.unshift('chicken');
//animals.unshift('chicken', 'cats', 'cow');
//console.log(animals);
//console.log(count);


// 2nd Example

// const myNumbers = [1, 2, 3, 5];
// myNumbers.unshift(4,6);
// console.log(myNumbers);



//  Array.prototype.pop()
//the pop() method removes the last element from an Array and returns that ElementInternals. This method changes the length of the Array.

// const plants = ['pea', 'potato', 'chili', 'cabbage', 'tomato'];
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);



//  Array.prototype.shift()
// The shift() method removes the first element from an array and returns that removes ElementInternals. this method chnages the length of the array.

// const plants = ['pea', 'potato', 'chili', 'cabbage', 'tomato'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);



// Challenge time

//  Array.prototype.splice()
//Adds and/or removes elements from an Array.

// 1: Add Dec at the end an array?
// 2: What is the return value of splice method ?
// 3: update march to MARCH (update)?
// 4: Delete june from an array ?


//const months = ['jan', 'march', 'April', 'june', 'july'];

// sol1:

//const newMonths = months.splice(5, 0,"Dec");
//     or
//const newMonths = months.splice(months.length, 0,"Dec");

//console.log(months);

// sol2:

// const newMonths = months.splice(months.length, 0,"Dec");
// console.log(newMonths);


// sol3:

//const months = ['jan', 'march', 'April', 'june', 'july'];

// const updateMonth = months.splice(1 , 1, 'March');
// console.log(months);


//            OR


    // const months = ['jan', 'march', 'April', 'June', 'july'];
    // const indexOfMonth = months.indexOf('June');

    // if(indexOfMonth != -1){
    //     const updateMonth = months.splice(indexOfMonth , 1, 'june');
    //     console.log(months);
    // }else{
    //     console.log('No such data found');
    // }


// sol4:

//    const months = ['jan', 'march', 'April', 'June', 'july'];
//     const indexOfMonth = months.indexOf('June');

//     if(indexOfMonth != -1){
//         const updateMonth = months.splice(indexOfMonth , 1);
//         console.log(months);
//         console.log(updateMonth);
//     }else{
//         console.log('No such data found');
//     }




// 5. ARRAY Subsection 4     =>   Map and Reduce Method

// Array.prototype.map()

//  Syntex
//        let newArray = arr.map(callback(currentValue[,index[, array]]){
 //           return element for newArray, after executing something
//}[,thisArg]);


// Return a new containing results of calling a function on every element in this array.


//const array1 = [1, 4, 9, 16, 25];
// num > 9

// let newArr = array1.map((curElem,index,arr) => {
//    return curElem > 9;
// })
// console.log(array1);
// console.log(newArr);


    // let newArr = array1.map((curElem,index,arr) => {
    //     return `Index no = ${index} and the value is ${curElem} belong to ${arr}`
    // })
    // console.log(newArr);


    // let newArrfor = array1.forEach((curElem,index,arr) => {
    //     return `Index no = ${index} and the value is ${curElem} belong to ${arr}`
    // })
    // console.log(newArrfor);



//  Challenge Time

//  1: Find the square root of each element in an array?
//  2: Multiply each element by 2 and return only those elements which are greater than 10?


// sol 1:

//  let arr = [25, 36, 49, 64, 81];

//  let arrSqt = arr.map((curElem) =>{
//     return Math.sqrt(curElem);
//  })
//  console.log(arrSqt);


 // sol 2:

//   let arr = [2, 3, 4, 5, 6, 8];

//   let arr2 = arr.map((curElem) => curElem * 2).filter((curElem) => curElem > 10).reduce((accumulator, currElem) => {
//          return accumulator +=  currElem;
//      });
//   console.log(arr2);



 //  Reduce  Method
 //       flatten an Array means to convert the 3d or 2d Array into a single dimensional Array.

 //   The reduce() method executes a reducer function (that you provide) or each element of the array, resulting in single output value.The

//    the reducer function takes four arguments:

// Accumulator
// Current Value
// Current Index
// Source Array


// let arr = [5, 6, 2];

// let sum = arr.reduce((accumulator, currElem, index, arr) => {
//     return accumulator +=  currElem;
// },7)
// console.log(sum);

// how to fatten an array
// converting 2d and 3d array into one dimensional array

const arr = [
    ['zone_1'], ['zone_2'],
    ['zone_3'], ['zone_4'], 
    ['zone_5'], ['zone_6'], 
    ['zone_7'], ['zone_8']
];

let flatArr = arr.reduce((accum, currVal) => {
    return accum.concat(currVal);
})
console.log(flatArr);







