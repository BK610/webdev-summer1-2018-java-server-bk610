// IIFE
// Immediately Invoked Function Expression
(function () {

  var registerBtn = jQuery('#registerBtn');
  var usernameFld = $('#username');
  var passwordFld = $('#password');
  var password2Fld = $('#password2');

  registerBtn.click(registerHandler);

  function registerHandler(event) {
	  console.log(event);
    var usernameStr = usernameFld.val();
    var passwordStr = passwordFld.val();
    var password2Str = password2Fld.val();
    
    if (passwordStr === password2Str) {
    	var userObj = {
    		      username: usernameStr,
    		      password: passwordStr
    		    };

    		    var userObjStr = JSON.stringify(userObj);

    		    fetch('/register', {
    		      method: 'post',
    		      body: userObjStr,
    		      headers: {
    		        'Content-Type': 'application/json'
    		      },
    		      'credentials': 'include'
    		    }).then(registrationSuccessful, registrationFailed)
    } else {
    	alert('Passwords must match.');
    }
  }
  
  function registrationSuccessful() {
    window.location.href = '/components/profile/profile.template.client.html';
  }

  function registrationFailed() {
    alert('Registration failed.')
  }
})();