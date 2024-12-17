// Call Method
function SetUsername(username) {
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username); // Use call to set username in the context of createUser

  this.email = email;
  this.password = password;
}

const M = new createUser("Mustafa", "mustafa@example.com", "123");
console.log(M);
