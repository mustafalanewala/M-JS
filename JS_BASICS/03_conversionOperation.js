// Conversion Operation in JavaScript

let score = "33";
console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score); // Number() function: Converts a value to a number
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1
// null => 0
// undefined => NaN

let isLoggedIn = "mustafa";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true and 0 => false
// "" => false
// "mustafa" => true

let number = 123;
let str = String(number);
console.log(str);
console.log(typeof str);

// Explicit Coercion: JavaScript requires explicit type conversions.
let parsedInt = parseInt("33abc"); // parseInt(): Converts a string to an integer
console.log(parsedInt); // Outputs: 33 (ignores non-numeric characters)
let parsedFloat = parseFloat("33.123abc"); // parseFloat(): Converts a string to a floating-point number
console.log(parsedFloat); // Outputs: 33.123 (ignores non-numeric characters)

// *********************** OPERATIONS ***********************

let value = 10;
let negValue = -value;
console.log(negValue);

// Arithmetic Operations
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 3);
console.log(2 ** 3);
console.log(2 % 3);

// Assignment Operations
let num = 10;
num += 5;
console.log(num);

// Comparison Operations
console.log(2 == 2);
console.log(2 != 3);
console.log(2 === 2);
console.log(2 !== 3);
console.log(2 > 3);
console.log(2 < 3);
console.log(2 >= 2);
console.log(2 <= 3);

// Logical Operations
console.log(true && true);
console.log(true || false);
console.log(!(2 > 3));

// Bitwise Operators
console.log(2 & 3); // (bitwise AND)
console.log(2 | 3); // (bitwise OR)
console.log(~2); // (bitwise NOT)
console.log(2 ^ 3); // (bitwise XOR)
console.log(2 << 1); // (bitwise left shift)
console.log(2 >> 1); // (bitwise right shift)

// String Concatenation
let str1 = "hello";
let str2 = " world";
let str3 = str1 + str2;
console.log(str3);

// Type Coercion and Operator Precedence
console.log("1" + 2);
console.log(1 + "3");
console.log("1" + "5");
console.log("1" + 5 + 2);
console.log(1 + 2 + "4");
console.log(2 + "2" + 3 + 4);
console.log(1 + 2 + "2" + 3 + 4);

// Type Coercion for Boolean Values
console.log(+true);
console.log(+"");

// Assignment Operators with Multiple Variables
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

// Prefixe and Postfixe
let counter = 10;
// Prefix Increment (++counter)
console.log(++counter);
console.log(counter);

// Postfix Increment (counter++)
console.log(counter++);
console.log(counter);

// Prefix Decrement (--counter)
console.log(--counter);
console.log(counter);

// Postfix Decrement (counter--)
console.log(counter--);
console.log(counter);