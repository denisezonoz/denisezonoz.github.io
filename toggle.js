var num = 0; // global variable

function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}

function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    var styleLink = document.getElementById("pagestyle");

    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var currentSheet = styleLink.getAttribute("href");

    // 1 (c) Determine new stylesheet file name
    var newSheet = (currentSheet === "bow.css") ? "flowers.css" : "bow.css";

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    styleLink.setAttribute("href", newSheet);

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("stylesheet", newSheet);
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    var savedSheet = localStorage.getItem("stylesheet");

    // 2 (b) get html style element by ID
    var styleLink = document.getElementById("pagestyle");

    // 2 (c) replace href attribute of html element.
    if (savedSheet) {
        styleLink.setAttribute("href", savedSheet);
    }

    // Highlight the correct button in the Bow / Flower toggle on load
    updateActiveButtons(styleLink.getAttribute("href"));
}

// Sets the theme directly from the Bow / Flower pill buttons
function setTheme(theme) {
    var newSheet = (theme === "flower") ? "flowers.css" : "bow.css";
    var styleLink = document.getElementById("pagestyle");
    styleLink.setAttribute("href", newSheet);
    localStorage.setItem("stylesheet", newSheet);
    updateActiveButtons(newSheet);
}

// Adds/removes the "active" class so the current theme's button stays highlighted
function updateActiveButtons(sheet) {
    var bowBtn = document.querySelector(".btn-bow");
    var flowerBtn = document.querySelector(".btn-flower");
    if (!bowBtn || !flowerBtn) return;

    if (sheet === "flowers.css") {
        flowerBtn.classList.add("active");
        bowBtn.classList.remove("active");
    } else {
        bowBtn.classList.add("active");
        flowerBtn.classList.remove("active");
    }
}

