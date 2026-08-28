/* ====================================================== 
Dashboard Controller
Connects each module to the dashboard interface
Section: A | Semester: 4
Instructor: Mr. Yasir Iqbal
====================================================== */

let currentModule = null;
let currentCard = null;
let reviewedModules = new Set();

function setActiveCard(card) {
    if (currentCard) {
        currentCard.classList.remove("active");
    }
    if (card) {
        card.classList.add("active");
        currentCard = card;
    }
}

function filterModules() {
    const query = document.getElementById("moduleSearch").value.trim().toLowerCase();
    const modules = document.querySelectorAll(".module");

    modules.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? "grid" : "none";
    });
}

function updateProgress() {
    const totalModules = 6; // 5 parts + bonus
    const progress = (reviewedModules.size / totalModules) * 100;
    document.getElementById("assignmentProgress").style.width = `${progress}%`;
    document.getElementById("progressText").textContent = `${Math.round(progress)}% Complete`;
}

function setModulePanel(title, description, filePath) {
    currentModule = { title, filePath };

    document.getElementById("panel-title").innerText = title;
    document.getElementById("panel-description").innerText = description;
    document.getElementById("panel-status").innerText = `Ready to review ${title}.`;

    const link = document.getElementById("panel-code-link");
    link.href = filePath;
    link.innerText = `Open ${title} Source`;

    // Mark as reviewed
    reviewedModules.add(title);
    updateProgress();
}

function runCurrent() {
    if (!currentModule) {
        alert("Please select a module before reviewing.");
        return;
    }

    document.getElementById("panel-status").innerText =
        `${currentModule.title} is opening in a new tab.`;

    window.open(currentModule.filePath, "_blank");
}

function runVariables(card) {
    setActiveCard(card.closest(".module"));
    setModulePanel(
        "Part 1: Variables",
        "Review variable declarations, data types, and scope concepts.",
        "../01_Part1_Variables/variables.js"
    );
}

function runLoops(card) {
    setActiveCard(card.closest(".module"));
    setModulePanel(
        "Part 2: Loops & Functions",
        "Review iteration patterns and function examples relevant to the assignment.",
        "../02_Part2_Loops_Functions/loops.js"
    );
}

function runObjects(card) {
    setActiveCard(card.closest(".module"));
    setModulePanel(
        "Part 3: Objects",
        "Inspect object creation, methods, and JSON handling.",
        "../03_Part3_Objects/objects.js"
    );
}

function runArrays(card) {
    setActiveCard(card.closest(".module"));
    setModulePanel(
        "Part 4: Arrays",
        "Review array methods, transformations, and search examples.",
        "../04_Part4_Arrays/arrays.js"
    );
}

function runAsync(card) {
    setActiveCard(card.closest(".module"));
    setModulePanel(
        "Part 5: Asynchronous JavaScript",
        "Review callback, promise, and async/await examples.",
        "../05_Part5_Async/async.js"
    );
}

function runBonus(card) {
    setActiveCard(card.closest(".module"));
    setModulePanel(
        "Bonus Project",
        "Review the Smart Study Planner bonus application and interaction flow.",
        "../06_Bonus_Projects/Index.html"
    );
}

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
    }, 1000);
});
