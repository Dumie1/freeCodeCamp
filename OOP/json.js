// JSON.stringify
/*
JSON.stringify to convert objects into JSON.
JSON.parse to convert JSON back into an object.

For instance, here we JSON.stringify a student:
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

alert(typeof json); // we've got a string!

alert(json);
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
-----JSON.parse--------
To decode a JSON-string, we need another method named JSON.parse.

let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
user = JSON.parse(user);
alert( user.friends[1] ); // 1
*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
------Turn the object into JSON and back---------
Turn the user into JSON and then read it back into another variable.

let user = {
  name: "John Smith",
  age: 35
};
let user2 = JSON.parse(JSON.stringify(user));
console.log(user2);
*/