// ======================================================
// // Part 4: Arrays
// File: arrays.js
// // Section: A | Semester: 4
// Instructor: Mr. Yasir Iqbal
// Description:
//   This file covers JavaScript arrays: creation, access,
//   mutation methods (push, pop, shift, unshift, splice),
//   functional methods (map, filter, reduce), sorting,
//   searching, and the spread operator.
// ======================================================



// ======================================================
// Task 1: Create Fruits Array
// ======================================================

console.log("\n========== Task 1: Create Array ==========\n");

let fruits = ["Mango", "Apple", "Banana", "Orange", "Grapes"];
console.log("Fruits Array:", fruits);



// ======================================================
// Task 2: First and Last Element
// ======================================================

console.log("\n========== Task 2: First and Last Element ==========\n");

console.log("First Fruit:", fruits[0]);
console.log("Last Fruit:", fruits[fruits.length - 1]);



// ======================================================
// Task 3: Array Length
// ======================================================

console.log("\n========== Task 3: Array Length ==========\n");

console.log("Total Fruits:", fruits.length);



// ======================================================
// Task 4: Add and Remove Elements
// ======================================================

console.log("\n========== Task 4: push() and shift() ==========\n");

fruits.push("Strawberry");   // add to end
fruits.shift();              // remove from beginning

console.log("Array after push + shift:", fruits);



// ======================================================
// Task 5: Loop Through Array
// ======================================================

console.log("\n========== Task 5: Loop Through Array ==========\n");

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}



// ======================================================
// Task 6: Sort Numbers (Ascending)
// ======================================================

console.log("\n========== Task 6: sort() ==========\n");

let numbers = [5, 2, 9, 1, 7];

// Without a compare function sort() treats values as strings
// With (a, b) => a - b it sorts numerically ascending
let sortedNumbers = numbers.sort(function(a, b) { return a - b; });

console.log("Sorted Numbers:", sortedNumbers);



// ======================================================
// Task 7: filter() - Even Numbers Only
// ======================================================

console.log("\n========== Task 7: filter() ==========\n");

let mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers  = mixedNumbers.filter(function(num) { return num % 2 === 0; });

console.log("Original:", mixedNumbers);
console.log("Even only:", evenNumbers);



// ======================================================
// Task 8: map() - Double Each Number
// ======================================================

console.log("\n========== Task 8: map() ==========\n");

// map() creates a new array by transforming every element
let doubledNumbers = mixedNumbers.map(function(num) { return num * 2; });

console.log("Doubled Numbers:", doubledNumbers);



// ======================================================
// Task 9: reduce() - Sum of All Numbers
// ======================================================

console.log("\n========== Task 9: reduce() ==========\n");

// reduce() accumulates values into a single result
let sum = mixedNumbers.reduce(function(total, num) { return total + num; }, 0);

console.log("Sum of 1-10:", sum);



// ======================================================
// Task 10: indexOf() - Find Element in Array
// ======================================================

console.log("\n========== Task 10: indexOf() ==========\n");

let names      = ["Ali", "Sara", "Ahmed", "Zara"];
let searchName = "Ahmed";
let index      = names.indexOf(searchName);

if (index !== -1) {
    console.log(searchName + " found at index " + index);
} else {
    console.log(searchName + " not found");
}



// ======================================================
// Task 11: 3x3 Tic-Tac-Toe Board (Nested Array)
// ======================================================

console.log("\n========== Task 11: Tic-Tac-Toe Board ==========\n");

let board = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"]
];

for (let i = 0; i < board.length; i++) {
    console.log(board[i].join(" | "));
    if (i < board.length - 1) console.log("---------");
}



// ======================================================
// Task 12: Sort Array of Objects by Age
// ======================================================

console.log("\n========== Task 12: Sort Objects by Age ==========\n");

let people = [
    { name: "Ali",   age: 25 },
    { name: "Sara",  age: 20 },
    { name: "Ahmed", age: 30 }
];

people.sort(function(a, b) { return a.age - b.age; });

people.forEach(function(p) {
    console.log(p.name + " - Age: " + p.age);
});



// ======================================================
// Task 13: Mutation Methods (push, pop, unshift, splice)
// ======================================================

console.log("\n========== Task 13: Array Mutation Methods ==========\n");

let tools = ["HTML", "CSS", "JavaScript"];
console.log("Start:", tools);

tools.push("React");
console.log("After push('React'):", tools);

tools.pop();
console.log("After pop():", tools);

tools.unshift("Git");
console.log("After unshift('Git'):", tools);

tools.splice(1, 1);   // remove 1 element at index 1
console.log("After splice(1,1):", tools);



// ======================================================
// Task 14: concat() - Combine Two Arrays
// ======================================================

console.log("\n========== Task 14: concat() ==========\n");

let arr1     = [1, 2, 3];
let arr2     = [4, 5, 6];
let combined = arr1.concat(arr2);

console.log("arr1:", arr1);
console.log("arr2:", arr2);
console.log("Combined:", combined);



// ======================================================
// Task 15: Copy Array with Spread Operator
// ======================================================

console.log("\n========== Task 15: Spread Operator Copy ==========\n");

let originalArray = [10, 20, 30];
let copiedArray   = [...originalArray];   // independent copy

copiedArray.push(40);  // modifying copy should NOT affect original

console.log("Original:", originalArray);
console.log("Copy    :", copiedArray);



// ======================================================
// Final Summary
// ======================================================

console.log("\n========== SUMMARY ==========\n");
console.log("Covered: Array Creation and Access");
console.log("Covered: push, pop, shift, unshift, splice");
console.log("Covered: sort(), filter(), map(), reduce()");
console.log("Covered: indexOf()");
console.log("Covered: Nested Arrays (Tic-Tac-Toe)");
console.log("Covered: Sorting Objects by Property");
console.log("Covered: concat()");
console.log("Covered: Spread Operator Copy");

console.log("\n========== PART 4 COMPLETED SUCCESSFULLY ==========\n");
