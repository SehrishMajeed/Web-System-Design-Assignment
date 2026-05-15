// ======================================================
// CS305 - Web Systems and Technology
// Part 5: Asynchronous JavaScript
// File: async.js
// Student: Sehrish Majeed (24014119-141)
// Section: A | Semester: 4
// Instructor: Mr. Yasir Iqbal
// Description:
//   This file covers asynchronous JavaScript: callbacks,
//   error-handling callbacks, callback hell (pyramid of
//   doom), promises, promise chaining, async/await, and
//   Promise.all() for parallel execution.
// ======================================================



// ======================================================
// Task 1: Basic Callback Function
// ======================================================

console.log("\n========== Task 1: Basic Callback ==========\n");

function sendMessage(message, callback) {
    console.log("Sending message...");
    // setTimeout simulates an asynchronous delay
    setTimeout(function() {
        callback(message);
    }, 1000);
}

function displayMessage(msg) {
    console.log("Message received:", msg);
}

sendMessage("Hello CS305!", displayMessage);



// ======================================================
// Task 2: Error Handling with Two Callbacks
// ======================================================

console.log("\n========== Task 2: Error-Handling Callbacks ==========\n");

function processData(data, onSuccess, onError) {
    console.log("Processing data...");

    setTimeout(function() {
        if (!data || data.trim() === "") {
            onError("Error: No data provided.");
        } else {
            onSuccess("Data processed successfully: " + data);
        }
    }, 1000);
}

function onSuccess(result) { console.log(result); }
function onError(error)    { console.log(error); }

processData("Student Info", onSuccess, onError);   // valid data
processData("",             onSuccess, onError);   // empty - triggers error



// ======================================================
// Task 3: Callback Hell (Pyramid of Doom)
// ======================================================

console.log("\n========== Task 3: Callback Hell ==========\n");

function getUser(callback) {
    setTimeout(function() {
        console.log("User fetched");
        callback({ userId: 1, name: "Ali" });
    }, 1000);
}

function getPosts(userId, callback) {
    setTimeout(function() {
        console.log("Posts fetched for userId:", userId);
        callback(["Post 1", "Post 2"]);
    }, 1000);
}

function getComments(post, callback) {
    setTimeout(function() {
        console.log("Comments fetched for:", post);
        callback(["Nice!", "Great post!"]);
    }, 1000);
}

// Each callback nests inside the previous one - this is "callback hell"
getUser(function(user) {
    getPosts(user.userId, function(posts) {
        getComments(posts[0], function(comments) {
            console.log("Final result:", { user, posts, comments });
        });
    });
});



// ======================================================
// Task 4: Parallel Async Tasks with Callbacks
// ======================================================

console.log("\n========== Task 4: Parallel Tasks with Callbacks ==========\n");

function asyncTask(taskName, callback) {
    setTimeout(function() {
        callback(taskName + " completed");
    }, Math.random() * 500);
}

let results   = [];
let completed = 0;
let taskNames = ["Task A", "Task B", "Task C"];

taskNames.forEach(function(task, index) {
    asyncTask(task, function(result) {
        results[index] = result;
        completed++;
        // Only when all tasks finish do we display results
        if (completed === taskNames.length) {
            console.log("All parallel tasks done:", results);
        }
    });
});



// ======================================================
// Task 5: Promise-Based Function
// ======================================================

console.log("\n========== Task 5: Promise ==========\n");

function fetchData() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let success = true;
            if (success) {
                resolve("Data fetched successfully");
            } else {
                reject("Failed to fetch data");
            }
        }, 1000);
    });
}

fetchData()
    .then(function(result) { console.log("Resolved:", result); })
    .catch(function(error)  { console.log("Rejected:", error); });



// ======================================================
// Task 6: Callback vs Promise (Comparison)
// ======================================================

console.log("\n========== Task 6: Callback vs Promise ==========\n");

// Callback style
function oldStyle(callback) {
    setTimeout(function() { callback("Callback result"); }, 500);
}

// Promise style - cleaner, chainable, easier to read
function newStyle() {
    return new Promise(function(resolve) {
        setTimeout(function() { resolve("Promise result"); }, 500);
    });
}

oldStyle(function(result) { console.log("Old style (callback):", result); });
newStyle().then(function(result)  { console.log("New style (promise):", result); });



// ======================================================
// Task 7: Promise Chaining
// ======================================================

console.log("\n========== Task 7: Promise Chain ==========\n");

function getUserData()     { return new Promise(function(resolve) { setTimeout(function() { resolve("User Data");     }, 500); }); }
function getUserPosts()    { return new Promise(function(resolve) { setTimeout(function() { resolve("User Posts");    }, 500); }); }
function getUserComments() { return new Promise(function(resolve) { setTimeout(function() { resolve("User Comments"); }, 500); }); }

// Each .then() returns the next promise - no nesting needed
getUserData()
    .then(function(data)     { console.log(data);     return getUserPosts(); })
    .then(function(posts)    { console.log(posts);    return getUserComments(); })
    .then(function(comments) { console.log(comments); })
    .catch(function(error)   { console.log("Error:", error); });



// ======================================================
// Task 8: async/await - Cleaner Version of Callbacks
// ======================================================

console.log("\n========== Task 8: async/await ==========\n");

function fetchUser()  { return new Promise(function(resolve) { setTimeout(function() { resolve("User Loaded");  }, 500); }); }
function fetchPosts() { return new Promise(function(resolve) { setTimeout(function() { resolve("Posts Loaded"); }, 500); }); }

// async/await reads like synchronous code but is non-blocking
async function loadData() {
    try {
        let user  = await fetchUser();
        console.log(user);

        let posts = await fetchPosts();
        console.log(posts);

    } catch (error) {
        console.log("Error:", error);
    }
}

loadData();



// ======================================================
// Task 9: async/await with try/catch for Error Handling
// ======================================================

console.log("\n========== Task 9: async/await with try/catch ==========\n");

async function safeFetch() {
    try {
        let result = await new Promise(function(resolve, reject) {
            setTimeout(function() {
                reject("Network Error: Connection timed out");
            }, 500);
        });
        console.log(result);
    } catch (error) {
        // try/catch catches rejected promises just like normal exceptions
        console.log("Caught Error:", error);
    }
}

safeFetch();



// ======================================================
// Task 10: Promise.all() - Run Tasks in Parallel
// ======================================================

console.log("\n========== Task 10: Promise.all() ==========\n");

function task1() { return new Promise(function(resolve) { setTimeout(function() { resolve("Task 1 Done"); }, 1000); }); }
function task2() { return new Promise(function(resolve) { setTimeout(function() { resolve("Task 2 Done"); }, 1500); }); }
function task3() { return new Promise(function(resolve) { setTimeout(function() { resolve("Task 3 Done"); }, 500); }); }

// All three run at the same time - total wait = slowest task only
Promise.all([task1(), task2(), task3()])
    .then(function(results) {
        console.log("All tasks completed:", results);
    });

// Promise.race resolves as soon as the first one finishes
Promise.race([task1(), task2(), task3()])
    .then(function(result) {
        console.log("First task to finish:", result);
    });



// ======================================================
// Final Summary
// ======================================================

console.log("\n========== SUMMARY ==========\n");
console.log("Covered: Callback Functions");
console.log("Covered: Error-Handling Callbacks");
console.log("Covered: Callback Hell");
console.log("Covered: Parallel Async with Callbacks");
console.log("Covered: Promises (resolve/reject)");
console.log("Covered: Callback vs Promise comparison");
console.log("Covered: Promise Chaining");
console.log("Covered: async/await");
console.log("Covered: try/catch with async/await");
console.log("Covered: Promise.all() and Promise.race()");

console.log("\n========== PART 5 COMPLETED SUCCESSFULLY ==========\n");
