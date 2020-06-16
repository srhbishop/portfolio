// SELECT DOM ELEMENTS
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const welcomeText = document.querySelector('.welcome-text');

window.addEventListener('load', function() {
    welcomeText.classList.add('fade');
})


burger.addEventListener('click', function() {
    navLinks.classList.toggle('nav-links-active');
    burger.classList.toggle('toggle');
});

// keeps navLinks from staying there when you click to new section
navLinks.addEventListener('click', function() {
    navLinks.classList.toggle('nav-links-active');
    burger.classList.toggle('toggle');
})