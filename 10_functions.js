// Functions in JavaScript
// - Functions in JavaScript are blocks of code that perform a specific task.
// - Functions can return a value using the return keyword. If a function does not return a value, it implicitly returns undefined.
// - Function declarations are hoisted, meaning they can be called before they are defined in the code.
// - Functions can be used to handle objects and arrays by passing them as arguments or returning them from functions.

// Example of function that prints each letter of a name
function sayMyName() {
  console.log("M");
  console.log("u");
  console.log("s");
  console.log("t");
  console.log("a");
  console.log("f");
  console.log("a");
}

// Calling the function
sayMyName();

// Function to add two numbers and print the result
function addTwoNumbers1(num1, num2) {
  console.log(num1 + num2);
}

// Calling the function with different types of arguments
addTwoNumbers1(5, 10);
addTwoNumbers1("8", 10);
addTwoNumbers1("a", 10);
addTwoNumbers1(5, null);

// Demonstrating that the function does not return a value
const result1 = addTwoNumbers1(3, 3);
console.log("result:", result1); // Outputs: result: undefined

// Function to add two numbers and return the result
function addTwoNumbers2(num1, num2) {
  return num1 + num2;
}
// Storing the returned value in a variable
const result2 = addTwoNumbers2(3, 4);
console.log("result:", result2); // Outputs: result: 7

// Function to log a message for a user login
function loginUserMsg(username) {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// Calling the function with and without a username
console.log(loginUserMsg("mustafa"));
console.log(loginUserMsg());

// Function using rest parameters to handle multiple arguments
function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(10, 1, 2, 33));

// Example of an object
const user = {
  name: "Mustafa",
  age: 20,
};

// Function to handle an object and print its properties
function handleObject(anyObject) {
  console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`);
}
// Example of calling the function with an object
// handleObject(user)
handleObject({
  name: "Hasnain",
  age: 50,
});

// Example of an array
const handleArray = [200, 400, 600, 800];
// Function to return the second value from an array
function returnSecondValue(arr) {
  return arr[2];
}
// console.log(returnSecondValue(handleArray))
console.log(returnSecondValue([200, 400, 500, 800]));
