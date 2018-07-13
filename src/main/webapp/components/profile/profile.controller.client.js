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
	  roleFld = $('#email');
	  
      updateBtn = $("#updateBtn");
      updateBtn.click(updateUser);
      
      profile()
      .then(renderUser);
  }
  init();
  
  function updateUser() {
    var user = {
      firstName: $firstName.val(),
      lastName: $lastName.val()
    };

    fetch("/api/user/" + currentUser.id, {
      method: 'put',
      body: JSON.stringify(user),
      'credentials': 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  function renderUser(user) {
    currentUser = user;
    usernameFld.val(user.username);
    firstNameFld.val(user.firstName);
    lastNameFld.val(user.lastName);
    
  }

  function profile() {
    return fetch('/profile', {
      'credentials': 'include'
    })
    .then(function (response) {
      return response.json();
    });
  }

  function findUserById(userId) {
    return fetch('/api/user/' + userId)
      .then(function (response) {
        return response.json();
      });
  }
  
  function handleResponse() {
    
  }
})();