const button = document.getElementById("myButton");
const message = document.getElementById("myMessage");
var x : number = 0;
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

button?.addEventListener("click", function () {
    x += 1;
    if (message) {  // Null check before assignment
        message.textContent = "You've clicked the button " + x.toString() + " times"; // Fix potential null error
    }
});
menuButton?.addEventListener("click", () => {
    navMenu?.classList.toggle("menu-active");
});


