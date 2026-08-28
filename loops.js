// ======================================================
// // Part 2: Loops and Iteration
// File: loops.js
// // Section: A | Semester: 4
// Instructor: Mr. Yasir Iqbal
// Description:
//   This file demonstrates JavaScript looping concepts:
//   for, while, do-while, forEach, for...of, reverse
//   iteration, nested loops, break, continue, and more.
// ======================================================



// ======================================================
// Task 1: For Loop (1 to 10)
// ======================================================

console.log("\n========== Task 1: For Loop (1 to 10) ==========\n");

for (let number = 1; number <= 10; number++) {
    console.log(number);
}



// ======================================================
// Task 2: Loop Through Fruits Array
// ======================================================

console.log("\n========== Task 2: Loop Through Array ==========\n");

let fruits = ["Mango", "Apple", "Banana", "Orange", "Grapes"];

for (let index = 0; index < fruits.length; index++) {
    console.log((index + 1) + ". " + fruits[index]);
}



// ======================================================
// Task 3: While Loop (1 to 5)
// ======================================================

console.log("\n========== Task 3: While Loop ==========\n");

let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}



// ======================================================
// Task 4: Do-While Loop
// ======================================================

console.log("\n========== Task 4: Do-While Loop ==========\n");

// do-while executes the body at least once before checking condition
let doCount = 1;

do {
    console.log(doCount);
    doCount++;
} while (doCount <= 5);

// Demonstrating do-while executes even when condition is false from the start
console.log("\nDo-While with false condition (still runs once):");
let testCount = 10;

do {
    console.log("Executed once even though 10 < 5 is false:", testCount);
} while (testCount < 5);



// ======================================================
// Task 5: Reverse Order Loop
// ======================================================

console.log("\n========== Task 5: Reverse Order Loop ==========\n");

let reverseNumbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// Iterating from last index to 0
for (let index = reverseNumbers.length - 1; index >= 0; index--) {
    console.log(reverseNumbers[index]);
}



// ======================================================
// Task 6: Even and Odd Checker (1 to 20)
// ======================================================

console.log("\n========== Task 6: Even and Odd Checker ==========\n");

for (let number = 1; number <= 20; number++) {
    if (number % 2 === 0) {
        console.log(number + " is Even");
    } else {
        console.log(number + " is Odd");
    }
}



// ======================================================
// Task 7: Break Statement
// ======================================================

console.log("\n========== Task 7: Break Statement ==========\n");

console.log("Loop stops when number reaches 6:");

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        console.log("Break triggered at:", i);
        break;
    }
    console.log(i);
}



// ======================================================
// Task 8: Continue Statement
// ======================================================

console.log("\n========== Task 8: Continue Statement ==========\n");

console.log("Loop skips number 5:");

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Skipping:", i);
        continue;   // jump to next iteration immediately
    }
    console.log(i);
}



// ======================================================
// Task 9: Nested Loop Pattern
// ======================================================

console.log("\n========== Task 9: Nested Loop Pattern ==========\n");

console.log("3x3 Star Pattern:");

for (let row = 1; row <= 3; row++) {
    let pattern = "";
    for (let col = 1; col <= 3; col++) {
        pattern += "* ";
    }
    console.log(pattern);
}

console.log("\nTriangle Pattern:");

for (let row = 1; row <= 5; row++) {
    let stars = "";
    for (let col = 1; col <= row; col++) {
        stars += "* ";
    }
    console.log(stars);
}



// ======================================================
// Task 10: Nested Loop Coordinates
// ======================================================

console.log("\n========== Task 10: Coordinate Matrix (3x4) ==========\n");

for (let row = 1; row <= 3; row++) {
    let rowData = "";
    for (let col = 1; col <= 4; col++) {
        rowData += "(" + row + "," + col + ") ";
    }
    console.log(rowData);
}



// ======================================================
// Task 11: forEach Loop
// ======================================================

console.log("\n========== Task 11: forEach Loop ==========\n");

let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

colors.forEach(function(color, index) {
    console.log((index + 1) + ". " + color);
});

let numbers = [10, 20, 30, 40, 50];

console.log("\nNumbers with forEach:");
numbers.forEach(function(num, idx) {
    console.log("Index " + idx + ": " + num);
});



// ======================================================
// Task 12: Multiplication Table (5x and 2x)
// ======================================================

console.log("\n========== Task 12: Multiplication Table ==========\n");

console.log("5x Table:");
for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

console.log("\n2x Table:");
for (let i = 1; i <= 10; i++) {
    console.log("2 x " + i + " = " + (2 * i));
}



// ======================================================
// Task 13: Sum Calculation using Loop
// ======================================================

console.log("\n========== Task 13: Sum Calculation ==========\n");

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum of 1 to 10:", sum);

let arrayNumbers = [5, 10, 15, 20, 25];
let arraySum = 0;

for (let i = 0; i < arrayNumbers.length; i++) {
    arraySum += arrayNumbers[i];
}
console.log("Sum of [5, 10, 15, 20, 25]:", arraySum);



// ======================================================
// Task 14: Count Occurrences in Array
// ======================================================

console.log("\n========== Task 14: Count Occurrences ==========\n");

let letters = ["a", "b", "c", "b", "d", "b"];
let countB  = 0;

for (let i = 0; i < letters.length; i++) {
    if (letters[i] === "b") {
        countB++;
    }
}

console.log("Array:", letters);
console.log("Count of 'b':", countB);



// ======================================================
// Task 15: for...of Loop
// ======================================================

console.log("\n========== Task 15: for...of Loop ==========\n");

let fruits2 = ["Mango", "Apple", "Banana"];

for (let fruit of fruits2) {
    console.log("- " + fruit);
}

// for...in on an object (shows property keys)
console.log("\nfor...in on an object:");
let student = { name: "John", age: 20, section: "A" };

for (let key in student) {
    console.log(key + ": " + student[key]);
}



// ======================================================
// Final Summary
// ======================================================

console.log("\n========== SUMMARY ==========\n");
console.log("Covered: for Loop");
console.log("Covered: while Loop");
console.log("Covered: do-while Loop");
console.log("Covered: forEach Loop");
console.log("Covered: for...of Loop");
console.log("Covered: for...in Loop");
console.log("Covered: Break Statement");
console.log("Covered: Continue Statement");
console.log("Covered: Nested Loops");
console.log("Covered: Sum Calculation");
console.log("Covered: Occurrence Counting");

console.log("\n========== LOOPS SECTION COMPLETED SUCCESSFULLY ==========\n");
