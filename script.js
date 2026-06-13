const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('click', () => {
    // CHANGE: flip the 'dark' class on <body>
    document.body.classList.toggle('dark');
    // Swap the icon to match the mode
    const isDark = document.body.classList.contains('dark');
    themeToggle.textContent = isDark ? 'sun' : 'moon';
});

const toTop = document.querySelector('#to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        toTop.classList.add('show');
    } else {
        toTop.classList.remove('show');
    }
});

toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const revealItems = document.querySelectorAll('.reveal');
const   observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealItems.forEach((item) => observer.observe(item));