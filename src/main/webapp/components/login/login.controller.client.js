(function () {
  var userServiceClient = new UserServiceClient();
  var usernameFld = $('#username');
  var passwordFld = $('#password');
  var loginBtn = $('#loginBtn');
  
  function init() {
	  console.log("Login init.");

	  console.log(loginBtn);
	  loginBtn.click(login);
	  console.log("finished?");
  }
  init();
  
  function login() {
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