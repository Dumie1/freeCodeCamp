/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7

// Initializing a new string primitive
const stringPrimitive = "A new string.";

// Initializing a new String object
const stringObject = new String("A new string.");

typeof stringPrimitive;
Output - string

typeof stringObject;
Output - object

Using square bracket notation, we can access any character in the string.
"How are you?"[5]; output - r

use the charAt() method to return the character using the index number as a parameter.
"How are you?".charAt(5); output - r

slice()
The first parameter will be the starting index number, and the second parameter 
will be the index number where it should end.
"How are you?".slice(8, 11); output - you

If a second parameter is not included, slice() will return everything from the
parameter to the end of the string.
 "How are you?".slice(8); output - you?

"How are you?".toUpperCase(); output - HOW ARE YOU?

toLowerCase() will convert all characters to lowercase characters. 
"How are you?".toLowerCase();  output - how are you?

const originalString = "How are you?";
// Split string by whitespace character
const splitString = originalString.split(" ");
console.log(splitString);


*/ 

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
--------------

*/

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
----useful links below --------

https://www.digitalocean.com/community/tutorials/how-to-index-split-and-manipulate-strings-in-javascript


*/