// Switches between the Bow and Flower themes and remembers the choice.

var STORAGE_KEY = "stylesheet";

// Apply the saved theme as soon as the page loads
window.onload = function () {
    var styleLink = document.getElementById("pagestyle");
    var savedSheet = null;

    try {
        savedSheet = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
        // Storage can be blocked (e.g. private browsing); fall back to the default theme
    }

    if (savedSheet) {
        styleLink.setAttribute("href", savedSheet);
    }

    updateActiveButtons(styleLink.getAttribute("href"));
};

// Called by the Bow / Flower buttons
function setTheme(theme) {
    var newSheet = (theme === "flower") ? "flowers.css" : "bow.css";
    document.getElementById("pagestyle").setAttribute("href", newSheet);

    try {
        localStorage.setItem(STORAGE_KEY, newSheet);
    } catch (e) {
        // Theme still changes for this page even if it can't be saved
    }

    updateActiveButtons(newSheet);
}

// Highlights the button for the current theme
function updateActiveButtons(sheet) {
    var bowBtn = document.querySelector(".btn-bow");
    var flowerBtn = document.querySelector(".btn-flower");
    if (!bowBtn || !flowerBtn) return;

    var isFlower = (sheet === "flowers.css");
    flowerBtn.classList.toggle("active", isFlower);
    bowBtn.classList.toggle("active", !isFlower);
}
