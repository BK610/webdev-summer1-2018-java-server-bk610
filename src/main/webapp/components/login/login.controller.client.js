(function () {
  var userServiceClient = new UserServiceClient();
  var usernameFld;
  var passwordFld;
  var loginBtn;
  
  function init() {
	  usernameFld = $('#username');
	  passwordFld = $('#password');
	  loginBtn = $('#loginBtn');
	  loginBtn.click(login);
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
	  if (user.username == null || user.password == null) {
		  alert('Login failed.');
	  } else {
		  window.location.href = '/components/profile/profile.template.client.html';
	  }
  }
})();