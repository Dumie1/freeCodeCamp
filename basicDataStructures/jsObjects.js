/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
--------------- Add Key - Value Pairs to JavaScript Objects-------
At their most basic, objects are just collections of key-value pairs, or 
in other words, pieces of data mapped to unique identifiers that we call properties 
or keys

let FCC_User = {
  username: 'awesome_coder',
  followers: 572,
  points: 1741,
  completedProjects: 15
};
let userData = FCC_User.followers;  // dot.notation
let userData = FCC_User['followers']  // bracket notation

---------------------------------------------------------------

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};
// change code below this line
foods['bananas'] = 13;
foods['grapes'] = 35;
foods['strawberries'] = 27;
// change code a*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
---------Modify an Object Nested Within an Object--------------

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};
userActivity.data.online = 45;
console.log(userActivity);*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
----------Access Property Names with Bracket Notation------------

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// do not change code above this line

function checkInventory(scannedItem) {
  // change code below this line
  return foods[scannedItem];
}

// change code below this line to test different cases:
console.log(checkInventory("apples"));*/

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
----------Use the delete Keyword to Remove Object Properties------------

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// change code above this line
console.log(foods);*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
---------Check if an Object has a Property-----------

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function isEveryoneHere(obj) {
    if(users.hasOwnProperty('Alan','Jeff','Sarah','Ryan')) {
    return true;
  }
  return false;
// solution 2 -; return (users.hasOwnProperty('Alan','Jeff','Sarah','Ryan')) ? true : false;
   
}
console.log(isEveryoneHere(users));

*/