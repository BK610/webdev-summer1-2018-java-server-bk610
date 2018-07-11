function UserServiceClient() {

  this.findAllUsers = findAllUsers;
  this.deleteUser = deleteUser;
  this.updateUser = updateUser;
  this.createUser = createUser;

  function deleteUser(id) {
    var url = "/api/user/" + id;

    return fetch(url, {
      method: 'delete'
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
		  method: 'put',
		  body: JSON.stringify(user),
		  content-type: 'application/JSON'
	  })
  }
  
  function createUser(user) {
	  //TODO
	  
  }
}
