(function () {
  var usernameFld,
  	passwordFld,
    $loginBtn;
  var userServiceClient = new UserServiceClient();
  
  function init() {
	  usernameFld = $('#username');
	  passwordFld = $('#password');
    $loginBtn = $('#loginBtn');
    
    $loginBtn.click(login);
  }
  init();
  
  function login() {
	  var newUser = new User()
	  newUser.setUsername(usernameFld.val());
	  newUser.setPassword(passwordFld.val());
	  
	  var successfulLogin = userServiceClient.login(newUser);
	  
	  if (successfulLogin) {
		  navigateToProfile();
	  } else {
		  alert('Unsuccessful login.');
	  }
  }

  function navigateToProfile() {
    window.location.href = '/components/profile/profile.template.client.html';
  }
})();