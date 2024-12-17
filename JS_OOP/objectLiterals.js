// Object literals
const user = {
  name: "Mustafa",
  email: "mustafa@example.com",
  signedIn: false,
  getUserDetails: function () {
    // console.log("User details");
    // console.log(`UserName: ${this.name}`);
    console.log(this);
  },
};
console.log(user.name);
console.log(user.getUserDetails());
