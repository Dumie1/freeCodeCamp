/*Event handlers
*  handler – a function that runs in case of an event.n case of user actions.

The function should be assigned as sayThanks, not sayThanks().
// right
button.onclick = sayThanks;
// wrong
button.onclick = sayThanks();

But in the markup we do need the brackets:
<input type="button" id="button" onclick="sayThanks()">

There are three ways to assign events to elements:
* Inline event handlers
* Event handler properties
* Event listeners

*/

/*
// Test the keyCode, key, and code properties
document.addEventListener('keydown', event => {
    console.log('key: ' + event.keyCode);
    console.log('key: ' + event.key);
    console.log('code: ' + event.code);
});
*/





/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7
----useful resources----
http://javascript.info/introduction-browser-events
https://www.digitalocean.com/community/tutorials/understanding-events-in-javascript


*/