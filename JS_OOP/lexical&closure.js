// Lexical Scoping
function outerFunction() {
  let outerVariable = "I am outside!";

  function innerFunction() {
    console.log(outerVariable); // innerFunction can access outerVariable
  }

  innerFunction(); // Output: I am outside!
}

outerFunction();

// Closure
function createCounter() {
  let count = 0; // `count` is a variable in the outer scope

  return function () {
    count++; // The inner function has access to `count`
    console.log(count);
  };
}

const counter = createCounter();

counter();
counter();
