/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
-----Create a Basic JavaScript Object------

let dog = {
  name : 'popy',
  numLegs : 2
};*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&
-------- Use Dot Notation to Access the Properties of an Object-------
let dog = {
  name: "Spot",
  numLegs: 4
};
console.log(dog.name , dog.numLegs);*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&
---------Create a Method on an Object------------
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
// Returns "The name of this duck is Aflac."

------------------------------------------------

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return "This dog has " + dog.numLegs + " legs.";
  }
};
dog.sayLegs();*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
----------Make Code More Reusable with the this Keyword------------

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();*/

