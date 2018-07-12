(function () {

  var userServiceClient = new UserServiceClient();
  var usernameFld = $('#usernameFld');
  var passwordFld = $('#passwordFld');
  var firstNameFld = $('#firstNameFld');
  var lastNameFld = $('#lastNameFld');
  var emailFld = $('#emailFld');
  var roleFld = $('#roleFld');

  function init() {	
	var updateBtn = $('#updateBtn');
	updateBtn.click(updateUser);
	
	var createBtn = $('#createBtn');
	createBtn.click(createUser);
	
	userServiceClient
	  .findAllUsers()
	  .then(renderUsers);
  }
  init();

  function renderUsers(users) {
	console.log(users);

    var tbody = $('tbody');
    tbody.empty();
    for(var i=0; i<users.length; i++) {    	
      tbody.append(renderUser(users[i]));
    }
  }

  function deleteUser(event) {
    console.log(event);
    var $button = $(event.currentTarget);
    var id = $button.attr('id');

    userServiceClient
      .deleteUser(id)
      .then(function () {
        userServiceClient
          .findAllUsers()
          .then(renderUsers);
      });
  }
  
  function createUser(event) {
    console.log(event);
    var $button = $(event.currentTarget);
    
    var newUser = new User();
    newUser.setUsername(usernameFld.val());
    newUser.setPassword(passwordFld.val());
    newUser.setFirstName(firstNameFld.val());
    newUser.setLastName(lastNameFld.val());
    newUser.setEmail(emailFld.val());
    newUser.setRole(roleFld.val());
    
    emptyFields();
    
    userServiceClient
      .createUser(newUser)
      .then(function () {
        userServiceClient
          .findAllUsers()
          .then(renderUsers);
      });
  }
  
  function updateUser(event) {
	console.log(event);
    var $button = $(event.currentTarget);
    
    var newUser = new User();
    newUser.setUsername(usernameFld.val());
    newUser.setPassword(passwordFld.val());
    newUser.setFirstName(firstNameFld.val());
    newUser.setLastName(lastNameFld.val());
    newUser.setEmail(emailFld.val());
    newUser.setRole(roleFld.val());
    
    emptyFields();
    
    userServiceClient
      .updateUser(newUser)
      .then(function () {
        userServiceClient
          .findAllUsers()
          .then(renderUsers);
      });
  }
  
  function renderUser(user) {
	  var tr = $('<tr>');
      var td = $('<td>');
      td.append(user.username);
      tr.append(td);

      td = $('<td>');
      td.append('*******');
      tr.append(td);

      td = $('<td>');
      td.append(user.firstName);
      tr.append(td);

      td = $('<td>');
      td.append(user.lastName);
      tr.append(td);

      td = $('<td>');
      td.append(user.email);
      tr.append(td);

      td = $('<td>');
      td.append(user.role);
      tr.append(td);

      td = $('<td>');
      var deleteBtn = $('<button class=\'btn btn-primary\'>Delete</button>');
      deleteBtn.click(deleteUser);
      deleteBtn.attr('id', user.id);
      td.append(deleteBtn);
      
      tr.append(td);
      
      return tr;
  }
  
  function emptyFields() {
      usernameFld.val('');
      passwordFld.val('');
      firstNameFld.val('');
      lastNameFld.val('');
      emailFld.val('');
      roleFld.val('FACULTY');
  }
})();