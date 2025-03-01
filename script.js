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
    menuButton.classList.toggle("menu-active");
});

document.addEventListener('DOMContentLoaded', function () {
    const particleContainer = document.getElementById('particle-container');
    const particleCount = 200; // Adjust the number of particles

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Randomize initial position
        particle.style.top = Math.random() * 200 + 'vh';
        particle.style.left = Math.random() * 100 + 'vw';
        
        // Randomize animation duration and delay
        particle.style.animationDuration = (Math.random() * 10 + 3) + 's';
        particle.style.boxShadow = "0 0 " + (Math.random() * 10 + 2) + "px " + (Math.random() * 3.5 ) + "px rgba(255, 255, 255, 0.7)";
        
        particleContainer.appendChild(particle);
    }

    const section = document.querySelector('section');
    section.setAttribute('data-text', section.textContent.trim());
});

