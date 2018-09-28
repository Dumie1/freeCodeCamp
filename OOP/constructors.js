/*

* Constructors are defined with a capitalized name to distinguish them from
 other functions that are not constructors.
* Constructors use the keyword this to set properties of the object they will 
create.Inside the constructor, this refers to the new object it will create.
* Constructors define properties and behaviors instead of returning a value as 
other functions might.

*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
---------Define a Constructor Function----------
are functions that create new objects. They define properties and behaviors
that will belong to the new object. an example below...

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

----------------------------------
function Dog (){
  this.name = 'Pol',
  this.color = 'brown',
  this.numLegs = 2
}*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
-----------Use a Constructor to Create Objects------------

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
  // "this" inside the constructor always refers to the object being created
}
let blueBird = new Bird();

-------------------------------------------

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Add your code below this line
let hound = new Dog();*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
------------Extend Constructors to Receive Arguments-----------
To more easily create different Bird objects, you can design your Bird 
constructor to accept parameters:

function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
----------------------------------------------

function Dog(name,color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4
}
let terrier = new Dog('Bob', 'browm');*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
--------Verify an Object's Constructor with instanceof--------
instanceof allows you to compare an object to a constructor, returning 
true or false based on whether or not that object was created with the 
constructor.

let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
let crow = new Bird("Alexis", "black");
crow instanceof Bird; // => true

-----------------------------------------------------------
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(3);
myHouse instanceof House;*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
-----Understand Own Properties-------

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}
let duck = new Bird("Donald");
let canary = new Bird("Tweety");
*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
--------Understand Own Properties-----------

name and numLegs are called own properties, because they are defined directly 
on the instance object. That means that duck and canary each has its own separate 
copy of these properties.

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}
let duck = new Bird("Donald");
let canary = new Bird("Tweety");*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
---------------------
let ownProps = [];
for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps); // prints [ "name", "numLegs" ]

-------------------------------------

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for(let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
----------Use Prototype Properties to Reduce Duplicate Code-------

function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
// Add your code above this line
let beagle = new Dog("Snoopy");*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
----------Iterate Over All Properties---------

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line
for (let property in beagle) {
  if(Dog.hasOwnProperty(property)) {
    ownProps.push(property)
  }
  else {
    prototypeProps.push(property)
  }
}*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
-------------------

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line
for (let property in beagle) {
  if(Dog.hasOwnProperty(property)) {
    ownProps.push(property)
  }
  else {
    prototypeProps.push(property)
  }
}*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
------------------------

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]

-------------------------------------------------
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line
for (let property in beagle) {
  if(Dog.hasOwnProperty(property)) {
    ownProps.push(property)
  }
  else {
    prototypeProps.push(property)
  }
}*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
--------------------

*/