// This file contains the JavaScript code for the website. It handles interactivity, such as event listeners, animations, and dynamic content updates.

document.addEventListener('DOMContentLoaded', () => {
    // Example: Change the background color of the body on button click
    const button = document.getElementById('colorChangeButton');
    button.addEventListener('click', () => {
        document.body.style.backgroundColor = getRandomColor();
    });

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Example: Smooth scroll to sections
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});