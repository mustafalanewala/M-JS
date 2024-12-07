// Iterations in JavaScript

// For Loop
// Basic syntax: for (initialization; condition; increment/decrement) { ... }
// 1. Initialization: Executed once before the loop starts
// 2. Condition: Checked before each iteration
// 3. Increment/Decrement: Executed after each iteration

// Example of a basic for loop
for (let i = 0; i <= 5; i++) {
    console.log(i); 
}


// Nested for loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        // console.log(`i: ${i}, j: ${j}`);
        console.log(i + '*' + j + '=' + i*j);
    }
}

// Iterating over an array
const fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Break and Continue
for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        console.log(`Detected 5`);
        break; 
    }
    console.log(`value of i is ${i}`);
}

for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        console.log(`Detected 5`);
        continue; 
    }
    console.log(`value of i is ${i}`);
}

// Infinite loop (be cautious!)
// for (;;) {
//     console.log("This will run forever!");
// }


// While loop
// Basic syntax: while (condition) { ... }
// The loop continues as long as the condition is true

let count = 0;
while (count < 5) {
    console.log(`Count is: ${count}`);
    count++;
}


// Do-While loop
// Basic syntax: do { ... } while (condition);
// The loop will always execute the block at least once

let score = 11;
do {
    console.log(`Score is: ${score}`);
    score++;
} while (score <= 10);
