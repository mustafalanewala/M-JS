// If-Else Statements in JavaScript
// - If-else statements are used for conditional execution of code blocks


// Simple if-else
let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote yet.");
}


// If-else if-else
let grade = 85;

if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else if (grade >= 60) {
    console.log("D");
} else {
    console.log("F");
}

// Nested if-else
let num = 15;

if (num > 0) {
    if (num % 2 === 0) {
        console.log("The number is positive and even.");
    } else {
        console.log("The number is positive and odd.");
    }
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}


// Ternary operator
let isRaining = true;
let weather = isRaining ? "Take an umbrella" : "Enjoy the sun";
console.log(weather);

// Switch Statement

const month = 8

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
        break;
}