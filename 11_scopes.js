// Scopes in Javascript
// - Scope refers to the visibility and accessibility of variables in different parts of the code


// 1. Global Scope
// Variables declared outside of any function have global scope
// They can be accessed from anywhere in the script
let globalVariable = "I'm a global variable";
function globalExample() {
  console.log(globalVariable); // This will work
}


// 2. Local Scope (Function Scope)
// Variables declared inside a function have local scope
// They can only be accessed within that function
function localExample() {
  let localVariable = "I'm a local variable";
  console.log(localVariable); // This will work
}
// console.log(localVariable); // This would throw an error because localVariable is not accessible here


// 3. Block Scope
// Variables declared with let and const inside a block (like if statements or loops) have block scope

if (true) {
  let blockVariable = "I'm a block-scoped variable";
  const anotherBlockVariable = "I'm also block-scoped";
  console.log(blockVariable); // This will work
}
// console.log(blockVariable); // This would throw an error because blockVariable is not accessible here


// Nested Scopes
function one() {
  const username = "Mustafa";

  function two() {
    const website = "mustafalanewala.framer.ai";
    console.log(username);
  }
  //   console.log(website);
  two();
}
one();

if (true) {
  const username = "mustafalanewala";
  if (username === "mustafalanewala") {
    const age = 20;
    console.log(username + age);
  }
  // console.log(age);
}
// console.log(username);


// Interesting Concept
console.log(addone(5))
function addone(num) {
  return num + 1;
}

// console.log(addtwo(5))
const addtwo = function (num) {
  return num + 2;
};
console.log(addtwo(5)) 
