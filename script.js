// --- 1. Interactive Component Bars Trigger ---
const animateBtn = document.getElementById('animate-skills-btn');

animateBtn.addEventListener('click', function() {
    document.getElementById('html-bar').style.width = '92%';
    document.getElementById('js-bar').style.width = '84%';
    document.getElementById('framework-bar').style.width = '78%';
});

// --- 2. Contact Form Submission Handler ---
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message recorded cleanly! (Static Demo Intercept)');
    this.reset();
});