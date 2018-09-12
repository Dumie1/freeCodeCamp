// =====================================================
/* ===> Iterate with JavaScript While Loops

var myArray = [];
var i = 0;
while(i < 5){
    myArray.push(i);
    i++;
}*/

// ====================================================
/* ===> Iterate with JavaScript For Loops

for(var i = 1; i < 6; i++){
    myArray.push(i);
}*/

// ===================================================
/* ===> Iterate Through an Array with a For Loop

var myArr = [ 2, 3, 4, 5, 6];
// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}*/

// ====================================================
/* ===> Nesting For Loops

function multiplyAll(arr) {
var product = 1;
// Only change code below this line
for (var i=0; i<arr.length; i++){
for(var j=0; j<arr[i].length; j++){
product = product * arr[i][j];
}
}
// Only change code above this line
return product;
}
// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);*/

// ==================================================
/* ===> Iterate with JavaScript Do...While Loops

var myArray = [];
var i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 5);*/

// ==============================================
/* ===> Profile Lookup

for (var x = 0; x < contacts.length; x++){
    if (contacts[x].firstName === name) {
        if (contacts[x].hasOwnProperty(prop)) {
            return contacts[x][prop];
        } else {
            return "No such property";
        }
    }
}
return "No such contact";*/

// ================================================
/* Generate Random Fractions with JavaScript

function randomFraction() {
  // Only change code below this line.
  var result = 0;
  // Math.random() can generate 0. We don't want to     return a 0,
  // so keep generating random numbers until we get one     that isn't 0
  while (result === 0) {
    result = Math.random();
  }
  return result;
  // Only change code above this line.
}*/

// ===============================================
/* ===> Generate Random Whole Numbers with JavaScript

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}*/

// ===============================================
/* ===> Use the parseInt Function 
he parseInt() function parses a string and returns an integer. Here's an example

function convertToInteger(str) {
  var a = parseInt(str);
  return (a);
}
convertToInteger("56");*/

// ===============================================
/* ===> Use the parseInt Function with a Radix

function convertToInteger(str) {
    var radix = 2;
  return parseInt(str, radix);
}
convertToInteger("10011");*/

// ======================================================
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

// ==============================================
/* ===> Introducing Else Statements ()

function testElse(val) {
  var result = "";
  // Only change code below this line
  if (val > 5) {
    result = "Bigger than 5";
  }
  else {(val <= 5)
    result = "5 or Smaller";
  }
  // Only change code above this line
  return result;
}
// Change this value to test
testElse(4);
*/

// ===========================================
/* ===> Introducing Else If Statements

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  else if (val < 5) {
    return "Smaller than 5";
  }
  else{
    return "Between 5 and 10";
  }
}
// Change this value to test
testElseIf(7);
*/

// ===========================================
/* ===> Logical Order in If Else Statements

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
// Change this value to test
orderMyLogic(7);*/

// ============================================
/* ===> Golf Code

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1){
    return "Hole-in-one!";
  } else if (strokes <= par -2){
    return "Eagle";
  } else if (strokes == par -1) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par +1) {
    return "Bogey";
  } else if (strokes == par +2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }
  // Only change code above this line
}
// Change these values to test
golfScore(5, 4);*/

// ===========================================
/* ===> Selecting from Many Options with Switch Statements

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
switch(val) {
  case 1:
    return 'alpha';
    break;
  case 2:
    return 'beta';
    break;
  case 3:
    return 'gamma';
  case 4:
    return 'delta';
    break;
}
  // Only change code above this line
  return answer;
}
// Change this value to test
caseInSwitch(1);
*/

// =============================================
/* ===> Adding a Default Option in Switch Statements

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 'a':
      return 'apple';
      break;
    case 'b':
      return 'bird';
      break;
     case 'c':
      return 'cat';
      break;
    default:
      return 'stuff';
      break;
  }
  // Only change code above this line
  return answer;
}
// Change this value to test
switchOfStuff(1);*/

// =============================================
/* ===> Multiple Identical Options in Switch Statements multiple inputs with the same output

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 1:
    case 2:
    case 3:
     return 'Low';
     break;
    case 4:
    case 5:
    case 6:
     return 'Mid';
     break;
    case 7:
    case 8:
    case 9:
     return 'High';
     break;
  }
  // Only change code above this line
  return answer;
}
// Change this value to test
sequentialSizes(1);*/

// =================================================
/* ===> Replacing If Else Chains with Switch

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 'bob':
     return 'Marley';
     break;
    case 42:
     return 'The Answer';
     break;
    case 1:
     return 'There is no #1';
     break;
    case 99:
      return 'Missed me by this much!';
      break;
    case 7:
      return 'Ate Nine';
      break;
  }
  // Only change code above this line
  return answer;
}*/

// ================================================
/* ===> Returning Boolean Values from Functions

function isLess(a, b) {
  return (a < b) ? true : false;
}
isLess(10, 15);*/

// ================================================
/* ===> Counting Cards

var count = 0;
  function cc(card) {
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
  }
  if (count > 0){
          return count + " Bet";
        } else {
          return count + " Hold";
        }
    return "Change Me";
    // Only change code above this line
  }
cc(2); cc(3); cc(7); cc('K'); cc('A');*/

// ===================================================
/* ===>> Word Blanks

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";
  result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";
  // Your code above this line
  return result;
}
// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");*/

// =================================================
/* ===> Comparison with the Strict Equality Operator
strict equality operator does not perform a type conversion.('===')

*/

// ================================================
/* ===> 

*/