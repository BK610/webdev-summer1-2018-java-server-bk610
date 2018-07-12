function UserServiceClient() {

  this.findAllUsers = findAllUsers;
  this.deleteUser = deleteUser;
  this.updateUser = updateUser;
  this.createUser = createUser;

  function deleteUser(id) {
    var url = "/api/user/" + id;

    return fetch(url, {
      "method": 'DELETE'
    })
  }

  function findAllUsers() {
    var url = "/api/user";
    return fetch(url)
      .then(function (response) {
        return response.json();
      });
  }

  function updateUser(user) {
	  var url = "/api/user/" + user.id;
	  
	  return fetch(url, {
		  "method": 'PUT',
		  "body": JSON.stringify(user),
		  "content-type": 'application/json'})
		  .then(function (response) {
	    	return response.json();
	    });
  }
  
  function createUser(user) {
	  var url = "/register";
	  
	  return fetch(url, {
		  "method": 'POST',
		  "body": JSON.stringify(user),
		  "content-type": 'application/json'})
		  .then(function (response) {
	    	return response.json();
	    });
  }
}
