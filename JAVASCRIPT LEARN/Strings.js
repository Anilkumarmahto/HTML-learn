/*  STRING */
//  A javascript string is zero or more characters written inside quotes.
//    javascript Strings are used for storing and manipulating Text.
//    You can use single and double quotes.
//    Strings can be created as primitives, from string literals, or as objects, using the string() constructor.

// let myName = "Anil kumar";
// let myChannelName = 'Anil kumar';

// let ytName = new String("Anil Technical");

// let ytName = 'Anil Techinacal'; 

// console.log(myName);
// console.log((ytName));


//  How to find the length of a string 
//   String.prototype.length
//   Reflects the length of the string.

// let myName = "Anil Kumar";
// console.log(myName.length);



/*                 ESCAPE CHARACTER            */

//  let anySentence = "We are the so-called  \"Vikings\" from the north.";
// console.log(anySentence);


// if you dont want to mess, simply use the alternate quotes

// let anySentence = 'We are the so-called  \"Vikings\" from the north.';
// console.log(anySentence);

//   Finding  a  String in a  String 


//   String.prototype.indexOf(searchValue [, fromIndex])
//   The indexOf() method returns the index of (the position of) the  first
//   occurrence  of a specified  text  in a  string.

// const myBioData  =  'I am the Thapa  Technical';
// console.log(myBioData.indexOf("Thapa"));


//   String.prototype.lastIndexOf(searchValue [, fromIndex])
//   Return the index within the calling String object of the 
//   last occurrence of searchValue, or -1 if not found.


// const myBioData  =  'I am the Thapa  Technical';
// console.log(myBioData.lastIndexOf("t", 6));






//  Searching for a String in a String 

//  String.prototype.search(regexp)

//   The Search()  method searches a string for a specified
//   value and returns the position of the match


// const myBioData = 'I am the thapa Technical'; 
// let sData = myBioData.search("thapa");
// console.log(sData);






/*  EXTRACTING  sTRING  PARTS   */

//   There are 3 methods for extracting a part of a string :

//  slice(start, end)
//  substracting(start, end)
//  substr(start, length)


 /*  SLICE() METHOD       */
 //    Slice()  extracts a part of a string and returns the extracted part in a new string.

 // The method takes 2 parameters: the start position,
 // and the end position (end not included).

//  var str = "Apple, Banana, Kiwi, mango ";
//  // let res = str.slice(0,4);
//  let res = str.slice(7, -2);
//  console.log(res);

 // The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

 //  Note: The original array will not be changed.
 //  Remember: Javascript counts positions from zero. First position is 0.


 //   CHALLANGE TIME

 // Display only 280 characters of a string like the one used in Twitter?

/*  let myTweets = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
 
  let myActualTweet = myTweets.slice(0, 280);
  console.log(myActualTweet);
  console.log(myActualTweet.length);
  */


  //  THE SUBSTRING()  METHOD

  //  Substring() is similar to slice().

  //  The difference is the substring() cannot accept negative indexes.



/*  
 var str = "Apple, Banana, Kiwi";
  let res = str.substring(7,-2);
  console.log(res);
 */


/*                 THE SUBSTR()  METHOD            */

// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.

/*
var str = "Apple, Banana, Kiwi";
 // let res = str.substr(7,-2);
  let res = str.substr(-4);
  console.log(res);
  */





  /*                   REPLACING  STRING CONTENT()           */

  // String.prototype.replace(searchFor, replaceWidth)

  //The replace() method replaces a specified value with another value in string.

/*
let myBioData = `I am anil kumar mahto anil`;

let replaceData = myBioData.replace('anil','Anil');
console.log(replaceData);
console.log(myBioData);
*/


//Points to remember
// 1. The replace() method does not change the string it is called on. It returns a new String.

// 2. By default, the the replace() method replaces only the first match.

// 3. By default , the replace() method is case sensitive. Writing ANIL (with upper-case) will not work.




/*                EXTRACTING STRING CHARACTERS                */

// There are 3 methods for extracting string characters:

// charAt(position)
//charXodeAt(position)
// Property access [ ]


/*   THE  charAT()   METHOD  */
// the charAt() method returns the character at a specified index (position) in a String.


/*
let str = "HELLO WORLD";

console.log(str.charAt(0));
*/


/*    THE  charCodeAt() method */

// The charCodeAt() Method returns the unicode of the character at a specified index in a string:

//the method returns a UTF-16 code(an integer between 0 and 65535).

//The Unicode Standard provides a unique number for every CharacterData, no matter the platform, device, application, or language.  UTF-8 is a popular Unicode encoding which has 88-bit code units.

/*
var str = "HELLO WORLD";

console.log(str.charCodeAt(0));

*/


// Challenge Time

// Return the Unicode of the last character in a string.


/*
var str = "HELLO WORLD";

let lastChar = str.length - 1;

console.log(str.charCodeAt(lastChar));

*/


/*  PROPERTY ACCESS */
// ECMAScript 5 (2009) allows property accesss [  ] on strings.

/*
var str  =  "HELLO WORLD";
console.log(str[1]);
*/



/*  OTHER USEFUL METHOD */


/*
let myName = "anil kUmar";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
*/

// THE CONCET() METHOD

//Concet() joins two or more Strings


/*
let fName = "anil";
let lName = "kumar";

console.log(fName + lName);
console.log(`${fName} ${lName}`);
console.log(fName.concat(lName));
console.log(fName.concat(" ",lName));
*/

/*  String. trim() */
// The trim() method removes whitespace from both sides of string


/*
 var str ="           Hello World!             ";
 console.log(str.trim());
 */

 



 // Converting a string to an array
 // A String can be converted to an array with the split() method


  var txt = "a,b,c | d,e";   // String
  console.log(txt.split(","));         // Split on commas
  console.log(txt.split(" "));          // split on spaces
  console.log(txt.split(" | "));        // split on pipe