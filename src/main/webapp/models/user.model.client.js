function User(username, password, firstName, lastName, email, phone, role,
		dateOfBirth) {
	
	this.username = username;
	this.password = password;
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.role = role;
	
	this.getUsername = getUsername;
	this.setUsername = setUsername;
	this.getPassword = getPassword;
	this.setPassword = setPassword;
	this.getFirstName = getFirstName;
	this.setFirstName = setFirstName;
	this.getLastName = getLastName;
	this.setLastName = setLastName;
	this.getEmail = getEmail;
	this.setEmail = setEmail;
	this.getRole = getRole;
	this.setRole = setRole;

	function getUsername() {
		return this.username;
	}

	function setUsername(username) {
		this.username = username;
	}

	function getPassword() {
		return this.password;
	}

	function setPassword(password) {
		this.password = password;
	}

	function getFirstName() {
		return this.firstName;
	}

	function setFirstName(firstName) {
		this.firstName = firstName;
	}

	function getLastName() {
		return this.lastName;
	}

	function setLastName(lastName) {
		this.lastName = lastName;
	}

	function getEmail() {
		return this.email;
	}

	function setEmail(email) {
		this.email = email;
	}

	function getRole() {
		return this.role;
	}

	function setRole(role) {
		this.role = role;
	}
}
