(function () {
  var userServiceClient = new UserServiceClient();
  var usernameFld;
  var passwordFld;
  var loginBtn;
  
  function init() {
	  console.log("Login init.");
	  usernameFld = $('#username');
	  passwordFld = $('#password');
	  loginBtn = $('#loginBtn');
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