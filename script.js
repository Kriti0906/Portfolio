// Typing Effect

const text = "3rd Year CSE Student | Web Developer | Problem Solver";

let index = 0;

function typeEffect(){

    const typingText = document.querySelector('.typing-text');

    if(index < text.length){

        typingText.textContent += text.charAt(index);

        index++;

        setTimeout(typeEffect, 40);
    }
}

window.onload = typeEffect;

// Reveal Animation

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {

    reveals.forEach(reveal => {

        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            reveal.classList.add('active');
        }
    });
});

// Navbar Shadow

window.addEventListener('scroll', () => {

    const navbar = document.querySelector('.navbar');

    if(window.scrollY > 50){

        navbar.style.boxShadow = '0 8px 30px rgba(0,0,0,0.25)';
    }
    else{

        navbar.style.boxShadow = 'none';
    }
});

// Mouse Glow Effect

const glow = document.createElement('div');

glow.style.position = 'fixed';
glow.style.width = '250px';
glow.style.height = '250px';
glow.style.borderRadius = '50%';
glow.style.pointerEvents = 'none';
glow.style.background = 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)';
glow.style.zIndex = '0';
glow.style.transform = 'translate(-50%, -50%)';

document.body.appendChild(glow);

document.addEventListener('mousemove', (e) => {

    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});