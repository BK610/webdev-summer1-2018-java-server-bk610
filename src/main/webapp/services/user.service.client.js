function UserServiceClient() {

  this.findAllUsers = findAllUsers;
  this.deleteUser   = deleteUser;
  this.updateUser   = updateUser;
  this.createUser   = createUser;
  this.login        = login;

  function deleteUser(id) {
    var url = "/api/user/" + id;

    return fetch(url, {
      "method": "DELETE"
    })
  }

  function findAllUsers() {
    var url = "/api/user";
    return fetch(url)
      .then(function (response) {
        return response.json();
      });
  }

  function updateUser(id, user) {
	  var url = "/api/user/" + id;
	  
	  return fetch(url, {
		  "method": 'PUT',
		  "body": JSON.stringify(user),
		  "headers": {"Content-Type": "application/json"}})
		  .then(function (response) {
	    	return response.json();
	    });
  }
  
  function createUser(user) {
	  var url = "/register";

	  return fetch(url, {
		  "method": "POST",
		  "body": JSON.stringify(user),
		  "headers": {"Content-Type": "application/json"}})
		  .then(function (response) {
	    	return response.json();
	    });
  }
  
  function login(user) {
	  var url = "/login";
	  
	  return fetch(url, {
	      method: 'POST',
	      body: JSON.stringify(user),
	      credentials: 'include',
	      headers: {
	        'content-type': 'application/json'}})
	      .then(function (response) {
	    	  return response.json();
	      });
  }
}
