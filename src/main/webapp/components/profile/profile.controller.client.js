(function () {
	var userServiceClient = new UserServiceClient();
	var usernameFld;
	var passwordFld;
	var firstNameFld;
	var lastNameFld;
	var emailFld;
	var roleFld;
	
	var updateBtn;
	var currentUser = null;

  function init() {
	  usernameFld = $("#username");
	  passwordFld = $('#password');
	  firstNameFld = $("#firstName");
	  lastNameFld = $("#lastName");
	  emailFld = $('#email');
	  roleFld = $('#roleFld');
	  
      updateBtn = $("#updateBtn");
      updateBtn.click(updateUser);
      
      userServiceClient.profile()
      	.then(renderUser);
  }
  init();
  
  function updateUser() {
	  var newUser = new User();
	  newUser.setUsername(usernameFld.val());
	  newUser.setPassword(passwordFld.val());
	  newUser.setFirstName(firstNameFld.val());
	  newUser.setLastName(lastNameFld.val());
	  newUser.setEmail(emailFld.val());
	  newUser.setRole(roleFld.val());
	  
	  userServiceClient
      	.updateUser(currentUser.id, newUser)
      	.then(renderUser);
  }

  function renderUser(user) {
    currentUser = user;
    usernameFld.val(user.username);
    passwordFld.val('****');
    firstNameFld.val(user.firstName);
    lastNameFld.val(user.lastName);
    emailFld.val(user.email);
    roleFld.val(user.role);
  }

  function profile() {
    return fetch('/profile', {
      'credentials': 'include'
    })
    .then(function (response) {
      return response.json();
    });
  }
})();