// 2 Types of memory = Stack memory and Heap Memory
// We use stack memory in primitive types
// We use heap memory in non primitive types

// Stack Memory:
// - Stack memory is used for storing primitive types (such as numbers, strings, booleans, undefined, and null).
// - It follows a Last-In-First-Out (LIFO) principle, meaning the last element pushed onto the stack will be the first one to be popped out.
// - Stack memory is automatically managed by JavaScript, and you don't have direct control over it.
// - When a function is called, a new frame is pushed onto the stack, containing the function's local variables and parameters.
// - When the function returns, its frame is popped off the stack, freeing up the memory it occupied.

let myName = "codewithmustafa";
let anotherName = myName;
myName = "mustafa";
console.log(myName); // Output: mustafa
console.log(anotherName); // Output: codewithmustafa

// Heap Memory:
// - Heap memory is used for storing non-primitive types (such as objects, arrays, and functions).
// - Unlike stack memory, heap memory does not follow a specific order for allocation and deallocation.
// - JavaScript uses a garbage collector to manage heap memory, which automatically frees up memory that is no longer in use.
// - Objects and arrays are stored in heap memory, and variables hold references to these objects.

let person = { name: "Mustafa", age: 20 };
let anotherPerson = person;
person.name = "Mustafa Lanewala"; 
console.log(person.name); // Output: Mustafa Lanewala
console.log(anotherPerson.name); // Output: Mustafa Lanewala

// Additional Notes:
// - In the stack memory example, changing `myName` does not affect `anotherName` because they are stored as separate copies.
// - In the heap memory example, changing `person.name` affects `anotherPerson.name` because both variables reference the same object in memory.
// - Understanding the difference between stack and heap memory is crucial for managing data efficiently in JavaScript.