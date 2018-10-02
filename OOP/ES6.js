/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
-----Use Arrow Functions to Write Concise Anonymous Functions----

const magic = () => {
  "use strict";
  return new Date();
};
-----------------------------------------------
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
----------------------------------------------
const magic = () => {
  "use strict";
  return new Date();
};
*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
--------Write Arrow Functions with Parameters---------

// doubles input value and returns it
const doubler = (item) => item * 2;
--------------------------------------------
const myConcat = (arr1, arr2)  => {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));
*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
-----------Write Higher Order Arrow Functions------------

FBPosts.filter(function(post) {
  return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
})
--------------
FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 &&
 post.likes > 500)


 -----------------------------------------------------------
 const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
      "use strict";
      const squaredIntegers = arr.filter( (num) => num > 0 && num % parseInt(num) === 0 ).map( (num) => Math.pow(num, 2) );
      return squaredIntegers;
    };

    // test your code
    const squaredIntegers = squareList(realNumberArray);
    console.log(squaredIntegers);
*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
-------Set Default Parameters for Your Functions-----------
The default parameter kicks in when the argument is not specified (it is undefined).

function greeting(name = "Anonymous") {
  return "Hello " + name;
}
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous

----------------------------------

const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&77
--------Use the Rest Operator with Function Parameters--------

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.

-----------------------------------------




*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
------Use the Spread Operator to Evaluate Arrays In-Place--------

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
--------------------------

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


*/
