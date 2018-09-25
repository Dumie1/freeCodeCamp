/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
------------Use an Array to Store a Collection of Data--------------

let yourArray; // change this line
yourArray = ['foo', true, 5, 'cat', 2, false];
console.log(yourArray.length);*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
--------Access an Array's Contents Using Bracket Notation----------

let myArray = ["a", "b", "c", "d"];
myArray[1] = 'cat';
console.log(myArray.length);*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
----------Add Items to an Array with push() and unshift()---------

function mixedNumbers(arr) {
arr.unshift('I',2,'three');
arr.push(7,'VIII', 9);
  return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
--------Remove Items from an Array with pop() and shift()----------

function popShift(arr) {
  let popped = arr.pop(); // change this line
  let shifted = arr.shift(); // change this line
  return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
----------Remove Items Using splice()-------
splice() allows us to do just that: remove any number of consecutive elements
from anywhere in an array. splice() can take up to 3 parameters

let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']

---------------------------------------------------------

function sumOfTen(arr) {
  arr.splice(1,2);
  return arr.reduce((a, b) => a + b);
}
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
----------Add Items Using splice()-----------
in addition to removing elements, we can use that third parameter, which
represents one or more elements, to add them as well.For instance, let's
say you're storing a color scheme for a set of DOM elements in an array, and want to dynamically change a color based on some action:

function colorChange(arr, index, newColor) {
  arr.splice(index, 1, newColor);
  return arr;
}

let colorScheme = ['#878787', '#a08794', '#bb7e8c', '#c9b6be', '#d1becf'];

colorScheme = colorChange(colorScheme, 2, '#332327');
// we have removed '#bb7e8c' and added '#332327' in its place
// colorScheme now equals ['#878787', '#a08794', '#332327', '#c9b6be', '#d1becf']

--------------------------------------------------------------

function htmlColorNames(arr) {
  // change code below this line
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  // change code above this line
  return arr;
}

// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush',
 'PaleTurqoise', 'FireBrick']));*/

 /* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
 ---------------Copy Array Items Using slice()--------------
 copies, or extracts, a given number of elements to a new array, leaving the 
 array it is called upon untouched. slice() takes only 2 parameters — the first
  is the index at which to begin extraction, and the second is the index at which 
  to stop extraction (extraction will occur up to, but not including the element at 
this index). Consider this:

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']
 */