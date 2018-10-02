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

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&77
http://javascript.info/forms-submit  Form submission task


<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="style.css">
</head>

<body style="height:3000px">

  <h2>Click the button below</h2>

  <input type="button" value="Click to show the form" id="show-button">


  <div id="prompt-form-container">
    <form id="prompt-form">
      <div id="prompt-message"></div>
      <input name="text" type="text">
      <input type="submit" value="Ok">
      <input type="button" name="cancel" value="Cancel">
    </form>
  </div>

  <script>
    // Show a half-transparent DIV to "shadow" the page
    // (the form is not inside, but near it, because it shouldn't be half-transparent)
    function showCover() {
      let coverDiv = document.createElement('div');
      coverDiv.id = 'cover-div';

      // make the page unscrollable while the modal form is open
      document.body.style.overflowY = 'hidden';

      document.body.append(coverDiv);
    }

    function hideCover() {
      document.getElementById('cover-div').remove();
      document.body.style.overflowY = '';
    }

    function showPrompt(text, callback) {
      showCover();
      let form = document.getElementById('prompt-form');
      let container = document.getElementById('prompt-form-container');
      document.getElementById('prompt-message').innerHTML = text;
      form.text.value = '';

      function complete(value) {
        hideCover();
        container.style.display = 'none';
        document.onkeydown = null;
        callback(value);
      }

      form.onsubmit = function() {
        let value = form.text.value;
        if (value == '') return false; // ignore empty submit

        complete(value);
        return false;
      };

      form.cancel.onclick = function() {
        complete(null);
      };

      document.onkeydown = function(e) {
        if (e.key == 'Escape') {
          complete(null);
        }
      };

      let lastElem = form.elements[form.elements.length - 1];
      let firstElem = form.elements[0];

      lastElem.onkeydown = function(e) {
        if (e.key == 'Tab' && !e.shiftKey) {
          firstElem.focus();
          return false;
        }
      };

      firstElem.onkeydown = function(e) {
        if (e.key == 'Tab' && e.shiftKey) {
          lastElem.focus();
          return false;
        }
      };

      container.style.display = 'block';
      form.elements.text.focus();
    }

    document.getElementById('show-button').onclick = function() {
      showPrompt("Enter something<br>...smart :)", function(value) {
        alert("You entered: " + value);
      });
    };
  </script>


</body>
</html>

*/





/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7
----useful resources----
http://javascript.info/introduction-browser-events
https://www.digitalocean.com/community/tutorials/understanding-events-in-javascript


*/