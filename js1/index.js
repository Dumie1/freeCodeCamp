/* ===> Use Multiple Conditional Ternary Operators

function checkSign(num) {
    return (num === 0) ?'zero': (num < 0) ?'negative': 'positive';
}
checkSign(10);*/

// =================================================
/* ===> Use the Conditional Ternary Operator

function checkEqual(a, b) {
    return a === b ? true : false;
}
checkEqual(1, 2);*/

// ===============================================
/* ===> Access Multi-Dimensional Arrays With Indexes

// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
// Only change code below this line.
var myData = myArray[2][1];*/

// =================================================
/* ===> Manipulate Arrays With push()

var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]
// Setup
var myArray = [["John", 23], ["cat", 2]];
// Only change code below this line.

myArray.push(['dog', 3]);

*/

// =================================================
/* ===> Manipulate Arrays With pop()

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();*/

// ==================================================
/* ===>Manipulate Arrays With shift()

var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();*/

// ==================================================
/* ===> Manipulate Arrays With unshift()

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.

myArray.unshift(['Paul', 35]);*/

// =================================================
/* ===> multi-dimensional array containing several sub-arrays (shopping list)

var myList = [
    ['mayo', 2], ['maize', 5], ['cooking oil', 1], ['salt', 8]['pap', 10]
];*/

// ================================================
/* ===> Write Reusable JavaScript with Functions

function reusableFunction(){
    console.log('Hi World');
}
reusableFunction();*/

// ================================================
/* ===> Passing Values to Functions with Arguments

function functionWithArgs(arg1, arg2) {
    console.log(arg1 + arg2);
}
functionWithArgs(3, 4);*/

// ================================================
/* ===> Global Scope and Functions

// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}*/

// ================================================
/* ===> Local Scope and Functions

function myLocalScope() {
    'use strict'; // you shouldn't need to edit this line
    var myVar;
    console.log(myVar);
}
myLocalScope();*/

// ==============================================
/* ===> Global vs. Local Scope in Functions

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var myOutfit = 'sweater';
  return myOutfit

  // Only change code above this line
  return outerWear;
}
myOutfit();
*/

// ===============================================
/* ===> Return a Value from a Function with Return

// Example
function minusSeven(num) {
  return num - 7;
}

// Only change code below this line
function timesFive(num) {
  return num * 5;
}
console.log(minusSeven(10));*/

