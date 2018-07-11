function UserServiceClient() {

  this.findAllUsers = findAllUsers;
  this.deleteUser = deleteUser;
  this.updateUser = updateUser;

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

  function updateUser(id) {
	  var url = "/api/user/" + id;
	  
	  return fetch(url, {
		  method: 'update'
	  })
  }
}
