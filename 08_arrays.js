// Arrays in JavaScript 
// - Arrays in JavaScript are zero-indexed.
// - Arrays can hold mixed data types.
// - Array length is dynamic and automatically updated when elements are added or removed.
// - 'slice' creates a new array, while 'splice' modifies the original array.
// - Many array methods like push, pop, shift, unshift, reverse, and sort modify the original array.
// - Methods like map, filter, and concat create new arrays without modifying the original.
// - The 'join' method is useful for creating strings from array elements.
// - Arrays in JavaScript are objects and can have properties and methods added to them.
// - The 'flat' method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// - The 'isArray' method checks if a value is an array.
// - The 'from' method creates a new array instance from an array-like or iterable object.
// - The 'of' method creates a new array instance with a variable number of arguments, regardless of number or type of the arguments.

// Array declaration
const myArr = [1, 2, 3, 4, 5, 6]
const Heros = ["IronMan", "Hulk", "Thor", "Spider-Man"]
const mixedArray = [1, "two", true, null, {name: "object"}, [1, 2, 3]]

// Array constructor
const myArr2 = new Array(1, 2, 3, 4)

// Accessing elements
console.log(myArr)
console.log(Heros)
console.log(mixedArray)
console.log(myArr[1])  
console.log(Heros[3]) 

// Array length
console.log(myArr.length) 

// Modifying arrays
myArr[1] = 10  // Changing an element
console.log(myArr) 

// Array Methods
// Adding elements
myArr.push(7)  // Adds to the end
console.log(myArr)

myArr.unshift(0)  // Adds to the beginning
console.log(myArr)

// Removing elements
myArr.pop()  // Removes from the end
console.log(myArr)

myArr.shift()  // Removes from the beginning
console.log(myArr)

// Checking for elements
console.log(myArr.includes(4))  
console.log(myArr.indexOf(4)) 

// Join method
console.log(Heros.join("! "))

// Slice and Splice
console.log("Original Array:", myArr)

// Slice: Does not modify the original array
const slicedArr = myArr.slice(1, 3)
console.log("Sliced Array:", slicedArr)
console.log("After slice:", myArr)

// Splice: Modifies the original array
const splicedArr = myArr.splice(1, 3)
console.log("Spliced Array:", splicedArr)
console.log("After splice:", myArr)

// Reverse: Reverses the array in place
myArr.reverse()
console.log("Reversed Array:", myArr)

// Marvel and DC heroes arrays
const marvelHeroes = ["IronMan", "Hulk", "Thor", "Spider-Man"]
const dcHeroes = ["Batman", "Superman", "Wonder Woman", "Flash"]

// Concat method
const allHeroesConcat = marvelHeroes.concat(dcHeroes)
console.log("All Heroes (Concat):", allHeroesConcat)

// Spread operator
const allHeroesSpread = [...marvelHeroes, ...dcHeroes]
console.log("All Heroes (Spread):", allHeroesSpread)

// Nested array for flat method
const nestedArray = [1, 2, [3, 4, [5, 6]]]
const flatArray = nestedArray.flat(2)
console.log("Flat Array:", flatArray)

// isArray method
console.log("Is marvelHeroes an array?", Array.isArray(marvelHeroes))
console.log("Is mixedArray an array?", Array.isArray(mixedArray))

// from method
const string = "Mustafa"
const arrayFromString = Array.from(string)
console.log("Array from String:", arrayFromString)
console.log(Array.from({name: "Mustafa"})) // we need to define we want to make key or value array

// of method
let score1 = 100
let score2 = 200
let score3 = 300 
console.log(Array.of(score1, score2, score3))