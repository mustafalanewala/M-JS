// Strings in JavaScript
// Strings in JavaScript are immutable, meaning they cannot be changed after they are created.
// Template literals (enclosed by backticks ``) are used for multi-line strings and string interpolation.
// String methods return new strings and do not modify the original string.

// Strings initialization
let singleQuoted = 'Hello, World!';
let doubleQuoted = "Hello, World!";
let multiLine = `This is a
multi-line string.`; 
let myName = new String('Mustafa')
console.log(myName.__proto__);


// String concatenation
let greeting = "Hiee";
let name = "Mustafa";
let fullGreeting = greeting + ", " + name + "!";
console.log(fullGreeting);


// String interpolation
let formattedString = `OMG! ${greeting} ${name}, How are you?`;
console.log(formattedString);


// UpperCase and lowerCase
let upperCase = name.toUpperCase();
let lowerCase = name.toLowerCase();
let titleCase = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
console.log(upperCase, lowerCase, titleCase);


// The 'includes()' method is used to check if a substring exists within another string.
let contain1 = fullGreeting.includes("Hiee"); 
let contain2 = fullGreeting.includes("Lanewala"); 
console.log(contain1, contain2);


// Trim whitespace
let whitespaceString = "   Iam Mustafa Lanewala!   ";
console.log(whitespaceString);
console.log(whitespaceString.trim());


// Replacing substrings
// If you need to replace all occurrences, use a regular expression with the global flag (e.g., /pattern/g).
let replacedString = fullGreeting.replace("Hiee", "How are you");
console.log(replacedString);


// Splitting and joining strings
// split() divides a string into an array based on a delimiter.
// join() is used to concatenate an array of strings into a single string with a specified separator.
let splitString = fullGreeting.split("Hiee");
let joinedString = splitString.join("Hiee");
console.log(splitString);
console.log(joinedString); 


// Accessing characters
// The charAt() method returns the character at a specified index in a string.
let firstChar = greeting.charAt(0);
let lastChar = name.charAt(name.length - 1);
console.log(firstChar, lastChar);


// Extracting substrings
// substring() extracts characters from a string between two specified indices.
// slice() is similar but can also accept negative indices to count from the end of the string.
let subString = fullGreeting.substring(6, 13);
let sliceString = fullGreeting.slice(0, -1);
console.log(subString, sliceString);


// Finding index of a substring
// // indexOf() returns the index of the first occurrence of a specified value in a string.
// // lastIndexOf() returns the index of the last occurrence of a specified value in a string.
let indexOfMustafa = name.indexOf("u");
let lastIndexOf = name.lastIndexOf("f");
console.log(indexOfMustafa, lastIndexOf);