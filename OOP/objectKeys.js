
/*Object.keys, values, entries

For plain objects, the following methods are available:

Object.keys(obj) – returns an array of keys.
Object.values(obj) – returns an array of values.
Object.entries(obj) – returns an array of[key, value] pairs.*/

/*
let user = {
  name: "John",
  age: 30
};

Object.keys(user) = [name, age]
Object.values(user) = ["John", 30]
Object.entries(user) = [ ["name","John"], ["age",30] ]
*/

/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Here’s an example of using Object.values to loop over property values:

let user = {
  name: "John",
  age: 30
};

// loop over values
for (let value of Object.values(user)) {
  alert(value); // John, then 30
}
*/

/* *********************************************************************
----Sum the properties------
There is a salaries object with arbitrary number of salaries.
Write the function sumSalaries(salaries) that returns the sum of all 
salaries using Object.values and the for..of loop.
If salaries is empty, then the result must be 0.

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function sumSalaries(salaries) {

      let sum = 0;
      for (let salary of Object.values(salaries)) {
        sum += salary;
      }

      return sum;
    }
*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
Count properties
Write a function count(obj) that returns the number of properties in the object:

let user = {
  name: 'John',
  age: 30
};
function count(obj) {
      return Object.keys(obj).length;
    }
*/
