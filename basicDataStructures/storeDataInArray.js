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

--------------------------------------------------------------
Therefore, two parameters must be passed to the slice() function. The first
parameter must be the index you would like the substring to start at. The second 
parameter must be the index at which the substring ends.

function forecast(arr) {
return arr.slice(2,4);
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
-----Copy an Array with the Spread Operator---------
In practice, we can use the spread operator to copy an array like so:

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray

-----------------------------------------------------------------

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}
// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
---------------Combine Arrays with the Spread Operator-------------------
we can concatenate arrays, but this only allows us to combine arrays at
the end of one, and at the start of another. Spread syntax makes the following
operation extremely simple:

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley',
'thyme', 'coriander']

--------------------------------------------------

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning',...fragment, 'is', 'fun']; // change this line
  return sentence;
}
console.log(spreadOut());*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
-----------Check For The Presence of an Element With indexOf()--------------
indexOf() takes an element as a parameter, and when called, it returns the
 position, or index, of that element, or -1 if the element does not exist on 
the array. can be incredibly useful for quickly checking for the presence of
an element on an array

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates') // returns -1
fruits.indexOf('oranges') // returns 2
fruits.indexOf('pears') // returns 1, the first index at which the element exists

------------------------------------------------------
%%%%%%%%%% solution 1 %%%%%%%%%%%%%%

function quickCheck(arr, elem) {
return arr.indexOf(elem) >= 0 ? true : false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

%%%%%%%%% solution 2 %%%%%%%%%%%%
function quickCheck(arr, elem) {
  if(arr.indexOf(elem)>=0) {
    return true;
  }
  return false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

*/

