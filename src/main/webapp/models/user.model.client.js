function User(username, password, firstName, lastName, email, phone, role,
		dateOfBirth) {
	this.username = username;
	this.password = password;
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.role = role;

	function username() {
		return this.username;
	}

	function username(username) {
		this.username = username;
	}

	function password() {
		return this.password;
	}

	function password(password) {
		this.password = password;
	}

	function firstName() {
		return this.firstName;
	}

	function firstName(firstName) {
		this.firstName = firstName;
	}

	function lastName() {
		return this.lastName;
	}

	function lastName(lastName) {
		this.lastName = lastName;
	}

	function email() {
		return this.email;
	}

	function email(email) {
		this.email = email;
	}

	function role() {
		return this.role;
	}

	function role(role) {
		this.role = role;
	}
}
