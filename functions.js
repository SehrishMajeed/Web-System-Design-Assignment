// ======================================================
// // Part 2: Functions
// File: functions.js
// // Section: A | Semester: 4
// Instructor: Mr. Yasir Iqbal
// Description:
//   This file covers JavaScript functions: declarations,
//   expressions, default parameters, arrow functions,
//   higher-order functions, callbacks, closures, and
//   recursion.
// ======================================================



// ======================================================
// Task 1: Function Declaration
// ======================================================

console.log("\n========== Task 1: Function Declaration ==========\n");

function greet(name) {
    return "Hello, " + name + "! Welcome to JavaScript programming.";
}

console.log(greet("Ali"));
console.log(greet("Sara"));



// ======================================================
// Task 2: Rectangle Area Calculator
// ======================================================

console.log("\n========== Task 2: Area Calculator ==========\n");

function calculateArea(length, width) {
    return length * width;
}

let rectangleArea = calculateArea(10, 5);

console.log("Rectangle Area (10 x 5):", rectangleArea);
console.log("Rectangle Area (12 x 8):", calculateArea(12, 8));
console.log("Rectangle Area (15 x 6):", calculateArea(15, 6));



// ======================================================
// Task 3: Default Parameters
// ======================================================

console.log("\n========== Task 3: Default Parameters ==========\n");

// If no argument is passed, name defaults to "Guest"
function sayHello(userName = "Guest") {
    return "Hello, " + userName + "!";
}

console.log(sayHello("Ayesha"));  // argument provided
console.log(sayHello());           // no argument - uses default "Guest"

function createGreeting(greeting = "Hi", name = "Friend") {
    return greeting + ", " + name + "!";
}

console.log(createGreeting("Welcome", "Ahmed"));
console.log(createGreeting("Hey", "Sara"));
console.log(createGreeting());  // both defaults used



// ======================================================
// Task 4: Function Expression (assigned to variable)
// ======================================================

console.log("\n========== Task 4: Function Expression ==========\n");

function multiply(num1, num2) {
    return num1 * num2;
}

// A function can be assigned to a variable and called through it
let operation = multiply;

console.log("Multiplication (6 x 4):", operation(6, 4));

let divide = function(a, b) {
    return a / b;
};

console.log("Division (20 / 4):", divide(20, 4));

let add = function(x, y) {
    return x + y;
};

console.log("Addition (15 + 25):", add(15, 25));



// ======================================================
// Task 5: Function Reusability - square and cube
// ======================================================

console.log("\n========== Task 5: Function Reusability ==========\n");

function square(number) {
    return number * number;
}

// cube reuses the square function internally
function cube(number) {
    return square(number) * number;
}

console.log("Square of 5:", square(5));
console.log("Cube   of 5:", cube(5));
console.log("Square of 7:", square(7));
console.log("Square of 10:", square(10));



// ======================================================
// Task 6: Arrow Functions (ES6)
// ======================================================

console.log("\n========== Task 6: Arrow Functions ==========\n");

// Arrow functions have a shorter syntax than regular functions
const divideNumbers = (a, b) => a / b;
console.log("Arrow Division (20 / 4):", divideNumbers(20, 4));

const calculateCircleArea = (radius) => {
    const pi = 3.14159;
    return pi * radius * radius;
};

console.log("Circle Area (radius 5):", calculateCircleArea(5).toFixed(2));

// Single parameter - parentheses are optional
const doubleNumber = num => num * 2;
console.log("Double of 10:", doubleNumber(10));

const getCurrentYear = () => new Date().getFullYear();
console.log("Current Year:", getCurrentYear());



// ======================================================
// Task 7: Higher-Order Functions
// ======================================================

console.log("\n========== Task 7: Higher-Order Functions ==========\n");

// A higher-order function accepts another function as a parameter
function executeOperation(num1, num2, op) {
    return op(num1, num2);
}

const addOp      = (a, b) => a + b;
const subtractOp = (a, b) => a - b;
const multiplyOp = (a, b) => a * b;

console.log("Add (10 + 5):",      executeOperation(10, 5, addOp));
console.log("Subtract (10 - 5):", executeOperation(10, 5, subtractOp));
console.log("Multiply (10 x 5):", executeOperation(10, 5, multiplyOp));



// ======================================================
// Task 8: Callback Functions
// ======================================================

console.log("\n========== Task 8: Callback Functions ==========\n");

function processUserData(name, callback) {
    console.log("Processing data for:", name);

    let userData = {
        name: name,
        timestamp: new Date(),
        status: "processed"
    };

    callback(userData);
}

function displayResult(data) {
    console.log("Callback received data for:", data.name);
}

processUserData("John", displayResult);

// Passing an arrow function as a callback directly
processUserData("Ahmed", (data) => {
    console.log("Inline callback - user processed:", data.name);
});



// ======================================================
// Task 9: map() with Callback
// ======================================================

console.log("\n========== Task 9: Array map() with Callback ==========\n");

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(function(num) { return num * 2; });

console.log("Original:", numbers);
console.log("Doubled:", doubledNumbers);

function toUpperCase(word) { return word.toUpperCase(); }

let words = ["javascript", "html", "css"];
let upperWords = words.map(toUpperCase);
console.log("Uppercase:", upperWords);



// ======================================================
// Task 10: filter() with Callback
// ======================================================

console.log("\n========== Task 10: Array filter() with Callback ==========\n");

let mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = mixedNumbers.filter(function(num) { return num % 2 === 0; });

console.log("Original:", mixedNumbers);
console.log("Even only:", evenNumbers);

let students = [
    { name: "Ali",   marks: 85 },
    { name: "Sara",  marks: 78 },
    { name: "Ahmed", marks: 92 },
    { name: "Zara",  marks: 88 }
];

let topStudents = students.filter(function(s) { return s.marks > 80; });
console.log("Top students (marks > 80):", topStudents);



// ======================================================
// Task 11: Function with Grade Logic
// ======================================================

console.log("\n========== Task 11: Grade Calculator ==========\n");

function calculateGrade(obtained, total) {
    total = total || 100;  // default to 100 if not provided
    let percentage = (obtained / total) * 100;

    if (percentage >= 90) return "A";
    if (percentage >= 80) return "B";
    if (percentage >= 70) return "C";
    if (percentage >= 60) return "D";
    return "F";
}

console.log("Grade for 90/100:", calculateGrade(90));
console.log("Grade for 85/100:", calculateGrade(85));
console.log("Grade for 75/100:", calculateGrade(75));
console.log("Grade for 120/150:", calculateGrade(120, 150));



// ======================================================
// Task 12: Closure
// ======================================================

console.log("\n========== Task 12: Closures ==========\n");

// A closure is when an inner function remembers the outer function's variables
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

let counter = createCounter();
console.log("Counter:", counter()); // 1
console.log("Counter:", counter()); // 2
console.log("Counter:", counter()); // 3

let counter2 = createCounter();     // separate instance
console.log("Counter2:", counter2()); // 1 (fresh start)



// ======================================================
// Task 13: reduce() with Callback
// ======================================================

console.log("\n========== Task 13: Array reduce() ==========\n");

let prices = [10, 20, 15, 30, 25];
let total   = prices.reduce(function(sum, price) { return sum + price; }, 0);
let average = total / prices.length;

console.log("Prices:", prices);
console.log("Total:", total);
console.log("Average:", average);



// ======================================================
// Task 14: Recursion
// ======================================================

console.log("\n========== Task 14: Recursive Functions ==========\n");

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);  // function calls itself
}

console.log("5! =", factorial(5));  // 120
console.log("6! =", factorial(6));  // 720

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci(5):", fibonacci(5));  // 5
console.log("Fibonacci(7):", fibonacci(7));  // 13



// ======================================================
// Task 15: Function Composition
// ======================================================

console.log("\n========== Task 15: Function Composition ==========\n");

const addFive       = (x) => x + 5;
const multiplyByTwo = (x) => x * 2;
const subtractThree = (x) => x - 3;

let value = 10;

console.log("Original:", value);
console.log("After addFive:", addFive(value));
console.log("After addFive then multiplyByTwo:", multiplyByTwo(addFive(value)));
console.log("Fully composed result:", subtractThree(multiplyByTwo(addFive(value))));



// ======================================================
// Final Summary
// ======================================================

console.log("\n========== SUMMARY ==========\n");
console.log("Covered: Function Declarations");
console.log("Covered: Function Expressions");
console.log("Covered: Default Parameters");
console.log("Covered: Arrow Functions");
console.log("Covered: Higher-Order Functions");
console.log("Covered: Callback Functions");
console.log("Covered: Array Methods (map, filter, reduce)");
console.log("Covered: Closures");
console.log("Covered: Recursion");
console.log("Covered: Function Composition");

console.log("\n========== FUNCTIONS SECTION COMPLETED SUCCESSFULLY ==========\n");
