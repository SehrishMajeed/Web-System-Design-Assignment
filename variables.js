// ======================================================
// // Part 1: Variables, Data Types & Basic Operations
// File: variables.js
// // Section: A | Semester: 4
// Instructor: Mr. Yasir Iqbal
// Description:
//   This file covers JavaScript variable declarations
//   (var, let, const), all primitive data types, type
//   conversion, scope, and basic object/array usage.
// ======================================================



// ======================================================
// SECTION 1: Variable Declaration (var, let, const)
// ======================================================

console.log("\n========== SECTION 1: Variable Declarations ==========\n");

// var is function-scoped and can be redeclared
var studentName = "John Doe ";
console.log("Using VAR  - Student Name:", studentName);

// let is block-scoped and cannot be redeclared in the same scope
let studentAge = 20;
console.log("Using LET  - Student Age:", studentAge);

// const is block-scoped and cannot be reassigned after declaration
const universityName = "University of Gujrat";
console.log("Using CONST - University:", universityName);



// ======================================================
// var vs let vs const Comparison
// ======================================================

console.log("\n========== var vs let vs const Comparison ==========\n");

// VAR - leaks outside the if block because it is function-scoped
if (true) {
    var varExample = "I am var";
}
console.log("VAR outside if block:", varExample); // visible here

// LET - stays inside its block
{
    let letExample = "I am let";
    console.log("LET inside block:", letExample);
}
// console.log(letExample); // would throw ReferenceError

// CONST - must be initialized; cannot be reassigned
const constExample = "I am const";
console.log("CONST value:", constExample);

console.log("\nKey Differences:");
console.log("- VAR   : Function-scoped, can be redeclared, can be reassigned");
console.log("- LET   : Block-scoped, cannot be redeclared, can be reassigned");
console.log("- CONST : Block-scoped, cannot be redeclared, cannot be reassigned");



// ======================================================
// SECTION 2: Data Types
// ======================================================

console.log("\n========== SECTION 2: Data Types ==========\n");

let courseTitle    = "JavaScript Fundamentals";   // STRING
let marks          = 95;                           // NUMBER (integer)
let percentage     = 92.5;                         // NUMBER (float)
let isStudentPassed = true;                        // BOOLEAN
let undefinedVar;                                  // UNDEFINED
let nullVar        = null;                         // NULL

let studentInfo = { id: 12345678, name: "John Doe ", section: "A" }; // OBJECT
let subjects    = ["JavaScript", "HTML", "CSS", "Database"];               // ARRAY

console.log("String  :", courseTitle,      "| Type:", typeof courseTitle);
console.log("Integer :", marks,            "| Type:", typeof marks);
console.log("Float   :", percentage,       "| Type:", typeof percentage);
console.log("Boolean :", isStudentPassed,  "| Type:", typeof isStudentPassed);
console.log("Undefined:", undefinedVar,    "| Type:", typeof undefinedVar);
console.log("Null    :", nullVar,          "| Type:", typeof nullVar);
console.log("Object  :", studentInfo,      "| Type:", typeof studentInfo);
console.log("Array   :", subjects,         "| Type:", typeof subjects);



// ======================================================
// SECTION 3: Type Conversion (Implicit & Explicit)
// ======================================================

console.log("\n========== SECTION 3: Type Conversion ==========\n");

// --- IMPLICIT ---
console.log("--- Implicit Type Conversion ---");

let num = 10;
let str = "5";
console.log("10 + '5'  =", num + str,      "| Type:", typeof (num + str));      // string concat
console.log("10 - '5'  =", 10 - "5",       "| Type:", typeof (10 - "5"));       // numeric
console.log("'20' * 2  =", "20" * 2,       "| Type:", typeof ("20" * 2));       // numeric

// --- EXPLICIT ---
console.log("\n--- Explicit Type Conversion ---");

let strNum  = "100";
let numFromStr = Number(strNum);
console.log("Number('100')  :", numFromStr,  "| Type:", typeof numFromStr);

let numVal  = 42;
let strFromNum = String(numVal);
console.log("String(42)     :", strFromNum,  "| Type:", typeof strFromNum);

console.log("Boolean('Hello'):", Boolean("Hello")); // true  - non-empty string
console.log("Boolean(0)      :", Boolean(0));        // false - falsy value

let floatStr = "3.14";
console.log("parseInt('3.14') :", parseInt(floatStr));
console.log("parseFloat('3.14'):", parseFloat(floatStr));



// ======================================================
// SECTION 4: Scope Understanding
// ======================================================

console.log("\n========== SECTION 4: Scope Understanding ==========\n");

var globalVar = "Global Variable";
let globalLet = "Global Let";

function demonstrateScope() {
    var functionVar = "Function Variable";
    let functionLet = "Function Let";

    console.log("Inside function - global var accessible:", globalVar);
    console.log("Inside function - function var accessible:", functionVar);

    {
        let blockLet = "Block Let";
        console.log("Inside block - block let accessible:", blockLet);
    }
    // blockLet is NOT accessible here
}

demonstrateScope();
console.log("Outside function - global var:", globalVar);
console.log("Outside function - global let:", globalLet);



// ======================================================
// SECTION 5: Arrays and Objects (Task-specific)
// ======================================================

console.log("\n========== SECTION 5: Arrays and Objects ==========\n");

// Task: Array of 5 favourite fruits, displayed without a loop
let favoriteFruits = ["Mango", "Apple", "Banana", "Orange", "Strawberry"];

console.log("Favorite Fruit 1:", favoriteFruits[0]);
console.log("Favorite Fruit 2:", favoriteFruits[1]);
console.log("Favorite Fruit 3:", favoriteFruits[2]);
console.log("Favorite Fruit 4:", favoriteFruits[3]);
console.log("Favorite Fruit 5:", favoriteFruits[4]);

// Task: Object with name, age, city
let personInfo = {
    name: "John Doe ",
    age: 20,
    city: "Lahore",
    rollNumber: "12345678-999"
};

console.log("\nObject Properties:");
console.log("Name       :", personInfo.name);
console.log("Age        :", personInfo.age);
console.log("City       :", personInfo.city);
console.log("Full Object:", personInfo);



// ======================================================
// SECTION 6: Variable Reassignment
// ======================================================

console.log("\n========== SECTION 6: Variable Reassignment ==========\n");

let currentYear = 2026;
console.log("Initial Year:", currentYear);

currentYear = 2027;
console.log("After Reassignment:", currentYear);

// const cannot be reassigned
const courseCode = "JavaScript 101";
console.log("Const Course Code:", courseCode);
// courseCode = "CS405"; // TypeError - would crash the program



// ======================================================
// SECTION 7: Boolean and Conditional Logic
// ======================================================

console.log("\n========== SECTION 7: Boolean and Conditional Logic ==========\n");

let isRainyDay = false;
let isHoliday  = true;

console.log("Is rainy day?", isRainyDay);
console.log("Is holiday?  ", isHoliday);

if (isRainyDay) {
    console.log("Weather: It is raining today - carry an umbrella!");
} else {
    console.log("Weather: Clear sky today - enjoy your day!");
}

if (isHoliday) {
    console.log("Holiday Status: No classes today!");
}



// ======================================================
// SECTION 8: Data Type Checking with typeof
// ======================================================

console.log("\n========== SECTION 8: Type Checking with typeof ==========\n");

let fullName   = "John Doe ";
let studentId  = 12345678;
let gpa        = 2.8;
let isEnrolled = true;
let skills     = ["JavaScript", "HTML", "CSS"];
let address    = { city: "Lahore", country: "Pakistan" };

console.log("fullName   :", fullName,    "-> Type:", typeof fullName);
console.log("studentId  :", studentId,   "-> Type:", typeof studentId);
console.log("gpa        :", gpa,         "-> Type:", typeof gpa);
console.log("isEnrolled :", isEnrolled,  "-> Type:", typeof isEnrolled);
console.log("skills     :", skills,      "-> Type:", typeof skills);
console.log("address    :", address,     "-> Type:", typeof address);



// ======================================================
// Final Summary
// ======================================================

console.log("\n========== SUMMARY ==========\n");
console.log("Covered: Variable Declarations (var, let, const)");
console.log("Covered: All Primitive Data Types");
console.log("Covered: Arrays and Objects");
console.log("Covered: Type Conversion (Implicit & Explicit)");
console.log("Covered: Scope Understanding");
console.log("Covered: Variable Reassignment");
console.log("Covered: Type Checking with typeof");

console.log("\n========== PART 1 COMPLETED SUCCESSFULLY ==========\n");
