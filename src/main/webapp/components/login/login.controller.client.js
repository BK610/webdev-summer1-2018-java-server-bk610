(function () {
  var usernameFld = $('#username');
  var passwordFld = $('#password');,
  var loginBtn = $('#loginBtn');
  var userServiceClient = new UserServiceClient();
  
  function init() {
    loginBtn.click(login);
    console.log(loginBtn);
  }
  init();
  
  function login(event) {
	  console.log(event);
	  var newUser = new User()
	  newUser.setUsername(usernameFld.val());
	  newUser.setPassword(passwordFld.val());
	  
	  userServiceClient.login(newUser)
	  	.then(checkLogin);
  }
  
  function checkLogin(user) {
	  console.log("Checking login.");
	  if (user.username == null || user.password == null) {
		  console.log('failed login.');
		  alert('Login failed.');
	  } else {
		  console.log("Navigating a la profile");
		  window.location.href = '/components/profile/profile.template.client.html';
	  }
  }
})();