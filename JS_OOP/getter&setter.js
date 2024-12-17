// Getters and Setters
class User1 {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}Mustafa`;
  }

  set password(value) {
    this._password = value;
  }
}
const mustafa = new User1("mustafa@ai.com", "123");
console.log(mustafa.email);
console.log(mustafa.password);


// Property Based Approach
function User2(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}
const ML = new User2("hello.com", "123");
console.log(ML.email);


// Object Based Approach
const User3 = {
  _email: "hello.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};
const m = Object.create(User3);
console.log(m.email);
console.log(m.password);
