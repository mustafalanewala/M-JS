// Array Methods in JavaScript

// ForEach Method
const letter = ["M", "U", "S", "T", "A", "F", "A"];
letter.forEach(letter => {
  console.log(letter);
});

// Foreach example with object
const person = {
    name: "Mustafa",
    age: 20,
    city: "Dohad"
  };
  Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  
  // Foreach example with array of objects
  const people = [
    { name: "Mustafa", age: 20 },
    { name: "Murtaza", age: 21 },
    { name: "Abdeali", age: 22 }
  ];
  people.forEach((person, index) => {
    console.log(`Person ${index + 1}: ${person.name}, ${person.age} years old`);
  });


// Filter Method
const mynum = [1, 2, 3, 4, 5, 6, 7, 8];
const newnum = mynum.filter( (num) => {
    return num > 4
})
console.log(newnum);


// Map Method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const addNumbers = numbers.map((num) => num + 10);
console.log(addNumbers); 


// Chaining
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubleEvenNumbers = num
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2);
console.log(doubleEvenNumbers);


// Reduce Method
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum); 