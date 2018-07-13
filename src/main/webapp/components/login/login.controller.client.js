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
  
  function login(event) {
	  console.log(event);
	  var newUser = new User()
	  newUser.setUsername(usernameFld.val());
	  newUser.setPassword(passwordFld.val());
	  
	  userServiceClient.login(newUser)
	  	.then(navigateToProfile,
	  			function () {
	  				alert('Unsuccessful login.');
	  			});
  }

  function navigateToProfile() {
	  console.log("Navigating a la profile");
	  window.location.href = '/components/profile/profile.template.client.html';
  }
})();