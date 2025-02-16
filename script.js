"use strict";
const button = document.getElementById("myButton");
const message = document.getElementById("myMessage");
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

var x = 0;
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    x += 1;
    if (message) { // Null check before assignment
        message.textContent = "You've clicked the button " + x.toString() + " times"; // Fix potential null error
    }
});

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});