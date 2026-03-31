// Floe Coffee Syrups - Main Logic Placeholder
console.log("Floe Brand Foundation: Loaded");

// Navigation scroll logic
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
