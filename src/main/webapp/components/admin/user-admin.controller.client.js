(function () {

  var userServiceClient = new UserServiceClient();
  var usernameFld = $('#usernameFld');
  var passwordFld = $('#passwordFld');
  var firstNameFld = $('#firstNameFld');
  var lastNameFld = $('#lastNameFld');
  var emailFld = $('#emailFld');
  var roleFld = $('#roleFld');
  var inEdit = false;

  function init() {	
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
    var row = $button.parent().parent();
    
    if (inEdit) {
    	var id = $button.attr('id');
    	var newUser = new User();
        newUser.setUsername($('.username').val());
        newUser.setPassword($('.password').val());
        newUser.setFirstName($('.firstName').val());
        newUser.setLastName($('.lastName').val());
        newUser.setEmail($('.email').val());
        newUser.setRole($('.role').val());
        
        userServiceClient
          .updateUser(id, newUser)
          .then(function () {
            userServiceClient
              .findAllUsers()
              .then(renderUsers);
          });
    } else {
    	inEdit = true;
    	
    	row.find('td').each(function () {
    		this.contentEditable = true;
    	});
    	
    	$button.val('Submit');
    }
  }
  
  function renderUser(user) {
	  var tr = $('<tr class=\'row\'>');
      var td = $('<td class=\'username\'>');
      td.append(user.username);
      tr.append(td);

      td = $('<td class=\'password\'>');
      td.append('*******');
      tr.append(td);

      td = $('<td class=\'firstName\'>');
      td.append(user.firstName);
      tr.append(td);

      td = $('<td class=\'lastName\'>');
      td.append(user.lastName);
      tr.append(td);

      td = $('<td class=\'email\'>');
      td.append(user.email);
      tr.append(td);

      td = $('<td class=\'role\'>');
      td.append(user.role);
      tr.append(td);

      td = $('<td class=\'buttons\'>');
      var deleteBtn = $('<button class=\'btn btn-primary\'>Delete</button>');
      deleteBtn.click(deleteUser);
      deleteBtn.attr('id', user.id);
      td.append(deleteBtn);
      
      var updateBtn = $('<button class=\'btn btn-primary\'>Update</button>');
      updateBtn.click(updateUser);
      updateBtn.attr('id', user.id);
      td.append(updateBtn);
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