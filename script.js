"use strict";
const message = document.getElementById("myMessage");
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");



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

